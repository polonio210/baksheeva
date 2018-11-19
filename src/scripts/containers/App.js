import React, { Component } from 'react';
// import logo from './logo.svg';
import '../../styles/App.css';

// import Content from '../containers/content';
import { Route } from 'react-router-dom';

import store from '../../index';
import Home from '../pages/Index';
import Store from '../pages/Store';
import Gallery from '../pages/Gallery';
import Access from '../pages/Access';
import { setNewBackground, updateOpenDetail } from '../../config/actions/Index';

class App extends Component {

  render() {
    console.log("reducers:", store.getState());
    const { backgroundReducer, routerReducer, picDetail,galleryImgs } = store.getState();
    // const state = store.getState();
    const { location } = routerReducer;
    // const active = state.picDetail;
    // console.log("active APP:, ", active);

    function onClickFromAccess(pic) {

      store.dispatch(setNewBackground(pic));
      console.log("do store.dispatch(setNewBackground());", store.dispatch(setNewBackground()));
      console.log("backgroundReducer: ", backgroundReducer);

    }
    // function onClickFromGallery(event) {
    //   store.dispatch(updateOpenDetail(event));
    //   console.log("store.dispatch(updateOpenDetail(event));: ", store.dispatch(updateOpenDetail()));

    // }

    if (location.pathname === "/Home") {
      return (
        <div className="bckHome">
          <Route exact path='/Home' render={(props) => (
            <Home {...props} />
          )} />
          <Route exact path="/Store" component={Store} />

        </div>

      )

    }
    else if (location.pathname === "/Store") {
      return (
        <div className="bckStore">
          <Route exact path='/Store' render={(props) => (
            <Store {...props} />
          )} />

        </div>

      )
    }

    else if (location.pathname === "/Gallery") {
      return (
        <div className="bckGallery">

          <Route exact path='/Gallery' render={(props) => (
            <Gallery detailOpen={picDetail} gallery={galleryImgs} {...props} />

            // <Gallery {...props} onClick={onClickFromGallery} picDetail={active} />
            // <Gallery {...props} onClick={onClickFromGallery} picDetail={picDetail} />

          )} />

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
