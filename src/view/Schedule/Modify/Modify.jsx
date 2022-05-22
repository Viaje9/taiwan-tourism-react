import './Modify.css'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { selectScheduleItems, selectFavoriteItems } from '/src/store/app/selector'
import { updateScheduleName, updateSchedule, removeFavorite } from '/src/store/app/action'
import { getItemsId, getID } from '/src/utils/apiParams'
import { fetchAll } from '/src/apis/tourism'
import { filterArea } from '/src/utils/filter'
import { useNavigate } from 'react-router-dom'
import { imgSrc } from '/src/utils/onErrorImg'
import Dialogs from '/src/components/Dialogs/Dialogs'

export default function Modify() {
  const index = +useParams().index
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const scheduleItems = useSelector(selectScheduleItems(index))
  const favoriteItems = useSelector(selectFavoriteItems)
  const [showDialogs, setShowDialogs] = useState(false)
  const [scheduleDayItems, setScheduleDayItems] = useState([
    ...scheduleItems.schedule.reduce((acc, { day }) => acc.add(day), new Set([1]))
  ])
  const [scheduleDetailItems, setScheduleDetailItems] = useState([])
  const [favoriteDetailItems, setFavoriteDetailItems] = useState([])
  const [currentDay, setCurrentDay] = useState(1)
  const [dialogsConfig, setDialogsConfig] = useState({
    str: '日行程',
    type: 'todaySchedule',
    params: null
  })

  useEffect(() => {
    const scheduleParams = getItemsId(scheduleItems.schedule)
    const favoriteItemsParams = getItemsId(favoriteItems)
    const mixinParams = (a, b) => {
      const result = {}
      const str = (a, b) => (a ? `${a} ${b ? 'or' : b} ${b}` : b)
      result.scenicSpot = str(a.scenicSpot, b.scenicSpot)
      result.restaurant = str(a.restaurant, b.restaurant)
      result.hotel = str(a.hotel, b.hotel)
      return result
    }
    const allParams = mixinParams(scheduleParams, favoriteItemsParams)
    fetchAll(allParams).then((e) => {
      const result = Object.entries(e).reduce((acc, [category, data]) => {
        const list = data.map((e) => ({
          id: e[getID(category)],
          name: e.Name,
          picture: e.Picture?.PictureUrl1,
          area: filterArea(e.ZipCode),
          phone: e.Phone,
          category
        }))
        return acc.concat(list)
      }, [])

      setScheduleDetailItems(getScheduleDetail(scheduleItems.schedule, result))
      setFavoriteDetailItems(getFavoriteDetail(favoriteItems, result))
    })
  }, [])

  const openDialogs = (type, params) => {
    let config
    if (type === 'todaySchedule') {
      config = {
        str: '日行程',
        type: 'todaySchedule',
        params
      }
    }
    if (type === 'favoriteItem') {
      config = {
        str: '項目',
        type: 'favoriteItem',
        params
      }
    }
    setDialogsConfig(config)
    setShowDialogs(true)
  }

  const clickDialogs = (result) => {
    const { type, params } = dialogsConfig
    if (type === 'todaySchedule' && result) {
      removeTodaySchedule(params)
    }
    if (type === 'favoriteItem' && result) {
      removeFavoriteItem(params)
    }
    setShowDialogs(false)
  }

  const removeTodaySchedule = (currentDay) => {
    setScheduleDetailItems(scheduleDetailItems.value.filter(({ day }) => day !== currentDay))
    updateScheduleItem()
  }

  const removeFavoriteItem = (params) => {
    const { id, category } = params
    setFavoriteDetailItems(favoriteDetailItems.filter((e) => !(e.id === id && e.category === category)))
    dispatch(removeFavorite({ id, category }))
  }

  const changeDay = (day) => {
    setCurrentDay(day)
  }

  const addScheduleDay = () => {
    const items = scheduleDayItems
    const lastDay = items.length + 1
    if (items.length !== 5) {
      setScheduleDayItems([...items, lastDay])
      changeDay(lastDay)
    }
  }

  const updateScheduleItem = () => {
    dispatch(
      updateSchedule({
        index,
        item: forLocalStorageScheduleItems()
      })
    )
  }

  const addScheduleItem = ({ id, category }) => {
    const detail = favoriteDetailItems.find((e) => e.id === id && e.category === category)

    setScheduleDetailItems([
      ...scheduleDetailItems,
      {
        ...detail,
        day: currentDay,
        start: { h: '00', m: '00' },
        end: { h: '00', m: '00' },
        timestamp: Date.now()
      }
    ])

    updateScheduleItem()
  }

  const removeScheduleItem = (timestamp) => {
    setScheduleDetailItems(scheduleDetailItems.filter((e) => e.timestamp !== timestamp))
    updateScheduleItem()
  }

  function getScheduleDetail(scheduleItems, detailItems) {
    return scheduleItems.map(({ id, category, day, start, end, timestamp }) => {
      const detail = detailItems.find((e) => e.id === id && e.category === category)

      return {
        id,
        category,
        day,
        start,
        end,
        timestamp,
        picture: detail.picture || empty,
        area: detail.area,
        name: detail.name,
        phone: detail.phone
      }
    })
  }

  function getFavoriteDetail(favoriteItems, detailItems) {
    return favoriteItems.map(({ id, category }) => {
      const detail = detailItems.find((e) => e.id === id && e.category === category)

      return {
        id,
        category,
        picture: detail.picture || empty,
        area: detail.area,
        name: detail.name,
        phone: detail.phone
      }
    })
  }

  function forLocalStorageScheduleItems() {
    return scheduleDetailItems.map(({ id, category, timestamp, day, start, end }) => ({
      id,
      category,
      timestamp,
      day,
      start,
      end
    }))
  }

  const keyLock = (event) => {
    if (!(event.which >= 48 && event.which <= 57)) {
      event.preventDefault()
    }
  }

  return (
    <div className='Modify wrap'>
      <div>
        <div className='schedule'>
          <div className='schedule_name'>
            <input
              value={scheduleItems.name}
              onChange={(event) => {
                const name = event.target.value
                dispatch(updateScheduleName({ index, name }))
              }}
              className='w-full h-10 rounded-lg py-2 px-3'
              type='text'
              placeholder='請輸入行程名稱'
            />
          </div>
          <ul className='flex h-10'>
            <li className='py-2 pl-5 px-1 text-lg lg:px-2'>DAY</li>
            {scheduleDayItems.map((day) => (
              <li className='page_itme' key={day}>
                <button className={`page_btn ${day === currentDay ? 'active' : ''}`} onClick={() => changeDay(day)}>
                  {day}
                </button>
              </li>
            ))}
            {scheduleDayItems.length < 5 ? (
              <li className='page_itme'>
                <button className='page_btn' onClick={() => addScheduleDay()}>
                  <img src='/src/assets/images/addDay.svg' />
                </button>
              </li>
            ) : (
              ''
            )}
          </ul>
          <div className='items'>
            <div className='flex justify-between mb-2'>
              <span className='self-end text-base'>時間</span>
              <div className='flex py-5' onClick={() => openDialogs('todaySchedule', currentDay)}>
                <img className='w-7 mr-3' src='/src/assets/images/removeJourney.svg' />
                <span className='text-lg font-light'>刪除此日行程</span>
              </div>
            </div>
            <ul className='content'>
              {scheduleDetailItems
                .filter(({ day }) => day === currentDay)
                .map((item) => (
                  <li key={item.timestamp} className='item'>
                    <div className='time_area'>
                      <div className='time mb-1'>
                        <input
                          value={item.start.h}
                          className='input_num'
                          type='text'
                          onKeyPress={($event) => keyLock($event)}
                          onChange={(event) => {
                            setScheduleDetailItems((items) => {
                              const newItem = items.find((e) => e === item)
                              newItem.start = {
                                ...newItem.start,
                                h: event.target.value
                              }
                              return items
                            })
                            updateScheduleItem()
                          }}
                        />
                        :
                        <input
                          value={item.start.m}
                          className='input_num'
                          type='text'
                          onKeyPress={($event) => keyLock($event)}
                          onChange={(event) => {
                            setScheduleDetailItems((items) => {
                              const newItem = items.find((e) => e === item)
                              newItem.start = {
                                ...newItem.start,
                                m: event.target.value
                              }
                              return items
                            })
                            updateScheduleItem()
                          }}
                        />
                      </div>
                      <div className='time'>
                        <input
                          value={item.end.h}
                          className='input_num'
                          type='text'
                          onKeyPress={($event) => keyLock($event)}
                          onChange={(event) => {
                            setScheduleDetailItems((items) => {
                              const newItem = items.find((e) => e === item)
                              newItem.end = {
                                ...newItem.start,
                                h: event.target.value
                              }
                              return items
                            })
                            updateScheduleItem()
                          }}
                        />
                        :
                        <input
                          value={item.end.m}
                          className='input_num'
                          type='text'
                          onKeyPress={($event) => keyLock($event)}
                          onChange={(event) => {
                            setScheduleDetailItems((items) => {
                              const newItem = items.find((e) => e === item)
                              newItem.end = {
                                ...newItem.start,
                                m: event.target.value
                              }
                              return items
                            })
                            updateScheduleItem()
                          }}
                        />
                      </div>
                    </div>
                    <div className='info'>
                      <div className='absolute top-2 right-2 z-10' onClick={() => removeScheduleItem(item.timestamp)}>
                        <img className='w-5 h-5' src='/src/assets/images/itemClose.svg' />
                      </div>
                      <div className='w-20 h-20'>
                        <img className='img' src={item.picture} />
                      </div>
                      <div className='pl-2.5 flex flex-col justify-between'>
                        <div className='text-base font-bold'>{item.name}</div>
                        <div className='flex text-base font-light'>
                          <img className='mr-2.5' src='/src/assets/images/phone.svg' />
                          {item.phone}
                        </div>
                        <div className='flex text-base font-light'>
                          <img className='mr-2.5' src='/src/assets/images/map.svg' />
                          {item.area}
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            <div className='flex justify-end pb-5 lg:hidden'>
              <button className='back' onClick={() => navigate('/ItineraryList')}>
                返回
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='favorite_area'>
        <div className='filter_area'>
          <div className='filter_item'>
            <div className='text-xl font-bold mb-3'>縣市</div>
            <select className='filter_select'>
              <option>全部</option>
              <option>台北</option>
              <option>台中</option>
            </select>
          </div>
          <div className='filter_item'>
            <div className='text-xl font-bold mb-3'>類型</div>
            <select className='filter_select'>
              <option>全部</option>
              <option>景點</option>
              <option>旅宿</option>
              <option>餐飲</option>
            </select>
          </div>
        </div>
        <ul className='favorite_cards'>
          {favoriteDetailItems.map((item) => (
            <li key={item.id} className='favorite_card' onClick={() => addScheduleItem(item)}>
              <div className='absolute top-2 right-2 z-10' onClick={(e) => {
                openDialogs('favoriteItem', item)
                e.stopPropagation()
              }}>
                <img className='w-6 h-6' src='/src/assets/images/itemClose.svg' />
              </div>
              <div className='aspect-w-3 aspect-h-2'>
                <img className='w-full h-full object-center object-cover rounded-t-2xl' src={item.picture} />
              </div>
              <div className='favorite_info'>
                <div className='favorite_name'>{item.name}</div>
                <div className='favorite_location'>
                  <img className='w-4' src='/src/assets/images/map.svg' />
                  {item.area}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <div className='go_top'>TOP</div> */}
      {showDialogs ? (
        <Dialogs
          type={dialogsConfig.str}
          doDelete={(status) => {
            clickDialogs(status)
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}
