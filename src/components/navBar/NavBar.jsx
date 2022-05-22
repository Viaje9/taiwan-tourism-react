import './NavBar.css'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch, useStore } from 'react-redux'
import { selectIsSmaller } from '/src/store/screen/selector'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [menuIcon, setMenuIcon] = useState('menu')
  const isSmallerLg = useSelector(selectIsSmaller('lg'))

  useEffect(() => {
    setMenuIcon(isOpen ? 'menuClose' : 'menu')
  }, [isOpen])

  return (
    <div id='NavBar'>
      <nav className={(isSmallerLg && isOpen ? 'active' : '') + ' nav'}>
        <div className='nav_area'>
          <div className='vertical-center'>
            <NavLink
              to='/'
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <img className='lg:h-10 h-7' src='/src/assets/images/logo.svg' alt='台灣哪裡趣' />
            </NavLink>
          </div>
          <div className='block lg:hidden'>
            <button
              className='py-2'
              onClick={() => {
                setIsOpen(!isOpen)
              }}
            >
              <img className='h-5' src={`/src/assets/images/${menuIcon}.svg`} />
            </button>
          </div>
          {!isSmallerLg || (isSmallerLg && isOpen) ? (
            <div className='flex lg:w-auto w-full justify-center'>
              <ul className='menu_list'>
                <li className='search_btn'>
                  <NavLink
                    to='search/scenicSpot'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    景點{' '}
                  </NavLink>
                </li>
                <li className='search_btn'>
                  <NavLink
                    to='search/hotel'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    旅宿
                  </NavLink>
                </li>
                <li className='search_btn'>
                  <NavLink
                    to='search/restaurant'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    餐飲
                  </NavLink>
                </li>
                <li className='itinerary_btn'>
                  <NavLink
                    className='vertical-center'
                    to='/ItineraryList'
                    onClick={() => {
                      setIsOpen(false)
                    }}
                  >
                    <i>
                      <img src='/src/assets/images/journey.svg' />
                    </i>{' '}
                    自訂行程
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </nav>
    </div>
  )
}
