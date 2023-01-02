import { Route, Routes } from "react-router-dom";
import { ChoiceChat } from "./components/ChoiceChat/ChoiceChat";
import { Header } from "./components/Header/Header";
import { Chat1 } from "./pages/Chat1/Chat1";
import { Chat2 } from "./pages/Chat1/Chat2";
import { MainPage } from "./pages/MainPage/MainPage";
import { ProfilePage } from "./pages/ProfilePage/ProfilePage";
import { Provider } from "react-redux";
import { store } from "./store"

export function App() {

    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Header />}>
                    <Route index element={<MainPage />} />
                    <Route path="profile" element={<ProfilePage />} />
                    <Route path="chats" element={<ChoiceChat />} >
                        <Route path="chat1" element={<Chat1 />} />
                        <Route path="chat2" element={<Chat2 />} />
                    </Route>
                </Route>
                <Route path="*" element={<h1>404 Page not found</h1>} />
            </Routes>
        </Provider>
    )
}

