<script setup lang="ts">
import { EmployeeTypes } from "@/types/EmployeeTypes";
import { EmployeeFormTypes } from "../types/employeeFormTypes";
import { useEmployeeListStore } from "@/stores/employeeListStore";
import router from "@/router";
import { useRoute } from "vue-router";

const props = defineProps<EmployeeFormTypes>();
const employeeListState = useEmployeeListStore();

const route = useRoute();
const from = route.query.from as string | undefined;

const checkTypeValidation = (type: string) => {
  switch (type) {
    case "view":
      return true;
    case "edit":
      return true;
    case "add":
      return true;

    default:
      return false;
  }
};

const submitForm = (event: Event) => {
  type EmployeeKey = keyof EmployeeTypes;

  event.preventDefault();

  const form = event.target as HTMLFormElement;
  const formData = new FormData(form);

  const employee: EmployeeTypes = {} as EmployeeTypes;
  formData.forEach((value, key) => {
    const typedKey = key as EmployeeKey;
    employee[typedKey] = value.toString(); // all values are strings; convert if needed
  });

  switch (props.type) {
    case "add":
      employeeListState.addEmployeeToList(employee);
      router.back();
      break;
    case "edit":
      employeeListState.updateEmployee(employee);
      router.back();
      break;
    default:
      break;
  }
};
</script>

<template>
  <h1 v-if="props.type === 'view'" class="employee-form__title">
    View Employee
  </h1>
  <h1 v-else-if="props.type === 'edit'" class="employee-form__title">
    Edit Employee Form
  </h1>
  <h1 v-else-if="props.type === 'add'" class="employee-form__title">
    New Employee Form
  </h1>
  <h1 v-else class="employee-form__title">Invalid Form Type</h1>

  <form
    v-show="checkTypeValidation(props.type)"
    @submit="submitForm"
    class="employee-form__form"
  >
    <section class="employee-form__field-container">
      <section class="employee-form__field">
        <label for="code">Code:</label>
        <input
          type="text"
          id="code"
          name="code"
          :value="props.data?.code"
          required
          :disabled="props.type === 'view'"
        />
      </section>

      <section class="employee-form__field">
        <label for="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          :value="props.data?.fullName"
          required
          :disabled="props.type === 'view'"
        />
      </section>

      <section class="employee-form__field">
        <label for="occupation">Occupation:</label>
        <input
          type="text"
          id="occupation"
          name="occupation"
          :value="props.data?.occupation"
          required
          :disabled="props.type === 'view'"
        />
      </section>

      <section class="employee-form__field">
        <label for="department">Department:</label>
        <input
          type="text"
          id="department"
          name="department"
          :value="props.data?.department"
          required
          :disabled="props.type === 'view'"
        />
      </section>

      <section class="employee-form__field">
        <label for="dateOfEmployment">Date of Employment:</label>
        <input
          type="date"
          id="dateOfEmployment"
          name="dateOfEmployment"
          :value="props.data?.dateOfEmployment"
          :disabled="props.type === 'view'"
        />
      </section>

      <section class="employee-form__field">
        <label for="terminationDate">Termination Date:</label>
        <input
          type="date"
          id="terminationDate"
          name="terminationDate"
          :value="props.data?.terminationDate"
          :disabled="props.type === 'view'"
        />
      </section>
    </section>
    <section class="employee-form__button-group">
      <button @click="router.push(from ?? '/')">Back</button>
      <input
        type="submit"
        class="employee-form__submit"
        v-show="props.type === 'add' || props.type === 'edit'"
      />
    </section>
  </form>
</template>

<style lang="scss" src="../styles/_form.scss" />
