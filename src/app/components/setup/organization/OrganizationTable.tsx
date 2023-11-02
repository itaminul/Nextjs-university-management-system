'use client'
import { Button } from "antd";
import Table, { ColumnsType } from "antd/es/table";
import { Organizations } from "./OrganizationDataType";
import CreateOrganization from "./CreateOrganization";
import EditOrganization from "./EditOrganization";

function OrganizationTable() {
 
  const columns: ColumnsType<Organizations[]> = [
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
      render: (_: string, record:any) =>
        <Button
        onClick={() => {
          handleEdit(record)
        }}
        >Edit</Button>
      ,
    },
  ];

  const data: Organizations[] = [
    {
      orgName: '1',
      orgDescription: 'John Brown',
      serialNo: 32,
    },
    {
      orgName: '2',
      orgDescription: 'Jim Green',
      serialNo: 40,
    },
  ];

  const handleEdit = (record: any) => {

  }
  return(
    <>
      <Button style={{float: 'right'}}>Add New</Button>
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

      <CreateOrganization />
      <EditOrganization />
    </>
  )
}

export default OrganizationTable;