// import Detail from 'src/components/Detail/Detail';
// TODO: Eric
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { fetchHotelAll } from '/src/apis/tourism'
export default function HotelDetail() {
  const params = useParams()
  console.log(params);
  useEffect(() => {
    // fetchHotelAll({  $filter: `HotelID eq '${params.id}'` }).then((res) => {
    //   console.log(res)
    // })
    // TODO: filter的參數可以參考response的資料，可能會有HotelID、RestaurantID、ScenicSpotID這部分有問題可以在問
    // fetchHotelAll({ $top: 5 }).then((res) => {
    //   console.log(res)
    // })
  },[])
  return (
    <div>
      hoteldetail
      {/* <Detail
                detailiID={id}
                info={detailInfo}
                category="hotel"
                categoryStr="旅宿"
            /> */}
    </div>
  )
}
