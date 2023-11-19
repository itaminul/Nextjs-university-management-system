import { Button, Form, Input, Modal, Space, message, Select } from "antd";
import { CreateDepartmentsProps } from "./CreateDepartmentType";
import { useGetOrgSetupQuery } from "@/services/setup/OrganizationSetupApi";
import { Organizations } from "../organization/OrganizationDataType";
import { useUpdateDepartmentsSetupMutation } from "@/services/setup/departmentSetupApi";
import { useEffect } from "react";

function EditDepartment({ title, visible, onCancel, initialValues}: CreateDepartmentsProps) {
 
  const [form] = Form.useForm();
  const { data: orgOptionData} =  useGetOrgSetupQuery();
  const [ updateDepartment ] = useUpdateDepartmentsSetupMutation();
  const handleOptionChange = () => {
  };

  const handleActiveStatusChange = () => {

  }

  // const [activeStatus, setStatus] = useState<boolean>(true); // Status state
  // const [selectedOption, setSelectedOption] = useState<string>('');
  // const handleActiveStatusChange = (value: string) => {
  //   setStatus(value === 'true');
  //   setSelectedOption(value);
  // };

  useEffect(() => {
    form.setFieldsValue({ 
      departmentName: initialValues?.departmentName,
      departmentDescription: initialValues?.departmentDescription,
      orgId: initialValues?.orgId,
      activeStatus: initialValues?.activeStatus,
     }); 
  }, [form, initialValues]);


  const onFinish = async() => {
    try {
      const values = await form.validateFields();
      console.log(" dept values", values);
      await updateDepartment({ ...initialValues, ...values}).unwrap();      
      message.success('Updated successfully')     
      setTimeout(() => {
        onCancel();
      }, 2000);
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
     footer={null}
     >
      <Form
           form={form}
           onFinish={onFinish}
          layout="vertical"
          autoComplete="off"
          initialValues={initialValues}
        >
      <Form.Item name="departmentName" label="Department Name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="departmentDescription" label="Department Description" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item name="orgId" label="Organization Name" rules={[{ required: true }]}>
          <Select
              defaultValue="orgId"
              onChange={handleOptionChange}
            >
              <Select.Option value="orgId" disabled>Select an option</Select.Option>
              {orgOptionData?.map((option: Organizations) => (
                <Select.Option key={option.id} value={option.id}>{option.orgName}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* <Form.Item name="activeStatus" label="Active Status">

          <Select value={initialValues?.activeStatus? 'true':'false'} onChange={handleActiveStatusChange}>
          <Select.Option value="true">True</Select.Option>
          <Select.Option value="false">False</Select.Option>
        </Select>

          </Form.Item> */}
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

export default EditDepartment;