import './ScenicSpots.css'
import { selectSearchData } from '/src/store/app/selector'
import { useSelector } from 'react-redux'
import ScenicSpotCard from '/src/components/ScenicSpotCard/ScenicSpotCard'
import { useState, useEffect } from 'react'
import { fetchScenicSpotAll } from '/src/apis/tourism'

export default function ScenicSpots() {
  const scenicSpotResult = useSelector(selectSearchData)
  const [scenicSpotList, setScenicSpotList] = useState([])
  useEffect(() => {
    if (scenicSpotResult.length > 0) {
      setHotelList(scenicSpotResult)
    } else {
      defaultSearch()
    }
  }, [])

  useEffect(() => {
    if (scenicSpotList.length > 0) {
      setScenicSpotList(scenicSpotResult)
    } else {
      return
    }
  }, [scenicSpotResult])

  const defaultSearch = () => {
    fetchScenicSpotAll({ $top: 30 }).then(({ data }) => {
      setScenicSpotList(data)
    })
  }

  return (
    <div className='contentWrapper'>
      <div className='scenicSpotArea w-full overflow-hidden z-10'>
        <p className='title xl:text-center mb-6'>
          熱門景點
          <span className='subtitle'> 台灣最夯、最美麗的景點都在這裡 </span>
        </p>
        <div className='cardGroup lg:justify-center'>
          {scenicSpotList.map((data) => (
            <ScenicSpotCard cardData={data} key={data.ScenicSpotID} />
          ))}
        </div>
      </div>
    </div>
  )
}
