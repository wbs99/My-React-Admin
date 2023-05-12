import { Outlet } from "react-router-dom"
import { Layout, Space } from "antd"
import { MyHeader } from "./MyHeader"
import { MySiderbar } from "./MySiderbar"

const { Content, Footer } = Layout

export const LayoutApp = () => {

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <MyHeader />
        <Layout style={{ padding: '0 24px' }}>
          <MySiderbar />
          <Content>
            <Outlet />
          </Content>
          <Footer>React + TypeScript</Footer>
        </Layout>
      </Layout>
    </Space>
  )
}