import React, { Component } from 'react';
import { push } from "react-router-redux";
import { connect } from "react-redux";
import "../../styles/Index.css";
import {
  whiteflash_gif,
  transp_logo,
  britney,
  laser_gif,
  fire_img,
  navbar
} from '../../config/data/Assets';

const Index = (props) => {

  return (
    <div>
      <div className="home-header">
        <div className="home-header-flash home-header-flash_left">
          <img src={whiteflash_gif}></img>
        </div>
        <div className="home-header-flash home-header-flash_right">
          <img src={whiteflash_gif}></img>
        </div>
        <div className="home-header-logo">
          <img src={transp_logo}></img>
        </div>
      </div>
      <div className="container">
        <div className="home-content content">
          <div className="home-content-img_right">
            <img src={britney}></img>
          </div>
          <div className="home-content-img_center">
            <img src={laser_gif}></img>
          </div>
          <div className="home-content-img_below">
            <img src={fire_img}></img>
          </div>
          <div className="home-content-img_above">
            <img src={navbar}></img>

          </div>
        </div>
      </div>
    </div>
  );
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
export default connect(state, mapDispatchToProps)(Index);
