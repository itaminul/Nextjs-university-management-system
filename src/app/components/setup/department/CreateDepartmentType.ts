export interface Departments {
  id: number,
  departmentName: string;
  departmentDescription: string;
  orgId: number;
}
export interface CreateDepartmentsProps {
  title: string;
  visible: boolean;
  initialValues?: any;
  onCancel: () => void;
}

export interface UpdateDepartmentProps extends CreateDepartmentsProps {
  items: Departments | null;
}
