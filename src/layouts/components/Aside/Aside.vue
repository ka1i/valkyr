<template>
    <h1>Valkyr</h1>
    <el-menu default-active="1">
        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <message />
                </el-icon>Navigator One
            </template>
            <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="1-1">Option 1</el-menu-item>
                <el-menu-item index="1-2">Option 2</el-menu-item>
            </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
            <template #title>
                <el-icon>
                    <setting />
                </el-icon>Navigator Two
            </template>
            <el-menu-item-group>
                <template #title>Group 1</template>
                <el-menu-item index="3-1">Option 1</el-menu-item>
                <el-menu-item index="3-2">Option 2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
                <el-menu-item index="3-3">Option 3</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="3-4">
                <template #title>Option 4</template>
                <el-menu-item index="3-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
        </el-sub-menu>
    </el-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Message, Menu, Setting } from "@element-plus/icons";
export default defineComponent({
    components: {
        Message,
        Setting,
        "icon-menu": Menu,
    },
});
</script>

<style scope></style>
