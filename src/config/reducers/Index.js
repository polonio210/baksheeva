import { combineReducers } from "redux";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";

import backgroundReducer from './backgroundReducer';
import galleryImgs from './galleryImg';
import openPicDetail from './Detail'
import openProductDetail from './ProductDetail';
import productsReducer from './products';
import authReducer from './authReducer';
import galleryReducer from './galleryReducer';

export default combineReducers({
    backgroundReducer,
    routerReducer,
    openPicDetail,
    openProductDetail,
    productsReducer,
    authReducer,
    galleryReducer,
    firestoreReducer,
    firebaseReducer
})
// const rootReducer = combineReducers({
//     background: backgroundReducer,
//     router:routerReducer,
//     picDetail: openPicDetail,
//     productDetail: openProductDetail,
//     products: productsReducer,
//     auth: authReducer,
//     gallery:galleryReducer,
//     firebase: firebaseReducer,
//     firestore: firestoreReducer
//   });
// export default rootReducer;  