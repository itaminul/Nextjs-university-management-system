'use client'
import AdminLayout from "@/app/layouts/adminlayout/AdminLayout";
import OrganizationTable from "./OrganizationTable";

function Organization() {
  return(
    <>
     <AdminLayout>
        <OrganizationTable />
     </AdminLayout>
    </>
  )
}

export default Organization;