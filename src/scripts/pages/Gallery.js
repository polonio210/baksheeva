import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import Pics from '../components/Pics';

import '../../styles/Gallery.css';

const Gallery = (props) => {
    const { detailGalleryOpen, gallery } = props;
    return (
        <div>
            <div className="pictures_header">
                <button onClick={props.navigateTo.bind(this)}>exit</button>
            </div>
            <Pics listOfPics={gallery} detailOpenGl={detailGalleryOpen}></Pics>
        </div>
    )


}
const state = (state, ownProps = {}) => {
    return {
        location: state.location,
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({

    navigateTo: () => {
        dispatch(goBack());
    }
});
export default connect(state, mapDispatchToProps)(Gallery);
