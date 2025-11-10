<script setup lang="ts">
import { EmployeeTable } from "@/modules/EmployeeTable";
import router from "@/router";

const navigateToAddEmployee = () => {
  router.push({ path: "/form/add" });
};
</script>

<template>
  <section class="page employee-index">
    <EmployeeTable />
    <section class="employee-index__button-group">
      <button
        class="elevated employee-index__button"
        @click="navigateToAddEmployee"
      >
        Add Employee
      </button>
    </section>
  </section>
</template>
