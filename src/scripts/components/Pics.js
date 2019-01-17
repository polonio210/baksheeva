import React, { Component } from 'react';
import store from '../../index';
import { updateOpenDetail } from '../../config/actions/Index';
import PicDetail from './PicDetail';
import '../../styles/list.css';

const Pic = ({ pic }) => {
    // const { name, description, img, img_id } = pic;
    console.log("pic: ",pic);
    const { description, photo, title } = pic;

    let className = 'list-content';
    let isActiveClass = false;

    function addClass(active) {
        isActiveClass = active;
    }
    function openDetailToGallery(img_id) {
        store.dispatch(updateOpenDetail(img_id));

    }
    if (isActiveClass) {
        className += ' detail-active';

    }
    return (
        <div className="col-sm-3">
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

const Pics = ({ listOfPics, detailOpenGl }) => {
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
                        <Pic pic={pr} key={pr.id} />
                    )}
                </div>

            </div>

        </aside >


    );


}

export default Pics;
