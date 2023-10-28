'use client'
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { ConfigProvider, Layout } from 'antd';
import type { ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import BreadcrumbList from '../BreadcrumbShow';
const { Header, Sider, Content } = Layout;
import theme from '../../../theme/themeConfig';

 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children }: LayoutProps) => {
  const items = [
    {
      tittle: 'abc'
    }
  ] 

  return (
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
        <Layout style={{ minHeight: '100vh' }}>       
          <Sider theme="light">
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
        </ConfigProvider>
    </StyledComponentsRegistry>
  );
};

export default AdminLayout;