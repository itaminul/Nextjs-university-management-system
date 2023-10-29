'use client'
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
function TopMenu() {
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
      </Menu>
    </>
  )
}

export default TopMenu;