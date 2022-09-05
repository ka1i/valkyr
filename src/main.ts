import { createApp } from 'vue'

import App from './App.vue'
import { setupStore } from '/@/stores'
import router, { setupRouter } from '/@/router'

import '/@/assets/styles/main.css'

async function bootstrap() {
    const app = createApp(App)

    // 挂载状态管理
    setupStore(app)
    // 挂载路由
    setupRouter(app)

    // 路由准备就绪后挂载APP实例
    await router.isReady();

    app.mount('#app')
}

// start valkyr app
void bootstrap()
