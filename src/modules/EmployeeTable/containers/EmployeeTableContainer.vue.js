import { useEmployeeListStore } from "@/stores/employeeListStore";
import EmployeeTable from "../components/EmployeeTable.vue";
import { ref } from "vue";
const inputRef = ref(null);
const employeeListState = useEmployeeListStore();
// Upload Handling
const onUpload = async () => {
    if ("showOpenFilePicker" in window) {
        try {
            const [handle] = await window.showOpenFilePicker({
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
        }
        catch (err) {
            console.warn("File picker cancelled or invalid JSON", err);
            return;
        }
    }
    inputRef.value?.click();
};
const onFileChange = (event) => {
    const target = event.target;
    const file = target.files?.[0];
    if (!file)
        return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const parsed = JSON.parse(e.target?.result);
            employeeListState.importEmployeeList(checkIfImportIsCorrect(parsed));
        }
        catch (err) {
            alert(err);
            console.error("Invalid JSON file", err);
        }
    };
    reader.readAsText(file);
    target.value = "";
};
const checkIfImportIsCorrect = (parsedImport) => {
    if (Array.isArray(parsedImport) && parsedImport.every(obj => obj && typeof obj === 'object' &&
        typeof obj.code === 'string' &&
        typeof obj.fullName === 'string' &&
        typeof obj.occupation === 'string' &&
        typeof obj.department === 'string' &&
        typeof obj.dateOfEmployment === 'string' &&
        (obj.terminationDate === undefined || obj.terminationDate === null || typeof obj.terminationDate === 'string'))) {
        return parsedImport;
    }
    throw new Error('Does not follow Employee JSON format');
};
// Filter Variables
const filters = ref({
    occupation: "",
    department: "",
    dateOfEmployment: "",
    terminationDate: "",
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-index__top" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-index__filters" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.filters.occupation),
    ...{ class: "employee-index__select" },
});
// @ts-ignore
[filters,];
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
for (const [o] of __VLS_getVForSourceType(([...new Set(__VLS_ctx.employeeListState.getEmployeeList.map((e) => e.occupation))]))) {
    // @ts-ignore
    [employeeListState,];
    __VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (o),
        value: (o),
    });
    (o);
}
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.filters.department),
    ...{ class: "employee-index__select" },
});
// @ts-ignore
[filters,];
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
for (const [d] of __VLS_getVForSourceType(([...new Set(__VLS_ctx.employeeListState.getEmployeeList.map((e) => e.department))]))) {
    // @ts-ignore
    [employeeListState,];
    __VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
        key: (d),
        value: (d),
    });
    (d);
}
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.filters.dateOfEmployment),
    ...{ class: "employee-index__select" },
});
// @ts-ignore
[filters,];
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Employed soon",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Currently employed",
});
__VLS_asFunctionalElement(__VLS_intrinsics.select, __VLS_intrinsics.select)({
    value: (__VLS_ctx.filters.terminationDate),
    ...{ class: "employee-index__select" },
});
// @ts-ignore
[filters,];
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "To be terminated",
});
__VLS_asFunctionalElement(__VLS_intrinsics.option, __VLS_intrinsics.option)({
    value: "Terminated",
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-index__button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.onUpload) },
    ...{ class: "elevated employee-index__button" },
});
// @ts-ignore
[onUpload,];
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.employeeListState.exportEmployeeList();
            // @ts-ignore
            [employeeListState,];
        } },
    ...{ class: "elevated employee-index__button" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    ...{ onChange: (__VLS_ctx.onFileChange) },
    ref: "inputRef",
    type: "file",
    accept: "application/json",
    hidden: true,
});
/** @type {typeof __VLS_ctx.inputRef} */ ;
// @ts-ignore
[onFileChange, inputRef,];
/** @type {[typeof EmployeeTable, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(EmployeeTable, new EmployeeTable({
    employees: (__VLS_ctx.employeeListState.getEmployeeList),
    filters: (__VLS_ctx.filters),
}));
const __VLS_1 = __VLS_0({
    employees: (__VLS_ctx.employeeListState.getEmployeeList),
    filters: (__VLS_ctx.filters),
}, ...__VLS_functionalComponentArgsRest(__VLS_0));
// @ts-ignore
[filters, employeeListState,];
/** @type {__VLS_StyleScopedClasses['employee-index__top']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__filters']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__select']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__select']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__select']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__select']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['elevated']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__button']} */ ;
/** @type {__VLS_StyleScopedClasses['elevated']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__button']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
