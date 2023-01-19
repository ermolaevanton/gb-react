import { CHANGE_NAME, IS_AUTH } from "./action";


export const initialState = {
    name: '',
    isAuth: false
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: payload
            }

        case IS_AUTH:
            return {
                ...state,
                isAuth: payload
            }

        default:
            return state;
    }
}