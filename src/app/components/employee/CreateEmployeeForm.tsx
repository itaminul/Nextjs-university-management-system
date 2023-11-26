import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import Collapse from "./Collapse";
import { FiPlus, FiMinus } from 'react-icons/fi'; // Import custom icons
import { useGetDepartmentSetupQuery  } from "@/services/setup/departmentSetupApi";
import { Departments } from "../setup/department/CreateDepartmentType";
import { useGetOrgSetupQuery } from "@/services/setup/OrganizationSetupApi";
import { Organizations } from "../setup/organization/OrganizationDataType";
import { Employees, CreateEmployeeProps, AllEmpInformation } from "./EmployeeType";
function CreateEmployeeForm() {

 const{ data: departmentData } = useGetDepartmentSetupQuery();
 const {data: organizationData} = useGetOrgSetupQuery();

 const onFinish = async(values:AllEmpInformation) => {
      const newValue = {
        firstName: values.firstName,
        middleName: values.middleName,
        fullName: values.fullName,
        phone: values.phone,
        mobileOne: values.mobileOne,
        mobileTwo: values.mobileTwo,
        emergencyMobile: values.emergencyMobile,
        officeEmail: values.officeEmail,
        personalEmail: values.personalEmail,
        departmentId: values.departmentId,
        religionId: values.religionId,
      }

      const empPresentAddress = {
        presentPostOfficeCode: values.presentPostOfficeCode,
        presentPSId: values.presentPSId,
        presentCityCor: values.presentCityCor,
        presentWord: values.presentWord,
        presentVillRoad: values.presentVillRoad,
      }

      const empPermanentAddress = {
        pertPSId: values.pertPSId,
        perCityCor: values.perCityCor,
        perWord: values.perWord,
        perWordNo: values.perWordNo,
        perVillRoad: values.perVillRoad,
        perBasHolding: values.perBasHolding,
        perPostOffice: values.perPostOffice,
        perPostOfficeCode: values.perPostOfficeCode,
      }

      interface BaseObject {
        name: string;
        age: number;
      }
      
      const cn = {
        name: newValue.firstName,
        employeePresentAddress: [
        {
          presentPostOfficeCode: empPresentAddress.presentPostOfficeCode,
          presentPSId: empPresentAddress.presentPSId
        }
        ],
        employeePermanentAddress: [
          {
            pertPSId:empPermanentAddress.pertPSId,
            perCityCor:empPermanentAddress.perCityCor,
          }
        ]
      }
      
      console.log("value",cn);     


 }

  return(
    <>
    <div>
      <Form
          onFinish={onFinish}
          layout="vertical"          
          >    
      <Collapse
        title="Employee Information"
        panelStyles={{}}
        iconOpen={<FiMinus />}
        iconClosed={<FiPlus />}
      >
        <Row>
          <Col flex={3}>     
         
        <Form.Item
          label="firstName"
          name="firstName"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="middleName"
          name="middleName"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="fullName"
        name="fullName"
        >
          <Input />
          
        </Form.Item>
        <Form.Item
        label="phone"
        name="phone"
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="mobileOne"
        name="mobileOne"
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="mobileTwo"
        name="mobileTwo"
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="emergencyMobile"
        name="emergencyMobile"
        >
          <Input />
        </Form.Item>
       
          </Col>
          <Col style={{marginLeft: '10px'}} flex={3}>
            
        <Form.Item
        label="officeEmail"
        name="officeEmail"
        >
          <Input />
        </Form.Item>
        <Form.Item
        label="personalEmail"
        name="personalEmail"
        >
          <Input />
        </Form.Item>
        <Form.Item  name="departmentId" label="Department Name" rules={[{ required: true }]}>
          <Select>
          <Select.Option value="default" disabled>Select an option</Select.Option>
              {departmentData?.map((option:Departments) => (
              <Select.Option key={option.id} value={option.id}>{option.departmentName}</Select.Option>
              ))}           
          </Select>
        </Form.Item>
        <Form.Item
        label="designationId"
        name="designationId"
        >
          <Input />
        </Form.Item>
        <Form.Item label="religionId" name="religionId">
          <Select>
          <Select value="default">Select and option</Select>
          {organizationData?.map((option: Organizations) => (
            <Select.Option key={option.id} value={option.id}>{option.orgName}</Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
        label="bloodGroupId"
        name="bloodGroupId"
        >
         <Select>
          <Select value="default">Select and option</Select>
            <Select.Option value={1}>A+</Select.Option>
            <Select.Option value={2}>B+</Select.Option>          
          </Select>
        </Form.Item>        

          </Col>
        </Row> 

      </Collapse>

      <Collapse
        title="Present Address"
        panelStyles={{}}
        iconOpen={<FiMinus />}
        iconClosed={<FiPlus />}
      >        
          <Row>
          <Col flex={3}>

      <Form.Item
        label="presentPSId"
        name="presentPSId"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="presentCityCor"
        name="presentCityCor"
        >
          <Input />
        </Form.Item>                
          </Col>
          <Col style={{marginLeft: '10px'}} flex={3}>          
           <Form.Item
        label="presentWord"
        name="presentWord"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="presentVillRoad"
        name="presentVillRoad"
        >
          <Input />
        </Form.Item>  
        
        </Col>
          </Row> 
         
      </Collapse>
      <Collapse
        title="Permanent Address"
        panelStyles={{}}
        iconOpen={<FiMinus />}
        iconClosed={<FiPlus />}
      >        
          <Row>
          <Col flex={3}>
      <Form.Item
        label="pertPSId"
        name="pertPSId"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="perCityCor"
        name="perCityCor"
        >
          <Input />
        </Form.Item>
                
          </Col>
       <Col style={{marginLeft: '10px'}} flex={3}>
          
       <Form.Item
        label="perWord"
        name="perWord"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="perWordNo"
        name="perWordNo"
        >
          <Input />
        </Form.Item>  
        
        </Col>
          </Row> 
         
      </Collapse>
      <Form.Item>
            <Space>        
            <div style={{ float: 'right'}}>      
              <Button htmlType="submit" style={{alignContent:'right'}}>Submit</Button>
              </div>
            </Space>
          </Form.Item>
      </Form> 

      {/* Add more Collapse components for additional sections */}
    </div>
    {/* <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={3}>First</Col>
      <Col flex={3}>Second</Col>
    </Row>    */}
    </>
  )
}
export default CreateEmployeeForm;