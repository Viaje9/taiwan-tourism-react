import './ScenicSpotCard.css'
import { bgImgSrc } from '/src/utils/onErrorImg'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectIsFavorite } from '/src/store/app/selector'
import { addFavorite, removeFavorite } from '/src/store/app/action'
import { SCENIC_SPOT } from '/src/constant'

export default function ScenicSpotCard({ cardData }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isFavorite = useSelector(selectIsFavorite(SCENIC_SPOT, cardData.ScenicSpotID))
  const clickAddFavorite = () => {
    const target = {
      id: cardData.ScenicSpotID,
      category: SCENIC_SPOT
    }
    dispatch(isFavorite ? removeFavorite(target) : addFavorite(target))
  }

  return (
    <div className='scenic-spot-card main' onClick={() => {navigate(`scenicSpots/${cardData.ScenicSpotID}`)}}>
      <div className='imgArea' ref={bgImgSrc(cardData.Picture.PictureUrl1)}></div>
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
            <span className='cursor-pointer'>加入收藏</span>
          </div>
        </div>
      </div>
    </div>
  )
}
