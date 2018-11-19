import { UPDATE_OPENDETAIL, EXIT_DETAIL } from '../contants/action-types';

export default function picDetail(state = null, { type, payload }) {
    switch (type) {
        case UPDATE_OPENDETAIL:
            return payload;
        case EXIT_DETAIL:
            return null;
        default:
            return state;
    }
}

