import { Menu } from "antd";
import SubMenu from "antd/es/menu/SubMenu";
import Link from "next/link";
import { SetStateAction, useState } from "react";

function SideMenu () {
  const [openKeys, setOpenKeys] = useState<string[]>([]);
  const handleSubMenuOpenChange = (keys: string[]) => {
    setOpenKeys(keys);
  };

  return(
    <>    
    <Menu
      mode="inline"
      openKeys={openKeys}
      onOpenChange={handleSubMenuOpenChange}
      defaultSelectedKeys={['1']}
    >
      <Menu.Item key="1">
        Dashboard
      </Menu.Item>
      <SubMenu key="sub1" title="Setup">
        <Link href="/components/setup/department">
        <Menu.Item key="department">
           Department
        </Menu.Item>
        </Link>
        <Link href="/components/setup/designation">
        <Menu.Item key="designation">
           Designation
        </Menu.Item>
        </Link>
      </SubMenu>
    </Menu>
    </>
  )
}

export default SideMenu;