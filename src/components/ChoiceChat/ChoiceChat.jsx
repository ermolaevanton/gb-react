import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { addChat, deleteChat } from '../../store/message/action';
import { selectChat } from '../../store/message/selectors';
import styles from './style/ChoiceChat.module.css';

export function ChoiceChat() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const chats = useSelector(selectChat);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addChat(value));
        setValue('');
    }

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
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`} >
                            {chat.name}
                        </Link>
                        <button
                            onClick={() => dispatch(deleteChat(chat.name))}
                        >X</button>
                    </li>
                ))}
            </ul>
            <Outlet />
        </>
    )
}
