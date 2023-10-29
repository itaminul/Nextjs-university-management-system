'use client'
import { Button, Card, Form, Input } from 'antd';
import {  useRouter } from 'next/navigation';
import { useState } from 'react';
import AdminLayout from '../adminlayout/AdminLayout';
import { logIn, logOut, toggleModerator } from '@/redux/features/authSlice'; 
import { useDispatch } from 'react-redux';
import { AppDispatch, useAppSelector } from '@/redux/store';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Page() {
    const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const dispatch = useDispatch<AppDispatch>()
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogOut = () => {
    dispatch(logOut())
  };

  const onFinish = async (values: any) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push('/layouts/dashboard'); 
    }, 1000);
  };
  return (
    <>
      <AdminLayout>
    <Card title="Login" bordered={false} style={{ maxWidth: 500, marginTop: 250, marginLeft: 595, background: '#f0f2f5' }}>
      {/* <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
  > */}
    <Form.Item<FieldType>
      label="Username"
      name="username"
      
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input onChange={(e) => setUsername(e.target.value)} />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button onClick={onClickLogIn} type="primary" htmlType="submit">
        Submit
      </Button>
      {isAuth && (
         <Button onClick={onClickToggle} type="primary" htmlType="submit">
         Toggle
       </Button>
      )}
       <Button onClick={onClickLogOut} type="primary" htmlType="submit">
        Log Out
      </Button>
    </Form.Item>
  {/* </Form> */}
  </Card>
  </AdminLayout>
    </>
  );
};

export default Page;
