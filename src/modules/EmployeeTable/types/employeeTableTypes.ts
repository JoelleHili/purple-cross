import { EmployeeTypes } from "@/types/EmployeeTypes";

export interface EmployeeTableTypes {
  employees: EmployeeTypes[];
  filters: {
    occupation: string;
    department: string;
    dateOfEmployment: string;
    terminationDate: string;
  };
}
