'use client'
import { Button, Card, Form, Input } from 'antd';
import {  useRouter } from 'next/navigation';
import { useState } from 'react';
import AdminLayout from '../adminlayout/AdminLayout';
type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

function Page() {
    const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      <Form
      name="login"
      initialValues={{ remember: true }}
      onFinish={onFinish}
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </Card>
  </AdminLayout>
    </>
  );
};

export default Page;
