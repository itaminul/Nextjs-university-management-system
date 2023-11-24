import { Button, Checkbox, Form, Input, Collapse } from 'antd';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const { Panel } = Collapse
function CreateEmployeeForm() {
  return (
    <>
      <div>
        <h1>Form with Collapsible Sections</h1>
        <Collapse accordion>
          <Panel header="Panel 1" key="1">
            Content of panel 1
          </Panel>
          <Panel header="Panel 2" key="2">
            Content of panel 2
          </Panel>
          {/* Add more Collapse Panels as needed */}
        </Collapse>
        <Collapse>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item<FieldType>
              label="Username"
              name="username"
              rules={[
                { required: true, message: 'Please input your username!' },
              ]}
            >
              <Input />
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

            <Form.Item<FieldType>
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Collapse>

        <Collapse>
          {/* Child form fields go here */}
          <input type="text" placeholder="Child Field 1" />
          <input type="text" placeholder="Child Field 2" />
          {/* Add more fields for child data */}
        </Collapse>

        {/* Add more Collapse components for additional sections */}
      </div>
      {/* <Divider orientation="left">Percentage columns</Divider>
    <Row>
      <Col flex={3}>First</Col>
      <Col flex={3}>Second</Col>
    </Row>    */}
    </>
  );
}
export default CreateEmployeeForm;