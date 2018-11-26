import { EXIT_DETAIL,CHANGE_BACKGROUND, UPDATE_OPENDETAIL,UPDATE_OPENPRODUCTDETAIL, EXIT_PRODUCTDETAIL} from '../contants/action-types';

export const setNewBackground = (backgroundReducer) => ({
    type: CHANGE_BACKGROUND,

    payload: {
        backgroundReducer: true
    }

});
export const exitFromOpenDetail = (openPicDetail) => ({
    type: EXIT_DETAIL,
    payload: {
        openPicDetail: null
    }

});
export const updateOpenDetail = (img_id) => ({
    type: UPDATE_OPENDETAIL,
    payload: {
        img_id
    }

});

export const updateOpenProductDetail = (product_id) => ({
    type: UPDATE_OPENPRODUCTDETAIL,
    payload: {
        product_id
    }

});
export const exitFromProductDetail = (openProductDetail) => ({
    type: EXIT_PRODUCTDETAIL,
    payload: {
        openProductDetail: null
    }

});