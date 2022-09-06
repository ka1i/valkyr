<template>
    <div position="relative">
        <n-layout position="absolute" style="transition: all 0.3s;" has-sider>
            <!-- 左侧区域 -->
            <n-layout-sider bordered position="absolute" collapse-mode="width" :collapsed-width="64" :width="220"
                :collapsed="collapsed" show-trigger="arrow-circle" @collapse="collapsed = true"
                @expand="collapsed = false">
                <!-- title -->
                <div class="app-layout-sider_title">
                    <img alt="Valkyr logo" class="logo" :class="{'mr-2': !collapsed}" src="/@/assets/logo.png"
                        width="30" height="30" />
                    <span v-show="!collapsed">
                        {{ env.valkyr_app_title }}
                    </span>
                </div>
                <!-- 左侧菜单 -->
                <n-menu :value="activeName" :options="layoutOptions" :collapsed-width="64" :collapsed-icon-size="22"
                    @update:value="handleMenuSelect" />
            </n-layout-sider>
            <!-- 右侧区域-->
            <n-layout position="absolute" style="transition: all 0.3s;" :style="{ left: collapsed ? '64px' : '220px' }">
                <!-- header区域-->
                <Header />
                <!-- 页面内容区域-->
                <n-layout-content class="layout-content">
                    <div>
                        <router-view v-slot="{ Component }">
                            <component :is="Component" :key="$route.path" />
                        </router-view>
                    </div>
                </n-layout-content>
            </n-layout>
        </n-layout>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import type { MenuOption } from 'naive-ui'

import { Header } from './Header/index'
import { renderIcon } from '/@/utils/index'

import { Home, InformationCircle } from '@vicons/ionicons5'

const LAYOUT_ITEMS = [
    {
        label: 'Home',
        key: '/',
        icon: renderIcon(Home)
    },
    {
        label: 'About',
        key: '/about',
        icon: renderIcon(InformationCircle)
    },
]

const router = useRouter()
const env = import.meta.env

const activeName = ref('/')
const collapsed = ref<boolean>(false)
const layoutOptions = ref<MenuOption[]>(LAYOUT_ITEMS)

const handleMenuSelect = (value: string) => {
    activeName.value = value
    router.push({
        path: value,
    })
}
</script>

<style scoped lang="scss">
.app-layout-sider_title {
    display: flex;
    margin: auto;
    padding: 12px;
    font-weight: 500;
    font-size: 26px;
    align-items: center;
    justify-content: center;
    white-space: nowrap;

    .logo {
        height: max-content;
    }
}
</style>
    