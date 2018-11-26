import React, { Component } from 'react';
import { push } from "react-router-redux";
import { connect } from "react-redux";
import "../../styles/Index.css";
import { blackred_logo, whiteflash_gif, greenskull_gif } from '../../config/data/Assets';

const Index = (props) => {

  return (
    <div>
      <div className="flash__gif_lft">
        <img src={whiteflash_gif}></img>
      </div>
      <div className="flash__gif_rgt">
        <img src={whiteflash_gif}></img>
      </div>
      <div className="header">
        <img className="logo__header" src={blackred_logo}></img>
      </div>
      <div className="index__buttons" >

        <div className="index__btn" id="btn_left" to="/Gallery" onClick={props.navigateTo.bind(this, '/Gallery')}>

          <img className="btn_img" src={greenskull_gif}></img>
          Gallery
        </div>
        <div className="index__btn" id="btn_center" to="/Store" onClick={props.navigateTo.bind(this, '/Store')}>

          <img className="btn_img" src={greenskull_gif}></img>
          Store

        </div>
        <div className="index__btn" id="btn_right">

          <img className="btn_img" src={greenskull_gif}></img>
          jaja

        </div>
      </div>
    </div >

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
