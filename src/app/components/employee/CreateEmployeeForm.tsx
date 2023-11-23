import { Col, Divider, Row, Collapse } from 'antd';


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
          {/* Parent form fields go here */}
          <input type="text" placeholder="Parent Field 1" />
          <input type="text" placeholder="Parent Field 2" />
          {/* Add more fields for parent data */}
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