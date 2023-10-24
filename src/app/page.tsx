import Link from "next/link";
import AdminDashboard from "./layouts/dashboard/dashboard";
import Header from "./layouts/header/header";
import Login from "./layouts/login/page";
import SideMenu from "./layouts/sideMenu/SideMenu";
export default function Home() {
  return (
    <>
      <main>
        <Login />
        {/* <Link href="/layouts/dashboard">Dahsbord</Link> */}
        {/* <Header /> */}
        {/* <SideMenu /> */}
        {/* <AdminDashboard /> */}
      </main>
    </>
  );
}
