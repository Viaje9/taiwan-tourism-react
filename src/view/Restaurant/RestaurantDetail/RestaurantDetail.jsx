import Detail from '/src/components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchRestaurantAll } from '/src/apis/tourism'

export default function RestaurantDetail() {
  const detailID = useParams().id
  const [detailInfo, setDetailInfo] = useState([])

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
