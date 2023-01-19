import * as React from 'react';
import { useParams } from 'react-router-dom';

import './style/MessageList.css'


export function MessageList({ messages }) {
    const { chatName } = useParams();

    return (
        <>
            <div className="MessageList">
                <h2 className='MessageList__h'>Chat {chatName}</h2>
                <div className="MessageList__chat">
                    {messages?.map((item, index) => (
                        <div className="MessageList__text"
                            key={index}>
                            <span className="MessageList__author">
                                {item.author}:
                            </span>
                            <span>{item.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}