import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logOut } from "../../services/firebase";
import { selectAuth } from "../../store/profile/selectors";
import classes from "./style/Header.module.css";

export const navigates = [
    {
        id: 1,
        name: 'Main',
        to: '/'
    },
    {
        id: 2,
        name: 'Profile',
        to: 'profile'
    },
    {
        id: 3,
        name: 'Chats',
        to: 'chats'
    },
    {
        id: 4,
        name: 'Article',
        to: 'article'
    }
]



export function Header() {
    const isAuth = useSelector(selectAuth);


    const handleLogout = async () => {
        await logOut();
    }

    return (
        <>
            <header className={classes.header}>
                <nav className={classes.header__nav}>
                    <ul>
                        {navigates.map((item) => (
                            <li key={item.id}>
                                <NavLink
                                    to={item.to}
                                    style={({ isActive }) => ({
                                        borderBottom: isActive ?
                                            '2px solid #fff' : 'none'
                                    })}
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                {!isAuth && (
                    <>
                        <NavLink
                            className={classes.header__login}
                            to={'login'}
                            style={({ isActive }) => ({
                                borderBottom: isActive ?
                                    '2px solid #fff' : 'none'
                            })}
                        >Login</NavLink>
                        <NavLink
                            to={'registration'}
                            style={({ isActive }) => ({
                                borderBottom: isActive ?
                                    '2px solid #fff' : 'none'
                            })}
                        >Registration</NavLink>
                    </>
                )}
                {isAuth && (<NavLink onClick={handleLogout}>Logout</NavLink>)}
            </header>
            <main><Outlet /></main>
        </>
    )
}