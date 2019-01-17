import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../styles/BannerImg.css';
const BannerImg = (props) => {

    return (
        <div className="banner">
            {/* <button onClick={props.navigateTo.bind(this)}>exit</button> */}
            <p>Banner img</p>
        </div>

    );
}

export default BannerImg;
