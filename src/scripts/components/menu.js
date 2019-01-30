import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import '../../styles/Menu.css';
import { Link } from 'react-router-dom';
import {
    $fireimg,
    $transparentlogo
} from '../../config/data/Assets';
import { signOut } from '../../config/actions/Auth';
import SignedInNav from '../components/authComponents/signedInNav';
import { galleryNav, storeNav } from '../../config/menu/galleryMenu';

const Menu = (props) => {

    const { items, auth, location } = props;
    var locationGallery = location.pathname == "/Gallery";
    var locationStore = location.pathname == "/Store";

    return (
        <div className="nav-container">

            {(locationGallery && auth.uid) ?

                <SignedInNav navContent={galleryNav} />

                : (locationStore && auth.uid) ?
                    <SignedInNav navContent={storeNav} />
                    : null
            }
            <div className="nav-container nav-container-logo">
                <img src={$transparentlogo}></img>
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

const mapStateToProps = (state) => {

    return {
        auth: state.firebaseReducer.auth,
        location: state.routerReducer.location,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
