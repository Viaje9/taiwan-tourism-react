import './RestaurantCard.css'
import { useState, useEffect } from 'react'

export default function RestaurantCard({ cardData }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const clickAddFavorite = () => {
    this.isFavorite = !this.isFavorite
  }

  return (
    <div className='restaurant main flex'>
      <div
        className='imgArea'
        style={{
          backgroundImage: `url(${cardData.Picture.PictureUrl1})`
        }}
      ></div>
      <div className='textArea'>
        <h4 className='card_title'>{cardData.RestaurantName}</h4>
        <div className='flex mt-4 xl:mt-3'>
          <div className='icon'>
            <img src='/src/assets/images/phone.svg' />
          </div>
          <span>{cardData.Phone}</span>
        </div>
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
