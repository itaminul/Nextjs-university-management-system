import { Button, Form, Input, Modal, Space } from "antd";
import { CreateDepartmentsProps } from "./CreateDepartmentType";


function CreateDepartment({title, visible, onCancel}: CreateDepartmentsProps) {
  return(
    <>
     <Modal
     title={title}
     open={visible}
     onCancel={onCancel}
     footer= {null}
     >
      <Form
          // form={form}
          // onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >


    <Form.Item name="name" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="age" label="Age" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>        
            <div style={{ float: 'right'}}>      
              <Button htmlType="submit" style={{alignContent:'right'}}>Submit</Button>
              </div>
            </Space>
          </Form.Item>
          </Form>
        </Modal>
    </>
  )
}

export default CreateDepartment;