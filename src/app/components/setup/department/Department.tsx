'use client'
import theme from "../../../../theme/themeConfig";
import AdminLayout from "../../../../app/layouts/adminlayout/AdminLayout";
import DepartmentTable from "./DepartmentTable";

function Department() {
  return(
    <>
    <AdminLayout>
      <DepartmentTable />
    </AdminLayout>
    </>
  )
}

export default Department;