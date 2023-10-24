import { ConfigProvider, Button, Space, Input, Divider } from 'antd';

import Link from "next/link";
import AdminDashboard from "./layouts/dashboard/dashboard";
import Header from "./layouts/header/header";
import Login from "./layouts/login/page";
import SideMenu from "./layouts/sideMenu/SideMenu";
export default function Home() {
  return (
    <>
    
      <main>
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
        </ConfigProvider>
      </main>
 
    </>
  );
}
