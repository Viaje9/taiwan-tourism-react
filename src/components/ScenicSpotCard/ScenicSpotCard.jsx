import './ScenicSpotCard.css'
import { useState } from 'react'
export default function ScenicSpotCard({ cardData }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const clickAddFavorite = () => {
    this.isFavorite = !this.isFavorite
  }

  return (
    <div className='scenic-spot-card main'>
      <div
        className='imgArea'
        style={{
          backgroundImage: `url(${cardData.Picture.PictureUrl1})`
        }}
      ></div>
      <div className='textArea'>
        <h4 className='card_title'>{cardData.ScenicSpotName}</h4>
        <p className='card_info'>{cardData.DescriptionDetail}</p>
        <div className='card_footer'>
          <div>
            <div className='icon'>
              <img src='/src/assets/images/map.svg' />
            </div>
            <span>{cardData.City}</span>
          </div>
          <div onClick={() => clickAddFavorite()}>
            <div className='icon cursor-pointer'>
              {isFavorite ? (
                <img src='/src/assets/images/addedJourney.svg' />
              ) : (
                <img src='/src/assets/images/addJourney.svg' />
              )}
            </div>
            <span>加入收藏</span>
          </div>
        </div>
      </div>
    </div>
  )
}
