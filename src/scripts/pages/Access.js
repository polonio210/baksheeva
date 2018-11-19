import React from 'react';
import '../../styles/App.css';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import '../../styles/Access.css';
import { setNewBackground } from '../../config/actions/Index';
import AccessImg from '../../assets/Access.png';
import store from '../../index';

const Access = (props) => {
    console.log("Props FROM ACCESS: ", props);
    function onClickFunction(event) {
        props.onClick(event);
    }
    return (
        <div className="img" to="/Home" onClick={props.navigateTo.bind(this, '/Home')}>
            <div onClick={onClickFunction}>
                <img src={AccessImg}></img>

            </div>
        </div>
    )

}

const state = (state, ownProps = {}) => {

    console.log("state state access", state);
    return {
        location: state.location,
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({
    navigateTo: (location) => {
        dispatch(push(location));
    }
});
export default connect(state, mapDispatchToProps)(Access);