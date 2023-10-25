'use client'
import { Breadcrumb, Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import BreadcrumbItem from 'antd/es/breadcrumb/BreadcrumbItem';
import BreadcrumbList from '../BreadcrumbShow';

const { Header, Sider, Content } = Layout;

 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children, ...props }: LayoutProps) => { 
  const items = [
    {
      tittle: 'abc'
    }
  ] 
  return (
    <Layout style={{ minHeight: '100vh' }}>       
      <Sider width={180} theme="light">
        <SideMenu />       
      </Sider>
      <Layout>      
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />        
      </Header>
      <Layout style={{ padding: '0 6px 0x' }}>
      <BreadcrumbList items={items} />
        <Content style={{margin: '0px 0px 0px 10px'}}>{children}</Content>
      </Layout>
    </Layout>
    </Layout>
  );
};

export default AdminLayout;