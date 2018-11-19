import React from "react";
import {connect} from "react-redux";
import { push } from "react-router-redux";

let NavigationComponent = (props) => (
{/* <nav>
    <ul>
    <li><a to="/" onClick={props.navigateTo.bind(this, '/')}>Access</a></li>
    <li><a to="/Home" onClick={props.navigateTo.bind(this, '/Home')}>Index</a></li>
    </ul>
</nav> */}
)

const state = (state, ownProps = {}) => {
  return {
    location: state.location
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  navigateTo: (location) => {
    dispatch(push(location));
  }
});

export default connect(state, mapDispatchToProps)(NavigationComponent);