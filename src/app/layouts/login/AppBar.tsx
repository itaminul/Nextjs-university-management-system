'use client';
import { Header } from 'antd/es/layout/layout';
import Link from 'next/link';
import SigninButton from './SigninButton';
import TopMenu from '../adminlayout/TopMenu';
import Navbar from '../../navbar';
const AppBar = () => {
  return (
    <>
    {/* <Navbar /> */}
   
        <Link href={'/'}>Home Page</Link>
        <Link href={'/layouts/dashboard'}>Dahsbord</Link>
        {/* <TopMenu /> */}
        <SigninButton />
     
    </>
  );
};

export default AppBar;
