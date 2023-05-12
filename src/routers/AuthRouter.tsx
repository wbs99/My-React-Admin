import { Navigate, useLocation } from "react-router-dom"
import { rootRouter } from "./router"
import { useMeStore } from "../stores/useMeStore"
import { storage } from "../utils/storage"

const searchRoutes = (pathname: string, routes: MyRouterObject[]) => {
  let result: MyRouterObject = {}

  for (const route of routes) {
    if (route.path === pathname) {
      return route
    }
    if (route.children) {
      const res = searchRoutes(pathname, route.children)
      if (Object.keys(res).length) {
        result = res
      }
    }
  }
  return result
}

export const AuthRouter = ({ children }: { children: JSX.Element }) => {
  const { me } = useMeStore()
  const token = storage.getToken()
  const { pathname } = useLocation()

  const route = searchRoutes(pathname, rootRouter)
  if (route.meta?.auth === false) {
    return children
  }
  if (!me || !token) {
    return <Navigate to="/login" replace />
  }
  return children
}

