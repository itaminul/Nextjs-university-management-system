import { Modal } from "antd";
import { CreateEmployeeProps } from "./EmployeeType";
import EditEmployeeForm from "./EditEmployeeForm";


function EditEmployee ({title, visible, onCancel, initialValues}: CreateEmployeeProps) {
  return(
    <>
      <Modal
      width="400"
      title={title}
      open={visible}
      onCancel={onCancel}
      >
        <EditEmployeeForm title="Update Employee" visible={visible} onCancel={onCancel} initialValues={initialValues} />
      </Modal>
    </>
  )
}

export default EditEmployee;