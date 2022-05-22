import Detail from '/src/components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchHotelAll } from '/src/apis/tourism'

export default function HotelDetail() {
  const [detailInfo, setDetailInfo] = useState({
      Name: null,
      City: null,
      Description: null,
      DescriptionDetail: null,
      Picture: {
        PictureUrl1: null,
        PictureUrl2: null,
        PictureUrl3: null,
        PictureDescription1: null,
        PictureDescription2: null,
        PictureDescription3: null
      },
      Position: {
        PositionLon: null,
        PositionLat: null
      },
      OpenTime: null,
      Phone: null,
      Address: null
    })
  const detailiID = useParams().id

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
