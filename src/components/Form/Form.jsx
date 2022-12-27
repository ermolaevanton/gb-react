import { useEffect, useRef, useState } from 'react';
import IButton from '@mui/material/Button';
import ISendIcon from '@mui/icons-material/Send';
import ITextField from '@mui/material/TextField';
import './style/Form.css';

export function Form({ addMessage }) {
    const [text, setText] = useState('');
    const inputRef = useRef(null);


    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text: text
        });
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