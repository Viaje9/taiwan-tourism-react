import './SearchBar.css';
export default function SearchBar() {
  return (
    <div>
      <div className="main">
        <div className="tabArea">
          <ul className="flex">
            <li
              v-for="tab in tabList"
              key={tab.value}
              className={searchParams.tab === tab.value ? 'active' : ''}
              onClick={() => changeTab(tab.value)}
            >
              {tab.name}
            </li>
          </ul>
        </div>
        <div className="tabContent">
          <div className="inputArea">
            <div>
              <p>縣市</p>
              <div>
                <select v-model="searchParams.city" className="input">
                  <option v-for="city in option.city" key={city} value={city}>
                    {city}
                  </option>
                </select>
                <i className="dropdown_icon">
                  <img src={require(`@/assets/images/dropdown.svg`)} />
                </i>
              </div>
            </div>
            <div>
              <p>類別</p>
              <div>
                <select v-model="searchParams.category" className="input">
                  <option
                    v-for="option in option[searchParams.tab]"
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                </select>
                <i className="dropdown_icon">
                  <img src={require(`@/assets/images/dropdown.svg`)} />
                </i>
              </div>
            </div>
            <div>
              <p>關鍵字</p>
              <div>
                <input
                  v-model="searchParams.keyword"
                  type="text"
                  className="input"
                  placeholder="請輸入關鍵字"
                />
              </div>
            </div>
          </div>
          <div className="searchArea">
            <div className="search_btn" onClick={() => search()}>搜尋</div>
          </div>
        </div>
      </div>
    </div>
  )
}