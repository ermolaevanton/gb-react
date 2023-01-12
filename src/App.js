import { Route, Routes } from "react-router-dom";
import { ChoiceChat } from "./components/ChoiceChat/ChoiceChat";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./store";
import { ChatPage } from "./pages/ChatPage/ChatPage";
import { ArticlePage } from "./pages/ArticlePage/ArticlePage";

export function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes>
                    <Route path="/" element={<Header />}>
                        <Route index element={<MainPage />} />
                        <Route path="profile" element={<ProfilePage />} />
                        <Route path="chats" element={<ChoiceChat />} >
                            <Route path=":chatName"
                                element={<ChatPage />}
                            />
                        </Route>
                        <Route path="article" element={<ArticlePage />} />
                    </Route>
                    <Route path="*" element={<h1>404 Page not found</h1>} />
                </Routes>
            </PersistGate>
        </Provider>
    )
}

