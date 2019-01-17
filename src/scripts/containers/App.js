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
import { createGallery } from '../../config/actions/Index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from "react-redux";

class App extends Component {

  render() {
    // const { 
    //   background,
    //   picDetail,
    //   productDetail,
    //   products,
    //   gallery,
    //   router
    // } = store.getState();

    const { backgroundReducer,
      routerReducer,
      openPicDetail,
      openProductDetail,
      productsReducer,
      galleryReducer
    } = store.getState();
    
    const { location } = routerReducer;
 
    
    function onClickFromAccess(pic) {
      store.dispatch(setNewBackground(pic));
    }

    if (location.pathname === "/Home") {
      return (

        <div className="background background-home -static">
          <Route exact path='/Home' render={(props) => (
            <Home {...props} />
          )} />
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
    else {
      return (
        <div className={backgroundReducer ? "bckHome" : "background background-access -static -center"}>

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
const mapDispatchToProps = (dispatch) => {
  return {
    createGallery: (gallery) => dispatch(createGallery(gallery))
  }
}
const mapStateToProps = (state) => {
  console.log("mapStateToProps...", state);

  return {
    gallery: state.createGallery
  }

}
export default App;
// export default compose(mapStateToProps, mapDispatchToProps, firestoreConnect([{ collection: 'gallery' }]))(App)
// export default compose(
//   connect(mapStateToProps),
//   firestoreConnect([
//     { collection: 'gallery' }
//   ])
// )(App);