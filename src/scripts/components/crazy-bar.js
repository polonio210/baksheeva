import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../styles/crazy-bar.css';
const CrazyBar = (props) => {

    return (
        <div className="crazy-bar">
            {/* <button onClick={props.navigateTo.bind(this)}>exit</button> */}
            <p>CrazyBar</p>
        </div>

    );
}

export default CrazyBar;
