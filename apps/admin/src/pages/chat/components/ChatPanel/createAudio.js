// const axios = require("axios");

import axios from "axios";

// replace your vercel domain
const baseUrl = "https://www.aodingdxj.top";

// async function customGenerateAudio(payload) {
//   const url = `${baseUrl}/api/custom_generate`;
//   const response = await axios.post(url, payload, {
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.data;
// }

// async function generateAudioByPrompt1(payload) {
//   const url = `${baseUrl}/api/generate`;
//   try {
//     const response = await axios.post(url, payload, {
//       headers: { "Content-Type": "application/json" },
//     });
//     return response.data;
//   } catch (e) {
//     return false;
//   }
// }

async function generateAudioByPrompt(payload) {
  const url = `https://api.coze.cn/v3/chat?`;
  try {
    const data = {};
    data.bot_id = "7468877821470179380";
    data.user_id = "martin";
    data.additional_messages = [{ content: payload.prompt, content_type: "text", role: "user" }];

    const response = await axios.post(url, data, {
      headers: { "Content-Type": "application/json", "Authorization": "Bearer pat_3tzJJFjORJ6HnOKfvnyYBtPXDnuBKxmkH6fn9Ihuat5rsBabJW5VQ4xp2dfERtrd" },
    });
    return response.data;
  } catch (e) {
    return false;
  }
}

// async function extendAudio(payload) {
//   const url = `${baseUrl}/api/extend_audio`;
//   const response = await axios.post(url, payload, {
//     headers: { "Content-Type": "application/json" },
//   });
//   return response.data;
// }

async function getAudioInformation(data) {
  const id = data.id;
  const conversation_id = data.conversation_id;
  const url = `https://api.coze.cn/v3/chat/message/list?conversation_id=${conversation_id}&chat_id=${id}`;
  const response = await axios.get(url, {
    headers: { "Content-Type": "application/json", "Authorization": "Bearer pat_3tzJJFjORJ6HnOKfvnyYBtPXDnuBKxmkH6fn9Ihuat5rsBabJW5VQ4xp2dfERtrd" },
  });
  return response.data;
}

// async function getAudioInformation1(audioIds) {
//   const url = `${baseUrl}/api/get?ids=${audioIds}`;
//   const response = await axios.get(url);
//   return response.data;
// }

// async function getQuotaInformation() {
//   const url = `${baseUrl}/api/get_limit`;
//   const response = await axios.get(url);
//   return response.data;
// }

// async function getClipInformation(clipId) {
//   const url = `${baseUrl}/api/clip?id=${clipId}`;
//   const response = await axios.get(url);
//   return response.data;
// }

// async function main() {
//   const data = await generateAudioByPrompt({
//     prompt:
//       //   "A popular heavy metal song about war, sung by a deep-voiced male singer, slowly and melodiously. The lyrics depict the sorrow of people after the war.",
//       "中文古风歌曲,江南水乡",
//     make_instrumental: false,
//     wait_audio: false,
//   });

//   const ids = `${data[0].id},${data[1].id}`;
//   console.log(`ids: ${ids}`);

//   for (let i = 0; i < 60; i++) {
//     const data = await getAudioInformation(ids);
//     if (data[0].status === "streaming") {
//       console.log(`${data[0].id} ==> ${data[0].audio_url}`);
//       console.log(`${data[1].id} ==> ${data[1].audio_url}`);
//       break;
//     }
//     // sleep 5s
//     await new Promise(resolve => setTimeout(resolve, 5000));
//   }
// }

export {
  generateAudioByPrompt,
  getAudioInformation,
};
