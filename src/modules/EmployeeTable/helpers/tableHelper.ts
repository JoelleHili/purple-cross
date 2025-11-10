import { EmployeeTypes } from "@/types/EmployeeTypes";

export const sortTableData = (
  employeeList: EmployeeTypes[],
  sortKey: "code" | "fullName" | null,
  sortAsc: boolean
) => {
  const list = [...employeeList];
  if (!sortKey) return list;

  return list.sort((a, b) => {
    const valA = a[sortKey!] as string;
    const valB = b[sortKey!] as string;

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });
};

export const filterTableData = (
  employeeList: EmployeeTypes[],
  filters: {
    occupation: string;
    department: string;
    dateOfEmployment: string;
    terminationDate: string;
  }
) => {
  return employeeList.filter((employee) => {
    const employmentStatus = checkIfEmployed(employee.dateOfEmployment);
    const terminationStatus = employee.terminationDate
      ? checkIfTerminated(employee.terminationDate)
      : "";

    return (
      (!filters.occupation || employee.occupation === filters.occupation) &&
      (!filters.department || employee.department === filters.department) &&
      (!filters.dateOfEmployment ||
        employmentStatus === filters.dateOfEmployment) &&
      (!filters.terminationDate ||
        terminationStatus === filters.terminationDate)
    );
  });
};

export const roundTableData = (pageSize: number, employeeList: EmployeeTypes[]) => {
  const rowsToFill = pageSize - (employeeList.length % pageSize || pageSize);
  return [...employeeList, ...Array(rowsToFill).fill(null)];
};

export const checkIfEmployed = (date: string) => {
  const employmentDate = new Date(date);
  const currentDate = new Date();

  return currentDate < employmentDate ? "Employed soon" : "Currently employed";
};

export const checkIfTerminated = (date: string) => {
  const terminationDate = new Date(date);
  const currentDate = new Date();

  return currentDate < terminationDate ? "To be terminated" : "Terminated";
};
