import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import './style/MessageList.css'

export function MessageList({ messageList }) {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <>
            <div className="MessageList">
                <div className='MessageList__box'>
                    <Box sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper'
                    }}>
                        <List component="nav"
                            aria-label="secondary mailbox folder">
                            <ListItemButton
                                selected={selectedIndex === 1}
                                onClick={(event) =>
                                    handleListItemClick(event, 1)}
                            >
                                <ListItemText primary="Chat 1" />
                            </ListItemButton>
                            <ListItemButton
                                selected={selectedIndex === 2}
                                onClick={(event) =>
                                    handleListItemClick(event, 2)}
                            >
                                <ListItemText primary="Chat 2" />
                            </ListItemButton>
                        </List>
                    </Box>
                </div>
                <div className="MessageList__chat">
                    <h2 className='MessageList__h'>Chat</h2>
                    {messageList.map((item, index) => (
                        <div className="MessageList__text"
                            key={index}>{item.text}</div>
                    ))}
                </div>
            </div>
        </>
    )
}