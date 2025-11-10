<script setup lang="ts">
import { useEmployeeListStore } from "@/stores/employeeListStore";
import EmployeeTable from "../components/EmployeeTable.vue";
import { ref } from "vue";

const inputRef = ref<HTMLInputElement | null>(null);
const employeeListState = useEmployeeListStore()

const onUpload = async (): Promise<void> => {
  if ("showOpenFilePicker" in window) {
    try {
      const [handle] = await (window as any).showOpenFilePicker({
        types: [
          {
            description: "JSON Files",
            accept: { "application/json": [".json"] },
          },
        ],
      });
      const file = await handle.getFile();
      const text = await file.text();
      const parsed = JSON.parse(text);
      employeeListState.importEmployeeList(Array.isArray(parsed) ? parsed : [parsed]);
      return;
    } catch (err) {
      console.warn("File picker cancelled or invalid JSON", err);
      return;
    }
  }
  inputRef.value?.click();
};

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target?.result as string);
      employeeListState.importEmployeeList(Array.isArray(parsed) ? parsed : [parsed]);
    } catch (err) {
      console.error("Invalid JSON file", err);
    }
  };
  reader.readAsText(file);
  target.value = "";
};

const filters = ref({
  occupation: "",
  department: "",
  dateOfEmployment: "",
  terminationDate: "",
});
</script>

<template>
  <section class="employee-index__top">
    <section class="employee-index__filters">
      <select v-model="filters.occupation" class="employee-index__select">
        <option value="">All Occupations</option>
        <option
          v-for="o in [...new Set(employeeListState.getEmployeeList.map((e) => e.occupation))]"
          :key="o"
          :value="o"
        >
          {{ o }}
        </option>
      </select>

      <select v-model="filters.department" class="employee-index__select">
        <option value="">All Departments</option>
        <option
          v-for="d in [...new Set(employeeListState.getEmployeeList.map((e) => e.department))]"
          :key="d"
          :value="d"
        >
          {{ d }}
        </option>
      </select>

      <select v-model="filters.dateOfEmployment" class="employee-index__select">
        <option value="">All Employment Status</option>
        <option value="Employed soon">Employed soon</option>
        <option value="Currently employed">Currently employed</option>
      </select>

      <select v-model="filters.terminationDate" class="employee-index__select">
        <option value="">All Termination Status</option>
        <option value="To be terminated">To be terminated</option>
        <option value="Terminated">Terminated</option>
      </select>
    </section>
    <section class="employee-index__button-group">
      <button @click="onUpload" class="elevated employee-index__button">
        Import File
      </button>
      <button @click="employeeListState.exportEmployeeList()" class="elevated employee-index__button">
        Export File
      </button>

      <input
        ref="inputRef"
        type="file"
        accept="application/json"
        hidden
        @change="onFileChange"
      />
    </section>
  </section>

  <EmployeeTable :employees="employeeListState.getEmployeeList" :filters="filters" />
</template>
