import { Button, Form, Input, Space } from "antd"
import './LoginPage.css'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from "react"
import SparkMd5 from 'spark-md5'
import { loginApi } from "../api/user"


export const LoginPage = () => {
  const [form] = Form.useForm()
  const onFinish = async (values: LoginForm) => {
    const obj = {
      email: values.email,
      passwd: SparkMd5.hash(values.passwd),
      captcha: values.captcha,
    }
    const response = loginApi(obj)
    console.log(response)
  }
  const onTest = () => {
    fetch('api/user/hi', {
      headers: {
        'apiKey': 'dasheng123',
      }
    }).then(res => res.json()).then(res => {
      console.log(res)
    })
  }

  const [captcha, setCaptcha] = useState('/api/captcha')
  const onCaptcha = () => {
    setCaptcha(`/api/captcha?${Math.random()}`)
  }
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
          initialValues={{
            email: '316783812@qq.com',
            passwd: '316783812',
          }}
        >
          <Form.Item
            name="email"
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入正确的邮箱格式' }
            ]}
          >
            <Input placeholder="请输入邮箱" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            name="passwd"
            rules={[
              { required: true, message: '请输入密码' },
              { min: 1, max: 20, message: '请输入长度是 1-20 的密码' },
            ]}
          >
            <Input.Password placeholder="请输入密码" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="captcha">
            <Space>
              <Input placeholder="验证码"></Input>
              <img src={captcha} onClick={onCaptcha} />
            </Space>
          </Form.Item>
          <Form.Item >
            <Button type="primary" htmlType="submit">登录</Button>
            <Button onClick={onTest}>测试</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}