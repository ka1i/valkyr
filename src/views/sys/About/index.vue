<template>
    <div>
        <div class="n-layout-page-header">
            <n-card :bordered="false" title="关于">
                {{ pkg.name }} 是一个基于 vue3，vite2，TypeScript
                的项目学习记录。
            </n-card>
        </div>
        <n-card :bordered="false" title="项目信息" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item label="版本">
                    <n-tag type="info"> {{ pkg.version }}@{{ gitTags }} </n-tag>
                </n-descriptions-item>
                <n-descriptions-item label="作者">
                    <n-tag type="info">
                        <div class="flex items-center">
                            <a :href='pkg.author.url' class="py-2" target="_blank">{{ pkg.author.name }}</a>
                        </div>
                    </n-tag>
                </n-descriptions-item>
                <n-descriptions-item label="代码仓库">
                    <div class="flex items-center">
                        <a :href='pkg.repository.url' class="py-2" target="_blank">{{
                        pkg.repository.url
                        }}</a>&ensp;<span class="font-bold">&copy;{{ pkg.license }}</span>
                    </div>
                </n-descriptions-item>
                <n-descriptions-item label="构建时间">
                    <n-tag type="info"> {{ lastBuildTime }} </n-tag>
                </n-descriptions-item>
                <n-descriptions-item label="描述">
                    <n-tag type="info"> {{ pkg.description }} </n-tag>
                </n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card :bordered="false" title="生产环境依赖" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item v-for="item in schema" :key="item.field" :label="item.field">
                    {{ item.label }}
                </n-descriptions-item>
            </n-descriptions>
        </n-card>

        <n-card :bordered="false" title="开发环境依赖" class="mt-4 proCard" size="small" :segmented="{ content: true }">
            <n-descriptions bordered label-placement="left" class="py-2">
                <n-descriptions-item v-for="item in     devSchema" :key="item.field" :label="item.field">
                    {{ item.label }}
                </n-descriptions-item>
            </n-descriptions>
        </n-card>


    </div>
</template>

<script setup lang="ts">
export interface schemaItem {
    field: string;
    label: string;
}

const { pkg, lastBuildTime, gitTags } = __APP_INFO__;
const { dependencies, devDependencies } = pkg;

const schema: schemaItem[] = [];
const devSchema: schemaItem[] = [];

Object.keys(dependencies).forEach((key) => {
    schema.push({ field: key, label: dependencies[key] });
});

Object.keys(devDependencies).forEach((key) => {
    devSchema.push({ field: key, label: devDependencies[key] });
});
</script>