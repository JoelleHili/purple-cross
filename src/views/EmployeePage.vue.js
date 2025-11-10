import { EmployeeForm } from "@/modules/EmployeeForm";
import { useRoute } from "vue-router";
const route = useRoute();
const type = route.params.type;
let data = undefined;
if (typeof route.query.employee === "string") {
    try {
        data = JSON.parse(route.query.employee);
    }
    catch (err) {
        console.error("Invalid employee JSON in query:", err);
    }
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "page employee-form" },
});
const __VLS_0 = {}.EmployeeForm;
/** @type {[typeof __VLS_components.EmployeeForm, ]} */ ;
// @ts-ignore
EmployeeForm;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    type: (__VLS_ctx.type),
    data: (__VLS_ctx.data),
}));
const __VLS_2 = __VLS_1({
    type: (__VLS_ctx.type),
    data: (__VLS_ctx.data),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[type, data,];
/** @type {__VLS_StyleScopedClasses['page']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
