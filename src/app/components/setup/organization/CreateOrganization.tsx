'use client'
import { Button, Form, Input, Modal, message } from "antd"
import { Organizations, OrganizationsProps } from "./OrganizationDataType"
import { useCreateOrganizationMutation } from "@/services/setup/OrganizationSetupApi";

function CreateOrganization({ title, visible, onCancel}:OrganizationsProps) {
  const [form] = Form.useForm();
  const [createOrganization]  = useCreateOrganizationMutation();

  const handleOk = () => {
    form.submit()
}
 const onFinish = async(values: Organizations) => {
  try {
    const formatData = {
      serialNo: Number(values.serialNo),
      orgName: values.orgName,
      orgDescription: values.orgDescription,
    }
    const response = await createOrganization (formatData);
      setTimeout(() => {
        void message.success('Created Successfully');
        onCancel();
        window.location.reload();
      }, 2000);
    
    form.resetFields();
  } catch (error) {
    console.log("error", error);    
  }

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