import { MessageList } from '../../components/MessageList/MessageList'
import styles from './style/Chat1.module.css'
import { Form } from '../../components/Form/Form';
import { useState, useEffect } from 'react';

export function Chat1() {
    const [messageList, setMessageList] = useState([]);

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
            <Form addMessage={addMessage} />
            <MessageList messageList={messageList} chat='1' />
        </div>
    )
}