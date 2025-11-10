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
            this.employeeList = newList;
        },
        addEmployeeToList(employee) {
            this.employeeList.push(employee);
        },
        removeEmployeeFromList(removedEmployee) {
            const index = this.employeeList.findIndex((employee) => employee.code === removedEmployee.code);
            if (index !== -1) {
                this.employeeList.splice(index, 1);
            }
        },
        updateEmployee(updatedEmployee) {
            const updateIndex = this.employeeList.findIndex((employee) => employee.code === updatedEmployee.code);
            if (updateIndex !== -1) {
                this.employeeList[updateIndex] = updatedEmployee;
            }
        },
        exportEmployeeList() {
            const jsonList = JSON.stringify(this.employeeList, null, 2);
            const blob = new Blob([jsonList], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const now = new Date();
            const dateStr = `${now.getDate()}_${now.getMonth() + 1}_${now.getFullYear()}`;
            const a = document.createElement("a");
            a.href = url;
            a.download = `purple_cross_employees_${dateStr}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
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
