'use client'
import { Breadcrumb, Layout } from 'antd';
import type { ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';

const { Sider, Content } = Layout;
 
 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={180} theme="light">
        <SideMenu />       
      </Sider>
      <Layout>
      <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;