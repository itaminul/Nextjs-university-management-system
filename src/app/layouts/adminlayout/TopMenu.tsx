'use client'
import 'antd/dist/antd.css'
import { Menu } from 'antd';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function TopMenu() {
  const { data: session } = useSession();
  if (session && session.user)
    return (
      <>
        <Menu mode="horizontal">
          <Menu.Item>
          <Link href={'/layouts/dashboard'}>Dahsbord</Link>
          </Menu.Item>
          <Menu.Item>
          <Link
          href={'/api/auth/signout'}
          className="flex gap-4 ml-auto text-red-600"
        >
          Sign Out
        </Link>
          </Menu.Item>
        </Menu>
      </>
    );
  return(
    <>
          <div className="demo-logo" />
          
          <Menu mode="horizontal" style={{background: '#001529', color:'white'}} >
              <Menu.Item key="mail">
              Navigation One
              </Menu.Item>
              <Menu.Item key="app">
                Navigation Two
              </Menu.Item>
              <SubMenu title={<span>Navigation Three - Submenu</span>}>
                <MenuItemGroup title="Item 1">
                  <Menu.Item key="setting:1">Option 1</Menu.Item>
                  <Menu.Item key="setting:2">Option 2</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item>
              <Link
                href={'/api/auth/signin'}
                className="flex gap-4 ml-auto text-green-600"
              >
                Sign In
              </Link>
              </Menu.Item>
      </Menu>
    </>
  )
}

export default TopMenu;