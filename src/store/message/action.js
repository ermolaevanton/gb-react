export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ADD_CHAT = 'ADD_CHAT';
export const DELETE_CHAT = 'DELETE_CHAT';

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat
});

export const deleteChat = (chatName) => ({
    type: DELETE_CHAT,
    payload: chatName
});

export const addMessage = (chatName, text) => ({
    type: ADD_MESSAGE,
    payload: { chatName, text }
})

export const addMessageBot = (chatName, text) => (dispatch) => {
    dispatch(addMessage(chatName, text));

    if (text.author !== 'bot') {
        setTimeout(() => {
            dispatch(addMessage(chatName, {
                author: 'bot',
                text: '-------------'
            }))
        }, 1000);
    }
}
