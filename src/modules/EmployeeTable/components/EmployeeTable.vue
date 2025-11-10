<script setup lang="ts">
import { EmployeeTypes } from "@/types/EmployeeTypes";
import { EmployeeTableTypes } from "../types/employeeTableTypes";
import { computed, ref, watch } from "vue";
import EmployeeTableActions from "../components/EmployeeTableActions.vue";
import { useEmployeeListStore } from "@/stores/employeeListStore";

const props = defineProps<EmployeeTableTypes>();
const employeeListState = useEmployeeListStore();

// Pagination
const currentPage = ref<number>(1);
const size = 8;
const pageStart = computed(() => (currentPage.value - 1) * size);
const pageEnd = computed(() => currentPage.value * size);

// Sorting
const sortKey = ref<"code" | "fullName" | null>(null);
const sortAsc = ref(true);

const setSort = (key: "code" | "fullName") => {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortKey.value = key;
    sortAsc.value = true;
  }
};

const isEmployed = (date: string) => {
  const employmentDate = new Date(date);
  const currentDate = new Date();

  return currentDate < employmentDate ? "Employed soon" : "Currently employed";
};

const isTerminated = (date: string) => {
  const terminationDate = new Date(date);
  const currentDate = new Date();

  return currentDate < terminationDate ? "To be terminated" : "Terminated";
};

// Sorted & Filtered Employee List
const filteredEmployees = computed(() => {
  return props.employees.filter((employee) => {
    const employmentStatus = isEmployed(employee.dateOfEmployment);
    const terminationStatus = employee.terminationDate
      ? isTerminated(employee.terminationDate)
      : "";

    return (
      (!props.filters.occupation ||
        employee.occupation === props.filters.occupation) &&
      (!props.filters.department ||
        employee.department === props.filters.department) &&
      (!props.filters.dateOfEmployment ||
        employmentStatus === props.filters.dateOfEmployment) &&
      (!props.filters.terminationDate ||
        terminationStatus === props.filters.terminationDate)
    );
  });
});

const sortedEmployees = computed(() => {
  const list = [...filteredEmployees.value];
  if (!sortKey.value) return list;

  return list.sort((a, b) => {
    const valA = a[sortKey.value!] as string;
    const valB = b[sortKey.value!] as string;

    if (valA < valB) return sortAsc.value ? -1 : 1;
    if (valA > valB) return sortAsc.value ? 1 : -1;
    return 0;
  });
});

const paddedData = computed(() => {
  const rowsToFill = size - (sortedEmployees.value.length % size || size);
  return [...sortedEmployees.value, ...Array(rowsToFill).fill(null)];
});

// Employee Actions
const viewEmployee = (employee: EmployeeTypes) => {};
const editEmployee = (employee: EmployeeTypes) => {};
</script>

<template>
  <table class="employee-table elevated">
    <thead class="employee-table__head">
      <tr class="employee-table__row">
        <td @click="setSort('code')">Code</td>
        <td @click="setSort('fullName')">Full Name</td>
        <td>Occupation</td>
        <td>Department</td>
        <td>Date of Employment</td>
        <td>Termination Date</td>
        <td></td>
      </tr>
    </thead>
    <tbody class="employee-table__body">
      <tr
        v-for="(employee, index) in paddedData.slice(pageStart, pageEnd)"
        :key="employee ? employee.code : `empty-${index}`"
        class="employee-table__row"
      >
        <template v-if="employee">
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
              @delete="employeeListState.removeEmployeeFromList(index)"
            />
          </td>
        </template>

        <template v-else>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </template>
      </tr>
    </tbody>
  </table>

  <UPagination
    v-model:page="currentPage"
    :items-per-page="size"
    :total="sortedEmployees.length"
    :sibling-count="1"
    show-edges
  >
    <template #item="{ item, page }">
      <button
        v-if="item.type === 'page'"
        class="pagination__item"
        :class="{ pagination__item__active: item.value === page }"
        @click="currentPage = item.value"
      >
        {{ item.value }}
      </button>
      <span v-else class="pagination__ellipsis">…</span>
    </template>
  </UPagination>
</template>

<style lang="scss" src="../styles/_table.scss" />
