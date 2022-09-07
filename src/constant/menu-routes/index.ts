import type { RouteRecordRaw } from 'vue-router';

export const modules: any = import.meta.glob('./modules/*.ts', { eager: true });

const routeModuleList: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    const mod = modules[key].default || {};
    const modList = Array.isArray(mod) ? [...mod] : [mod];
    routeModuleList.push(...modList);
});

function sortRoute(a: any, b: any) {
    return (a.meta?.orderNo || 0) - (b.meta?.orderNo || 0);
}

routeModuleList.sort(sortRoute);

export const basicRoutes = routeModuleList

const MenuList: RouteRecordRaw[] = [];

Object.keys(routeModuleList).forEach((key) => {
    const menuItem = routeModuleList[key as unknown as number]
    MenuList.push(menuItem);
});

export const basicMenu = MenuList