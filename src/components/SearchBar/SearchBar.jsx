import { option } from '/src/assets/json/options.json'
import { fetchScenicSpotAll, fetchRestaurantAll, fetchHotelAll } from '/src/apis/tourism'
import { filterCity } from '/src/utils/filter'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { selectSearchData } from '/src/store/app/selector'
import { setSearchData } from '/src/store/app/action'

import './SearchBar.css'

export default function SearchBar({ tab, handleSetSearchTab }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const tabList = [
    { name: '景點', value: 'scenicSpot' },
    { name: '旅宿', value: 'hotel' },
    { name: '餐飲', value: 'restaurant' }
  ]

  const [loading, setLoading] = useState(false)

  const [searchParams, setSearchParams] = useState({
    tab: 'scenicSpot',
    city: '全部',
    category: '全部',
    keyword: ''
  })

  useEffect(() => {
    changeTab(tab)
  }, [tab])

  const apiParams = () => {
    const { city, category, keyword } = searchParams
    let $filter = ''
    const addParams = () => ($filter ? ' and' : '')

    if (city !== '全部') {
      $filter += `City eq '${city}'`
    }

    if (category !== '全部') {
      $filter += `${addParams()} (${classEqStr()})`
    }

    if (keyword) {
      const keywordStr = (keyword) =>
        ` contains(Name,'${keyword}') or contains(Address ,'${keyword}') or contains(Description,'${keyword}')`
      const keywordList = keyword
        .split(' ')
        .reduce((acc, cur, i, arr) => (acc += `${keywordStr(cur)} ${i !== arr.length - 1 ? 'or' : ''}`), '')
      $filter += `${addParams()} (${keywordList})`
    }
    return $filter ? { $filter, $top: 30 } : { $top: 30 }
  }

  const classEqStr = () => {
    const { tab, category } = searchParams
    if (tab === 'scenicSpot') {
      return `Class1 eq '${category}' or Class2 eq '${category}' or Class3 eq '${category}'`
    }
    if (tab === 'hotel') {
      return `Class eq '${category}'`
    }
    if (tab === 'restaurant') {
      return `Class eq '${category}'`
    }
    return ''
  }

  const fetchApi = () => {
    const { tab } = searchParams
    if (tab === 'scenicSpot') {
      return fetchScenicSpotAll
    }
    if (tab === 'hotel') {
      return fetchHotelAll
    }
    if (tab === 'restaurant') {
      return fetchRestaurantAll
    }

    return () => {}
  }

  const changeTab = (tab) => {
    setSearchParams({
      tab,
      city: '全部',
      category: '全部',
      keyword: ''
    })
    handleSetSearchTab(tab)
  }

  const search = () => {
    setLoading(true)
    fetchApi()(apiParams())
      .then(({ data }) => {
        const items = data.filter((_, i) => i < 30)
        // FIXME: 待確認city參數
        // .map((e) => {
        //   console.log(e);
        //   e.City = e.City || filterCity(e.ZipCode) || e.Address.slice(0, 3)
        //   return e
        // })
        console.log(items);
        dispatch(setSearchData(items))
      })
      .finally(() => {
        const { tab } = searchParams
        setLoading(false)
        navigate(`/search/${tab}`)
      })
  }
  return (
    <div id='SearchBar'>
      <div className='main'>
        <div className='tabArea'>
          <ul className='flex'>
            {tabList.map((tab) => (
              <li
                key={tab.value}
                className={searchParams.tab === tab.value ? 'active' : ''}
                onClick={() => changeTab(tab.value)}
              >
                {tab.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='tabContent'>
          <div className='inputArea'>
            <div>
              <p>縣市</p>
              <div>
                <select
                  v-model='searchParams.city'
                  onChange={(event) => {
                    setSearchParams({
                      ...searchParams,
                      city: event.target.value
                    })
                  }}
                  className='input'
                >
                  {option.city.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
                <i className='dropdown_icon'>
                  <img src={'/src/assets/images/dropdown.svg'} />
                </i>
              </div>
            </div>
            <div>
              <p>類別</p>
              <div>
                <select
                  onChange={(event) => {
                    setSearchParams({
                      ...searchParams,
                      category: event.target.value
                    })
                  }}
                  className='input'
                >
                  {option[searchParams.tab].map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                <i className='dropdown_icon'>
                  <img src={`/src/assets/images/dropdown.svg`} />
                </i>
              </div>
            </div>
            <div>
              <p>關鍵字</p>
              <div>
                <input v-model='searchParams.keyword' type='text' className='input' placeholder='請輸入關鍵字' />
              </div>
            </div>
          </div>
          <div className='searchArea'>
            <div className='search_btn' onClick={() => search()}>
              搜尋
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
