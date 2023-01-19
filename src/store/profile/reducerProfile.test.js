import { profileReducer, initialState } from "./reducer";
import { auth, changeName } from "./action";

describe('reducerProfile test', () => {
    it('CHANGE_NAME', () => {
        expect(profileReducer(initialState, changeName('test'))).toEqual({
            name: 'test',
            isAuth: false
        });
    });
    it('IS_AUTH', () => {
        expect(profileReducer(initialState, auth(true))).toEqual({
            name: '',
            isAuth: true
        });
    });
});