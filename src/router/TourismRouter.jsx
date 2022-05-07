import { Route, Routes } from 'react-router-dom'
import Home from '../view/Home/Home'
import Hotels from '../view/Hotel/Hotels/Hotels'
import Restaurants from '../view/Restaurant/Restaurants/Restaurants'
import ScenicSpots from '../view/ScenicSpot/ScenicSpots/ScenicSpots'
import HotelDetail from '../view/Hotel/HotelDetail/HotelDetail'
import RestaurantDetail from '../view/Restaurant/RestaurantDetail/RestaurantDetail'
import ScenicSpotDetail from '../view/ScenicSpot/ScenicSpotDetail/ScenicSpotDetail'
import ItineraryList from '../view/ItineraryList/ItineraryList'


export default function TourismRouter() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='hotels' element={<Hotels />} />
      <Route path='hotels/:id' element={<HotelDetail />} />
      <Route path='restaurants' element={<Restaurants />} />
      <Route path='restaurants/:id' element={<RestaurantDetail />} />
      <Route path='scenicSpots' element={<ScenicSpots />} />
      <Route path='scenicSpots/:id' element={<ScenicSpotDetail />} />
      <Route path='itineraryList' element={<ItineraryList />} />
    </Routes>
  )
}
