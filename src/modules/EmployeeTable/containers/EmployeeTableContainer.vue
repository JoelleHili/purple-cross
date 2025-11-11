<script setup lang="ts">
import { useEmployeeListStore } from "@/stores/employeeListStore";
import EmployeeTable from "../components/EmployeeTable.vue";
import { ref } from "vue";
import { EmployeeTypes } from "@/types/EmployeeTypes";

const inputRef = ref<HTMLInputElement | null>(null);
const employeeListState = useEmployeeListStore()

/// Upload Handling
// Try Modern File System
const onUpload = async (): Promise<void> => {

  // Check if Modern File System is Supported
  if ("showOpenFilePicker" in window) {
    try {
      // Open File Picker 
      const [handle] = await (window as any).showOpenFilePicker({
        types: [
          {
            description: "JSON Files",
            accept: { "application/json": [".json"] },
          },
        ],
      });

      // Get File Content
      const file = await handle.getFile();
      const text = await file.text();

      // Parse Json and Import as new Employee List
      const parsed = JSON.parse(text);
      employeeListState.importEmployeeList(Array.isArray(parsed) ? parsed : [parsed]);
      return;
    } catch (err) {
      console.warn("File picker cancelled or invalid JSON", err);
      return;
    }
  }

  // Fallback if Modern File System is Not Supported
  inputRef.value?.click();
};

/// Fuction for handling Fallback option
const onFileChange = (event: Event) => {
  // Get Input File
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (!file) return; // Ends function if not found

  const reader = new FileReader();

  // Process File
  reader.onload = (e) => {
    try {
      // Parse Json and Import as new Employee List
      const parsed = JSON.parse(e.target?.result as string);
      employeeListState.importEmployeeList(checkIfImportIsCorrect(parsed));
    } catch (err) {
      // Notify User of error
      alert(err)
      console.error("Invalid JSON file", err);
    }
  };

  // Read file as plain text
  reader.readAsText(file);

  // Reset input
  target.value = "";
};

/// Enusre that imported JSON is the Correct Type
const checkIfImportIsCorrect = (parsedImport: unknown): EmployeeTypes[] => {
  if (Array.isArray(parsedImport) && parsedImport.every(
    obj => obj && typeof obj === 'object' &&
           typeof (obj as any).code === 'string' &&
           typeof (obj as any).fullName === 'string' &&
           typeof (obj as any).occupation === 'string' &&
           typeof (obj as any).department === 'string' &&
           typeof (obj as any).dateOfEmployment === 'string' &&
           ((obj as any).terminationDate === undefined || (obj as any).terminationDate === null || typeof (obj as any).terminationDate === 'string')
  )) {
    return parsedImport as EmployeeTypes[];
  }
  throw new Error('Does not follow Employee JSON format');
}

// Filter Variables
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
