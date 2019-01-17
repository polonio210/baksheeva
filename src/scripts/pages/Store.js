import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import Products from '../components/Products';

const Store = (props) => {
    const { detailStoreOpen, storeData } = props;
    return (
        <div>

            <div className="container">
                <Products listOfProducts={storeData} detailOpenPr={detailStoreOpen}></Products>
            </div>


        </div >

    );
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
export default connect(state, mapDispatchToProps)(Store);

