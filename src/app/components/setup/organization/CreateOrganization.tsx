'use client'
import { Button, Form, Input, Modal } from "antd"
import { OrganizationsProps } from "./OrganizationDataType"
import { Departments } from "../department/CreateDepartmentType";

function CreateOrganization({ title, visible, onCancel}:OrganizationsProps) {
  const [form] = Form.useForm();

  const handleOk = () => {
    form.submit()
}

 const onFinish = (values: Departments) => {
  const accessToken = localStorage.getItem('accessToken');
  console.log("value", accessToken);

 }

  return(
    <>
      <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      footer={
        [
          <Button onClick={onCancel}>Close</Button>,
          <Button form="myForm" key="submit" htmlType="submit" onClick={handleOk}>Submit</Button>
        ]
      }
      >
        <Form
        layout="vertical"
        autoComplete="off"
        form={form} 
        onFinish={onFinish}
        >
        <Form.Item name="serialNo" label="Serial No">
            <Input />
          </Form.Item>
        <Form.Item name="orgName" label="Organization Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        <Form.Item name="orgDescription" label="Organization Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          
          </Form>
      </Modal>
    </>
  )
}

export default CreateOrganization