import { Result, Button } from "antd"
import { useNavigate } from "react-router-dom"

type Props = {

}
export const NotFoundPage = (props: Props) => {
  const goHome = () => {
    const navigate = useNavigate()
    navigate('/')
  }
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button onClick={goHome} type="primary">Back Home</Button>}
    />
  )
}