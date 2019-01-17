import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../styles/Menu.css';
import { Link } from 'react-router-dom';
import {
    fire_img,
    transp_logo
} from '../../config/data/Assets';
const Menu = (props) => {
    const { items } = props;
    return (
        <div className="nav-container">

            <div className="nav-container nav-container-logo">
                <img src={transp_logo}></img>
            </div>

            <ul className="menu-container">
                {
                    items && items.map(
                        (item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                    )
                }
            </ul>

        </div >

    );
}
const state = (state, ownProps = {}) => {
    return {
        location: state.location,
    }

}

const mapDispatchToProps = (dispatch, ownProps) => ({

});
export default connect(state, mapDispatchToProps)(Menu);
