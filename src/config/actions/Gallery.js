import {
    CREATE_GALLERY,
    DELETE_PHOTO,
    CREATE_GALLERY_ERROR
} from '../contants/action-types';
import Firebase, { firestore } from 'firebase';

export const createGallery = (gallery) => {
    return (dispatch, getState, { getFirestore }) => {
        console.log("getState: ",getState);

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