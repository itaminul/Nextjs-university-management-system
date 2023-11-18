import { Button, Form, Input, Modal, Space, message, Select } from "antd";
import { Departments, CreateDepartmentsProps } from "./CreateDepartmentType";
import { Organizations } from "../organization/OrganizationDataType";
import { useCreateDepartmentSetupMutation } from "../../../../services/setup/departmentSetupApi";
import { useGetOrgSetupQuery } from "../../../../services/setup/OrganizationSetupApi";
function CreateDepartment({title, visible, onCancel}: CreateDepartmentsProps) {
  const [form] = Form.useForm();
  const [ createDept ]= useCreateDepartmentSetupMutation();
   const { data: orgOptionData} =  useGetOrgSetupQuery();

   const onFinish = async(values: Departments) => {
    try {
        const newValue = {
          departmentName: values.departmentName,
          departmentDescription:values.departmentDescription,
          orgId:values.orgId
        }
      await createDept(newValue);
      message.success('Save successfully');
      setTimeout(() => {        
        onCancel();
      }, 2000)
      form.resetFields();
    } catch (error) {
      console.error('Form submission error:', error);
    }
   }   

      const handleOptionChange = (value: string) => {
        console.log(`Selected: ${value}`);
      };
    
  return(
    <>
     <Modal
     title={title}
     open={visible}
     onCancel={onCancel}
     footer= {null}
     >
      <Form
           form={form}
           onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
        >
    <Form.Item name="departmentName" label="Department Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="departmentDescription" label="Age" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="orgId" label="Organization Name" rules={[{ required: true }]}>
          <Select
            //  loading={isLoading}
              defaultValue="default"
              onChange={handleOptionChange}
            >
              <Select.Option value="default" disabled>Select an option</Select.Option>
              {orgOptionData?.map((option: Organizations) => (
                <Select.Option key={option.id} value={option.id}>{option.orgName}</Select.Option>
              ))}
            </Select>
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