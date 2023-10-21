'use client'
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';

const { Sider, Content } = Layout;

 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children, ...props }: LayoutProps) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={180} theme="light">
        <SideMenu />       
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;