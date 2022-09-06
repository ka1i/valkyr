<template>
    <n-config-provider :locale="lang" :theme="theme" :theme-overrides="themeOverrides">
        <n-loading-bar-provider>
            <LoadingContent />
            <n-dialog-provider>
                <DialogContent />
                <n-notification-provider>
                    <n-message-provider>
                        <MessageContent />
                        <slot></slot>
                    </n-message-provider>
                </n-notification-provider>
            </n-dialog-provider>
        </n-loading-bar-provider>
    </n-config-provider>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { GlobalThemeOverrides } from 'naive-ui';
import {
    NDialogProvider,
    NMessageProvider,
    NLoadingBarProvider,
    NNotificationProvider,
} from 'naive-ui';

import useConfig from '/@/hooks/useConfig'
import { DialogContent } from '/@/components/DialogContent';
import { MessageContent } from '/@/components/MessageContent';
import { LoadingContent } from '/@/components/LoadingContent';
import { NotificationContent } from '/@/components/NotificationContent';

const themeOverrides: GlobalThemeOverrides = {
    common: {
        primaryColor: '#4fb233',
        primaryColorHover: '#4fb233',
        fontSize: '16px',
        borderRadius: '16px',
    },
}

export default defineComponent({
    name: "Provider",
    components: {
        DialogContent,
        MessageContent,
        LoadingContent,
        NDialogProvider,
        NMessageProvider,
        NotificationContent,
        NLoadingBarProvider,
        NNotificationProvider
    },
    setup() {
        const { theme, lang, } = useConfig()
        return {
            theme,
            lang,
            themeOverrides,
        }
    },
});
</script>
