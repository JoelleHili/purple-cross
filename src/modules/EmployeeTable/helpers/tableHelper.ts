import { EmployeeTypes } from "@/types/EmployeeTypes";

/// Sort List based on Key and Direction
export const sortTableData = (
  employeeList: EmployeeTypes[],
  sortKey: "code" | "fullName" | null,
  sortAsc: boolean
) => {
  const list = [...employeeList];
  if (!sortKey) return list; // Return Unsorted List if Key is Null

  // Sort List
  return list.sort((a, b) => {
    const valA = a[sortKey!] as string;
    const valB = b[sortKey!] as string;

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });
};

/// Filters List based on Occupation, Department, Employment & Termination
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
    // Get Employment & Termination Statuses
    const employmentStatus = checkIfEmployed(employee.dateOfEmployment);
    const terminationStatus = employee.terminationDate
      ? checkIfTerminated(employee.terminationDate)
      : "";

    // Apply Filters
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

/// Adds empty rows to table to evenly fill the table
export const roundTableData = (
  pageSize: number,
  employeeList: EmployeeTypes[]
) => {
  // Get how many empty rows need filling
  const rowsToFill = pageSize - (employeeList.length % pageSize || pageSize);

  // Fill with empty rows
  return [...employeeList, ...Array(rowsToFill).fill(null)];
};

/// Checks Employment Status
export const checkIfEmployed = (date: string) => {
  const employmentDate = new Date(date); // Get Employment date as Date
  const currentDate = new Date(); // Get Current Date

  return currentDate < employmentDate ? "Employed soon" : "Currently employed";
};

/// Checks Termination Status
export const checkIfTerminated = (date: string) => {
  const terminationDate = new Date(date); // Get Termination as Date
  const currentDate = new Date(); // Get Current Date

  return currentDate < terminationDate ? "To be terminated" : "Terminated";
};
