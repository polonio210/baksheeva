import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createGallery } from '../../config/actions/Gallery';
import { Redirect } from 'react-router-dom';

class AddPhotos extends Component {
    state = {
        title: '',
        description: '',
        photo: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createGallery(this.state);
        this.props.history.push('/Gallery');
    }
    render() {
        // console.log("this.props addphotos: ", this.props);
        // console.log("this.state addphotos: ", this.state);

        const { auth } = this.props;
        if (!auth.uid)
            return <Redirect to='/Gallery' />
        return (
            <div className="container">
                <form className="white" onSubmit={this.handleSubmit}>
                    <h5 className="grey-text text-darken-3">Create a New Project</h5>
                    <div className="input-field">
                        <label htmlFor="title">Project Title</label>
                        <input type="text" id='title' onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Project Description</label>
                        <textarea id="description" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <label htmlFor="photo">Project PHOTO</label>
                        <textarea id="photo" className="materialize-textarea" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1">Create</button>
                    </div>
                </form>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.firebaseReducer.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createGallery: (gallery) => dispatch(createGallery(gallery))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhotos)
