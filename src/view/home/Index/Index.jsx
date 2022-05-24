import './index.css'
import ScenicSpotCard from '/src/components/ScenicSpotCard/ScenicSpotCard'
import HotelCard from '/src/components/HotelCard/HotelCard'
import RestaurantCard from '/src/components/RestaurantCard/RestaurantCard'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchScenicSpotAll, fetchHotelAll, fetchRestaurantAll } from '/src/apis/tourism'

export default function Index() {
  const navigate = useNavigate()
  const handleToSearch = (type) => {
    navigate(`search/${type}`)
  }

  const [defaultData, setDefaultData] = useState({
    scenicSpot: [],
    hotel: [],
    restaurant: []
  })

  useEffect(() => {
    fetchScenicSpotAll({
      $filter: `City eq '雲林縣' and Picture/PictureUrl3 ne null`,
      $top: 3
    }).then(({ data }) => {
      const newDefault = defaultData
      newDefault.scenicSpot = data
      setDefaultData({ ...newDefault })
    })

    fetchHotelAll({
      $filter: `City eq '臺北市' and Grade eq '五星級'`,
      $top: 4
    }).then(({ data }) => {
      const newDefault = defaultData
      newDefault.hotel = data
      setDefaultData({ ...newDefault })
    })

    fetchRestaurantAll({
      $filter: `City eq '彰化縣' and Picture/PictureUrl3 ne null and WebsiteUrl ne null`,
      $top: 6
    }).then(({ data }) => {
      const newDefault = defaultData
      newDefault.restaurant = data
      setDefaultData({ ...newDefault })
    })
  }, [])

  useEffect(() => {}, [defaultData])

  return (
    <div className='home-index'>
      <div className='contentWrapper'>
        <div className='scenicSpotArea w-full overflow-hidden z-10'>
          <p className='title xl:text-center mb-6'>
            熱門景點
            <span className='hidden lg:inline ml-10'>台灣最夯、最美麗的景點都在這裡</span>
          </p>
          <div className='cardGroup lg:justify-center'>
            {defaultData.scenicSpot.map((item) => (
              <ScenicSpotCard key={item.ScenicSpotID} cardData={item} />
            ))}
          </div>
          <div className='more_btn mt-8 mx-auto' onClick={() => handleToSearch('scenicSpot')}>
            更多
          </div>
        </div>
        <div className='cardBg'></div>
      </div>
      <div className='contentWrapper'>
        <div className='hotelArea w-full overflow-hidden'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門旅宿
              <span className='hidden lg:inline ml-5'>旅人最常推的</span>
            </p>
            <div className='more_btn white_btn ml-auto' onClick={() => handleToSearch('hotel')}>
              更多
            </div>
          </div>
          <div className='cardGroup'>
            {defaultData.hotel.map((item) => (
              <HotelCard key={item.HotelID} cardData={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='contentWrapper'>
        <div className='restaurantArea w-full'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門餐飲<span className='hidden lg:inline ml-5'>饕客必吃美食</span>
            </p>
            <div className='more_btn white_btn ml-auto' onClick={() => handleToSearch('restaurant')}>
              更多
            </div>
          </div>
          <div className='restaurantCardGroup'>
            {defaultData.restaurant.map((item) => (
              <RestaurantCard key={item.RestaurantID} cardData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
