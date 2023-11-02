'use client';
import React, { useState } from 'react';
import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetDepartmentSetupQuery } from '@/services/setup/departmentSetupApi';
import CreateDepartment from './CreateDepartment';
import EditDepartment from './EditDepartment';

interface DataType {
  key: React.Key;
  departmentName: string;
  departmentDes: number;
}

const DepartmentTable = () => {
  const { data, isLoading, isError } = useGetDepartmentSetupQuery();
  const[ createModalVisible, setCreateModalVisible] = useState(false);
  const[ editModalVisible, setEditModalVisible] = useState(false);

  const columns: ColumnsType<DataType[]> = [
    {
      title: 'Department Name',
      width: 100,
      dataIndex: 'departmentName',
      key: 'departmentName',
      fixed: 'left',
    },
    {
      title: 'Department Description',
      width: 100,
      dataIndex: 'departmentDes',
      key: 'departmentDes',
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_: string, record:any) =>
        <Button
        onClick={() => {
          handleEdit(record)
        }}
        >Edit</Button>
      ,
    },
  ];

  const handleEdit= (record: any) => {
    setEditModalVisible(true);
  }

  if(isLoading){
    return '.... Loading'
  }

  if(isError){
    return 'error';
  }

  const handleCreate = () =>  {
    setCreateModalVisible(true);
  }

  return (
    <>
      <Button style={{float: 'right'}} onClick={handleCreate}>Add New</Button>
      <Table 
       dataSource={data} 
      columns={columns}
       scroll={{ x: 100 }}
       pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        pageSizeOptions: ['10', '20', '50', '100', '1000'],
        defaultPageSize: 10,
        // total: data.length,
        showTotal: (total, range) =>
          `${range[0]}-${range[1]} of ${total} items`,
      }} />

      <CreateDepartment
      title="create"
      visible={createModalVisible}
      onCancel={() => setCreateModalVisible(false)}
      />
      <EditDepartment 
      title="update"
      visible={editModalVisible}
      onCancel={() => setEditModalVisible(false)}
      />
    </>
  );
};

export default DepartmentTable;
