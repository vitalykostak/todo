import { memo, type FC, Suspense } from 'react'
import { Route, type RouteProps, Routes } from 'react-router-dom'

import { routeConfig } from '../../config/route-config'

const AppRouter: FC = memo(() => {
  const renderRoute = (route: RouteProps) => <Route
    key={route.path}
    path={route.path}
    element={
      <Suspense>
        {route.element}{' '}
      </Suspense>
    }
  />

  return <Routes>
    {Object.values(routeConfig).map((route) => renderRoute(route))}
  </Routes>
})

export default AppRouter
