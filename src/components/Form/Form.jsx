import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import IButton from '@mui/material/Button';
import ISendIcon from '@mui/icons-material/Send';
import ITextField from '@mui/material/TextField';

import './style/Form.css';
import { addMessage } from '../../store/message/action';
import { selectName } from '../../store/profile/selectors';

import { push } from "firebase/database";
import { getMessageListById } from '../../services/firebase'

export function Form() {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const { chatName } = useParams();
    const name = useSelector(selectName);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage(chatName, {
            author: name,
            text
        }));
        push(getMessageListById(chatName), {
            author: name,
            text
        });
        setText('');
    }

    useEffect(() => {
        inputRef.current.querySelector('input').focus();
    });

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <ITextField
                id="outlined-basic"
                label="Message"
                value={text}
                ref={inputRef}
                onChange={(e) => setText(e.target.value)}
            />
            <br />
            <div className="Form__btn">
                <IButton
                    variant="contained"
                    endIcon={<ISendIcon />}
                    type='submit'>
                    Send message</IButton>
            </div>

        </form>
    );
}