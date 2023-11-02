'use client'
import { Button, Form, Input, Modal, Space } from "antd"
import { OrganizationsProps } from "./OrganizationDataType"

function EditOrganization({title, visible, onCancel}: OrganizationsProps) {
  return(
    <>
      <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      >
        <Form
        layout="vertical"
        autoComplete="off"
        >
          <Form.Item name="serialNo" label="Serial No" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
        <Form.Item name="orgName" label="Organization Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="orgDescription" label="Organization Description" rules={[{ required: true }]}>
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

export default EditOrganization