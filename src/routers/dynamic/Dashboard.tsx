import { DashboardOutlined } from "@ant-design/icons";
import { LayoutApp } from "../../layout/LayoutApp";

const DashboradRouter: MyRouterObject[] = [
  {
    path: '/dashboard',
    meta: {
      title: 'Dashboard',
      key: 'dashboard',
      icon: <DashboardOutlined />,
      index: 1
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'index',
        element: <div>Dashboard 首页</div>,
        meta: {
          title: 'Dashboard 首页',
          key: 'dashboard'
        }
      },
      {
        path: '/dashboard/upload',
        element: <div>大文件上传</div>,
        meta: {
          title: '大文件上传',
          key: 'upload'
        }
      }
    ]
  }
]

export default DashboradRouter