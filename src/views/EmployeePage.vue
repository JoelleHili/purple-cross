<script setup lang="ts">
import { EmployeeForm } from '@/modules/EmployeeForm';
import { EmployeeTypes } from '@/types/EmployeeTypes';
import { useRoute } from 'vue-router';

const route = useRoute()

const type = route.params.type as 'view' | 'edit' | 'add';
const dataParam = route.params.data as string | undefined;
const data: EmployeeTypes | undefined = dataParam ? (dataParam as unknown as EmployeeTypes) : undefined;
</script>

<template>
    <section class="page employee-form">
        <EmployeeForm :type="type" :data="data"/>
    </section>
</template>