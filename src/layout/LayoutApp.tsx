import { Outlet } from "react-router-dom"
import { Layout, Space } from "antd"
import { MyHeader, MyHeaderStyle } from "./MyHeader"
import { MySiderbar } from "./MySiderbar"

const { Content, Footer } = Layout

const FooterStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#262626',
  height: 40,
  lineHeight: '40px',
}

const ContentStyle = {
  padding: 10,
  backgroundColor: '#eee',
  minHeight: `calc(100vh - ${MyHeaderStyle.height}px - ${FooterStyle.height}px)`,
}

export const LayoutApp = () => {

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <MyHeader />
        <Layout >
          <MySiderbar />
          <Layout>
            <Content style={ContentStyle}>
              <Outlet />
            </Content>
            <Footer style={FooterStyle}>React + TypeScript</Footer>
          </Layout>
        </Layout>
      </Layout>
    </Space>
  )
}