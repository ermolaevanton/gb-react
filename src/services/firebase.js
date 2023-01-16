import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDB6bbasYRHr8ifpDbugQuapH5yVmJO_s8",
    authDomain: "gb-react-12bbf.firebaseapp.com",
    databaseURL: "https://gb-react-12bbf-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-react-12bbf",
    storageBucket: "gb-react-12bbf.appspot.com",
    messagingSenderId: "419876179425",
    appId: "1:419876179425:web:0c8612292bf8ce5f7496a0"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);

export const signUp = async (email, password) => await createUserWithEmailAndPassword(firebaseAuth, email, password);

export const signIn = async (email, password) => await signInWithEmailAndPassword(firebaseAuth, email, password);

export const logOut = async () => await signOut(firebaseAuth);

const db = getDatabase(app);

export const userRef = ref(db, 'user');
export const messagesRef = ref(db, 'messages');

export const getChatById = (chatId) => ref(db, `messages/${chatId}`);

export const getMessageListById = (chatId) => ref(db, `messages/${chatId}/messageList`);