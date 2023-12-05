'use client';
import Link from 'next/link';
import SigninButton from './SigninButton';
const AppBar = () => {
  return (
    <>
        <Link href={'/'}>Home Page</Link>
        <Link href={'/layouts/dashboard'}>Dahsbord</Link>
        <SigninButton />
     
    </>
  );
};

export default AppBar;
