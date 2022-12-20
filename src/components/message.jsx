import './style/message.css';
export function Message(prop) {
    return <h1 className='Message'>Hello {prop.name}</h1>;
}