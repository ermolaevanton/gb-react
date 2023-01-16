import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CircularProgress from '@mui/material/CircularProgress';

import { signIn } from '../../services/firebase';
import { auth } from '../../store/profile/action';

export function LoginPage() {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        try {
            await signIn(inputs.email, inputs.password);
            dispatch(auth(true));
            navigate('/chats');
        } catch (error) {
            setError(error.message);
            setInputs({ email: '', password: '' });
        } finally {
            setLoading(false);
        }
    }
    return (
        <>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <p>Email:</p>
                <input type="email"
                    placeholder="mail"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => setInputs((prev) =>
                        ({ ...prev, [e.target.name]: e.target.value }))}

                />
                <p>Password:</p>
                <input type="text"
                    placeholder="password"
                    name="password"
                    value={inputs.password}
                    onChange={(e) => setInputs((prev) =>
                        ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <button>Login</button>
            </form>
            {loading && (<CircularProgress />)}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}