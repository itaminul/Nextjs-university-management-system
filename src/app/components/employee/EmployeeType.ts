export interface Employees {
  firstName: string,
  middleName: string,
  lastName: string,
  fullName: string,
  phone: string,
  mobileOne: string,
  mobileTwo: string,
  emergencyMobile: string,
  officeEmail: string,
  personalEmail: string,
  empPresentAddress: string,
  departmentId: string,
  designationId: string,
  religionId: string,
  bloodGroupId: string

}

export interface EmployeePresentAddress {
  presentPostOfficeCode: string;
  empId: number; 
}

export interface CreateEmployeeProps {
  visible: boolean;
  title: string;
  onCancel: () => void;

}


export interface UpdateEmployeeProps extends CreateEmployeeProps {
  emplyeeItems: Employees | null,
  emplyeePresentAddItems: EmployeePresentAddress | null,

}

