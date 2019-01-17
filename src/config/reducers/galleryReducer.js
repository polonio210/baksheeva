import { CREATE_GALLERY, CREATE_GALLERY_ERROR } from '../contants/action-types';
import { pictures } from '../data/Data';

const galleryReducer = (state = pictures, action) => {
    switch (action.type) {
        case CREATE_GALLERY:
            console.log('created gallery');
            return state;

        case CREATE_GALLERY:
            console.log('created gallery error');
            return state;
        default:
            return state;
    }
}
export default galleryReducer;