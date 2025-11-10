import { EmployeeTable } from "@/modules/EmployeeTable";
import router from "@/router";
const navigateToAddEmployee = () => {
    router.push({ path: "/form/add" });
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "page employee-index" },
});
const __VLS_0 = {}.EmployeeTable;
/** @type {[typeof __VLS_components.EmployeeTable, ]} */ ;
// @ts-ignore
EmployeeTable;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-index__button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.navigateToAddEmployee) },
    ...{ class: "elevated employee-index__button" },
});
// @ts-ignore
[navigateToAddEmployee,];
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['elevated']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-index__button']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
