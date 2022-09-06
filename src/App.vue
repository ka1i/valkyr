<template>
  <NConfigProvider>
    <Provider>
      <RouterView />
    </Provider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Provider from '/@/components/provider.vue'

const { pkg } = __APP_INFO__;

console.log(pkg.name + " app init")

</script>
  
<style>
@import '/@/assets/styles/index.scss'
</style>
