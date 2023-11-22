import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import CreateEmployee from './CreateEmployee';
import EditEmployee from './EditEmployee';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 40,
    address: 'London Park',
  },
];

function EmployeeTable () {
  const[createEmployeeModalVisible, setCreateEmployeeModalVisible] = useState(false);
  const[editEmployeeModalVisible, setEditEmployeeModalVisible] = useState(false);


const columns: ColumnsType<DataType> = [
  {
    title: 'Full Name',
    width: 100,
    dataIndex: 'name',
    key: 'name',
    fixed: 'left',
  },
  {
    title: 'Age',
    width: 100,
    dataIndex: 'age',
    key: 'age',
    fixed: 'left',
    sorter: true,
  },
  { title: 'Column 1', dataIndex: 'address', key: '1' },
  { title: 'Column 2', dataIndex: 'address', key: '2' },
  { title: 'Column 3', dataIndex: 'address', key: '3' },
  { title: 'Column 4', dataIndex: 'address', key: '4' },
  { title: 'Column 5', dataIndex: 'address', key: '5' },
  { title: 'Column 6', dataIndex: 'address', key: '6' },
  { title: 'Column 7', dataIndex: 'address', key: '7' },
  { title: 'Column 8', dataIndex: 'address', key: '8' },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => {
      return(
        <>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )
    },
  },
];


  const handleCreate = () => {
    setCreateEmployeeModalVisible(true);
    
  }

  const handleEdit = () => {
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
      title="Create Employee" 
      visible={editEmployeeModalVisible}
      onCancel={() => setEditEmployeeModalVisible(false)} />
    </>
  )
}

export default EmployeeTable;