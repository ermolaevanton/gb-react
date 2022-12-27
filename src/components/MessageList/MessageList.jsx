import * as React from 'react';

import './style/MessageList.css'


export function MessageList({ messageList, chat }) {



    return (
        <>
            <div className="MessageList">
                <div className="MessageList__chat">
                    <h2 className='MessageList__h'>Chat {chat}</h2>
                    {messageList.map((item, index) => (
                        <div className="MessageList__text"
                            key={index}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    )
}