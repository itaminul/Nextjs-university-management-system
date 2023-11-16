'use client'
import { Button, Form, Input, Modal, Space } from "antd"
import { OrganizationsProps } from "./OrganizationDataType"
import { useUpdateOrganizationDataByIdMutation } from "../../../../services/setup/OrganizationSetupApi"
import { useForm } from "antd/es/form/Form";

function EditOrganization({
  title,
  visible,
  onCancel,
  initialValues
}: OrganizationsProps) {
  const [form] = useForm();
  const [updateOrganization] = useUpdateOrganizationDataByIdMutation();
  const onFinish = async() => {
    console.log('update', updateOrganization);
    try {
      const values = await form.validateFields();
      console.log("values", values);
      const newValue = {
        id: values.id,
        orgName: values.orgName,
        orgDescription: values.orgDescription,
      };
      console.log("ddd", newValue);
      await updateOrganization({ ...initialValues, ...values }).unwrap();
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Modal title={title} open={visible} onCancel={onCancel}>
        <Form
          form={form}
          layout="vertical"
          autoComplete="off"
          initialValues={initialValues}
          onFinish={onFinish}
        >
          <Form.Item
            name="serialNo"
            label="Serial No"
           // rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="orgName"
            label="Organization Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="orgDescription"
            label="Organization Description"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Space>
              <div style={{ float: 'right' }}>
                <Button htmlType="submit" style={{ alignContent: 'right' }}>
                  Submit
                </Button>
              </div>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default EditOrganization