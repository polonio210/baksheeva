import { products } from '../data/Data';
// import { DELETE_IMG, EDIT_PRODUCT } from '../contants/action-types';
export default function productsReducer(state = products, { type, payload }) {
    // return state;
    switch (type) {

        // case DELETE_IMG:
        //     return "delete";

        // case EDIT_PRODUCT:
        //     return "edit";

        default:
            return state;
    }
}
