<script setup lang="ts">
import type { RendererElement, RendererNode, VNode } from "vue";
import type { ChatContextInjectionKey } from "~/pages/chat/chatContext";
import { chatContextInjectionKey } from "~/pages/chat/chatContext";
import ActionIcon from "~/component/ActionIcon/src/ActionIcon.vue";

const emit = defineEmits<{
  (e: "changevalue", value: string): void;
}>();

const { selectedAssistantRef } = inject<ChatContextInjectionKey>(chatContextInjectionKey)!;
// const TrashIcon = "carbon:trash-can";
const MenuHorizontalIcon = "carbon:overflow-menu-horizontal";
const SHARE_ICON = "tabler:share";
// const ExportIcon = "tabler:download";
interface MenuItem {
  label: string;
  value: string;
  icon?: () => VNode<RendererNode, RendererElement, { [key: string]: any }>;
}
const menuItems: MenuItem[] = [
  {
    label: "模拟",
    value: "Demo",
  },
  {
    label: "正式",
    value: "Prd",
  },
];
const menuOptions = ref<MenuItem[]>(menuItems);

const popvalue = ref("Prd");

function changevalue() {
  emit("changevalue", popvalue.value);
}
</script>

<template>
  <div class="chat-panel-toolbar flex grow items-center sticky backdrop-blur pb-2">
    <div class="assistant flex items-center grow">
      <div
        class="flex items-center mr-2"
        :class="{ 'state-online': selectedAssistantRef.id === '0' }"
      >
        <!-- <NAvatar round size="large">
          AI
        </NAvatar> -->
      </div>
      <div class="info flex flex-col">
        <div class="name font-bold">
          Music AI音乐创建 - 丁靖元
        </div>
        <div class="description">
          充满活力和乐观，随时准备创建好听的歌曲。
        </div>
      </div>
    </div>

    <div class="actions-groups flex items-center gap-4 opacity-80 mr-4">
      <ActionIcon tooltip-text="分享" :icon="SHARE_ICON" :size="20" transparent />
    </div>
    <div class="menu-options flex justify-center opacity-80">
      <NPopselect v-model:value="popvalue" :options="menuOptions" @update:value="changevalue()">
        <ActionIcon :icon="MenuHorizontalIcon" :size="20" transparent />
      </NPopselect>
    </div>
  </div>
</template>

<style scoped>
.chat-panel-toolbar {
  position: sticky;
  top: 0;
  left: 0;
  backdrop-filter: blur(15px);
  width: 100%;
  max-width: 100%;
  z-index: 10;
}
</style>
