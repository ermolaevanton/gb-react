const initialState = {
    toggle: false,
}

export const profileReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CHANGE_STATUS':
            return {
                ...state,
                toggle: payload,
            }
        default:
            return state;
    }
}