import { pictures } from '../data/Data';
import { DELETE_IMG, EDIT_PRODUCT } from '../contants/action-types';
export default function galleryImgs(state = pictures, { type, payload }) {
    // return state;
    switch (type) {

        case DELETE_IMG:
            return "delete";

        case EDIT_PRODUCT:
            return "edit";

        default:
            return state;
    }
}
