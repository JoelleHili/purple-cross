<script setup lang="ts">
import { EmployeeTable } from "@/modules/EmployeeTable";
</script>

<template>
  <section class="page employee-index">
    <EmployeeTable />
    <section class="employee-index__button-group">
      <button class="elevated employee-index__button">Add Employee</button>
    </section>
  </section>
</template>
