export interface Designation {
  id: number;
  designationName: string;
  designationDes: string;
  orgId: number;
  serialNo: number;
  activeStatus: boolean;
}
export interface DesignationProps {
  title: string;
  visible: boolean;
  initialValues?: any;
  onCancel: () => void;
}

export interface UpdateDepartmentProps extends DesignationProps {
  items: Designation | null;
}
