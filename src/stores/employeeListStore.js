import { defineStore } from "pinia";
export const useEmployeeListStore = defineStore("employeeList", {
    state() {
        return {
            employeeList: [],
        };
    },
    getters: {
        getEmployeeList: (state) => state.employeeList,
    },
    actions: {
        importEmployeeList(newList) {
            /// Set List to New List
            this.employeeList = newList;
        },
        addEmployeeToList(employee) {
            /// Add New Employee to List
            this.employeeList.push(employee);
        },
        removeEmployeeFromList(removedEmployee) {
            /// Get Employee Index using Code
            const index = this.employeeList.findIndex((employee) => employee.code === removedEmployee.code);
            /// Remove Employee from List if Employee is Found
            if (index !== -1) {
                this.employeeList.splice(index, 1);
            }
        },
        updateEmployee(updatedEmployee) {
            /// Get Employee Index using Code
            const updateIndex = this.employeeList.findIndex((employee) => employee.code === updatedEmployee.code);
            /// Update List if Employee is Found
            if (updateIndex !== -1) {
                this.employeeList[updateIndex] = updatedEmployee;
            }
        },
        exportEmployeeList() {
            /// Convert EmployeeList into Downloadable Link
            const jsonList = JSON.stringify(this.employeeList, null, 2); // Employee List to JSON
            const blob = new Blob([jsonList], { type: "application/json" }); // JSON to Blob
            const url = URL.createObjectURL(blob); //Create URL from Blob
            /// Get Current Date
            const now = new Date();
            const dateStr = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}`;
            /// Create a Download Element
            const a = document.createElement("a");
            a.href = url;
            a.download = `purple_cross_employees_${dateStr}.json`;
            /// Download file
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            /// Remove Download URL
            URL.revokeObjectURL(url);
        },
    },
    persist: [
        {
            key: "purple_cross_employee_list",
            storage: localStorage,
        },
    ],
});
