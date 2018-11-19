import { EXIT_DETAIL,CHANGE_BACKGROUND, UPDATE_OPENDETAIL } from '../contants/action-types';

export const setNewBackground = (backgroundReducer) => ({
    type: CHANGE_BACKGROUND,

    payload: {
        backgroundReducer: true
    }

});
export const exitFromOpenDetail = (openDetail) => ({
    type: EXIT_DETAIL,
    payload: {
        openDetail: null
    }

});
export const updateOpenDetail = (img_id) => ({
    type: UPDATE_OPENDETAIL,
    payload: {
        img_id
    }

});