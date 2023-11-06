'use client';
import { Header } from 'antd/es/layout/layout';
import Link from 'next/link';
import SigninButton from './SigninButton';

const AppBar = () => {
  return (
    <>
      <header style={{color: 'black'}}>
        <Link href={'/'}>Home Page</Link>
        <Link href={'/dahsbord'}>Dahsbord</Link>
        <SigninButton />
      </header>
    </>
  );
};

export default AppBar;
