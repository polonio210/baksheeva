import React from 'react';
import { exitFromOpenDetail } from '../../config/actions/Index';
import store from '../../index';
import '../../styles/Detail.css';

import { $triple6, $buttonx } from '../../config/data/Assets';

const PicDetail = ({ img_data }) => {

    const { img_id } = img_data;
    const { title, description, photo } = img_id;

    function exitFromDetail() {
        store.dispatch(exitFromOpenDetail());

    }
    return (

        <div className="detail-container container">
            <div className="detail-container-bar detail-container-bar--gallery row">

                <div className="detail-container-bar-content">
                    <div className="detail-container-bar-content_left">
                        <img src={$triple6}></img>

                    </div>
                    <div className="detail-container-bar-content_right">
                        <img src={$triple6}></img>

                    </div>
                    <div className="detail-container-bar-content_center">
                        <p>{title}</p>
                    </div>
                </div>
                <div>
                    <div className="detail-container-bar_exit" onClick={exitFromDetail.bind(null)}>
                        <img src={$buttonx}></img>
                    </div>
                </div>
            </div>
            <div className="detail-container-url row">
                <div className="detail-container-url_wrap">
                    <div className="detail-container-url_stick"></div>
                    <p>Original Url</p>
                    <div className="detail-container-url_box">
                        <input type="text" value={photo} />
                    </div>
                </div>

            </div>

            <div className="row">
                <div className="detail-container-content ">

                    <div className="detail-container-content detail-container-content--gallery">
                        <h1>{title}</h1>
                        <img src={photo}></img>
                    </div>
                </div>
            </div>
        </div>


    )

};


export default PicDetail;
