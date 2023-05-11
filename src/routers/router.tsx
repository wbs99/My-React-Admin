import { Navigate, useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { DashboardPage } from "../pages/DashboardPage"
import { NotFoundPage } from "../pages/NotFoundPage"


const dynamicRoutes: MyRouterObject[] = []

const authRoutes: Record<string, { [key: string]: MyRouterObject[] }> = import.meta.glob('./dynamic/*.tsx', { eager: true })
Object.keys(authRoutes).map((item) => {
  const module = authRoutes[item].default.map((route: MyRouterObject) => {
    route.meta!.auth = true
    route.meta!.index = route.meta!.index || -1
    return route
  })
  dynamicRoutes.push(...module)
})

const rootRouter = [
  ...dynamicRoutes,
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
  },
  {
    path: '/404',
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to="/404" replace />,
  },
]
export const Router = () => {
  const routes = useRoutes(rootRouter)
  return routes
}