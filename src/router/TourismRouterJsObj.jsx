import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

export default function TourismRouterJsObj() {
  const routes = useRoutes([
    {
      path: '/',
      element: lazy(() => import('../view/Home/Home')),
      children: [
        {
          path: 'search/hotel',
          element: lazy(() => import('../view/Hotel/Hotels/Hotels')),
        },
        {
          path: 'search/restaurant',
          element: lazy(() => import('../view/Restaurant/Restaurants/Restaurants')),
        }
      ]
    },
    {

    }
  ])
  return routes
}
