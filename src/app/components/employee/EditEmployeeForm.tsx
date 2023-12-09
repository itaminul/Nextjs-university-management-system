import { Button, Col, Form, Input, Row, Select, Space, message } from 'antd';
import Collapse from './Collapse';
import { Radio } from 'antd';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { CreateEmployeeProps } from './EmployeeType';
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

function EditEmployeeForm({ title, visible, onCancel, initialValues }: CreateEmployeeProps) { 
  const [value, setValue] = useState<string>(initialValues.maritialStatus);
  const [form] = useForm();
    const { data: departmentData } = useGetDepartmentSetupQuery();
    const { data: organizationData } = useGetOrgSetupQuery();
    const { data: designations } = useGetDesignationSetupQuery();
    const { data: policeStations } = useGetPoliceStationApiDataQuery();

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
    },[form, initialValues])


  const onFinish = () => {

  }
  
  return (
    <>
      <div>
        <Form form={form} onFinish={onFinish} layout="vertical">
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
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="middleName"
                  name="middleName"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item label="lastName" name="lastName">
                  <Input />
                </Form.Item>
                <Form.Item label="fullName" name="fullName">
                  <Input />
                </Form.Item>
                <Form.Item label="phone" name="phone">
                  <Input />
                </Form.Item>
                <Form.Item label="mobileOne" name="mobileOne">
                  <Input />
                </Form.Item>
                <Form.Item label="mobileTwo" name="mobileTwo">
                  <Input />
                </Form.Item>
                <Form.Item label="emergencyMobile" name="emergencyMobile">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="officeEmail" name="officeEmail">
                  <Input />
                </Form.Item>
                <Form.Item label="personalEmail" name="personalEmail">
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

                <Form.Item label="bloodGroupId" name="bloodGroupId">
                  <Select>
                    <Select value="default">Select and option</Select>
                    <Select.Option value={1}>A+</Select.Option>
                    <Select.Option value={2}>B+</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Marital Status">
                <Radio.Group  name="maritialStatus" defaultValue={initialValues?.maritialStatus}>
                <Radio value="true">Married</Radio>
                <Radio value="false">Un Married</Radio>
              </Radio.Group>
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
                <Form.Item label="Present Police Station" name="presentPSId">
                  <Select defaultValue="presentPSId">
                  <Select value="default">Select and option</Select>
                    {policeStations?.map((option: PoliceStation) => (
                      <Select.Option key={option.id} value={option.id}>{option.thanaName}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>
                <Form.Item label="presentCityCor" name="presentCityCor">
                  <Input />
                </Form.Item>
              </Col>
              <Col style={{ marginLeft: '10px' }} flex={3}>
                <Form.Item label="presentWord" name="presentWord">
                  <Input />
                </Form.Item>

                <Form.Item label="presentVillRoad" name="presentVillRoad">
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
                <Form.Item label="Police station" name="pertPSId">
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
