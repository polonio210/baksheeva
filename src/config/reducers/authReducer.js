const initState = {
    authError: null
}
import {
    LOGIN_ERROR,
    LOGIN_SUCCESS,
    SIGNOUT_SUCCESS
} from '../contants/action-types';

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN_ERROR:
            return {
                ...state,
                authError: 'Login failed'
            }
        case LOGIN_SUCCESS:
            console.log("Login success");
            return {
                ...state,
                authError: null
            }
        case SIGNOUT_SUCCESS:
            return state;
        default:
            return state;
    }
}

export default authReducer;