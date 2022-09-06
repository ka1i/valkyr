import LayoutView from '/@/layouts/index.vue'

export const routes = [
    {
        path: '/',
        name: 'Layout',
        component: LayoutView,
        children: [
            {
                path: '/',
                name: 'Console',
                component: () => import('/@/views/dashboard/console/index.vue')
            },
            {
                path: '/about',
                name: 'About',
                component: () => import('/@/views/sys/About/index.vue')
            }
        ]
    }
]