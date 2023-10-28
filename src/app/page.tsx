import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { ConfigProvider } from 'antd';
import Login from "./layouts/login/page";
export default function Home() {
  return (
    <>
    
      <main>
    <StyledComponentsRegistry>
    <ConfigProvider
      theme={{
        components: {
          Button: {
            colorPrimary: '#00b96b',
          },
          Input: {
            colorPrimary: '#eb2f96',
          }
        },
      }}
    >

        <Login />
        {/* <Link href="/layouts/dashboard">Dahsbord</Link> */}
        {/* <Header /> */}
        {/* <SideMenu /> */}
        {/* <AdminDashboard /> */}
        {/* https://medium.com/@chowjiaying211/creating-a-responsive-sidebar-in-ant-design-e26c7423789f */}
        </ConfigProvider>
    </StyledComponentsRegistry>
      </main>
 
    </>
  );
}
