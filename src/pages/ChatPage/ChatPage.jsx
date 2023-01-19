import { MessageList } from '../../components/MessageList/MessageList'
import styles from './style/Chat1.module.css'
import { Form } from '../../components/Form/Form';
import { useParams } from 'react-router-dom';

export function ChatPage({ messagesDB, chats }) {
    const { chatName } = useParams();


    const messagesChat = chats.find((chat) => chat?.name === chatName);
    const messages = Object.entries(messagesChat.messages).map((mes) => ({
        id: mes[0],
        text: mes[1].text,
        author: mes[1].author,
    }));



    return (
        <div className={styles.MessageList__chat}>
            <MessageList messages={chatName ? messages : []} />
            <Form />
        </div>
    )
}