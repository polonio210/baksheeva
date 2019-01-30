import React from 'react';
import '../../styles/App.css';
import { connect } from "react-redux";
import { push } from "react-router-redux";
import '../../styles/Access.css';
import { $access } from '../../config/data/Assets';
const Access = (props) => {

    function onClickFunction(event) {
        props.onClick(event);
    }
    return (
        <div className="img" to="/Home" onClick={props.navigateTo.bind(this, '/Home')}>
            <div onClick={onClickFunction}>
                <img src={$access}></img>
            </div>
        </div>
    )
}

const state = (state, ownProps = {}) => {

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