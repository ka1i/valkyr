import type { RouteRecordRaw } from 'vue-router';

import { LayoutView } from '/@/constant/index'
import { basicRoutes } from '/@/constant/menu-routes/index'

export const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    component: LayoutView,
    children: [
        ...basicRoutes,
    ]
}

export const routes: RouteRecordRaw[] = [RootRoute]
