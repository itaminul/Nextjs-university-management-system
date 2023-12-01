import { Modal } from "antd";
import { CreateEmployeeProps } from "./EmployeeType";
import EditEmployeeForm from "./EditEmployeeForm";

function EditEmployee ({title, visible, onCancel}: CreateEmployeeProps) {
  return(
    <>
      <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      >
        <EditEmployeeForm title="Update Employee" visible={visible} onCancel={onCancel} />
      </Modal>
    </>
  )
}

export default EditEmployee;