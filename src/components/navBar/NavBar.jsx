import './NavBar.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { selectIsSmaller } from '/src/store/screen/selector'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuIcon, setMenuIcon] = useState("menu")
  const isSmallerLg = useSelector(selectIsSmaller('lg'));

  const showMenuList = () => {

    return !isSmallerLg || (isSmallerLg && isOpen);
  }
  // const goto = (path) => {

  // }

  useEffect(() => {
    setMenuIcon(isOpen ? "menuClose" : "menu")
  }, [isOpen])

  return (
    <nav className={(isSmallerLg && isOpen ? 'active' : '') + ' nav'}>
      <div className="nav_area">
        <div className="vertical-center" onClick={() => goto("/")}>
          <img
            className="lg:h-10 h-7"
            src="/src/assets/images/logo.svg"
            alt="台灣哪裡趣"
          />
        </div>
        <div className="block lg:hidden">
          <button className="py-2" onClick={() => { setIsOpen(!isOpen) }}>
            <img className="h-5" src={(`/src/assets/images/${menuIcon}.svg`)} />
          </button>
        </div>
        {showMenuList() ? (<div className="flex lg:w-auto w-full justify-center">
          <ul className="menu_list">
            <li className="search_btn">
              <NavLink to="/scenicSpots" >景點 </NavLink>
            </li>
            <li className="search_btn">
              <NavLink to="/hotels" >旅宿</NavLink>
            </li>
            <li className="search_btn">
              <NavLink to="/restaurants" >餐飲</NavLink>
            </li >
            <li className="itinerary_btn">
              <NavLink
                className="vertical-center" to="/ItineraryList"
              >
                <i><img src="/src/assets/images/journey.svg" /></i> 自訂行程
              </NavLink>
            </li >
          </ul >
        </div >) : ''}
      </div >
    </nav >
  )
}