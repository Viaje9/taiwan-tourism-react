import { Route, Routes } from 'react-router-dom'
import Hotels from '../view/Hotel/Hotels/Hotels'
import Restaurants from '../view/Restaurant/Restaurants/Restaurants'
import ScenicSpots from '../view/ScenicSpot/ScenicSpots/ScenicSpots'


export default function HomeRouter() {
  return (
    <Routes>
      <Route path='hotels' element={<Hotels />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='scenicSpots' element={<ScenicSpots />} />
    </Routes>
  )
}
