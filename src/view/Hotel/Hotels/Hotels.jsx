import './Hotels.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import HotelCard from '/src/components/HotelCard/HotelCard'
import { useState, useEffect } from 'react'
import { fetchHotelAll } from '/src/apis/tourism'

export default function Hotels() {
  const hotelSearchResult = useSelector(selectSearchData)
  const [hotelList, setHotelList] = useState([])
  useEffect(() => {
    if (hotelSearchResult.length > 0) {
      setHotelList(hotelSearchResult)
    } else {
      defaultSearch()
    }
  }, [])

  useEffect(() => {
    if (hotelList.length > 0) {
      setHotelList(hotelSearchResult)
    } else {
      return
    }
  }, [hotelSearchResult])

  const defaultSearch = () => {
    fetchHotelAll({ $top: 30 }).then(({ data }) => {
      setHotelList(data)
    })
  }

  return (
    <div id='Hotels'>
      <div className='contentWrapper'>
        <div className='hotelArea w-full overflow-hidden'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門旅宿
              <span className='subtitle hidden lg:inline ml-5'>旅人最常推的</span>
            </p>
          </div>
          <div className='cardGroup'>
            {hotelList.map((data) => (
              <HotelCard cardData={data} key={data.HotelID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
