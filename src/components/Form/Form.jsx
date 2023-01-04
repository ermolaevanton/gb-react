import { useEffect, useRef, useState } from 'react';
import IButton from '@mui/material/Button';
import ISendIcon from '@mui/icons-material/Send';
import ITextField from '@mui/material/TextField';
import './style/Form.css';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../store/message/action';
import { useParams } from 'react-router-dom';

export function Form() {
    const [text, setText] = useState('');
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const { chatName } = useParams();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addMessage(chatName, text));
        setText('');
    }

    useEffect(() => {
        inputRef.current.querySelector('input').focus();
    }, [addMessage]);

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