import type { defineComponent } from 'vue';
import type { RouteRecordRaw, RouteMeta } from 'vue-router';

export type Component<T extends any = any> =
    | ReturnType<typeof defineComponent>
    | (() => Promise<typeof import('*.vue')>)
    | (() => Promise<T>);

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
    name: string;
    meta: RouteMeta;
    component?: Component | string;
    components?: Component;
    children?: RouteRecordRaw[];
    props?: Recordable;
    fullPath?: string;
}

export interface Meta {
    title: string;
    orderNo?: number,
    icon?: any;
}

export interface MenuRoutes {
    key: string;
    name: string
    path: string
    label: string;
    redirect?: string;
    component?: Component | string;
    components?: Component;
    meta: RouteMeta
    children?: AppRouteRecordRaw[];
}
