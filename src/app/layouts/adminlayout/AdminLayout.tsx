'use client'
import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { ConfigProvider, Layout } from 'antd';
import { type ReactNode } from 'react';
import SideMenu from '../sideMenu/SideMenu';
import BreadcrumbList from '../BreadcrumbShow';
const { Sider, Content } = Layout;
import theme from '../../../theme/themeConfig';
import { useAuth } from '../../../auth/authContext';
import { useSession } from 'next-auth/react';

 type LayoutProps = {
  children: ReactNode,
}

const AdminLayout = ({ children }: LayoutProps) => {
  // const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
  const items = [
    {
      tittle: 'abc'
    }
  ]   

 const { isAuthenticated } = useAuth();

  const { data: session } = useSession();
  if (session && session.user)
    return (
      <StyledComponentsRegistry>
        <Layout>
          <ConfigProvider theme={theme}>
      
              <Layout style={{ minHeight: '100vh' }}>
                <Sider theme="light">
                  <SideMenu />
                </Sider>
                <Layout>
                  <Layout style={{ padding: '0 6px 0x' }}>
                    <BreadcrumbList items={items} />

                    <Content style={{ margin: '0px 0px 0px 10px' }}>
                      {children}
                    </Content>
                  </Layout>
                </Layout>
              </Layout>
            
          </ConfigProvider>
        </Layout>
      </StyledComponentsRegistry>
    );
};

export default AdminLayout;