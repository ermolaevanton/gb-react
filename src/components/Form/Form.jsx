import { useState } from 'react';
import { Button } from '../ui/button/Button';
import './style/Form.css';

export function Form({ addMessage }) {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addMessage({
            author: 'user',
            text: text
        });
        setText('');
    }

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <input className='Form__text'
                placeholder='Message'
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <Button className='Form__btn Button'
                type='submit'>Отправить</Button>
        </form>
    );
}