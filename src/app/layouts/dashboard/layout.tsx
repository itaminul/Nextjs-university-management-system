import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import AdminLayout from "../adminlayout/AdminLayout";
import StyledComponentsRegistry from "@/lib/AntdRegistry";
import { ConfigProvider, Layout } from "antd";
import theme from "../../../theme/themeConfig";

interface Props {
  children: React.ReactNode;
}
const DashboardLayout = async(props: Props) => {
  const session = await getServerSession(authOptions)
  return (
    <>
    <div>
      <AdminLayout children={props.children} />
      
    </div>
    <div>
      
    <StyledComponentsRegistry>       
        <Layout>       
        <ConfigProvider theme={theme}>
      {props.children}
      </ConfigProvider>
      </Layout>
      </StyledComponentsRegistry>
      </div>
      
    </>
  )

}

export default DashboardLayout;