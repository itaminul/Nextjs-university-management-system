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
  bloodGroupId: string,
  maritialStatus: boolean,

}

export interface empPresentAddress {
  empId: number; 
  pertPSId: number;
  perCityCor: number;
  perWord: number;
  perWordNo: number;
  perVillRoad: number;
  perBasHolding: number;
  perPostOffice: number;
  perPostOfficeCode: number;

}

export interface empPermanentAddress {
  presentPostOfficeCode: string;
  empId: number; 
  presentPSId: number;
  presentCityCor: number;
  presentWord: number;
  presentVillRoad: number
}

export interface AllEmpInformation extends Employees, empPresentAddress, empPermanentAddress {
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
  bloodGroupId: string,
  maritialStatus: boolean,
  presentPostOfficeCode: string;
  empId: number; 
  presentPSId: number;
  presentCityCor: number;
  presentWord: number;
  presentVillRoad: number;

  pertPSId: number;
  perCityCor: number;
  perWord: number;
  perWordNo: number;
  perVillRoad: number;
  perBasHolding: number;
  perPostOffice: number;
  perPostOfficeCode: number;
}


export interface CreateEmployeeProps {
  visible: boolean;
  title: string;
  onCancel: () => void;
  initialValues?:any;
  onRadioChange?: (value: boolean) => void;

}


export interface UpdateEmployeeProps extends CreateEmployeeProps {
  emplyeeItems: AllEmpInformation | null,
  // emplyeePresentAddItems: EmployeePresentAddress | null,

}

