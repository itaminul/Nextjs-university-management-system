import { Modal } from "antd";
import { CreateEmployeeProps } from "./EmployeeType";

function EditEmployee ({title, visible, onCancel}: CreateEmployeeProps) {
  return(
    <>
      <Modal
      title={title}
      open={visible}
      onCancel={onCancel}
      >

      </Modal>
    </>
  )
}

export default EditEmployee;