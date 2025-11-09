import { EmployeeTypes } from "@/types/EmployeeTypes";
import { defineStore } from "pinia";

export const useEmployeeListStore = defineStore("employeeList", {
  state() {
    return {
      employeeList: [] as EmployeeTypes[],
    };
  },
  getters: {
    getEmployeeList: (state) => state.employeeList,
  },
  actions: {
    importEmployeeList(newList: EmployeeTypes[]) {
      this.employeeList = newList;
    },
    addEmployeeToList(employee: EmployeeTypes) {
      this.employeeList.push(employee);
    },
    removeEmployeeFromList(index: number) {
      this.employeeList.splice(index, 1);
    },
    updateEmployee(updatedEmployee: EmployeeTypes) {
      const updateIndex = this.employeeList.findIndex(
        (employee) => employee.code === updatedEmployee.code
      );
      if (updateIndex !== -1) {
        this.employeeList[updateIndex] = updatedEmployee;
      }
    },
  },
});
