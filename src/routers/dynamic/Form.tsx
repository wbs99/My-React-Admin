import { FormOutlined } from "@ant-design/icons";
import { LayoutApp } from "../../layout/LayoutApp";

const FormRouter: MyRouterObject[] = [
  {
    path: '/form',
    meta: {
      title: 'Form',
      key: 'form',
      icon: <FormOutlined />,
      index: 2
    },
    element: <LayoutApp />,
    children: [
      {
        path: 'validate',
        element: <div>校验表单</div>,
        meta: {
          title: '校验表单',
          key: 'validateForm'
        }
      },
      {
        path: 'step',
        element: <div>分步表单</div>,
        meta: {
          title: '分步表单',
          key: 'stepForm'
        }
      }
    ]
  }
]

export default FormRouter