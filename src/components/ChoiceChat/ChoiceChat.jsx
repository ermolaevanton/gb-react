import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link, Outlet } from 'react-router-dom';
import styles from './style/ChoiceChat.module.css';

export function ChoiceChat() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <>
            <div className={styles.ChoiceChat}>
                <Box sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper'
                }}>
                    <List component="nav"
                        aria-label="secondary mailbox folder">
                        <Link to='chat1'>
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) =>
                                    handleListItemClick(event, 1)}
                            >
                                <ListItemText primary="Chat 1" />
                            </ListItemButton>
                        </Link>
                        <Link to='chat2'>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event) =>
                                    handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="Chat 2" />
                            </ListItemButton>
                        </Link>
                    </List>
                </Box>
            </div>
            <Outlet />
        </>
    )
}