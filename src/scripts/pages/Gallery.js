import React, { Component } from 'react';
// import logo from './logo.svg';
import { push } from "react-router-redux";
import { connect } from "react-redux";
import Pics from '../components/Pics';
import PicDetail from '../components/PicDetail';
import store from '../../index';
import { updateOpenDetail } from '../../config/actions/Index';

// const Gallery = (props) => {
const Gallery = ({picDetail,gallery}) => {

    // console.log("props", props);
    // const { picDetail } = props;
    // const { galleryImgs } = store.getState();

    console.log("picDetail gallery", picDetail);


    // function onClick(event) {
    //     console.log("props from openDetailToGallery: ");

    //     props.onClick(event);

    // }
    const renderGallery = () => {
        console.log("picDetail updated", picDetail);

        if (!picDetail) {

            // return <div>
            //     <p>Pics</p>
            //     <button onClick={onClick}>holachanger</button>

            // </div>
            return <Pics listOfPics={gallery}></Pics>;

            // return <Pics onClick={onClick} galleryProps={props} listOfPics={galleryImgs}></Pics>;


        } else {
            return <p>Pic detail</p>

            // return <PicDetail ></PicDetail>;

        }
    }
    return <main className="Main">{renderGallery()}</main>;

}

// return (
//     <div>
//         <h1>Gallery</h1>
//         <button onClick={onClick}>holachanger</button>
//         <p>{picDetail}</p>
//     </div >

// );
//}


// const Gallery = (props, picDetailToGallery) => {
//     picDetailToGallery = null;
//     console.log("picDetailToGallery", picDetailToGallery);

//     function onClick(event) {
//         console.log("detail opened");
//         props.onClick( store.dispatch(updateOpenDetail(event)));

//     }
//     console.log("propr gallery: ", props);
//     const { galleryImgs } = store.getState();
//     const renderGallery = () => {
//         if (!picDetailToGallery) {
//             return <Pics onClick={onClick} galleryProps={props} listOfPics={galleryImgs}></Pics>;


//         } else {
//             return <PicDetail ></PicDetail>;

//         }
//     }
//     return <main className="Main">{renderGallery()}</main>;

// }


// const state = (state, ownProps = {}) => {

//     console.log("state state access", state);
//     return {
//         location: state.location,
//     }

// }

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     navigateTo: (location) => {
//         dispatch(push(location));
//     }
// });
// export default connect(state, mapDispatchToProps)(Gallery);
export default Gallery;
