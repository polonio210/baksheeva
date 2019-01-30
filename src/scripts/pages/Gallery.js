import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import Pics from '../components/Pics';
import { createGallery } from '../../config/actions/Gallery';
import store from '../../index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Gallery extends Component {
    render() {
        const { auth, gallery, location, detailGalleryOpen } = this.props;

        return (
            <div className="container">
                <Pics listOfPics={gallery} authPics={auth} detailOpenGl={detailGalleryOpen}></Pics>

            </div>

        )
    }

}
// const state = (state, ownProps = {}) => {
//     return {
//         location: state.location,
//     }

// }

const mapDispatchToProps = (dispatch, ownProps) => {


    return {
        navigateTo: () => {
            dispatch(goBack());
        },

    }
};
const mapStateToProps = (state) => {
    // console.log("mapStateToProps gallery...", state);

    return {
        gallery: state.firestoreReducer.ordered.gallery,
        location: state.location,
        auth: state.firebaseReducer.auth,

    }

}

// export default connect(state, mapDispatchToProps)(Gallery);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'gallery' }
    ])
)(Gallery);