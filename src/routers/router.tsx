import { Navigate, useRoutes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { NotFoundPage } from "../pages/NotFoundPage"
import { normiorizeRoute } from "./normiorizeRoute"


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
export const absolutePthRoutes = normiorizeRoute(dynamicRoutes)

export const rootRouter = [
  ...absolutePthRoutes,
  {
    path: '/',
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: '/login',
    element: <LoginPage />,
    meta: {
      auth: false,
      title: '登录',
      key: 'login'
    }
  },
  {
    path: '/404',
    element: <NotFoundPage />,
    meta: {
      auth: false,
      title: 'Not Found',
      key: 'Not Found'
    }
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