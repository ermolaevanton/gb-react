import { MessageList } from '../../components/MessageList/MessageList'
import styles from './style/Chat1.module.css'
import { Form } from '../../components/Form/Form';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMessage } from '../../store/message/selectors';

export function Chat1() {
    const [messageList, setMessageList] = useState([]);
    const { chatName } = useParams();
    const messages = useSelector(selectMessage);

    const addMessage = (newMessage) => {
        setMessageList([...messageList, newMessage]);
    }

    useEffect(() => {
        if (messageList.length > 0 &&
            messageList[messageList.length - 1].author === 'user') {
            setTimeout(() => {
                addMessage({
                    author: 'bot',
                    text: '------------'
                });
            }, 1500)
        }

    }, [messageList])
    return (
        <div className={styles.MessageList__chat}>
            <MessageList messages={chatName ? messages[chatName] : []} />
            <Form addMessage={addMessage} />
        </div>
    )
}