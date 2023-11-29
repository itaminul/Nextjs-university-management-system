import { Modal } from "antd"
import { CreateEmployeeProps } from "./EmployeeType"

 function EditEmployeeForm ({title, visible, onCancel}: CreateEmployeeProps){
  return(
    <>
      <Modal
      title={title}
      open={visible}
      >

      </Modal>
    </>
  )
}
export default EditEmployeeForm