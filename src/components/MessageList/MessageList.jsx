import './style/MessageList.css'

export function MessageList({ messageList }) {
    return (
        <>
            {messageList.map((item, index) => (
                <div className="MessageList" key={index}>{item.text}</div>
            ))}
        </>
    )
}