'use client';
import React from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useGetDepartmentSetupQuery } from '@/services/setup/departmentSetupApi';

interface DataType {
  key: React.Key;
  departmentName: string;
  departmentDes: number;
}

const DepartmentTable = () => {
  const columns: ColumnsType<DataType> = [
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
      render: () => <a>action</a>,
    },
  ];

  const { data } = useGetDepartmentSetupQuery();

  return (
    <>
      <Table columns={columns} dataSource={data} scroll={{ x: 500, y: 500 }} />
    </>
  );
};

export default DepartmentTable;
