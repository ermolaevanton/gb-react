import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { persistor } from "./store";
import { PersistGate } from 'redux-persist/integration/react';
import { firebaseAuth, messagesRef } from "./services/firebase";

import { PrivateRoute } from "./utils/PrivateRoute";

import { MainPage } from "./pages/MainPage/MainPage";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import { ChoiceChat } from "./components/ChoiceChat/ChoiceChat";
import { Header } from "./components/Header/Header";
import { auth } from "./store/profile/action";
import { onValue } from "firebase/database";

export function App() {
    const dispatch = useDispatch();

    const [messagesDB, setMessagesDB] = useState({});
    const [chats, setChats] = useState([]);

    useEffect(() => {
        const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(auth(true));
            } else {
                dispatch(auth(false));
            }
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();

            const newChats = Object.entries(data).map((item) => ({
                name: item[0],
                messages: item[1].messageList
            }));

            setMessagesDB(data);
            setChats(newChats);
        })
    }, []);

    return (

        <PersistGate loading={null} persistor={persistor}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<MainPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route
                        path="chats"
                        element={<PrivateRoute component={<ChoiceChat
                            chats={chats}
                            messagesDB={messagesDB}
                        />} />} >
                        <Route
                            path=":chatName"
                            element={<ChatPage
                                chats={chats}
                                messagesDB={messagesDB}
                            />} />
                    </Route>
                    <Route path="article" element={<ArticlePage />} />
                    <Route path="login" element={<LoginPage />} />
                    <Route path="registration" element={<RegistrationPage />} />
                </Route>
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </PersistGate>

    )
}

