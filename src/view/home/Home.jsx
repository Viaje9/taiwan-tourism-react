import './Home.css'
import { useState, useEffect } from 'react'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import SearchBar from '/src/components/SearchBar/SearchBar'
import { Outlet } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

export default function Home() {
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
  const pathname = useLocation().pathname.replace('/search/', '')

  // 改變路由時同時改變 banner 與 searchTab
  useEffect(() => {
    if (pathname && pathname !== '/') {
      handleSetSearchTab(pathname)
    }
  }, [pathname])

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
      <Outlet />
    </div>
  )
}
