export interface Employees {
  id?: number;
  firstName: string;
  lastName: string;
  positions: {
    [key: string]: boolean;
  };
  phoneNumber: string;
  userImage?: File | null | string | undefined;
  team?: boolean;
}

export interface EmployeesResponse {
  data: Employees[];
}

export enum Status {
  LOADING = 'loading',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed',
}