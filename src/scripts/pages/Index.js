import React, { Component } from 'react';
import { push } from "react-router-redux";
import { connect } from "react-redux";
import "../../styles/Index.css";
import {
  $whiteflash,
  $transparentlogo,
  $britney,
  $laser,
  $fireimg,
  $navbar
} from '../../config/data/Assets';

const Index = (props) => {

  return (
    <div className="home-content">
      <div className="home-header">
        <div className="home-header-flash home-header-flash_left">
          <img src={$whiteflash}></img>
        </div>
        <div className="home-header-logo">
          <img src={$transparentlogo}></img>
        </div>
        <div className="home-header-flash home-header-flash_right">
          <img src={$whiteflash}></img>
        </div>


      </div>

      <div className="home-subheader">

        <div className="home-subheader-img_center">
          <img src={$laser}></img>
        </div>
        <div className="home-subheader-img_right">
          <img src={$britney}></img>
        </div>
        <div className="home-subheader-img_above">
          <img src={$navbar}></img>
        </div>
      </div>
      <div className="home-subheader-img_above-out">
        <img src={$navbar}></img>

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
