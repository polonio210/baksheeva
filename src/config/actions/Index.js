import {
    EXIT_DETAIL,
    CHANGE_BACKGROUND,
    UPDATE_OPENDETAIL,
    UPDATE_OPENPRODUCTDETAIL,
    EXIT_PRODUCTDETAIL,
    FETCH_PHOTOS,
    CREATE_GALLERY,
    DELETE_PHOTO,
    CREATE_GALLERY_ERROR
} from '../contants/action-types';
import Firebase, { firestore } from 'firebase';
import _ from 'lodash';

// const INITIAL_PHOTOS = { 123: 'photo1', 234: 'photo2', 654: 'photo3' };

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

//---------------/FIREBASE-GALLERY-PHOTOS/-------------------//

// export const createGallery = (gallery) => {
//     return (dispatch, getState, { getFirestore }) => {
//         const firestore = getFirestore();
//         firestore.collection('gallery').add({
//             ...gallery,

//         }).then(() => {
//             dispatch({ type: CREATE_GALLERY });
//         }).catch(err => {
//             dispatch({ type: CREATE_GALLERY_ERROR }, err);
//         });
//     }
// };
// export const deletePhoto = (key) => {
//     return {
//         type: DELETE_PHOTO,
//         payload: key
//     };
// }