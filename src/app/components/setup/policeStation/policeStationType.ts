export interface PoliceStation {
  id: number;
  thanaName: string;
  thanaDes: string;
  orgId: number;
  serialNo: number;
}
export interface PoliceStationProps {
  title: string;
  visible: boolean;
  initialValues?: any;
  onCancel: () => void;
}

export interface UpdateDepartmentProps extends PoliceStation {
  items: PoliceStation | null;
}
