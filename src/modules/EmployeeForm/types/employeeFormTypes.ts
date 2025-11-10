import { EmployeeTypes } from "@/types/EmployeeTypes";

export interface EmployeeFormTypes{
    type: 'view' | 'edit' | 'add',
    data?: EmployeeTypes
}