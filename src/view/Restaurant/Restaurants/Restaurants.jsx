import './Restaurants.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import RestaurantCard from '/src/components/RestaurantCard/RestaurantCard'
import { useState, useEffect } from 'react'
import { fetchRestaurantAll } from '/src/apis/tourism'

export default function Restaurants() {
  const restaurantResult = useSelector(selectSearchData)
  const [restaurantList, setRestaurantList] = useState([])
  useEffect(() => {
    if (restaurantResult.length > 0) {
      setRestaurantList(restaurantResult)
    } else {
      defaultSearch()
    }
  }, [])

  useEffect(() => {
    if (restaurantList) {
      setRestaurantList(restaurantResult)
    } else {
      return
    }
  }, [restaurantResult])

  const defaultSearch = () => {
    fetchRestaurantAll({ $top: 30 }).then(({ data }) => {
      setRestaurantList(data)
    })
  }

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
            <RestaurantCard cardData={data} key={data.RestaurantID} className='underLine' />
          ))}
        </div>
      </div>
    </div>
  )
}
