import React, { Component } from 'react';
import '../../styles/App.css';
import { Route } from 'react-router-dom';
import store from '../../index';
import Home from '../pages/Index';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Access from '../pages/Access';
import { setNewBackground } from '../../config/actions/Index';
import Footer from '../components/Footer';

class App extends Component {

  render() {
    console.log("APP.", store.getState());
    const { backgroundReducer, routerReducer, openPicDetail, openProductDetail, galleryImgs, productsReducer } = store.getState();
    const { location } = routerReducer;

    function onClickFromAccess(pic) {
      store.dispatch(setNewBackground(pic));
    }
    if (location.pathname === "/Home") {
      return (
        <div className="bckHome">
          <Route exact path='/Home' render={(props) => (
            <Home {...props} />
          )} />
          {/* <Route exact path="/Store" component={Store} /> */}

        </div>

      )

    }
    else if (location.pathname === "/Store") {
      console.log("app openProductDetail", openProductDetail);
      return (
        <div className="bckStore">
          <Route exact path='/Store' render={(props) => (
            <Store detailStoreOpen={openProductDetail} storeData={productsReducer} {...props} />
          )} />
          <Footer></Footer>
        </div>

      )
    }

    else if (location.pathname === "/Gallery") {
      return (
        <div className="bckGallery">

          <Route exact path='/Gallery' render={(props) => (
            <Gallery detailGalleryOpen={openPicDetail} gallery={galleryImgs} {...props} />

          )} />
          <Footer></Footer>
        </div>

      )
    }
    else {
      return (
        <div className={backgroundReducer ? "bckHome" : "bckAccess"}>

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
export default App;
