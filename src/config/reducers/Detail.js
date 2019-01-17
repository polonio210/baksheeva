import { UPDATE_OPENDETAIL, EXIT_DETAIL } from '../contants/action-types';

export default function openPicDetail(state = null, { type, payload }) {
    switch (type) {
        case UPDATE_OPENDETAIL:
            return payload;
        case EXIT_DETAIL:
            return null;
    
        default:
            return state;
    }
}

// export function openProductDetail(state = null, { type, payload }) {
//     switch (type) {
//         case UPDATE_OPENPRODUCTDETAIL:
//             return payload;
//         case EXIT_PRODUCTDETAIL:
//             return null;
//         default:
//             return state;
//     }
// }