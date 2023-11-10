"use client"
import React, { useState } from 'react';
import { Menu, Drawer, Button  } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  MenuUnfoldOutlined
} from '@ant-design/icons';
import './nav.css'
import Link from 'next/link';
import { useSession } from 'next-auth/react';
const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const isMobile = window.innerWidth < 768;

  const { data: session } = useSession();
  if (session && session.user)

  return (
    <div>
      {isMobile ? (
        <Button type="primary" onClick={showDrawer}>
         <MenuUnfoldOutlined />
        </Button>
      ) : (
      <div className="top-bar">
      <Menu style={{  display: 'flex'}}  className="left-menu">
        <Menu.Item key="home">Home</Menu.Item>
        <Menu.Item key="home">Dashbord</Menu.Item>
        <Menu.Item key="contact">
        <Link href={'/layouts/dashboard'}>Menu</Link>
        </Menu.Item>
      </Menu>
      <Menu style={{  display: 'flex'}}  className="right-menu">
        <Menu.Item key="signout">
        <Link href={'/api/auth/signout'}>
          <UserOutlined /> Log Out
          </Link>
        </Menu.Item>
      </Menu>

    </div>
      )}
      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        open={isMobile && drawerVisible}
      >

        <Menu mode="vertical" theme="light">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );

  return (
    <div>
      {isMobile ? (
        <Button type="primary" onClick={showDrawer}>
          <MenuUnfoldOutlined />
        </Button>
      ) : (
        <div className="top-bar">
          <Menu
            inlineIndent={0}
             style={{ display: 'flex' }}
            className="left-menu"
          >
            <Menu.Item key="home">Home</Menu.Item>
            <Menu.Item key="1">About</Menu.Item>
            <Menu.Item key="2">Mission & Vision</Menu.Item>
            <Menu.Item key="4">Admission</Menu.Item>
            <Menu.Item key="5">Notice</Menu.Item>
            <Menu.Item key="6">Contact</Menu.Item>
          </Menu>
          <Menu style={{ display: 'flex' }} className="right-menu">
            <Menu.Item key="signin">
              <Link href={'/api/auth/signin'}>
                <UserOutlined /> Login
              </Link>
            </Menu.Item>
          </Menu>
        </div>
      )}

      <Drawer
        title="Menu"
        placement="left"
        closable={false}
        onClose={onClose}
        open={isMobile && drawerVisible}
      >
        <Menu mode="vertical" theme="light">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Profile
          </Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Navbar;