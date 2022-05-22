import './Home.css'
import { useState, useEffect } from 'react'
import { fetchScenicSpotAll } from '/src/apis/tourism'
import { Outlet } from 'react-router-dom'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector, useDispatch, useStore } from 'react-redux'
import SearchBar from '/src/components/SearchBar/SearchBar'
import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
const Index = lazy(() => import('/src/view/Home/Index'))
const Hotels = lazy(() => import('/src/view/Hotel/Hotels/Hotels'))
const Restaurants = lazy(() => import('/src/view/Restaurant/Restaurants/Restaurants'))
const ScenicSpots = lazy(() => import('/src/view/ScenicSpot/ScenicSpots/ScenicSpots'))

export default function Home() {
  const id = 'C1_315080500H_000073'
  useEffect(() => {
    // fetchScenicSpotAll({ $top: 30, $filter: `ScenicSpotID eq '${id}'` }).then((res) => {
    //   console.log(res)
    // })
  }, [])
  const bannerInfo = {
    scenicSpot: {
      title: '景點快搜',
      subTitle: '在頂溪，找到令你怦然心動的風景'
    },
    hotel: {
      title: '住宿推薦',
      subTitle: '享受一夜好眠，讓出遊心情更加分'
    },
    restaurant: {
      title: '必吃美食',
      subTitle: '匯聚八方好滋味，滿足每個挑剔的味蕾'
    }
  }
  const searchData = useSelector(selectSearchData)

  const [searchTab, setSearchTab] = useState('scenicSpot')
  const [bannerImg, setBannerImg] = useState('/src/assets/images/photoScenicSpot.jpg')
  useEffect(() => {
    if (searchTab === 'scenicSpot') {
      setBannerImg('/src/assets/images/photoScenicSpot.jpg')
    }
    if (searchTab === 'hotel') {
      setBannerImg('/src/assets/images/photoHotel.jpeg')
    }
    if (searchTab === 'restaurant') {
      setBannerImg('/src/assets/images/photoRestaurant.jpg')
    }
  }, [searchTab])

  const handleSetSearchTab = (tab) => {
    setSearchTab(tab)
  }

  return (
    <div className='home'>
      <div className={(searchData.length ? 'lessBanner' : '') + ' wrapper justify-end'}>
        {/* banner背景色塊 */}
        <div className='bannerBg'>
          <div className='w-1/12 mr-3'></div>
          <div className='w-2/12 mr-3'></div>
          <div className='w-3/12'></div>
        </div>
        {/* banner(含searchBar) */}
        <div className='banner'>
          <img src={bannerImg} />
          <div className='banner_intro'>
            <p className='banner_title'>{bannerInfo[searchTab].title}</p>
            <p className='banner_subtitle'>{bannerInfo[searchTab].subTitle}</p>
          </div>
          <div className='searchBar'>
            <SearchBar tab={searchTab} handleSetSearchTab={handleSetSearchTab} />
          </div>
        </div>
      </div>
      <Routes>
        <Route path='' element={<Index handleSetSearchTab={handleSetSearchTab} />} />
        <Route path='search/hotel' element={<Hotels />} />
        <Route path='search/restaurant' element={<Restaurants />} />
        <Route path='search/scenicSpot' element={<ScenicSpots />} />
      </Routes>
    </div>
  )
}
