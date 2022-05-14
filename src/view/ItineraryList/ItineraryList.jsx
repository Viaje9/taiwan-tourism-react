import Dialogs from '/src/components/Dialogs/Dialogs';
import './ItineraryList.css';

export default function ItineraryList() {
  const addSchedule = () => {
    const last = itineraryList.value[lastScheduleIndex.value]
    if (last?.schedule.length || lastScheduleIndex.value < 0) {
      store.commit('addSchedule')
    }
    const { index } = itineraryList.value[lastScheduleIndex.value]
    router.push(`/Schedule/Modify/${index}`)
  }

  const setDeleteIndex = (index) => {
    deleteIndex.value = index
    showDialogs.value = true
  }

  const clickDialogs = (result) => {
    if (result) deleteSchedule()
    showDialogs.value = false
  }

  const deleteSchedule = () => {
    list.value = list.value.filter(({ index }) => index !== deleteIndex.value)
    store.commit('removeSchedule', deleteIndex.value)
  }
  
  return (
    <div className="wrap">
      <ul className="flex flex-wrap">
        <li
          className="item"
          v-for="item in list"
          key={item.index}
        // onClick="$router.push(`/Schedule/Modify/${item.index}`)"
        >
          <div
            className="absolute top-2 right-2 z-10"
            onClick={() => setDeleteIndex(item.index)}
          >
            <img className="w-6 h-6" src="@/assets/images/itemClose.svg" />
          </div>
          <div className="m-2.5 aspect-w-3 aspect-h-2">
            <img
              className="w-full h-full object-center object-cover rounded-t-xl"
              src={item.picture}
            />
          </div>
          <div className="title">{item.name}</div>
        </li>
        <li className="item p-1" onClick={() => { addSchedule() }}>
          <img
            className="w-full h-full object-center object-cover rounded-t-xl"
            src="@/assets/images/addJourneyName.svg"
          />
        </li>
      </ul>
      {/* {showDialogs && <Dialogs  type="清單" @result="clickDialogs" />} */}
    </div>
  )
}