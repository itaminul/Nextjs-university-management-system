import { Col, Divider, Row } from "antd";
import Collapse from "./Collapse";
import Panel from "antd/es/cascader/Panel";

function CreateEmployeeForm() {
  return(
    <>
    <div>
      <h1>Form with Collapsible Sections</h1>

      <Collapse title="" lable="Parent Section">
      
        {/* Parent form fields go here */}
        <input type="text" placeholder="Parent Field 1" />
        <input type="text" placeholder="Parent Field 2" />
        {/* Add more fields for parent data */}
        
      </Collapse>

      <Collapse title="" lable="Child Section">
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
  )
}
export default CreateEmployeeForm;