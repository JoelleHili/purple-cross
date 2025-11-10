import { computed, ref } from "vue";
import EmployeeTableActions from "../components/EmployeeTableActions.vue";
import { useEmployeeListStore } from "@/stores/employeeListStore";
import router from "@/router";
import { checkIfEmployed, checkIfTerminated, filterTableData, roundTableData, sortTableData, } from "../helpers/tableHelper";
const props = defineProps();
const employeeListState = useEmployeeListStore();
// Pagination Variables
const currentPage = ref(1);
const size = 8;
const pageStart = computed(() => (currentPage.value - 1) * size);
const pageEnd = computed(() => currentPage.value * size);
// Filter Functions
const filteredEmployees = computed(() => {
    currentPage.value = 1;
    return filterTableData(props.employees, props.filters);
});
// Sorting Variables
const sortKey = ref(null);
const sortAsc = ref(true);
// Sorting Functions
const getSortingIcon = (key) => {
    if (sortKey.value === key) {
        if (sortAsc.value) {
            return "fa-solid fa-chevron-up";
        }
        else {
            return "fa-solid fa-chevron-down";
        }
    }
    else {
        return "fa-solid fa-minus";
    }
};
const setSort = (key) => {
    if (sortKey.value === key) {
        sortAsc.value = !sortAsc.value;
    }
    else {
        sortKey.value = key;
        sortAsc.value = true;
    }
};
const sortedEmployees = computed(() => {
    return sortTableData(filteredEmployees.value, sortKey.value, sortAsc.value);
});
// Table Rounding Function
const paddedData = computed(() => {
    return roundTableData(size, sortedEmployees.value);
});
// Employee Actions
const viewEmployee = (employee) => {
    router.push({
        path: "/form/view/",
        query: { employee: JSON.stringify(employee) },
    });
};
const editEmployee = (employee) => {
    router.push({
        path: `/form/edit/`,
        query: { employee: JSON.stringify(employee) },
    });
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
__VLS_asFunctionalElement(__VLS_intrinsics.table, __VLS_intrinsics.table)({
    ...{ class: "employee-table elevated" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.thead, __VLS_intrinsics.thead)({
    ...{ class: "employee-table__head" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
    ...{ class: "employee-table__row" },
});
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setSort('code');
            // @ts-ignore
            [setSort,];
        } },
});
const __VLS_0 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
FontAwesomeIcon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    icon: (__VLS_ctx.getSortingIcon('code')),
    ...{ class: "navbar__icon" },
    widthAuto: true,
}));
const __VLS_2 = __VLS_1({
    icon: (__VLS_ctx.getSortingIcon('code')),
    ...{ class: "navbar__icon" },
    widthAuto: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[getSortingIcon,];
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.setSort('fullName');
            // @ts-ignore
            [setSort,];
        } },
});
const __VLS_5 = {}.FontAwesomeIcon;
/** @type {[typeof __VLS_components.FontAwesomeIcon, typeof __VLS_components.fontAwesomeIcon, ]} */ ;
// @ts-ignore
FontAwesomeIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    icon: (__VLS_ctx.getSortingIcon('fullName')),
    ...{ class: "navbar__icon" },
    widthAuto: true,
}));
const __VLS_7 = __VLS_6({
    icon: (__VLS_ctx.getSortingIcon('fullName')),
    ...{ class: "navbar__icon" },
    widthAuto: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
// @ts-ignore
[getSortingIcon,];
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
__VLS_asFunctionalElement(__VLS_intrinsics.tbody, __VLS_intrinsics.tbody)({
    ...{ class: "employee-table__body" },
});
for (const [employee, index] of __VLS_getVForSourceType((__VLS_ctx.paddedData.slice(__VLS_ctx.pageStart, __VLS_ctx.pageEnd)))) {
    // @ts-ignore
    [paddedData, pageStart, pageEnd,];
    __VLS_asFunctionalElement(__VLS_intrinsics.tr, __VLS_intrinsics.tr)({
        key: (employee ? employee.code : `empty-${index}`),
        ...{ class: "employee-table__row" },
    });
    if (employee) {
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (employee.code);
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (employee.fullName);
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (employee.occupation);
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (employee.department);
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (__VLS_ctx.checkIfEmployed(employee.dateOfEmployment));
        // @ts-ignore
        [checkIfEmployed,];
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        (employee.terminationDate &&
            __VLS_ctx.checkIfTerminated(employee.terminationDate));
        // @ts-ignore
        [checkIfTerminated,];
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        /** @type {[typeof EmployeeTableActions, ]} */ ;
        // @ts-ignore
        const __VLS_10 = __VLS_asFunctionalComponent(EmployeeTableActions, new EmployeeTableActions({
            ...{ 'onView': {} },
            ...{ 'onEdit': {} },
            ...{ 'onDelete': {} },
        }));
        const __VLS_11 = __VLS_10({
            ...{ 'onView': {} },
            ...{ 'onEdit': {} },
            ...{ 'onDelete': {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_10));
        let __VLS_13;
        let __VLS_14;
        const __VLS_15 = ({ view: {} },
            { onView: (...[$event]) => {
                    if (!(employee))
                        return;
                    __VLS_ctx.viewEmployee(employee);
                    // @ts-ignore
                    [viewEmployee,];
                } });
        const __VLS_16 = ({ edit: {} },
            { onEdit: (...[$event]) => {
                    if (!(employee))
                        return;
                    __VLS_ctx.editEmployee(employee);
                    // @ts-ignore
                    [editEmployee,];
                } });
        const __VLS_17 = ({ delete: {} },
            { onDelete: (...[$event]) => {
                    if (!(employee))
                        return;
                    __VLS_ctx.employeeListState.removeEmployeeFromList(employee);
                    // @ts-ignore
                    [employeeListState,];
                } });
        var __VLS_12;
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
        __VLS_asFunctionalElement(__VLS_intrinsics.td, __VLS_intrinsics.td)({});
    }
}
const __VLS_19 = {}.UPagination;
/** @type {[typeof __VLS_components.UPagination, typeof __VLS_components.UPagination, ]} */ ;
// @ts-ignore
UPagination;
// @ts-ignore
const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
    page: (__VLS_ctx.currentPage),
    itemsPerPage: (__VLS_ctx.size),
    total: (__VLS_ctx.sortedEmployees.length),
    siblingCount: (1),
    showEdges: true,
}));
const __VLS_21 = __VLS_20({
    page: (__VLS_ctx.currentPage),
    itemsPerPage: (__VLS_ctx.size),
    total: (__VLS_ctx.sortedEmployees.length),
    siblingCount: (1),
    showEdges: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_20));
const { default: __VLS_23 } = __VLS_22.slots;
// @ts-ignore
[currentPage, size, sortedEmployees,];
{
    const { item: __VLS_24 } = __VLS_22.slots;
    const [{ item, page }] = __VLS_getSlotParameters(__VLS_24);
    if (item.type === 'page') {
        __VLS_asFunctionalElement(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (...[$event]) => {
                    if (!(item.type === 'page'))
                        return;
                    __VLS_ctx.currentPage = item.value;
                    // @ts-ignore
                    [currentPage,];
                } },
            ...{ class: "pagination__item" },
            ...{ class: ({ pagination__item__active: item.value === page }) },
        });
        (item.value);
    }
    else {
        __VLS_asFunctionalElement(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "pagination__ellipsis" },
        });
    }
}
var __VLS_22;
/** @type {__VLS_StyleScopedClasses['employee-table']} */ ;
/** @type {__VLS_StyleScopedClasses['elevated']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__head']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__row']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['navbar__icon']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__body']} */ ;
/** @type {__VLS_StyleScopedClasses['employee-table__row']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination__item']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination__item__active']} */ ;
/** @type {__VLS_StyleScopedClasses['pagination__ellipsis']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
