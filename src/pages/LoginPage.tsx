import { Button, Form, Input } from "antd"
import './LoginPage.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

type Props = {

}
export const LoginPage = (props: Props) => {
  const [form] = Form.useForm()
  const onFinish = () => { }
  return (
    <div className="login-container">
      <div className="login-form">
        <div className="login-title">React+TypeScript+Admin</div>
        <Form
          form={form}
          name="login"
          labelCol={{ span: 5 }}
          size="large"
          autoComplete="false"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input placeholder="请输入用户名" prefix={<UserOutlined />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}