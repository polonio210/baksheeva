import React, { Component } from 'react';
import '../../styles/App.css';
import { Route } from 'react-router-dom';
import store from '../../index';
import { setNewBackground } from '../../config/actions/Index';

import Home from '../pages/Index';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Access from '../pages/Access';
import AddPhotos from '../pages/Add-Photos';
import Footer from '../components/Footer';
import Menu from '../components/menu';
import BannerImg from '../components/banner-img';
import CrazyBar from '../components/crazy-bar';
import menuItems from '../../config/menu/Menu';
import NotFound404 from '../pages/NotFoundPage';
import Login from '../pages/Login';
import SignedInNav from '../components/authComponents/signedInNav';
import { createGallery } from '../../config/actions/Gallery';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from "react-redux";
import { galleryNav, storeNav } from '../../config/menu/galleryMenu';

class App extends Component {

  render() {
    const {
      backgroundReducer,
      routerReducer,
      openPicDetail,
      openProductDetail,
      productsReducer,
      galleryReducer
    } = store.getState();

    function onClickFromAccess(pic) {
      store.dispatch(setNewBackground(pic));
    }

    if (location.pathname === "/Home") {
      return (

        <div className="background background-home ">
                  

          <Route exact path='/Home' render={(props) => (
            <Home {...props} />
            
          )} />
          <BannerImg />
        </div>
      )
    }
    else if (location.pathname === "/Store") {
      console.log("app openProductDetail", openProductDetail);
      return (
        <div className="background background-store">
          <Menu items={menuItems} />
          <BannerImg />
          <CrazyBar />
          <Route exact path='/Store' render={(props) => (
            <Store detailStoreOpen={openProductDetail} storeData={productsReducer} {...props} />
          )} />
          <Footer></Footer>

        </div>

      )
    }

    else if (location.pathname === "/Gallery") {
      return (
        <div className="background background-gallery">
          <Menu items={menuItems} />
          <BannerImg />
          <CrazyBar />
          <Route exact path='/Gallery' render={(props) => (
            <Gallery detailGalleryOpen={openPicDetail} gallery={galleryReducer} {...props} />

          )} />
          <Footer></Footer>
        </div>

      )
    }
    else if (location.pathname === "/addphotos") {
      return (
        <div className="background background-gallery -static">
          <Route exact path='/addphotos' render={(props) => (
            <AddPhotos {...props} />

          )} />
          <Footer></Footer>
        </div>

      )
    }
    else if (location.pathname === "/xxxloginxxnatribaksheevaxxx") {
      return (
        <div className="background background-login -static -center">
          <Route exact path='/xxxloginxxnatribaksheevaxxx' render={(props) => (
            <Login {...props} />

          )} />
        </div>

      )
    }
    else if (location.pathname === "/404") {
      return (
        <div className="background background-notfoundpage -static">
          <Route exact path='/404' render={(props) => (
            <NotFound404 {...props} />

          )} />
          <Footer></Footer>
        </div>

      )
    }
    else {
      return (
        <div className={backgroundReducer ? "background background-home" : "background background-access -static -center"}>

          <Route exact path='/' render={(props) => (
            <Access {...props} onClick={onClickFromAccess} />
          )} />
          <Route exact path='/Home' render={(props) => (
            <Home {...props} />
          )} />

        </div>

      )
    }
  }
}
const state = (state, ownProps = {}) => {
  console.log("mapStateToProps... app", state);

  return {
    location: state.location,

  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     createGallery: (gallery) => dispatch(createGallery(gallery))
//   }
// }
export default App;

// export default connect(mapDispatchToProps)(App);
