<template>
    <!-- header区域-->
    <n-layout-header class="n-layout-header" bordered>
        <div style="padding-right: 40px;">
            <span style="margin-right: 20px;" @click="changeTheme">{{ theme === null ? '浅色' : '深色' }}</span>
            <span @click="changeLang">{{ showLang }}</span>
        </div>
    </n-layout-header>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import useConfig from '/@/hooks/useConfig'

const { theme, lang, changeTheme, changeLang, } = useConfig()
const showLang = computed(() => {
    return lang.value.name === 'zh-CN' ? '中文' : 'English'
})

</script>

<style scoped lang="scss">
.n-layout-header {
    padding: 16px;
    display: flex;
    justify-content: flex-end;
}

.n-layout-header span {
    cursor: pointer;
}
</style>
    