import { EmployeeTypes } from "@/types/EmployeeTypes";
import { defineStore } from "pinia";

export const useEmployeeListStore = defineStore('employeeList', {
    state(){
        return {
            employeeList: [] as EmployeeTypes[]
        }
    },
    getters: {
        getEmployeeList: state => state.employeeList
    },
    actions: {
        updateEmployeeList(newList: EmployeeTypes[]){
            this.employeeList = newList
        }
    }
})