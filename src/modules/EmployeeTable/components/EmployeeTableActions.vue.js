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
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    ...{ class: "employee-table__actions" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.viewEmitter) },
    ...{ class: "employee-table__actions__button" },
});
// @ts-ignore
[viewEmitter,];
const __VLS_0 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
FontAwesomeIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    icon: "fa-solid fa-eye",
    ...{ class: "employee-table__actions__button__icon" },
}));
const __VLS_2 = __VLS_1({
    icon: "fa-solid fa-eye",
    ...{ class: "employee-table__actions__button__icon" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.editEmitter) },
    ...{ class: "employee-table__actions__button" },
});
// @ts-ignore
[editEmitter,];
const __VLS_5 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
FontAwesomeIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    icon: "fa-solid fa-pencil",
    ...{ class: "employee-table__actions__button__icon" },
}));
const __VLS_7 = __VLS_6({
    icon: "fa-solid fa-pencil",
    ...{ class: "employee-table__actions__button__icon" },
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
__VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.deleteEmitter) },
    ...{ class: "employee-table__actions__button" },
});
// @ts-ignore
[deleteEmitter,];
const __VLS_10 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
FontAwesomeIcon;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    icon: "fa-solid fa-trash",
    ...{ class: "employee-table__actions__button__icon" },
}));
const __VLS_12 = __VLS_11({
    icon: "fa-solid fa-trash",
    ...{ class: "employee-table__actions__button__icon" },
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
/** @type {__VLS_StyleScopedClasses['employee-table__actions']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__actions__button__icon']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
