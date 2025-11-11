<script setup lang="ts">
import { EmployeeTypes } from "@/types/EmployeeTypes";
import { EmployeeTableTypes } from "../types/employeeTableTypes";
import { computed, ref } from "vue";
import EmployeeTableActions from "../components/EmployeeTableActions.vue";
import { useEmployeeListStore } from "@/stores/employeeListStore";
import router from "@/router";
import {
  checkIfEmployed,
  checkIfTerminated,
  filterTableData,
  roundTableData,
  sortTableData,
} from "../helpers/tableHelper";

const props = defineProps<EmployeeTableTypes>();
const employeeListState = useEmployeeListStore();

/// Pagination Variables
const currentPage = ref<number>(1);
const size = 8;
const pageStart = computed(() => (currentPage.value - 1) * size);
const pageEnd = computed(() => currentPage.value * size);

/// Filter Functions
const filteredEmployees = computed(() => {
  currentPage.value = 1;
  return filterTableData(props.employees, props.filters);
});

/// Sorting Variables
const sortKey = ref<"code" | "fullName" | null>(null);
const sortAsc = ref(true);

/// Sorting Functions
const getSortingIcon = (key: string) => {
  if (sortKey.value === key) {
    if (sortAsc.value) {
      return "fa-solid fa-chevron-up";
    } else {
      return "fa-solid fa-chevron-down";
    }
  } else {
    return "fa-solid fa-minus";
  }
};

const setSort = (key: "code" | "fullName") => {
  if (sortKey.value === key) {
    sortAsc.value = !sortAsc.value;
  } else {
    sortKey.value = key;
    sortAsc.value = true;
  }
};

const sortedEmployees = computed(() => {
  return sortTableData(filteredEmployees.value, sortKey.value, sortAsc.value);
});

/// Table Rounding Function
const paddedData = computed(() => {
  return roundTableData(size, sortedEmployees.value);
});

/// Employee Actions
const viewEmployee = (employee: EmployeeTypes) => {
  router.push({
    path: "/form/view/",
    query: { employee: JSON.stringify(employee) },
  });
};
const editEmployee = (employee: EmployeeTypes) => {
  router.push({
    path: `/form/edit/`,
    query: { employee: JSON.stringify(employee) },
  });
};

const removeEmployee = (employee: EmployeeTypes) => {
  const removeConfirmation = confirm(`Are you sure you want to remove ${employee.fullName}?`)

  if (removeConfirmation) {employeeListState.removeEmployeeFromList(employee)};
}
</script>

<template>
  <table class="employee-table elevated">
    <thead class="employee-table__head">
      <tr class="employee-table__row">
        <td @click="setSort('code')">
          Code
          <font-awesome-icon
            :icon="getSortingIcon('code')"
            class="navbar__icon"
            widthAuto
          />
        </td>
        <td @click="setSort('fullName')">
          Full Name
          <font-awesome-icon
            :icon="getSortingIcon('fullName')"
            class="navbar__icon"
            widthAuto
          />
        </td>
        <td>Occupation</td>
        <td>Department</td>
        <td>Date of Employment</td>
        <td>Termination Date</td>
        <td></td>
      </tr>
    </thead>
    <tbody class="employee-table__body">
      <tr v-show="paddedData.length === 0" class="employee-table__empty"><td colspan="7">Please Import Employee List or Add Employee</td></tr>
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
          <td>{{ checkIfEmployed(employee.dateOfEmployment) }}</td>
          <td>
            {{
              employee.terminationDate &&
              checkIfTerminated(employee.terminationDate)
            }}
          </td>
          <td>
            <EmployeeTableActions
              @view="viewEmployee(employee)"
              @edit="editEmployee(employee)"
              @delete="removeEmployee(employee)"
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
