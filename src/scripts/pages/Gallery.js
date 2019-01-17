import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import Pics from '../components/Pics';
import { createGallery } from '../../config/actions/Index';
import store from '../../index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class Gallery extends Component {

    // const Gallery = (props) => {

    // const { detailGalleryOpen, gallery } = props;



    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push('/addphotos');
    }
    render() {
        console.log("props gallery", this.props);
        const { gallery, location,detailGalleryOpen} = this.props;
        console.log("gallery", gallery);

        return (
            <div className="container">
                <Pics listOfPics={gallery} detailOpenGl={detailGalleryOpen}></Pics>
                <div >
                    <button onClick={this.handleSubmit}>Create new photo</button>
                    {/* <button onClick={this.props.navigateTo.bind(this, '/addphotos')}>Create new photo</button> */}
                </div>
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
    console.log("mapStateToProps gallery...", state);

    return {
        gallery: state.firestoreReducer.ordered.gallery,
        location: state.location,
    }

}
// export default connect(state, mapDispatchToProps)(Gallery);
export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'gallery' }
    ])
)(Gallery);