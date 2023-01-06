import { CHANGE_NAME } from "./action";


const initialState = {
    name: '',
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case CHANGE_NAME:
            return {
                ...state,
                name: payload
            }
        default:
            return state;
    }
}