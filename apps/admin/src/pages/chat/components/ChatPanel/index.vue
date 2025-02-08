<script setup lang="ts">
import type { UserInfo } from "@celeris/types";
import type { VirtualListInst } from "naive-ui";
import { logger } from "@celeris/utils";
import { generateAudioByPrompt, getAudioInformation } from "./createAudio";
import ChatPanelToolbar from "~/pages/chat/components/ChatPanel/ChatPanelToolbar.vue";
import ActionIcon from "~/component/ActionIcon/src/ActionIcon.vue";

defineOptions({
  name: "ChatPanel",
});

defineProps({
  maxHeight: {
    type: Number,
  },
});
const chatWrapperRef = resolveRef(null);
const toolbarRef = resolveRef(null);

const { height: wrapperHeight } = useElementSize(chatWrapperRef);
const { height: toolbarHeight } = useElementSize(toolbarRef);

const throttledWrapperHeight = refThrottled(wrapperHeight, 60);

const maxChatPanelHeight = computed(() => {
  return throttledWrapperHeight.value - toolbarHeight.value - 15;
});

const conversationsVirtualListInst = ref<VirtualListInst>();
interface Message {
  text: string;
  date: Date;
}

interface Conversation {
  id: number;
  user: UserInfo | null;
  isMine: boolean;
  loading: boolean;
  src: string;
  src1: string;
  messages: Message[];
  date: Date;
}

// 获取初始数据
function generateInitData(): Conversation[] {
  const fakeData: Conversation[] = [];
  const conversation: Conversation = {
    id: 1,
    user: null,
    isMine: false,
    loading: false,
    src: "",
    src1: "",
    messages: [],
    date: new Date(),
  };

  const message: Message = {
    text: "...",
    date: new Date(),
  };
  conversation.messages.push(message);
  fakeData.push(conversation);

  return fakeData;
}

const conversations: any = ref([]);
conversations.value = generateInitData();

// 页面加载
onMounted(() => {
  conversations.value[0].messages[0].text = "";
  const msgs = "Hi 您好呀! 请问有什么可以帮您? 您可以试着输入歌曲的风格(如江南风、80年代摇滚、Western Country、中国民谣等)，让我来帮您生成歌曲。";
  let times = 1;
  for (const str of msgs) {
    setTimeout(() => {
      conversations.value[0].messages[0].text += str;
    }, times * 100);
    times++;
  }

  nextTick(() => {
    conversationsVirtualListInst.value?.scrollTo({ position: "bottom" });
  });
});

// 发送的消息
const msg = ref("");

const mode = ref("Prd");

let msgcount = 1;
// 发送按钮
async function sendMsg() {
  if (!msg.value) {
    return;
  }

  const prompt = msg.value;

  // 问题
  let conversation: Conversation = {
    id: msgcount,
    user: null,
    isMine: true,
    src: "",
    src1: "",
    loading: false,
    messages: [],
    date: new Date(),
  };

  let message: Message = {
    text: msg.value,
    date: new Date(),
  };
  conversation.messages.push(message);

  conversations.value.push(conversation);

  msg.value = "";
  msgcount++;

  // 回答
  conversation = {
    id: msgcount,
    user: null,
    src: "",
    src1: "",
    isMine: false,
    messages: [],
    loading: true,
    date: new Date(),
  };

  message = {
    text: "好的，这就为您生成歌曲...",
    date: new Date(),
  };
  conversation.messages.push(message);

  conversations.value.push(conversation);
  msgcount++;

  // ai生成歌曲 start
  if (mode.value === "Prd") {
    const data = await generateAudioByPrompt({
      prompt,
      make_instrumental: false,
      wait_audio: false,
    });

    if (!data) {
      conversations.value[conversations.value.length - 1].messages[0].text = "很遗憾，未能生成你想要的歌曲!";
      conversations.value[conversations.value.length - 1].loading = false;
      return;
    }

    const ids = data.data;
    // const ids = `${data[0].id},${data[1].id}`;
    // logger.info(`ids: ${ids}`);

    // for (let i = 0; i < 60; i++) {
    //   const data = await getAudioInformation(ids);
    //   if (data[0].status === "streaming") {
    //     logger.info(`${data[0].id} ==> ${data[0].audio_url}`);
    //     logger.info(`${data[1].id} ==> ${data[1].audio_url}`);

    //     conversations.value[conversations.value.length - 1].messages[0].text = "已经生成了2首歌曲,请听";
    //     conversations.value[conversations.value.length - 1].src = data[0].audio_url;
    //     conversations.value[conversations.value.length - 1].src1 = data[1].audio_url;
    //     conversations.value[conversations.value.length - 1].loading = false;

    //     break;
    //   }
    //   // sleep 5s
    //   await new Promise(resolve => setTimeout(resolve, 5000));
    // }

    for (let i = 0; i < 60; i++) {
      const data = await getAudioInformation(ids);
      if (data.code === 0) {
        // logger.info(`${data[0].id} ==> ${data[0].audio_url}`);
        // logger.info(`${data[1].id} ==> ${data[1].audio_url}`);

        let flag = false;

        for (let j = 0; j < data.data?.length; j++) {
          if (data.data[j].type === "answer") {
            const content = data.data[j].content;
            conversations.value[conversations.value.length - 1].messages[0].text = content;
            const startindex = content.indexOf("https://");
            const endindex = content.indexOf(".wav") + 4;
            const url = content.substring(startindex, endindex);
            conversations.value[conversations.value.length - 1].src = url;
            // conversations.value[conversations.value.length - 1].src1 = data[1].audio_url;
            conversations.value[conversations.value.length - 1].loading = false;
            flag = true;

            break;
          }
        }

        if (flag) {
          break;
        }
      }
      // sleep 5s
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }
  // ai生成歌曲 end

  // test
  if (mode.value === "Demo") {
    setTimeout(() => {
      const url = "/audio.mp3";
      const url1 = "/audio1.mp3";
      conversations.value[conversations.value.length - 1].messages[0].text = "已经生成了2首歌曲,请听";
      conversations.value[conversations.value.length - 1].src = url;
      conversations.value[conversations.value.length - 1].src1 = url1;
      conversations.value[conversations.value.length - 1].loading = false;
    }, 2000);
  }

  nextTick(() => {
    conversationsVirtualListInst.value?.scrollTo({ position: "bottom" });
  });
}

function download(url) {
  // 创建一个隐藏的链接元素
  const link = document.createElement("a");
  link.href = url;
  link.target = "_blank";
  link.setAttribute("download", "audio.mp3"); // 设置下载的文件名
  link.style.display = "none";

  // 触发点击事件来下载文件
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function changevalue(value) {
  mode.value = value;
}
</script>

<template>
  <NSplit direction="vertical" :default-size="0.8">
    <template #1>
      <ChatPanelToolbar ref="toolbarRef" class="overflow-hidden" @changevalue="changevalue" />
      <div ref="chatWrapperRef" class="w-full h-full flex flex-col">
        <div
          class="w-full common-bg dark:bg-[--action-color] rounded-2xl"
          :style="{ height: `${maxChatPanelHeight}px` }"
        >
          <NVirtualList
            id="conlist" ref="conversationsVirtualListInst"
            :style="{ maxHeight: `${maxChatPanelHeight}px` }" :item-size="conversations.length" :items="conversations"
            class="chat-virtual-list" item-resizable
          >
            <template #default="{ item, index }">
              <div :key="index" class="conversation flex" :class="{ mine: item.isMine }">
                <div class="avatar">
                  <NAvatar v-if="item.isMine" round size="large" src="/pic.jpg" />
                  <NAvatar v-if="!item.isMine" round size="large">
                    AI
                  </NAvatar>
                </div>
                <div class="messages flex flex-col">
                  <div v-for="message of item.messages" :key="message.text" class="message">
                    <span v-html="message.text" />
                    <NSpin v-if="item.loading" size="small" />
                    <NSpace v-if="!item.loading && item.src">
                      <audio controls>
                        <source :src="item.src" type="audio/mpeg">
                      </audio>
                      <a style="cursor:pointer" @click="download(item.src)">下载1</a>
                      <!-- <audio controls>
                        <source :src="item.src1" type="audio/mpeg">
                      </audio>
                      <a style="cursor:pointer" @click="download(item.src1)">下载2</a> -->
                    </NSpace>
                  </div>
                  <div class="date">
                    <NTime :time="item.date" format="MM-dd HH:mm:ss" />
                  </div>
                </div>
              </div>
            </template>
          </NVirtualList>
        </div>
      </div>
    </template>
    <template #2>
      <div class="h-full w-full flex flex-col py-2">
        <div class="mb-1" />
        <NInput
          v-model:value="msg" type="textarea" placeholder="请输入音乐风格。。。。" clearable round show-count
          :resizable="false" class="h-full bg-[--action-color]" @keyup.enter="sendMsg()"
        />
        <div class="flex mt-1">
          <div class="flex-1" />
          <div class="flex items-center">
            <NSpace>
              <ActionIcon tooltip-text="发送" icon="i-tabler-send" style="cursor: pointer;" @click="sendMsg()">
                发送
              </ActionIcon>
            </NSpace>
          </div>
        </div>
      </div>
    </template>
  </NSplit>
</template>

<style scoped>
.chat-virtual-list .conversation {
  padding: 20px 30px;
  gap: 14px;
}

.chat-virtual-list .conversation .messages {
  width: fit-content;
  max-width: 60%;
}

.chat-virtual-list .conversation .messages .message {
  background-color: var(--base-color);
  margin-bottom: 5px;
  padding: 5px 10px;
  border-radius: var(--border-radius);
  width: fit-content;
  font-size: 14px;
}

.chat-virtual-list .conversation .messages .date {
  opacity: 0.8;
  font-size: 12px;
  padding: 0 3px;
}

.chat-virtual-list .conversation.mine {
  flex-direction: row-reverse;
}

.chat-virtual-list .conversation.mine .messages {
  align-items: end;
}

.chat-virtual-list .conversation.mine .messages .message {
  background-color: var(--primary-color);
  color: var(--base-color);
}
</style>
