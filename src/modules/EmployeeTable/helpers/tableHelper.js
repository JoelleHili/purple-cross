export const sortTableData = (employeeList, sortKey, sortAsc) => {
    const list = [...employeeList];
    if (!sortKey)
        return list;
    return list.sort((a, b) => {
        const valA = a[sortKey];
        const valB = b[sortKey];
        if (valA < valB)
            return sortAsc ? -1 : 1;
        if (valA > valB)
            return sortAsc ? 1 : -1;
        return 0;
    });
};
export const filterTableData = (employeeList, filters) => {
    return employeeList.filter((employee) => {
        const employmentStatus = checkIfEmployed(employee.dateOfEmployment);
        const terminationStatus = employee.terminationDate
            ? checkIfTerminated(employee.terminationDate)
            : "";
        return ((!filters.occupation || employee.occupation === filters.occupation) &&
            (!filters.department || employee.department === filters.department) &&
            (!filters.dateOfEmployment ||
                employmentStatus === filters.dateOfEmployment) &&
            (!filters.terminationDate ||
                terminationStatus === filters.terminationDate));
    });
};
export const roundTableData = (pageSize, employeeList) => {
    const rowsToFill = pageSize - (employeeList.length % pageSize || pageSize);
    return [...employeeList, ...Array(rowsToFill).fill(null)];
};
export const checkIfEmployed = (date) => {
    const employmentDate = new Date(date);
    const currentDate = new Date();
    return currentDate < employmentDate ? "Employed soon" : "Currently employed";
};
export const checkIfTerminated = (date) => {
    const terminationDate = new Date(date);
    const currentDate = new Date();
    return currentDate < terminationDate ? "To be terminated" : "Terminated";
};
