import { NavLink, Outlet } from "react-router-dom";
import classes from "./style/Header.module.css";

export const navigate = [
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
    }
]
export function Header() {
    return (
        <>
            <header className={classes.header}>
                <nav>
                    <ul>
                        {navigate.map((item) => (
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
            </header>
            <main><Outlet /></main>
        </>
    )
}