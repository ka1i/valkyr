import type { RouteRecordRaw } from 'vue-router';

import { renderIcon } from '/@/utils/index'
import { InformationCircle } from '@vicons/ionicons5';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/about',
        name: 'About',
        meta: {
            orderNo: 100001,
            title: "About",
            icon: renderIcon(InformationCircle),
        },
        component: () => import('/@/views/sys/About/index.vue'),
    }
]

export default routes