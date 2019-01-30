import React, { Component } from 'react';
import store from '../../index';
import { updateOpenDetail } from '../../config/actions/Index';
import PicDetail from './PicDetail';
import '../../styles/list.css';
import { connect } from "react-redux";

const Pic = ({ pic, authPic }) => {
    // const { name, description, img, img_id } = pic;
    const { description, photo, title } = pic;
    // console.log("pic:", pic);
    let className = 'list-content';
    let isActiveClass = false;
    console.log("authPic: ", authPic);

    function addClass(active) {
        isActiveClass = active;
    }
    function openDetailToGallery(img_id) {
        store.dispatch(updateOpenDetail(img_id));

    }
    if (isActiveClass) {
        className += ' detail-active';

    }
    if (authPic.uid)
        return (
            <div className="col-sm-3 ">
                <div className="list-content-edit">
                    <div className={className} onClick={openDetailToGallery.bind(null, pic)} >
                        <div className={className + "-card"} onClick={addClass.bind(null, true)}>
                            <div className="list-content-edit_buttons">
                                <button>EDIT</button>
                                <button>X</button>
                            </div>

                            <img src={photo} alt={photo}></img>
                            {/* <div className="card data_product">
                        <p>{name}</p>
                    </div> */}
                        </div>


                    </div>
                </div>

            </div>
        );

    return (
        <div className="col-sm-3 ">

            <div className={className} onClick={openDetailToGallery.bind(null, pic)} >
                <div className={className + "-card"} onClick={addClass.bind(null, true)}>
                    <img src={photo} alt={photo}></img>
                    {/* <div className="card data_product">
                        <p>{name}</p>
                    </div> */}
                </div>


            </div>
        </div>
    );
}

const Pics = ({ listOfPics, detailOpenGl, authPics }) => {
    return (
        <aside>
            <div >
                {detailOpenGl ?
                    <div className="list-content-detail">
                        <PicDetail img_data={detailOpenGl}></PicDetail>
                    </div>
                    : null}
                <div className="row">
                    {listOfPics && listOfPics.map(pr =>
                        <Pic pic={pr} key={pr.id} authPic={authPics} />
                    )}
                </div>

            </div>


        </aside >


    );


}

const mapStateToProps = (state) => {
    console.log("state pics: ", state);
    return {
        auth: state.firebaseReducer.auth,
    }
}
export default connect(mapStateToProps)(Pics);
