export const CHANGE_NAME = 'CHANGE_NAME';
export const IS_AUTH = 'IS_AUTH';

export const changeName = (value) => ({
    type: CHANGE_NAME,
    payload: value
});

export const auth = (auth) => ({
    type: IS_AUTH,
    payload: auth
});