'use client';
import { Button, Card, Form, Input, message } from 'antd';
import { redirect, useRouter } from 'next/navigation';
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

type Credential = {
  username: string;
  password: string;
};
function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const isAuth = useAppSelector((state) => state.authReducer.value.isAuth);
  const onClickLogIn = () => {
    dispatch(logIn(username));
  };
  const onClickToggle = () => {
    dispatch(toggleModerator());
  };
  const onClickLogOut = () => {
    dispatch(logOut());
  };

  const onFinish = async ({ username, password }: Credential) => {
    try {
      console.log('user name', username);
      setLoading(true);
      const response = await fetch(`http://localhost:4001/api/auth/loginuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();
      const token = await json.accessToken;
      void message.success('Login Successfully');
      //console.log('token', token);
      setTimeout(() => {
        setLoading(false);
        //  localStorage.setItem('accessToken', token);
        //localStorage.getItem('accessToken');
        //localStorage.setItem('isAuthenticated', 'true');
        redirect('/layouts/dashboard');
        // window.location.reload();
      }, 1000);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <AdminLayout>
        <Card
          title="Login"
          bordered={false}
          style={{
            maxWidth: 500,
            marginTop: 250,
            marginLeft: 595,
            background: '#f0f2f5',
          }}
        >
          <Form
            name="login"
            initialValues={{ remember: true }}
            onFinish={onFinish}
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input onChange={(e) => setUsername(e.target.value)} />
            </Form.Item>

            <Form.Item<FieldType>
              label="Password"
              name="password"
              rules={[
                { required: true, message: 'Please input your password!' },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
              {/* {isAuth && (
         <Button onClick={onClickToggle} type="primary" htmlType="submit">
         Toggle
       </Button>
      )}
       <Button onClick={onClickLogOut} type="primary" htmlType="submit">
        Log Out
      </Button> */}
            </Form.Item>
          </Form>
        </Card>
      </AdminLayout>
    </>
  );
}

export default Page;
