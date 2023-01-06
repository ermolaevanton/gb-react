import styles from './style/ProfilePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/profile/action';
import { selectName } from '../../store/profile/selectors';
import { useState } from 'react';


export function ProfilePage() {
    const name = useSelector(selectName);
    const dispatch = useDispatch();
    const [value, setValue] = useState('');


    return (
        <>
            <h1 className={styles.ProfilePage}>Profile page</h1>
            <div className={styles.box}>
                <h2 className={styles.user}>User: <span>{name}</span></h2>
                <input
                    className={styles.checkbox}
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <button
                    onClick={() => {
                        dispatch(changeName(value));
                        setValue('');
                    }}
                >Change Name</button>
            </div>
        </>
    )
}