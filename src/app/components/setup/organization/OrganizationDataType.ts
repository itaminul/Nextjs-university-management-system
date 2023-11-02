export interface Organizations {
  orgName: string,
  orgDescription: string,
  serialNo: number
}

export interface OrganizationsProps {

}


export interface UpdateOrganizationProps extends OrganizationsProps {
  Organizations:Organizations | null;
}