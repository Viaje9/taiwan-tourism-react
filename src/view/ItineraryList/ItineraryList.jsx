import Dialogs from '/src/components/Dialogs/Dialogs'
import { fetchAll } from '/src/apis/tourism'
import { useState, useEffect } from 'react'
import { getItineraryListId, getID } from '/src/utils/apiParams'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { selectItineraryList } from '/src/store/app/selector'
import { useNavigate } from 'react-router-dom'
import { addSchedule, removeSchedule } from '/src/store/app/action'
import empty from '/src/assets/images/empty.svg'
import './ItineraryList.css'

export default function ItineraryList() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const store = useStore()
  const itineraryList = useSelector(selectItineraryList)
  const [list, setList] = useState([])
  const [showDialogs, setShowDialogs] = useState(false)
  const [deleteIndex, setDeleteIndex] = useState(null)

  const addNewSchedule = () => {
    const lastScheduleIndex = itineraryList.length - 1
    const last = itineraryList[lastScheduleIndex]
    if (last?.schedule.length || lastScheduleIndex < 0) {
      dispatch(addSchedule())
    }
    const newItineraryList = store.getState().app.itineraryList
    const { index } = newItineraryList[newItineraryList.length - 1]
    navigate(`/Schedule/Modify/${index}`)
  }

  const clickDeleteIndex = (index) => {
    setDeleteIndex(index)
    setShowDialogs(true)
  }

  const clickDialogs = (result) => {
    if (result) deleteSchedule()
    setShowDialogs(false)
  }

  const deleteSchedule = () => {
    setList(list.filter(({ index }) => index !== deleteIndex))
    dispatch(removeSchedule(deleteIndex))
  }

  useEffect(() => {
    const params = getItineraryListId(itineraryList)
    fetchAll(params).then((e) => {
      const result = Object.entries(e).reduce((acc, [category, data]) => {
        const list = data.map((e) => ({
          id: e[getID(category)],
          picture: e.Picture?.PictureUrl1,
          category
        }))
        return acc.concat(list)
      }, [])
      setList(
        itineraryList.map(({ name, schedule, index }) => {
          let picture = schedule.length ? null : empty
          if (schedule.length) {
            const { id, category } = schedule[0]
            picture = result.find((e) => e.id === id && e.category === category)?.picture || empty
          }
          return {
            index,
            name,
            picture
          }
        })
      )
    })
  }, [])

  return (
    <div id='ItineraryList'>
      <div className='wrap'>
        <ul className='flex flex-wrap'>
          {list.map((item) => (
            <li
              className='item'
              key={item.index}
              onClick={() => {
                navigate(`/Schedule/Modify/${item.index}`)
              }}
            >
              <div
                className='absolute top-2 right-2 z-10'
                onClick={(e) => {
                  clickDeleteIndex(item.index)
                  e.stopPropagation()
                }}
              >
                <img className='w-6 h-6' src='/src/assets/images/itemClose.svg' />
              </div>
              <div className='m-2.5 aspect-w-3 aspect-h-2'>
                <img className='w-full h-full object-center object-cover rounded-t-xl' src={item.picture} />
              </div>
              <div className='title'>{item.name}</div>
            </li>
          ))}

          <li
            className='item p-1'
            onClick={() => {
              addNewSchedule()
            }}
          >
            <img
              className='w-full h-full object-center object-cover rounded-t-xl'
              src='/src/assets/images/addJourneyName.svg'
            />
          </li>
        </ul>
        {showDialogs && (
          <Dialogs
            type='清單'
            doDelete={(status) => {
              clickDialogs(status)
            }}
          />
        )}
      </div>
    </div>
  )
}
