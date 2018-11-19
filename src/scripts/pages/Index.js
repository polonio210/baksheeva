import React, { Component } from 'react';
// import logo from './logo.svg';
import { push } from "react-router-redux";
import { connect } from "react-redux";

// import { Route } from 'react-router-dom';
import "../../styles/Index.css";
import imgHeader from '../../assets/200.gif';
import imgButtons from '../../assets/skull1.gif';

import logoHeader from '../../assets/logo1.jpeg';
import flashGif from '../../assets/gif8.gif';
// class Index extends Component {
const Index = (props) => {

  // render() {

  return (
    <div>
      <div className="flash__gif_lft">
        <img src={flashGif}></img>
      </div>
      <div className="flash__gif_rgt">
        <img src={flashGif}></img>
      </div>
      <div className="header">
        <img className="logo__header" src={logoHeader}></img>
      </div>
      <div className="index__buttons" >

        <div className="index__btn" id="btn_left" to="/Gallery" onClick={props.navigateTo.bind(this, '/Gallery')}>

          <img className="btn_img" src={imgButtons}></img>
          Gallery
        </div>
        <div className="index__btn" id="btn_center" to="/Store" onClick={props.navigateTo.bind(this, '/Store')}>

          <img className="btn_img" src={imgButtons}></img>
          Store

        </div>
        <div className="index__btn" id="btn_right">

          <img className="btn_img" src={imgButtons}></img>
          jaja

        </div>
      </div>
      {/* <div className="img__header">
          <div className="img" style ={ { backgroundImage: "url('/assets/200.gif')" }}>
          </div>
          <img className="img" src={imgHeader}></img>

        </div> */}


    </div >

  );
}
// }
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
export default connect(state, mapDispatchToProps)(Index);
// export default Index;
