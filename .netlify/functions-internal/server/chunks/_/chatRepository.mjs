import { c as useStorage, M as MOCK_CHAT } from './nitro.mjs';
import { v4 } from 'uuid';
import { g as getProjectById } from './projectRepository.mjs';

const storage = useStorage("db");
const chatsKey = "chats:all";
async function getChats() {
  let chats = await storage.getItem(chatsKey);
  if (chats === null) {
    chats = [MOCK_CHAT];
    await saveChats(chats);
  }
  return chats;
}
async function saveChats(chats) {
  await storage.setItem(chatsKey, chats);
}
async function getAllChats() {
  const chats = await getChats();
  let transformedChats = await Promise.all(
    chats.map(async (chat) => {
      const lastMessage = await getLastMessageForChat(chat.id);
      return {
        ...chat,
        messages: lastMessage ? [lastMessage] : [],
        project: chat.projectId ? await getProjectById(chat.projectId) || void 0 : void 0
      };
    })
  );
  transformedChats = transformedChats.sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
  return transformedChats;
}
async function createChat(data) {
  const now = /* @__PURE__ */ new Date();
  const newChat = {
    id: v4(),
    title: data.title || "New Chat",
    projectId: data.projectId,
    messages: [],
    createdAt: now,
    updatedAt: now
  };
  const chats = await getChats();
  chats.push(newChat);
  await saveChats(chats);
  const project = data.projectId ? await getProjectById(data.projectId) : null;
  return {
    ...newChat,
    project
  };
}
async function getChatById(id) {
  const chats = await getChats();
  const chat = chats.find((c) => c.id === id);
  if (!chat) return null;
  const lastMessage = await getLastMessageForChat(id);
  return {
    ...chat,
    messages: lastMessage ? [lastMessage] : [],
    project: chat.projectId ? await getProjectById(chat.projectId) : null
  };
}
async function updateChat(id, data) {
  const chats = await getChats();
  const chatIndex = chats.findIndex((c) => c.id === id);
  if (chatIndex === -1) return null;
  const chat = chats[chatIndex];
  if (!chat) return null;
  const updatedChat = {
    ...chat,
    ...data.title && { title: data.title },
    ...data.projectId !== void 0 && {
      projectId: data.projectId
    },
    updatedAt: /* @__PURE__ */ new Date()
  };
  chats[chatIndex] = updatedChat;
  await saveChats(chats);
  const lastMessage = await getLastMessageForChat(id);
  return {
    ...updatedChat,
    messages: lastMessage ? [lastMessage] : [],
    project: updatedChat.projectId ? await getProjectById(updatedChat.projectId) : null
  };
}
async function getMessagesByChatId(chatId) {
  const chats = await getChats();
  const chat = chats.find((c) => c.id === chatId);
  if (!chat) return [];
  return [...chat.messages].sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );
}
async function createMessageForChat(data) {
  const chats = await getChats();
  const chatIndex = chats.findIndex((c) => c.id === data.chatId);
  if (chatIndex === -1) return null;
  const chat = chats[chatIndex];
  if (!chat) return null;
  const now = /* @__PURE__ */ new Date();
  const newMessage = {
    id: v4(),
    content: data.content,
    role: data.role,
    createdAt: now,
    updatedAt: now
  };
  chat.messages.push(newMessage);
  chat.updatedAt = now;
  chats[chatIndex] = chat;
  await saveChats(chats);
  return newMessage;
}
async function getLastMessageForChat(chatId) {
  const chats = await getChats();
  const chat = chats.find((c) => c.id === chatId);
  if (!chat || chat.messages.length === 0) return null;
  const lastMessage = chat.messages.reduce(
    (latest, msg) => msg.createdAt > latest.createdAt ? msg : latest
  );
  return {
    ...lastMessage,
    createdAt: new Date(lastMessage.createdAt),
    updatedAt: new Date(lastMessage.updatedAt)
  };
}

export { getMessagesByChatId as a, getAllChats as b, createMessageForChat as c, createChat as d, getChatById as g, updateChat as u };
//# sourceMappingURL=chatRepository.mjs.map
