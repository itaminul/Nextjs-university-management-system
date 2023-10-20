'use client'
import { Button, Form, Input } from 'antd';
function Page() {
  const onFinish = (values: any) => {
  };

  return (
    <div className="login-container">
      <Form onFinish={onFinish}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please enter your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please enter your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
                   
                   
          </Form.Item>
      </Form>
      <style jsx>{`
        .login-container {
          max-width: 300px;
          margin: 1500 150 150 150;
          padding: 20px;
          border: 1px solid #ccc;
          border-radius: 5px;
        }
      `}</style>
    </div>
  );
};

export default Page;
