import * as React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectMessage } from '../../store/message/selectors';

import './style/MessageList.css'


export function MessageList({ messages }) {
    // console.log("🚀 ~ file: MessageList.jsx:7 ~ MessageList ~ messages", messages)
    const { chatName } = useParams();
    console.log("🚀 ~ file: MessageList.jsx:11 ~ MessageList ~ message", messages)

    return (
        <>
            <div className="MessageList">
                <h2 className='MessageList__h'>Chat {chatName}</h2>
                <div className="MessageList__chat">
                    {messages.map((item, index) => (
                        <div className="MessageList__text"
                            key={index}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    )
}