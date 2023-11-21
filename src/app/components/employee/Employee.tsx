'use client'

import AdminLayout from "@/app/layouts/adminlayout/AdminLayout";
import EmployeeTable from "./EmployeeTable";



function Employee () {
    return(
      <>
         <AdminLayout>
         <EmployeeTable />         
      </AdminLayout>
    </>
    );
  
};

export default Employee;