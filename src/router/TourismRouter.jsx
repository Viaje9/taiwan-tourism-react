import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { Suspense } from 'react'
const Home  = lazy(() => import ('../view/Home/Home'))
const Hotels = lazy(() => import ('../view/Hotel/Hotels/Hotels'))
const Restaurants = lazy(() => import ('../view/Restaurant/Restaurants/Restaurants'))
const ScenicSpots = lazy(() => import ('../view/ScenicSpot/ScenicSpots/ScenicSpots'))
const HotelDetail  = lazy(() => import ('../view/Hotel/HotelDetail/HotelDetail'))
const RestaurantDetail  = lazy(() => import ('../view/Restaurant/RestaurantDetail/RestaurantDetail'))
const ScenicSpotDetail  = lazy(() => import ('../view/ScenicSpot/ScenicSpotDetail/ScenicSpotDetail'))
const ItineraryList  = lazy(() => import ('../view/ItineraryList/ItineraryList'))
export default function TourismRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='search/hotel' element={<Hotels />} />
          <Route path='search/restaurant' element={<Restaurants />} />
          <Route path='search/scenicSpot' element={<ScenicSpots />} />
        </Route>
        <Route path='hotels/:id' element={<HotelDetail />} />
        <Route path='restaurants/:id' element={<RestaurantDetail />} />
        <Route path='scenicSpots/:id' element={<ScenicSpotDetail />} />
        <Route path='itineraryList' element={<ItineraryList />} />
      </Routes>
    </Suspense>

  )
}
