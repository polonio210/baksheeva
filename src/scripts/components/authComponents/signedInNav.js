import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../../styles/signedInNav.css';
import { Link } from 'react-router-dom';

import { signOut } from '../../../config/actions/Auth';

const SignedInNav = (props) => {
    console.log("signedinnav props:", props);
    const { navContent } = props;
    // const { title, url } = navContent;

    return (
        <div className="signedin-nav-container">
            <ul className="signedin-nav-list">
                {
                    navContent && navContent.map(
                        (item, key) => 
                        <li key={key}><Link to={item.url}>{item.title}</Link></li>
                    )
                }
                <li onClick={props.signOut}><a>Logout</a></li>

            </ul>


        </div >

    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(null, mapDispatchToProps)(SignedInNav);
