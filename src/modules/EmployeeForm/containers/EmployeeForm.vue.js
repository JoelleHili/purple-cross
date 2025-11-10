import { useEmployeeListStore } from "@/stores/employeeListStore";
import router from "@/router";
import { useRoute } from "vue-router";
const props = defineProps();
const employeeListState = useEmployeeListStore();
const route = useRoute();
const from = route.query.from;
const checkTypeValidation = (type) => {
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
const submitForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const employee = {};
    formData.forEach((value, key) => {
        const typedKey = key;
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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
if (props.type === 'view') {
    __VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "employee-form__title" },
    });
}
else if (props.type === 'edit') {
    __VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "employee-form__title" },
    });
}
else if (props.type === 'add') {
    __VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "employee-form__title" },
    });
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
        ...{ class: "employee-form__title" },
    });
}
__VLS_asFunctionalElement(__VLS_intrinsics.form, __VLS_intrinsics.form)({
    ...{ onSubmit: (__VLS_ctx.submitForm) },
    ...{ class: "employee-form__form" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (__VLS_ctx.checkTypeValidation(props.type)) }, null, null);
// @ts-ignore
[submitForm, checkTypeValidation,];
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "code",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "text",
    id: "code",
    name: "code",
    value: (props.data?.code),
    required: true,
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "fullName",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "text",
    id: "fullName",
    name: "fullName",
    value: (props.data?.fullName),
    required: true,
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "occupation",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "text",
    id: "occupation",
    name: "occupation",
    value: (props.data?.occupation),
    required: true,
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "department",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "text",
    id: "department",
    name: "department",
    value: (props.data?.department),
    required: true,
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "dateOfEmployment",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "date",
    id: "dateOfEmployment",
    name: "dateOfEmployment",
    value: (props.data?.dateOfEmployment),
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__field" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    for: "terminationDate",
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "date",
    id: "terminationDate",
    name: "terminationDate",
    value: (props.data?.terminationDate),
    disabled: (props.type === 'view'),
});
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-form__button-group" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.router.push(__VLS_ctx.from ?? '/');
            // @ts-ignore
            [router, from,];
        } },
});
__VLS_asFunctionalElement(__VLS_intrinsics.input)({
    type: "submit",
    ...{ class: "employee-form__submit" },
});
__VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, value: (props.type === 'add' || props.type === 'edit') }, null, null);
/** @type {__VLS_StyleScopedClasses['employee-form__title']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__title']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__title']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__title']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__form']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__field']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__button-group']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-form__submit']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
