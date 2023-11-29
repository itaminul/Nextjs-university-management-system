
import { Button, Col, Form, Input, Row, Select, Space } from "antd";
import Collapse from "./Collapse";
import { FiPlus, FiMinus } from 'react-icons/fi'; 
import { useGetDepartmentSetupQuery  } from "@/services/setup/departmentSetupApi";
import { Departments } from "../setup/department/CreateDepartmentType";
import { useGetOrgSetupQuery } from "@/services/setup/OrganizationSetupApi";
import { Organizations } from "../setup/organization/OrganizationDataType";
import {  AllEmpInformation } from "./EmployeeType";
import { useCreateEmployeeInformationMutation } from "@/services/employeeInformationServiceApi";
function CreateEmployeeForm() {

 const{ data: departmentData } = useGetDepartmentSetupQuery();
 const {data: organizationData} = useGetOrgSetupQuery();
 const [createEmployee ] = useCreateEmployeeInformationMutation();

 const onFinish = async(values:AllEmpInformation) => {
      try {
        const getValue = {
          firstName: values.firstName,
          middleName: values.middleName,
          lastName: values.lastName,
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
  
  
        const newEmp = {
          firstName: getValue.firstName,
          middleName: getValue.middleName,
          lastName: getValue.lastName,          
          fullName: getValue.fullName,
          phone: getValue.phone,
          mobileOne: getValue.mobileOne,
          mobileTwo: getValue.mobileTwo,
          emergencyMobile: getValue.emergencyMobile,
          officeEmail: getValue.officeEmail,
          personalEmail: getValue.personalEmail,
          departmentId: getValue.departmentId,
          religionId: getValue.religionId,
          employeePresentAddress: [
          {
            presentPostOfficeCode: Number(empPresentAddress.presentPostOfficeCode),
            presentPSId: Number(empPresentAddress.presentPSId),
            presentWord: Number(empPresentAddress.presentWord),
            presentVillRoad: Number(empPresentAddress.presentVillRoad),
           
          }
          ],
          employeePermanentAddress: [
            {
              pertPSId:Number(empPermanentAddress.pertPSId),
              perCityCor:Number(empPermanentAddress.perCityCor),
              perWord: Number(empPermanentAddress.perWord),
              perWordNo: Number(empPermanentAddress.perWordNo),
              perVillRoad: Number(empPermanentAddress.perVillRoad),
              perBasHolding: Number(empPermanentAddress.perBasHolding),
              perPostOffice: Number(empPermanentAddress.perPostOffice),
              perPostOfficeCode: Number(empPermanentAddress.perPostOfficeCode)
              
            }
          ]
        }       

        await createEmployee(newEmp);
      } catch (error) {
        
      } 
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
        label="lastName"
        name="lastName"
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

        <Form.Item
        label="presentPostOfficeCode"
        name="presentPostOfficeCode"
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
        label="Police station"
        name="pertPSId"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="City Corporation"
        name="perCityCor"
        >
          <Input />
        </Form.Item>
                
          </Col>
       <Col style={{marginLeft: '10px'}} flex={3}>
          
       <Form.Item
        label="Word"
        name="perWord"
        >
          <Input />
        </Form.Item>

         <Form.Item
        label="Word No"
        name="perWordNo"
        >
          <Input />
        </Form.Item>  

        <Form.Item
        label="Post Office Code"
        name="perPostOfficeCode"
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
    </>
  );
}
export default CreateEmployeeForm;