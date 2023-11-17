'use client'
import { Button, Form, Input, Modal, Space, message } from "antd"
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
    try {
      const values = await form.validateFields();
      await updateOrganization({ ...initialValues, ...values }).unwrap();
      message.success('Update successfully');
      setTimeout(() => {
        onCancel()
      }, 2000)
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
            rules={[
              {
                required: false,
              //  pattern: new RegExp(/^([-]?[1-9][0-9]*|0)$/),
               // message: 'Serail number muust be number',
              },
              () => ({
                validator(_, value) {
                  if (isNaN(value)) {
                    return Promise.reject('Serial has to be a number');
                  }
                  if (value.length < 0) {
                    return Promise.reject(
                      "Serial number can't be less the 1 digit",
                    );
                  }
                  return Promise.resolve();
                },
              }),
            ]}
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