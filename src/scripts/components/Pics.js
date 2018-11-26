import React, { Component } from 'react';
import store from '../../index';
import { updateOpenDetail } from '../../config/actions/Index';
import '../../styles/Gallery.css';
import PicDetail from './PicDetail';

const Pic = ({ pic }) => {
    const { name, description, img, img_id } = pic;

    let className = 'Pics';

    let isActiveClass = false;

    function addClass(active) {
        isActiveClass = active;
        console.log("active", active);
    }
    function openDetailToGallery(img_id) {

        store.dispatch(updateOpenDetail(img_id));

    }
    if (isActiveClass) {
        className += ' detail-active';

    }
    console.log("reload");
    return (
        <div className="col-sm-3">
            <div className={className} onClick={openDetailToGallery.bind(null, pic)} >
                <div className="card" onClick={addClass.bind(null, true)}>
                    <img className="pic_src" src={img} alt={img}></img>

                </div>


            </div>
        </div>

    );
}

const Pics = ({ listOfPics, detailOpenGl }) => {
    console.log("detailOpenGl: ",detailOpenGl);

    return (

        <aside className="pictures">

            <div className="container">

                {detailOpenGl ?
                    <div className="detail-opened">
                        <PicDetail img_data={detailOpenGl}></PicDetail>
                    </div>
                    : null}
                <div className="row">
                    {listOfPics.map(pr => <Pic pic={pr} key={pr.img_id} />)}
                </div>

            </div>

        </aside >


    );


}

export default Pics;
