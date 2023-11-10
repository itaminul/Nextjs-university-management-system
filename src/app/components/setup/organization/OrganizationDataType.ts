export interface Organizations {
  orgName: string;
  orgDescription: string;
  serialNo: number;
 
}
export interface OrganizationsProps {
  title: string;
  visible: boolean;
  onCancel: () => void;
  initialValues?: any;
}
export interface UpdateOrganizationProps extends OrganizationsProps {
  Organizations:Organizations | null;
}