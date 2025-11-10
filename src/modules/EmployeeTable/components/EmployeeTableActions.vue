<script setup lang="ts">
const emit = defineEmits(["view", "edit", "delete"]);

const viewEmitter = () => {
  emit("view");
};
const editEmitter = () => {
  emit("edit");
};
const deleteEmitter = () => {
  emit("delete");
};
</script>

<template>
  <section class="employee-table__actions">
    <button @click="viewEmitter" class="employee-table__actions__button">
      <font-awesome-icon
        icon="fa-solid fa-eye"
        class="employee-table__actions__button__icon"
      />
    </button>
    <button @click="editEmitter" class="employee-table__actions__button">
      <font-awesome-icon
        icon="fa-solid fa-pencil"
        class="employee-table__actions__button__icon"
      />
    </button>
    <button @click="deleteEmitter" class="employee-table__actions__button">
      <font-awesome-icon
        icon="fa-solid fa-trash"
        class="employee-table__actions__button__icon"
      />
    </button>
  </section>
</template>

<style lang="scss" src="../styles/_table.scss" scoped />
