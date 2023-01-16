import { MessageList } from '../../components/MessageList/MessageList'
import styles from './style/Chat1.module.css'
import { Form } from '../../components/Form/Form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMessage } from '../../store/message/selectors';

export function ChatPage({ messagesDB, chats }) {
    console.log("🚀 ~ file: ChatPage.jsx:10 ~ ChatPage ~ chats", chats)
    const [messageList, setMessageList] = useState([]);
    const { chatName } = useParams();
    // const messages = useSelector(selectMessage);

    const messagesChat = chats.find((chat) => chat?.name === chatName);
    const messages = Object.entries(messagesChat.messages).map((mes) => ({
        id: mes[0],
        text: mes[1].text,
        author: mes[1].author,
    }));
    // const addMessage = (newMessage) => {
    //     setMessageList([...messageList, newMessage]);
    // }


    return (
        <div className={styles.MessageList__chat}>
            <MessageList messages={chatName ? messages : []} />
            <Form />
        </div>
    )
}