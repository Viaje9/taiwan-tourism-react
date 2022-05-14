import './Modify.css';

export default function Modify() {
  const clickDialogs = (result) => {
    const { type, params } = dialogsConfig.value
    if (type === 'todaySchedule' && result) {
      removeTodaySchedule(params)
    }
    if (type === 'favoriteItem' && result) {
      removeFavoriteItem(params)
    }
    showDialogs.value = false
  }

  return (
    <div className="wrap">
      <div>
        <div className="schedule">
          <div className="schedule_name">
            <input
              value={scheduleName}
              className="w-full h-10 rounded-lg py-2 px-3"
              type="text"
              placeholder="請輸入行程名稱"
            />
          </div>
          <ul className="flex h-10">
            <li className="py-2 pl-5 px-1 text-lg lg:px-2">DAY</li>
            <li
              v-for="day in scheduleDayItems"
              key={day + 'day'}
              className="page_itme"
            >
              <button
                // className={(day === currentDay ? 'active' : '') + ' page_btn '}
                className={`page_btn ${day === currentDay ? 'active' : ''}`}
                onClick={() => changeDay(day)}
              >
                {day}
              </button>
            </li>
            <li v-show="scheduleDayItems.length < 5" className="page_itme">
              <button className="page_btn" onClick={() => addScheduleDay()}
              >
                <img src="@/assets/images/addDay.svg" />
              </button>
            </li>
          </ul>
          <div className="items">
            <div className="flex justify-between mb-2">
              <span className="self-end text-base">時間</span>
              <div
                className="flex py-5"
                onClick={() => openDialogs('todaySchedule', currentDay)}
              >
                <img className="w-7 mr-3" src="@/assets/images/removeJourney.svg" />
                <span className="text-lg font-light">刪除此日行程</span>
              </div>
            </div>
            <ul className="content">
              <li
                v-for="item in todayScheduleDetailItems"
                key={item.timestamp}
                className="item"
              >
                <div className="time_area">
                  <div className="time mb-1">
                    <input
                      v-model="item.start.h"
                      className="input_num"
                      type="text"
                      onkeypress={this.keyLock($event, item.start.h)}
                      onKeyUp={this.updateScheduleItem()}
                    />
                    :
                    <input
                      value={item.start.m}
                      className="input_num"
                      type="text"
                      onkeypress={this.keyLock($event, item.start.m)}
                      onKeyUp={this.updateScheduleItem()}
                    />
                  </div>
                  <div className="time">
                    <input
                      value={item.end.h}
                      className="input_num"
                      type="text"
                      onkeypress={this.keyLock($event, item.start.h)}
                      onKeyUp={this.updateScheduleItem()}
                    />
                    :
                    <input
                      v-model="item.end.m"
                      className="input_num"
                      type="text"
                      onkeypress={this.keyLock($event, item.end.m)}
                      onKeyUp={this.updateScheduleItem()}
                    />
                  </div>
                </div>
                <div className="info">
                  <div
                    className="absolute top-2 right-2 z-10"
                    onClick={() => removeScheduleItem(item.timestamp)}
                  >
                    <img className="w-5 h-5" src="@/assets/images/itemClose.svg" />
                  </div>
                  <div className="w-20 h-20">
                    <img className="img" src={item.picture} />
                  </div>
                  <div className="pl-2.5 flex flex-col justify-between">
                    <div className="text-base font-bold">{item.name}</div>
                    <div className="flex text-base font-light">
                      <img className="mr-2.5" src="@/assets/images/phone.svg" />
                      {item.phone}
                    </div>
                    <div className="flex text-base font-light">
                      <img className="mr-2.5" src="@/assets/images/map.svg" />
                      {item.area}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="flex justify-end pb-5 lg:hidden">
              <button className="back" onClick={() => $router.push('/ItineraryList')}>
                返回
              </button>
            </div>
          </div>
        </div>
      </div >

      <div className="favorite_area">
        <div className="filter_area">
          <div className="filter_item">
            <div className="text-xl font-bold mb-3">縣市</div>
            <select className="filter_select">
              <option>全部</option>
              <option>台北</option>
              <option>台中</option>
            </select>
          </div>
          <div className="filter_item">
            <div className="text-xl font-bold mb-3">類型</div>
            <select className="filter_select">
              <option>全部</option>
              <option>景點</option>
              <option>旅宿</option>
              <option>餐飲</option>
            </select>
          </div>
        </div>
        <ul className="favorite_cards">
          <li
            v-for="item in favoriteDetailItems"
            key={item.id}
            className="favorite_card"
            onClick={() => addScheduleItem(item)}
          >
            <div
              className="absolute top-2 right-2 z-10"
              onClick={() => openDialogs('favoriteItem', item)}
            >
              <img className="w-6 h-6" src="@/assets/images/itemClose.svg" />
            </div>
            <div className="aspect-w-3 aspect-h-2">
              <img
                className="w-full h-full object-center object-cover rounded-t-2xl"
                src={item.picture}
              />
            </div>
            <div className="favorite_info">
              <div className="favorite_name">{item.name}</div>
              <div className="favorite_location">
                <img className="w-4" src="@/assets/images/map.svg" />
                {item.area}
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="go_top">TOP</div>
      <Dialogs
        v-show="showDialogs"
        type={dialogsConfig.str}
        doDelete={(status) => clickDialogs(status)}
      />
    </div >
  )
}