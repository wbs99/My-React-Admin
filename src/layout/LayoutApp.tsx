import { Outlet } from "react-router-dom"


export const LayoutApp = () => {
  return (
    <>
      <div>header</div>
      <div>siderbar</div>
      <div>
        <h2>你好</h2>
        <Outlet />
      </div>
      <div>footer</div>
    </>
  )
}