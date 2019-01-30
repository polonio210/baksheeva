import React, { Component } from 'react';
import { push, goBack } from "react-router-redux";
import { connect } from "react-redux";
import store from '../../index';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import '../../styles/Login.css';
import { signIn } from '../../config/actions/Auth';
import { auth } from 'firebase';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
        console.log("handleSubmit state", this.state);
        console.log("this.props login", this.props);

    }
    render() {


        const { authError, auth } = this.props;
        console.log("auth:", auth);

        if (!auth.uid)

            return (
                <div className="login-container container">
                    <form className="login-container-form" onSubmit={this.handleSubmit}>
                        <div className="login-container-input">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' onChange={this.handleChange} />
                        </div>
                        <div className="login-container-input">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={this.handleChange} />
                        </div>
                        <div className="login-container-button">
                            <button className="btn pink lighten-1 z-depth-0">Login</button>
                            <div className="center red-text">
                                {authError ? <p>{authError}</p> : null}
                            </div>
                            {/* <div className="center red-text">
                          
                        </div>  */}
                        </div>
                    </form>
                </div>

            )
        return <Redirect to='/Gallery'/>
    }

}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        navigateTo: () => {
            dispatch(goBack());
        },
        signIn: (creds) => dispatch(signIn(creds))

    }
};
const mapStateToProps = (state) => {

    return {
        authError: state.authReducer.authError,
        auth: state.firebaseReducer.auth,

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login);
