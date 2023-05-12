import { Layout } from "antd"
import { useMeStore } from "../stores/useMeStore"

const { Header } = Layout


const MyHeaderStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#ffffff',
  height: 64,
  lineHeight: '64px',
}

export const MyHeader = () => {
  const { me } = useMeStore()

  return (
    <Header style={MyHeaderStyle}>
      欢迎你，{me.email}
    </Header>
  )
}