import { Layout, Menu, MenuProps } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { absolutePthRoutes } from "../routers/router"

const { Sider } = Layout

export const MySiderbar = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  const items: MenuProps['items'] = absolutePthRoutes.map((root, i) => {
    const key = root.path || String(i)
    return {
      key,
      icon: root.meta?.icon,
      label: root.meta?.title,
      children: root.children?.map((child) => {
        // 目前只考虑两层菜单
        return {
          key: child.path,
          label: child.meta?.title
        }
      })
    }
  })
  const onClickMenu: MenuProps['onClick'] = ({ key }) => {
    navigate(key)
  }

  return (
    <Sider>
      <Menu
        selectedKeys={[pathname]}
        items={items}
        mode='inline'
        style={{ height: '100%' }}
        onClick={onClickMenu}
      >
      </Menu>
    </Sider>
  )
}