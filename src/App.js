
import { useEffect, useState } from "react";
import { Form } from "./components/Form/Form";
import { MessageList } from "./components/MessageList/MessageList";



export function App() {
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
        <>
            <Form addMessage={addMessage} />
            <MessageList messageList={messageList} />
        </>
    )
}

