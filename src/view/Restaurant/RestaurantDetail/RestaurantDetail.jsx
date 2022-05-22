import Detail from '/src/components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRestaurantAll } from '/src/apis/tourism'

export default function RestaurantDetail() {
  const detailID = useParams().id
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

  useEffect(() => {
    fetchRestaurantAll({ $filter: `RestaurantID eq '${detailID}'` }).then((res) => {
      const data = res.data[0]
      setDetailInfo(data)
    })
  }, [])

  return (
    <div>
      <Detail detailID={detailID} info={detailInfo} category='restaurant' categoryStr='餐飲' />
    </div>
  )
}
