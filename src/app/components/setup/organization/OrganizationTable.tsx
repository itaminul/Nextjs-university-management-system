'use client';
import { Button } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import { Organizations } from './OrganizationDataType';
import CreateOrganization from './CreateOrganization';
import EditOrganization from './EditOrganization';
import { useState } from 'react';
import { useGetOrgSetupQuery } from '@/services/setup/OrganizationSetupApi';

function OrganizationTable() {
  const { data, isLoading, isError } = useGetOrgSetupQuery();
  const [createOrganizationModalOpen, setCreateOrganizationModalOpen] =
    useState(false);
  const [editOrganizationModalOpen, setEditOrganizationModalOpen] =
    useState(false);
  const [selectedOrganization, setSelectedOrganization] =
    useState<Organizations>(null);

  const columns: ColumnsType<Organizations[]> = [
    {
      title: 'UD ID',
      width: 100,
      dataIndex: 'serialNo',
      key: 'serialNo',
      fixed: 'left',
    },
    {
      title: 'Organization Name',
      width: 100,
      dataIndex: 'orgName',
      key: 'orgName',
      fixed: 'left',
    },
    {
      title: 'Organization Description',
      width: 100,
      dataIndex: 'orgDescription',
      key: 'orgDescription',
      fixed: 'left',
      sorter: true,
    },
    {
      title: 'Action',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (_: string, record: any) => (
        <Button
          type="link"
          onClick={() => {
            handleEdit(record);
          }}
        >
          Edit
        </Button>
      ),
    },
  ];

  if (isLoading) {
    return '.... Loading';
  }

  if (isError) {
    return 'error';
  }

  const handleEdit = (record: Organizations) => {
    setSelectedOrganization(record)
    setEditOrganizationModalOpen(true);
  };

  const handleOpenCreateModal = () => {
    setCreateOrganizationModalOpen(true);
  };

  return (
    <>
      <Button style={{ float: 'right' }} onClick={handleOpenCreateModal}>
        Add New
      </Button>
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
        }}
      />

      <CreateOrganization
        title="Create Organization"
        visible={createOrganizationModalOpen}
        onCancel={() => setCreateOrganizationModalOpen(false)}
      />
      <EditOrganization
        title="Edit Organization"
        visible={editOrganizationModalOpen}
        initialValues={selectedOrganization}
        onCancel={() => setEditOrganizationModalOpen(false)}
      />
    </>
  );
}

export default OrganizationTable;
