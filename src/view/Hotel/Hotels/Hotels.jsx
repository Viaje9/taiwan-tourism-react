import './Hotels.css'
export default function Hotels() {
  return (
    <div id="Hotels">
      <div className='contentWrapper'>
        <div className='hotelArea w-full overflow-hidden'>
          <div className='flex items-center mb-5'>
            <p className='title'>
              熱門旅宿
              <span className='subtitle hidden lg:inline ml-5'>旅人最常推的</span>
            </p>
          </div>
          <div className='cardGroup'>
            {/* {itmes.map((data) => 
          <HotelCard
            cardData={data}
            key={data.ID}
          />)
          } */}
          </div>
        </div>
      </div>
    </div>
  )
}
