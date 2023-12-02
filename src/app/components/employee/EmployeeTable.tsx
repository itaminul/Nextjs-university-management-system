import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';
import { useGetEmployeeInformationQuery } from '@/services/employeeInformationServiceApi';
import { AllEmpInformation } from './EmployeeType';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

function EmployeeTable () {
  const[createEmployeeModalVisible, setCreateEmployeeModalVisible] = useState(false);
  const[editEmployeeModalVisible, setEditEmployeeModalVisible] = useState(false);
  const {data} = useGetEmployeeInformationQuery();
  const [selectedEmployee, setSelectedEmployee] = useState<AllEmpInformation>(null)
const columns: ColumnsType<DataType> = [
  {
    title: 'ID',
    width: 100,
    dataIndex: 'presentPSId',
    key: 'presentPSId',
    fixed: 'left',
  },
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'fullName',
    key: 'fullName',
    fixed: 'left',
    sorter: true,
  },
  { title: 'Mobile', dataIndex: 'mobileOne', key: '1' },
  { title: 'Email', dataIndex: 'officeEmail', key: '2' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: (_: string, records: any) => {
      return(
        <>
          <Button onClick={() => handleEdit(records)}>Edit</Button>
        </>
      )
    },
  },
];


  const handleCreate = () => {
    setCreateEmployeeModalVisible(true);
    
  }

  const handleEdit = (records: any) => {
    setSelectedEmployee(records);
    setEditEmployeeModalVisible(true);
  }
  return (
    <>
      <Button style={{float: 'right'}} onClick={handleCreate}>Add New</Button>
      <Table columns={columns} dataSource={data} scroll={{ x: 1300 }} />
      <CreateEmployee
      title="Create Employee" 
      visible={createEmployeeModalVisible}
      onCancel={() => setCreateEmployeeModalVisible(false)} />
      <EditEmployee 
      title="Update Employee" 
      visible={editEmployeeModalVisible}
      initialValues={selectedEmployee}
      onCancel={() => setEditEmployeeModalVisible(false)} />
    </>
  )
}

export default EmployeeTable;