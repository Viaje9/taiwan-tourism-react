import './HotelCard.css'
import { bgImgSrc } from '/src/utils/onErrorImg'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { selectIsFavorite } from '/src/store/app/selector'
import { addFavorite, removeFavorite } from '/src/store/app/action'
import { HOTEL } from '/src/constant'

export default function HotelCard({ cardData }) {
  const dispatch = useDispatch()
  const isFavorite = useSelector(selectIsFavorite(HOTEL, cardData.HotelID))
  const clickAddFavorite = () => {
    const target = {
      id: cardData.HotelID,
      category: HOTEL
    }
    dispatch(isFavorite ? removeFavorite(target) : addFavorite(target))
  }

  return (
    <div>
      <div className='main'>
        <div className='imgArea' ref={bgImgSrc(cardData.Picture.PictureUrl1)}></div>
        <div className='textArea'>
          <h4 className='card_title'>{cardData.Name}</h4>
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
    </div>
  )
}
