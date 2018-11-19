import { combineReducers } from "redux";
import exampleReducer from './exampleReducer';
import backgroundReducer from './backgroundReducer';
import galleryImgs from './galleryImg';
import picDetail from './picDetail'
import { ConnectedRouter as Router, routerReducer, routerMiddleware } from "react-router-redux";

export default combineReducers({
    exampleReducer,
    backgroundReducer,
    routerReducer,
    galleryImgs,
    picDetail
})