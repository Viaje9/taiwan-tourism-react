import Detail from '/src/components/Detail/Detail.jsx'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchScenicSpotAll } from '/src/apis/tourism'

export default function ScenicSpotDetail() {
  const detailID = useParams().id
  const [detailInfo, setDetailInfo] = useState([])

  useEffect(() => {
    fetchScenicSpotAll({ $filter: `ScenicSpotID eq '${detailID}'` }).then((res) => {
      const data = res.data[0];
      setDetailInfo(data);
    })
  }, [])

  return (
    <div>
      <Detail detailiID={detailID} info={detailInfo} category='scenicSpot' categoryStr='景點' />
    </div>
  )
}
