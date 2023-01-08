import { MessageList } from '../../components/MessageList/MessageList'
import styles from './style/Chat1.module.css'
import { Form } from '../../components/Form/Form';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMessage } from '../../store/message/selectors';

export function ChatPage() {
    const [messageList, setMessageList] = useState([]);
    const { chatName } = useParams();
    const messages = useSelector(selectMessage);

    const addMessage = (newMessage) => {
        setMessageList([...messageList, newMessage]);
    }


    return (
        <div className={styles.MessageList__chat}>
            <MessageList messages={chatName ? messages[chatName] : []} />
            <Form addMessage={addMessage} />
        </div>
    )
}