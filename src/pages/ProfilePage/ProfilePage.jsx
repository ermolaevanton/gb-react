import styles from './style/ProfilePage.module.css';
import { useDispatch, useSelector } from 'react-redux';


export function ProfilePage() {
    const { toggle } = useSelector((store) => store);
    const dispatch = useDispatch();
    const setToggle = () => {
        dispatch({ type: 'CHANGE_STATUS', payload: !toggle })
    }



    return (
        <>
            <h1 className={styles.ProfilePage}>Profile page</h1>
            <div className={styles.box}>
                <input
                    className={styles.checkbox}
                    type="checkbox"
                    onChange={setToggle}
                />
                <span className={styles.text}>{String(toggle)}</span>
            </div>
        </>
    )
}