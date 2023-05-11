type MetaObject = {
  auth?: boolean
  title?: string
  key?: string
  icon?: JSX.Element
  index?: number
}

type MyRouterObject = {
  path?: string
  element?: React.ReactNode
  meta?: MetaObject
  children?: MyRouterObject[]
}
