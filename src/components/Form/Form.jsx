import { useEffect, useState } from 'react';
// import { Button } from '../ui/button/Button';
import IButton from '@mui/material/Button';
import ISendIcon from '@mui/icons-material/Send';
import ITextField from '@mui/material/TextField';
import './style/Form.css';

export function Form({ addMessage }) {
    const [text, setText] = useState('');
    const [autoFocus, setAutoFocus] = useState(true);


    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text: text
        });
        setText('');
    }

    useEffect(() => {
        setAutoFocus();
    }, [addMessage]);

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <ITextField
                id="outlined-basic"
                label="Message"
                value={text}
                autoFocus={autoFocus}
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