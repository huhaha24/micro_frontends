import { useState } from 'react'
import { Modal, Button, message } from 'antd'
import 'antd/dist/antd.css'

const Page1 = props => {
  const [visible, setVisible] = useState(false)

  return <>
    <Button onClick={() => setVisible(true)}>打开弹窗</Button>
    <Button onClick={() => message.info('这是一条提示消息！')}>全局消息</Button>

    <Modal
      title='测试弹窗'
      visible={visible}
      onOk={() => setVisible(false)}
      onCancel={() => setVisible(false)}
    >
      我是测试弹窗
    </Modal>
  </>
}

export default Page1
