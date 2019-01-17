import { CHANGE_BACKGROUND } from '../contants/action-types';

export default function bckClass(state = null , { type, payload }) {
    switch (type) {
        case CHANGE_BACKGROUND:
            // return payload;
            return payload;
        default:
            return state;
    }
}