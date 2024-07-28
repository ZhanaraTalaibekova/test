export interface Employees {
  id: number;
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

export interface EmployeesPositions {
  cutters: Employees[];
  dressmakers: Employees[];
  technologists: Employees[];
}

// {
//   "employees": [],
//   "employeesPositions": {
//     "technologists": [],
//     "dressmakers": [],
//     "cutters": []
//   }
// }