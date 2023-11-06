import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";

interface Props {
  children: React.ReactNode;
}
const DashboardLayout = async(props: Props) => {
  const session = await getServerSession(authOptions)
  return (
    <>
    <div>
      
    </div>
    <div>{props.children}</div>
    </>
  )

}

export default DashboardLayout;