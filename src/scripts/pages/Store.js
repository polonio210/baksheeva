import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../styles/Store.css';
import Products from '../components/Products';

const Store = (props) => {
    console.log("props store:", props);
    const { detailStoreOpen, storeData } = props;
    console.log("ProductDetailOpen store:", detailStoreOpen);

    return (
        <div>
            <div className="header_store">
                <button onClick={props.navigateTo.bind(this)}>exit</button>

            </div>

            <Products listOfProducts={storeData} detailOpenPr={detailStoreOpen}></Products>

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
