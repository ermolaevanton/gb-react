import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/message/action';
import { selectChat } from '../../store/message/selectors';
import styles from './style/ChoiceChat.module.css';
import { push, set, remove } from "firebase/database";
import { messagesRef, getChatById, getMessageListById } from '../../services/firebase';

export function ChoiceChat({ messagesDB, chats }) {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    // const chats = useSelector(selectChat);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat(value));
        set(messagesRef, {
            ...messagesDB,
            [value]: {
                name: value
            }
        })

        push(getMessageListById(value), {
            text: 'Chat has been created',
            author: 'Admin',
        });
        setValue('');
    }
    const handleDeleteChat = (chatId) => {
        remove(getChatById(chatId));
    };

    return (
        <>
            <div className={styles.ChoiceChat}>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                    <button type='submit'>Create chat</button>
                </form>
            </div>
            <ul>
                {chats.map((chat) => (
                    <li key={chat.name}>
                        <Link to={`/chats/${chat.name}`} >
                            {chat.name}
                        </Link>
                        <button
                            onClick={() => dispatch(handleDeleteChat(chat.name))}
                        >X</button>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}
