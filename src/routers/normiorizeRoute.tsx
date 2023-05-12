import { resolvePath } from "react-router-dom"

// 将路由更新成绝对路径，并进行排序
// 只有第一层路由需要排序
export const normiorizeRoute = (routes: MyRouterObject[], isSort = true) => {
  let result: MyRouterObject[] = []
  for (const route of routes) {
    if (route.children) {
      route.children.map(child => {
        child.path = resolvePath(child.path!, route.path).pathname
      })
      result.push({
        ...route,
        children: normiorizeRoute(route.children, false)
      })
    } else {
      result.push(route)
    }
  }
  if (isSort) {
    result.sort((a, b) => (a.meta?.index || 0) - (b.meta?.index || 0))
  }
  return result
}