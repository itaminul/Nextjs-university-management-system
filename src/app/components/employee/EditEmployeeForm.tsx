import { Button, Checkbox, Col, Form, Input, Row, Select, Space, message } from 'antd';
import Collapse from './Collapse';
import { Radio } from 'antd';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { AllEmpInformation, CreateEmployeeProps } from './EmployeeType';
import { useGetDepartmentSetupQuery } from '@/services/setup/departmentSetupApi';
import { useGetOrgSetupQuery } from '@/services/setup/OrganizationSetupApi';
import { Departments } from '../setup/department/CreateDepartmentType';
import { Organizations } from '../setup/organization/OrganizationDataType';
import { useForm } from 'antd/es/form/Form';
import {useEffect, useState } from 'react';
import { useGetDesignationSetupQuery } from '@/services/setup/designationSetupApi';
import { Designation } from '../setup/designation/DesignationType';
import { useGetPoliceStationApiDataQuery } from '@/services/setup/PoliceStationApi';
import { PoliceStation } from '../setup/policeStation/policeStationType';
import { useUpdateEmployeeInformationMutation } from '@/services/employeeInformationServiceApi';
interface InputRow {
  id: number;
  value: string;
}
function EditEmployeeForm({ title, visible, onCancel, initialValues }: CreateEmployeeProps) { 
  const [selectedValue, setSelectedValue] = useState<boolean>(initialValues?.maritialStatus);
  const maritialStatusChangeHandler = (value: any) => {
    const mv = value.target.value;
    setSelectedValue(mv);
  }
  const [selectedGenderValue, setSelectedGenderValue] = useState<number>(initialValues?.genderId);
  const genderChangeHandler = (e: any) => {
    const genV = e.target.value;
    setSelectedGenderValue(genV);  
  }
  const [form] = useForm();
    const { data: departmentData } = useGetDepartmentSetupQuery();
    const { data: organizationData } = useGetOrgSetupQuery();
    const { data: designations } = useGetDesignationSetupQuery();
    const { data: policeStations } = useGetPoliceStationApiDataQuery();
   const [updateEmployee] = useUpdateEmployeeInformationMutation();

    useEffect(() => {
      form.setFieldsValue({
        firstName: initialValues?.firstName,
        middleName: initialValues?.middleName,
        lastName: initialValues?.lastName,
        fullName: initialValues?.fullName,
        phone: initialValues?.phone,
        mobileOne: initialValues?.mobileOne,
        mobileTwo: initialValues?.mobileTwo,
        emergencyMobile: initialValues?.emergencyMobile,
        officeEmail: initialValues?.officeEmail,
        personalEmail: initialValues?.personalEmail,
        departmentId: initialValues?.departmentId,
        designationId: initialValues?.designationId,
        genderId: initialValues?.genderId,
        orgId: initialValues?.orgId,
        maritialStatus: initialValues?.maritialStatus,
        presentPSId: initialValues?.presentPSId,
        presentCityCor:initialValues?.presentCityCor,
        presentWord:initialValues?.presentWord,
        presentVillRoad:initialValues?.presentVillRoad,
        pertPSId: initialValues?.pertPSId,
        perCityCor: initialValues?.perCityCor,
        perWord: initialValues?.perWord,
        perVillRoad: initialValues?.perVillRoad,
      })
    },[form, initialValues]);

  const onFinish = async(value: AllEmpInformation) => {
    try {
      const getValue = {
        id: value.id,
        firstName: value.firstName,
        middleName: value.middleName,
        lastName: value.lastName,
        fullName: value.fullName,
        phone: value.phone,
        mobileOne: value.mobileOne,
        mobileTwo: value.mobileTwo,
        emergencyMobile: value.emergencyMobile,
        officeEmail: value.officeEmail,
        personalEmail: value.personalEmail,
        departmentId: value.departmentId,
        designationId: value.designationId,
        presentPSId: value.presentPSId,
        presentCityCor:value.presentCityCor,
        presentWord:value.presentWord,
        presentVillRoad:value.presentVillRoad,
        pertPSId: value.pertPSId,
        perCityCor: value.perCityCor,
        perWord: value.perWord,
        perVillRoad: value.perVillRoad,
        maritialStatus:selectedValue,
        religionId: value.religionId,
        bloodGroupId: value.bloodGroupId,
        genderId: value.genderId,

      }

      const empPresentAddress = {
        presentPostOfficeCode: value.presentPostOfficeCode,
        presentPSId: value.presentPSId,
        presentCityCor: value.presentCityCor,
        presentWord: value.presentWord,
        presentVillRoad: value.presentVillRoad,
      };

      const empPermanentAddress = {
        pertPSId: value.pertPSId,
        perCityCor: value.perCityCor,
        perWord: value.perWord,
        perWordNo: value.perWordNo,
        perVillRoad: value.perVillRoad,
        perBasHolding: value.perBasHolding,
        perPostOffice: value.perPostOffice,
        perPostOfficeCode: value.perPostOfficeCode,
      };

      const newEmp = {
        id: getValue.id,
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
        designationId: getValue.designationId,
        religionId: getValue.religionId,
        bloodGroupId: getValue.bloodGroupId,
        maritialStatus: Boolean(selectedValue),
        genderId: Number(selectedGenderValue),
        employeePresentAddress: [
          {
            presentPostOfficeCode: Number(
              empPresentAddress.presentPostOfficeCode,
            ),
            presentPSId: Number(empPresentAddress.presentPSId),
            presentWord: Number(empPresentAddress.presentWord),
            presentVillRoad: Number(empPresentAddress.presentVillRoad),
          },
        ],
        employeePermanentAddress: [
          {
            pertPSId: Number(empPermanentAddress.pertPSId),
            perCityCor: Number(empPermanentAddress.perCityCor),
            perWord: Number(empPermanentAddress.perWord),
            perWordNo: Number(empPermanentAddress.perWordNo),
            perVillRoad: Number(empPermanentAddress.perVillRoad),
            perBasHolding: Number(empPermanentAddress.perBasHolding),
            perPostOffice: Number(empPermanentAddress.perPostOffice),
            perPostOfficeCode: Number(empPermanentAddress.perPostOfficeCode),
          },
        ],
      };
 
      await updateEmployee(newEmp);
      message.success('Update Successfully');
      setTimeout(() => {
        onCancel();
      }, 2000)

    } catch (error) {
      console.log("error", error);
    }
  }

  //add more row
  const [inputRows, setInputRows] = useState<InputRow[]>([{id:1, value: ''},{id:1, value: ''},{id:1, value: ''}, {id:1, value: ''}]);

  const addInputRow = () => {
    const newId = inputRows.length + 1;
    setInputRows([...inputRows, { id: newId, value: ''}]);
  }
  
  return (
    <>
      <div>
        <Form form={form} onFinish={onFinish} layout="vertical">
          <Collapse
            title={title}
            panelStyles={{}}
            iconOpen={<FiMinus />}
            iconClosed={<FiPlus />}
          >
            <Row>
              <Col flex={3}>
              <Form.Item
                  label="id"
                  name="id"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="First Name"
                  name="firstName"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Middle Name"
                  name="middleName"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item label="Last Name" name="lastName">
                  <Input />
                </Form.Item>
                <Form.Item label="Full Name" name="fullName">
                  <Input />
                </Form.Item>
                <Form.Item label="Phone" name="phone">
                  <Input />
                </Form.Item>
                <Form.Item label="Mobile One" name="mobileOne">
                  <Input />
                </Form.Item>
                <Form.Item label="Mobile Two" name="mobileTwo">
                  <Input />
                </Form.Item>
                <Form.Item label="Emergency Number" name="emergencyMobile">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="Office Email" name="officeEmail">
                  <Input />
                </Form.Item>
                <Form.Item label="Personal Email" name="personalEmail">
                  <Input />
                </Form.Item>
                <Form.Item
                  name="departmentId"
                  label="Department Name"
                  rules={[{ required: true }]}
                >
                  <Select
                  defaultValue="departmentId"
                  >
                    <Select.Option value="departmentId" disabled>
                      Select an option
                    </Select.Option>
                    {departmentData?.map((option: Departments) => (
                      <Select.Option key={option.id} value={option.id}>
                        {option.departmentName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Designation" name="designationId">
                  <Select defaultValue="designationId">
                    <Select value="designationId">Select and option</Select>
                      {designations?.map((option: Designation) => (
                       <Select.Option
                        key={option.id} 
                        value={option.id}>
                          {option.designationName}
                        </Select.Option>
                      ))}
                            
                  </Select>
                </Form.Item>
                <Form.Item label="Organization" name="orgId">
                  <Select
                  defaultValue="orgId"
                  >
                    <Select value="default">Select and option</Select>
                    {organizationData?.map((option: Organizations) => (
                      <Select.Option key={option.id} value={option.id}>
                        {option.orgName}
                      </Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="Blood Group" name="bloodGroupId">
                  <Select>
                    <Select value="default">Select and option</Select>
                    <Select.Option value={1}>A+</Select.Option>
                    <Select.Option value={2}>B+</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Marital Status">
                <Radio.Group  name="maritialStatus" onChange={maritialStatusChangeHandler}  value={String(selectedValue)}>
                <Radio value="true">Married</Radio>
                <Radio value="false">Un Married</Radio>
              </Radio.Group>
                </Form.Item>
                <Form.Item label="Gender">
                <Checkbox.Group>
                <Row>
                  <Col span={8}><Checkbox name="genderId"  onChange={genderChangeHandler} value="1">Male</Checkbox></Col>
                  <Col span={8}><Checkbox name="genderId" onChange={genderChangeHandler} value="2">Female</Checkbox></Col>
                </Row>
              </Checkbox.Group>
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
                <Form.Item label="Police Station" name="presentPSId">
                  <Select defaultValue="presentPSId">
                  <Select value="default">Select and option</Select>
                    {policeStations?.map((option: PoliceStation) => (
                      <Select.Option key={option.id} value={option.id}>{option.thanaName}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="City Corporation" name="presentCityCor">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="Word" name="presentWord">
                  <Input />
                </Form.Item>

                <Form.Item label="Vill Road" name="presentVillRoad">
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Post Office Code"
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
                <Form.Item label="Police Station" name="pertPSId">
                  <Select defaultValue="pertPSId">
                    <Select value="default">Select and option</Select>
                    {policeStations?.map((option: PoliceStation) => (
                      <Select.Option key={option.id} value={option.id}>{option.thanaName}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item label="City Corporation" name="perCityCor">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="Word" name="perWord">
                  <Input />
                </Form.Item>

                <Form.Item label="Word No" name="perWordNo">
                  <Input />
                </Form.Item>

                <Form.Item label="Post Office Code" name="perPostOfficeCode">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Collapse>

          <Collapse
            title="Education"
            panelStyles={{}}
            iconOpen={<FiMinus />}
            iconClosed={<FiPlus />}
          >
            <Row>
              <Col flex={3}>
                <table>
                  <thead>
                    <tr>
                      <th>Degree</th>
                      <th>Board</th>
                      <th>Result</th>
                      <th>Passing Year</th>
                      <th> <Button type="primary" onClick={addInputRow}>Add Row</Button> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td> 
                        <Input  />
                      </td>
                       <td> 
                        <Input  />
                      </td>
                       <td> 
                        <Input  />
                      </td>
                      <td> 
                        <Input  />
                      </td>
                      <td>Delete</td>
                    </tr>
                      
                  </tbody>
                </table>
                {/* {inputRows.map((row) => (
                  <div key={row.id}>
                    <Input value={row.value} />
                  </div>
                ))} */}
                <Form.Item label="Degree" name="degreeId">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="Board" name="perWord">
                  <Input />
                </Form.Item>

                <Form.Item label="Result" name="result">
                  <Input />
                </Form.Item>

                <Form.Item label="Passing Year" name="perPostOfficeCode">
                  <Input />
                </Form.Item>
              </Col>
            </Row>
          </Collapse>
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
      </div>
    </>
  );
}
export default EditEmployeeForm;
