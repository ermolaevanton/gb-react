import { nanoid } from 'nanoid';

export const selectChat = (state) => Object.keys(state.messages).map((chat) => ({
    id: nanoid(),
    name: chat
}));

export const selectMessage = (state) => state.messages;

export const selectChatName = (state) => Object.keys(state.messages.messageList)[0];