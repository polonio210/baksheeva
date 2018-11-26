import { combineReducers } from "redux";
import backgroundReducer from './backgroundReducer';
import galleryImgs from './galleryImg';
import openPicDetail from './Detail'
import openProductDetail from './ProductDetail';
import productsReducer from './products';

import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";

export default combineReducers({
    backgroundReducer,
    routerReducer,
    galleryImgs,
    openPicDetail,
    openProductDetail,
    productsReducer
})