import './index.css'
import { useState } from 'react'
import ScenicSpotCard from '/src/components/ScenicSpotCard/ScenicSpotCard'
import HotelCard from '/src/components/HotelCard/HotelCard'
import RestaurantCard from '/src/components/RestaurantCard/RestaurantCard'
import { useNavigate } from 'react-router-dom'
export default function Index() {
  const navigate = useNavigate()

  const [defaultData, setDefaultData] = useState({
    scenicSpot: [
      {
        ScenicSpotID: 'C1_376490000A_000003',
        ScenicSpotName: '成龍濕地',
        DescriptionDetail:
          '成龍濕地位於雲林口湖鄉，是一般保護區，被列為國家重要濕地之一，目前已由荒廢的田地演化為生物群集的濕地，每年都有成千上萬的候鳥飛來駐足棲息，有瀕臨絕種的黑面琵鷺，還有小燕鷗、紅隼等等，更有豐富的魚類及螃蟹等，儼然是地方重要觀光資源。',
        Description:
          '成龍濕地位於雲林口湖鄉，是一般保護區，被列為國家重要濕地之一，目前已由荒廢的田地演化為生物群集的濕地，每年都有成千上萬的候鳥飛來駐足棲息，有瀕臨絕種的黑面琵鷺，還有小燕鷗、紅隼等等，更有豐富的魚類及螃蟹等，儼然是地方重要觀光資源。',
        Phone: '886-5-7970856',
        Address: '雲林縣口湖鄉雲144鄉道',
        ZipCode: '653',
        TravelInfo: '斗南交流道下往北港方向行駛，於164縣道往口湖近入金湖走台十七線成龍二橋旁。',
        Picture: {
          PictureUrl1: 'https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023444556649R8DCU.jpeg',
          PictureUrl2: 'https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023444603540R9K2J.jpeg',
          PictureUrl3: 'https://tour.yunlin.gov.tw/public/upload/StoreCover/220223023444634790NGMZF.jpeg'
        },
        MapUrl: 'https://goo.gl/niV37K',
        Position: {
          PositionLon: 120.16419982910156,
          PositionLat: 23.55491065979004,
          GeoHash: 'wsjqn2hck'
        },
        Class1: '自然風景類',
        ParkingInfo: '安龍宮前廣場或路邊停車',
        ParkingPosition: {},
        TicketInfo: '免費參觀，需要預約導覽服務請來電洽詢',
        Keyword: '濕地,黑面琵鷺,小燕鷗,黑嘴鷗,紅隼,彩鷸,紅尾伯勞,燕鴴',
        City: '雲林縣',
        SrcUpdateTime: '2022-05-19T01:19:21+08:00',
        UpdateTime: '2022-05-19T01:34:30+08:00'
      },
      {
        ScenicSpotID: 'C1_376490000A_000025',
        ScenicSpotName: '太平老街',
        DescriptionDetail:
          '古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。',
        Description:
          '古色古香的台灣味老街斗六太平老街上的舊式洋樓房建築多採巴洛克式建築，街巷間有蛋飯、圓仔冰、肉圓、魷魚嘴焿等傳統台灣味美食，常有外國觀光客特意造訪，更充滿樂齡長輩偏愛的古早味情調。',
        Phone: '886-5-5332000',
        Address: '雲林縣斗六市太平路',
        ZipCode: '640',
        TravelInfo:
          '【自行開車】 南下：自國道三號斗六交流道下，沿石榴路直行，續接文化路，進入斗六圓環接太平路即可抵達。 北上：自國道三號古坑交流道下，接78號公路斗六出口下，沿仁愛路直行接中山路，右轉接太平路即可抵達。 【搭乘火車】 搭乘火車至斗六火車站，沿大同路直行遇太平路抵達。',
        OpenTime: '24HR',
        Picture: {
          PictureUrl1: 'https://tour.yunlin.gov.tw/public/upload/old/20190123114452.jpg',
          PictureDescription1: '太平老街商家林立',
          PictureUrl2: 'https://tour.yunlin.gov.tw/public/upload/old/20180607110116.jpg',
          PictureDescription2: '巴洛克式風格建築',
          PictureUrl3: 'https://tour.yunlin.gov.tw/public/upload/old/20180607110113.jpg',
          PictureDescription3: '蔡姓街屋'
        },
        MapUrl: 'https://goo.gl/aRQk2U',
        Position: {
          PositionLon: 120.54180145263672,
          PositionLat: 23.70853042602539,
          GeoHash: 'wsjwyupb5'
        },
        Class1: '遊憩類',
        WebsiteUrl: 'https://goo.gl/2SZbY5',
        ParkingInfo: '附近付費停車場',
        ParkingPosition: {},
        TicketInfo: '免費參觀',
        Keyword: '太平老街',
        City: '雲林縣',
        SrcUpdateTime: '2022-05-19T01:19:21+08:00',
        UpdateTime: '2022-05-19T01:34:30+08:00'
      },
      {
        ScenicSpotID: 'C1_376490000A_000049',
        ScenicSpotName: '源順芝麻觀光油廠',
        DescriptionDetail:
          '廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。',
        Description:
          '廚房至寶：安心用油~冷壓芝麻油。探訪以「製造有益人體健康之產品」為目標的土庫鎮「源順芝麻觀光油廠」，可以學習如何選購好油，用好油及吃好油。最佳伴手禮是已催芽黑芝麻粉及芝麻油。必吃美食是芝麻糖、芝麻冰。',
        Phone: '886-5-6622574',
        Address: '雲林縣土庫鎮成功路1-62號',
        ZipCode: '633',
        TravelInfo:
          '【南下】國道一號過斗南交流道，國道三號過斗六交流道，接78號快速道路，往台西方向， 【北上】國道一號過斗南收費站，國道三號過古坑收費站，接78號快速道路，往虎尾土庫方向， 下（虎尾、土庫）第一個交流道，左轉往北港方向，3分鐘過天主教永年中學後，於土庫外環道左轉，30秒經土庫國小越港分校，就可以看到我們了。歡迎光臨。',
        OpenTime: '參觀場域09:30-17:30商品販售08:00-18:00',
        Picture: {
          PictureUrl1: 'https://tour.yunlin.gov.tw/public/upload/old/20190123115108.jpg',
          PictureDescription1: '源順芝麻觀光油廠',
          PictureUrl2: 'https://tour.yunlin.gov.tw/public/upload/StoreCover/220513042303926212Z5H94.png',
          PictureDescription2: '源順芝麻觀光油廠2',
          PictureUrl3: 'https://tour.yunlin.gov.tw/public/upload/StoreCover/2205130423039574624RNEV.png',
          PictureDescription3: '源順芝麻觀光油廠3'
        },
        MapUrl: 'https://goo.gl/VLZU7e',
        Position: {
          PositionLon: 120.39469909667969,
          PositionLat: 23.674110412597656,
          GeoHash: 'wsjwetsxx'
        },
        Class1: '遊憩類',
        ParkingInfo: '備有停車場',
        ParkingPosition: {},
        TicketInfo: '免費參觀',
        City: '雲林縣',
        SrcUpdateTime: '2022-05-19T01:19:21+08:00',
        UpdateTime: '2022-05-19T01:34:30+08:00'
      }
    ],
    hotel: [],
    restaurant: []
  })

  const handleToSearch = (type) => {
    console.log(type)
    navigate(`search/${type}`)
  }

  return (
    <div className='home-index'>
      <div className='contentWrapper'>
        <div className='scenicSpotArea w-full overflow-hidden z-10'>
          <p className='title xl:text-center mb-6'>
            熱門景點
            <span className='hidden lg:inline ml-10'>台灣最夯、最美麗的景點都在這裡</span>
          </p>
          <div className='cardGroup lg:justify-center'>
            {defaultData.scenicSpot.map((item) => (
              <ScenicSpotCard key={item.ScenicSpotID} cardData={item} />
            ))}
          </div>
          <div className='more_btn mt-8 mx-auto' onClick={() => handleToSearch('scenicSpot')}>
            更多
          </div>
        </div>
        <div className='cardBg'></div>
      </div>
      <div className='contentWrapper'>
        <div className='hotelArea w-full overflow-hidden'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門旅宿
              <span className='hidden lg:inline ml-5'>旅人最常推的</span>
            </p>
            <div className='more_btn white_btn ml-auto' onClick={() => handleToSearch('hotel')}>
              更多
            </div>
          </div>
          <div className='cardGroup'>
            {defaultData.hotel.map((item) => (
              <HotelCard key={item.ScenicSpotID} cardData={item} />
            ))}
          </div>
        </div>
      </div>
      <div className='contentWrapper'>
        <div className='restaurantArea w-full'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門餐飲<span className='hidden lg:inline ml-5'>饕客必吃美食</span>
            </p>
            <div className='more_btn white_btn ml-auto' onClick={() => handleToSearch('restaurant')}>
              更多
            </div>
          </div>
          <div className='restaurantCardGroup'>
            {defaultData.hotel.map((item) => (
              <RestaurantCard key={item.ScenicSpotID} cardData={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
