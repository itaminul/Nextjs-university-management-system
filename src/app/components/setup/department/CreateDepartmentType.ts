export interface Departments {
  departmentName: string;
  departmentDes: string;
}

export interface CreateDepartmentsProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
}

export interface UpdateDepartmentProps extends CreateDepartmentsProps {
  items: Departments | null;
}
