import { Modal } from "antd";
import { CreateDepartmentsProps } from "./CreateDepartmentType";

function EditDepartment({ title, visible, onCancel}: CreateDepartmentsProps) {

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

export default EditDepartment;