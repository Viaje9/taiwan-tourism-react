// FIXME:還不能使用
import './Detail.css'
import { useSelector, useDispatch } from 'react-redux'
import { selectIsFavorite } from '/src/store/app/selector'
import { addFavorite, removeFavorite } from '/src/store/app/action'
import { useState, useEffect } from 'react'
import { imgSrc } from '/src/utils/onErrorImg'
import { getItemsId, getID, getName } from '/src/utils/apiParams'
import errorImg from '/src/assets/images/empty.svg'

export default function Detail({ detailID, info, category, categoryStr }) {
  const dispatch = useDispatch()
  const [coordinate, setCoordinate] = useState('')
  const isFavorite = useSelector(selectIsFavorite(category, info.ScenicSpotID))
  const clickAddFavorite = () => {
    const target = {
      id: info.ScenicSpotID,
      category: category
    }
    dispatch(isFavorite ? removeFavorite(target) : addFavorite(target))
  }
  return (
    <div id='Detail'>
      <div className='wrap'>
        <div className='header'>
          <div className='header_title'>{info[getName(category)]}</div>
          <div className='location'>
            <img src='/src/assets/images/map.svg' />
            {info.City}
          </div>
          <div className='left_side'>
            <a className='fast_search' target='_blank' href={`https://www.google.com/search?q=${info.ScenicSpotName}`}>
              <img src='/src/assets/images/googleBig.svg' />
              快速搜索
            </a>
            <div className='favorite' onClick={() => clickAddFavorite()}>
              {isFavorite ? (
                <img src='/src/assets/images/addedJourney.svg' />
              ) : (
                <img src='/src/assets/images/addJourney.svg' />
              )}
              加入收藏
            </div>
          </div>
          <div className='desc'>{info.DescriptionDetail && <>{info.Description}</>}</div>
        </div>
        <div className='images'>
          <div className='main_img'>
            <img
              className='img'
              src={info.Picture.PictureUrl1 ? info.Picture.PictureUrl1 : errorImg}
              alt={info.Picture.PictureDescription1}
            />
          </div>
          <div className='side_img'>
            <img
              className='img'
              src={info.Picture.PictureUrl1 ? info.Picture.PictureUrl1 : errorImg}
              alt={info.Picture.PictureDescription1}
            />
          </div>
          <div className='side_img'>
            <img
              className='img'
              src={info.Picture.PictureUrl2 ? info.Picture.PictureUrl2 : errorImg}
              alt={info.Picture.PictureDescription2}
            />
          </div>
          <div className='side_img'>
            <img
              className='img'
              src={info.Picture.PictureUrl3 ? info.Picture.PictureUrl3 : errorImg}
              alt={info.Picture.PictureDescription3}
            />
          </div>
        </div>
        <div className='intro'>
          <div className='lg:col-span-8'>
            <div className='content'>
              <div className='content_title'>{categoryStr}介紹</div>
              {/* <div className='content_subtitle'>{info.Picture.PictureDescription1}</div> */}
              <div className='content_desc'>{info.DescriptionDetail || info.Description}</div>
            </div>
          </div>
          <div className='lg:col-span-4'>
            <div className='info'>
              <div className='info_title'>{categoryStr}資訊</div>
              <div className='info_item'>
                <div className='info_label'>開放時間</div>
                <div className='info_text'>{info.OpenTime}</div>
              </div>
              <div className='info_item'>
                <div className='info_label'>聯絡電話</div>
                <div className='info_text'>{info.Phone}</div>
              </div>
              <div className='info_item'>
                <div className='info_label'>地址</div>
                <div className='info_text'>{info.Address}</div>
              </div>
              <div className='info_map'>
                {info.Position.PositionLat && info.Position.PositionLon && (
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d${info.Position.PositionLat}!3d${
                      info.Position.PositionLon
                    }!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd03748c065726588!2z${
                      info.Position.PositionLat && info.Position.PositionLon
                        ? window.btoa(`${info.Position.PositionLat},${info.Position.PositionLon}`)
                        : ''
                    }!5e0!3m2!1sen!2szh-tw`}
                    className='w-full'
                    height='200'
                    allowFullScreen=''
                    loading='lazy'
                  ></iframe>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
