import './Hotels.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import HotelCard from '/src/components/HotelCard/HotelCard'
export default function Hotels() {
  const items = useSelector(selectSearchData)
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
            {items.map((data) => (
              <HotelCard cardData={data} key={data.HotelID} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
