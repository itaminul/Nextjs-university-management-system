import { Button, Form, Input, Modal, Space, message } from "antd";
import { CreateDepartmentsProps } from "./CreateDepartmentType";
import axios from 'axios';
function CreateDepartment({title, visible, onCancel}: CreateDepartmentsProps) {

   const onFinish = async(values: any) => {

    const accessToken = localStorage.getItem('accessToken');
    console.log("token", accessToken);
    console.log("data", values);
    try {
     await axios.post('http://192.168.0.84:9007/department', values, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },       
      });
      message.success('Save successfully');
      setTimeout(() => {        
        onCancel();
      }, 2000)
    } catch (error) {
      console.error('Form submission error:', error);
    }
   }
   
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
           onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >


    <Form.Item name="departmentName" label="Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="departmentDes" label="Age" rules={[{ required: true }]}>
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

function onFinish() {
  throw new Error("Function not implemented.");
}
