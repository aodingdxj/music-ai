<script setup lang="ts">
import { logger } from "@celeris/utils";
import { useNaiveUIConfigProvider } from "~/composables";
import { subscribeStore } from "~/store/subscribe";
import Chat from "~/pages/chat/index.vue";

/**
 * Subscribe to the store.
 * 订阅 store。
 */
subscribeStore();
// logger.info("I'm ready!  ⸜(๑'ᵕ'๑)⸝⋆*");
const { configProviderProps } = useNaiveUIConfigProvider();
</script>

<template>
  <NConfigProvider v-bind="configProviderProps" class="w-full h-full">
    <CAAppNaiveUIProvider>
      <Chat />
      <!-- <RouterView /> -->
    </CAAppNaiveUIProvider>
  </NConfigProvider>
</template>
