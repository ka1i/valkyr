import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes'

const router = createRouter({
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
  routes: routes,
  history: createWebHistory(import.meta.env.BASE_URL),
})

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router
