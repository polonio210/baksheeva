import { EXIT_PRODUCTDETAIL, UPDATE_OPENPRODUCTDETAIL } from '../contants/action-types';

export default function openProductDetail(state = null, { type, payload }) {
    switch (type) {
        case UPDATE_OPENPRODUCTDETAIL:
            return payload;
        case EXIT_PRODUCTDETAIL:
            return null;
        default:
            return state;
    }
}