"use client"
import { Layout, Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import Link from "next/link";
import'../../layouts/SideBar.css';
import { useState } from "react";
function SideMenu () {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const handleSubMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return (
    <>
      <Layout.Sider style={{height: '100%'}}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={handleSubMenuOpenChange}
          defaultSelectedKeys={['1']}
        >
          <SubMenu key="sub1" title="Setup">
            <Link href="/components/setup/organization">
              <Menu.Item key="organization">Organization</Menu.Item>
            </Link>
            <Link href="/components/setup/department">
              <Menu.Item key="department">Department</Menu.Item>
            </Link>
            <Link href="/components/setup/designation">
              <Menu.Item key="designation">Designation</Menu.Item>
            </Link>
          </SubMenu>

          <SubMenu key="sub2" title="Employee">
            <Link href="/components/employee">
              <Menu.Item key="Employee">Employee</Menu.Item>
            </Link>
          </SubMenu>
        </Menu>
      </Layout.Sider>
    </>
  );
}

export default SideMenu;