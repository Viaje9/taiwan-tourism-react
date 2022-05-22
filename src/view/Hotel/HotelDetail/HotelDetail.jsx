import Detail from '/src/components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchHotelAll } from '/src/apis/tourism'

export default function HotelDetail() {
  const [detailInfo, setDetailInfo] = useState([])
  const detailiID = useParams().id
  console.log(detailiID);

  useEffect(() => {
    fetchHotelAll({ $filter: `HotelID eq '${detailiID}'` }).then((res) => {
      const data = res.data[0]
      setDetailInfo(data)
    })
  }, [])
  return (
    <div>
      <Detail detailiID={detailiID} info={detailInfo} category='hotel' categoryStr='旅宿' />
    </div>
  )
}
