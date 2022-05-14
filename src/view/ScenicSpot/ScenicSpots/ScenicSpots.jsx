import './ScenicSpots.css';
export default function ScenicSpots() {
  return (
    <div className="contentWrapper">
      <div className="scenicSpotArea w-full overflow-hidden z-10">
        <p className="title xl:text-center mb-6">
          熱門景點
          <span className="subtitle"> 台灣最夯、最美麗的景點都在這裡 </span>
        </p>
        <div className="cardGroup lg:justify-center">
          {/* {itmes.map((data) =>
            <ScenicSpotCard
              cardData={data}
              key={data.ID}
            />)
          } */}
        </div>
      </div>
    </div>
  )
}