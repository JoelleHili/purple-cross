<script setup lang="ts">
import { EmployeeTypes } from "@/types/EmployeeTypes";
import { EmployeeTableTypes } from "../types/employeeTableTypes";
import { computed } from "vue";
import EmployeeTableActions from "../components/EmployeeTableActions.vue";

const props = defineProps<EmployeeTableTypes>();

const employeeList = computed(() => props.employees);

const isEmployed = (date: string) => {
  const employmentDate = new Date(date);
  const currentDate = new Date();

  if (currentDate < employmentDate) {
    return "Employed soon";
  }

  return "Currently employed";
};

const isTerminated = (date: string) => {
  const terminationDate = new Date(date);
  const currentDate = new Date();

  if (currentDate < terminationDate) {
    return "To be terminated";
  }

  return "Terminated";
};

const viewEmployee = (employee: EmployeeTypes) => {
  // Implement When Form is Done
};

const editEmployee = (employee: EmployeeTypes) => {
  // Implement When Form is Done
};

const deleteEmployee = (index: number) => {
  props.employees.splice(index, 1)
};
</script>

<template>
  <table class="employee-table elevated">
    <thead class="employee-table__head">
      <tr class="employee-table__row">
        <td>Code</td>
        <td>Full Name</td>
        <td>Occupation</td>
        <td>Department</td>
        <td>Date of Employment</td>
        <td>Termination Date</td>
        <td></td>
      </tr>
    </thead>
    <tbody class="employee-table__body">
      <tr
        v-for="(employee, index) in employeeList"
        :key="employee.code"
        class="employee-table__row"
      >
        <td>{{ employee.code }}</td>
        <td>{{ employee.fullName }}</td>
        <td>{{ employee.occupation }}</td>
        <td>{{ employee.department }}</td>
        <td>{{ isEmployed(employee.dateOfEmployment) }}</td>
        <td>
          {{
            employee.terminationDate && isTerminated(employee.terminationDate)
          }}
        </td>
        <td>
          <EmployeeTableActions
            @view="viewEmployee(employee)"
            @edit="editEmployee(employee)"
            @delete="deleteEmployee(index)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" src="../styles/_table.scss" scoped />
