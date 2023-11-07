'use client'
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { ConfigProvider, Layout } from 'antd';
import { type ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import BreadcrumbList from '../BreadcrumbShow';
const { Sider, Content } = Layout;
import theme from '../../../theme/themeConfig';

 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children }: LayoutProps) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const items = [
    {
      tittle: 'abc'
    }
  ]   
  return (
 
      <StyledComponentsRegistry>       
        <Layout>       
        <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: '100vh' }}>       
        {isAuthenticated && (
           <Sider theme="light">
            <SideMenu />       
          </Sider>
            )}        
          <Layout> 
            <Layout style={{ padding: '0 6px 0x' }}>
            {isAuthenticated && (
            <BreadcrumbList items={items} />
            )}
              <Content style={{margin: '0px 0px 0px 10px'}}>{children}</Content>              
            </Layout>
          </Layout>
        </Layout>      
        </ConfigProvider>        
        </Layout>       
    </StyledComponentsRegistry>
  );
};

export default AdminLayout;