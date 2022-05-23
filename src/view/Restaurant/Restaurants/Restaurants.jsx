import './Restaurants.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import RestaurantCard from '/src/components/RestaurantCard/RestaurantCard'
export default function Restaurants() {
  const restaurantList = useSelector(selectSearchData)

  return (
    <div className='contentWrapper'>
      <div className='restaurantArea w-full'>
        <div className='flex items-center mb-5'>
          <p className='title'>
            熱門餐飲<span className='subtitle hidden lg:inline ml-5'>饕客必吃美食</span>
          </p>
        </div>
        <div className='restaurantCardGroup'>
          {restaurantList.map((data, index) => (
            <RestaurantCard cardData={data} key={`restaurant_${index}`} className='underLine' />
          ))}
        </div>
      </div>
    </div>
  )
}
