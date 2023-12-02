export interface policeStation {
  id: number,
  thanaName: string,
  thanaDes: string,
  orgId           : number,
  serialNo        : number,
}
export interface policeStationProps {
  title: string;
  visible: boolean;
  initialValues?: any;
  onCancel: () => void;
}

export interface UpdatePoliceStationProps extends policeStation {
  items: policeStation | null;
}
