<script setup lang="ts">
import { EmployeeForm } from "@/modules/EmployeeForm";
import { EmployeeTypes } from "@/types/EmployeeTypes";
import { useRoute } from "vue-router";

const route = useRoute();

const type = route.params.type as "view" | "edit" | "add";
let data: EmployeeTypes | undefined = undefined;

if (typeof route.query.employee === "string") {
  try {
    data = JSON.parse(route.query.employee) as EmployeeTypes;
  } catch (err) {
    console.error("Invalid employee JSON in query:", err);
  }
}
</script>

<template>
  <section class="page employee-form">
    <EmployeeForm :type="type" :data="data" />
  </section>
</template>
