import './style/Button.css';
export function Button(props) {
    return (
        <>
            <button className='Button'{...props}>{props.children}</button>
        </>
    );
}