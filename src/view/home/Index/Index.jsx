import './index.css'
import ScenicSpotCard from '/src/components/ScenicSpotCard/ScenicSpotCard'
import HotelCard from '/src/components/HotelCard/HotelCard'
import RestaurantCard from '/src/components/RestaurantCard/RestaurantCard'
import { useNavigate } from 'react-router-dom'
export default function Index({ handleSetSearchTab, defaultData }) {
  const navigate = useNavigate()
  const handleToSearch = (type) => {
    navigate(`search/${type}`)
    handleSetSearchTab(type)
  }

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
