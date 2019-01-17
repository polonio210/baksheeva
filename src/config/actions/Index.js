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

const INITIAL_PHOTOS = { 123: 'photo1', 234: 'photo2', 654: 'photo3' };
// const Photos = new Firebase('https://natribaksheeva-dbb58.firebaseio.com');

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
//---------------/GALLERY-PHOTOS/-------------------//
// export const fetchPhotos = () => {
//     return {
//         type: FETCH_PHOTOS,
//         payload: INITIAL_PHOTOS
//     };
// }

// export const createGallery = (gallery) => {
//     return (dispatch, getState, { getFirebase, getFirestore }) => {
//         const firestore = getFirestore();
//         firestore.collection('gallery').add({
//             ...gallery,
//             title: 'title2',
//             description: 'ble ble ble ble ble',
//             photo: 'https://i.imgur.com/DfREd2y.png',
//         }).then(() => {
//             dispatch({ type: CREATE_GALLERY, gallery })

//         }).catch((err) => {
//             dispatch({ type: CREATE_GALLERY_ERROR, err });
//         })
//     }
// }
export const createGallery = (gallery) => {
    return (dispatch, getState, { getFirestore }) => {
        const firestore = getFirestore();
        // const profile = getState().firebase.profile;
        firestore.collection('gallery').add({
            ...gallery,
        //    id:1234,
        //    author:"eljajas"
        }).then(() => {
            dispatch({ type: CREATE_GALLERY });
        }).catch(err => {
            dispatch({ type: CREATE_GALLERY_ERROR }, err);
        });
    }
};
export const deletePhoto = (key) => {
    return {
        type: DELETE_PHOTO,
        payload: key
    };
}