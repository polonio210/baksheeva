import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import store from '../../index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class NotFound404 extends Component {



    render() {


        return (
            <div className="container">

            </div>

        )
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateTo: () => {
            dispatch(goBack());
        },

    }
};
// const mapStateToProps = (state) => {

//     return {
      
//     }

// }
export default connect( mapDispatchToProps)(NotFound404);
