import './ScenicSpots.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import ScenicSpotCard from '/src/components/ScenicSpotCard/ScenicSpotCard'
export default function ScenicSpots() {
  const items = useSelector(selectSearchData)
  return (
    <div className='contentWrapper'>
      <div className='scenicSpotArea w-full overflow-hidden z-10'>
        <p className='title xl:text-center mb-6'>
          熱門景點
          <span className='subtitle'> 台灣最夯、最美麗的景點都在這裡 </span>
        </p>
        <div className='cardGroup lg:justify-center'>
          {items.map((data) => (
            <ScenicSpotCard cardData={data} key={data.ScenicSpotID} />
          ))}
        </div>
      </div>
    </div>
  )
}
