import React from 'react';
import { exitFromOpenDetail } from '../../config/actions/Index';
import store from '../../index';
import '../../styles/Detail.css';

import {triple6_gif,xbutton_img} from '../../config/data/Assets';

const PicDetail = ({ img_data }) => {
    // console.log("img_data: ", img_data);
    const { img_id } = img_data;
    // console.log("img_id: ", img_id);
    const { name, description, img } = img_id;

    function exitFromDetail() {
        store.dispatch(exitFromOpenDetail());

    }
    return (

        <div className="container container_browser ">
            <div className="row first">

                <div className="column middle">
                    <div className="bar_detail left">
                        <img src={triple6_gif}></img>

                    </div>
                    <div className="bar_detail right">
                        <img src={triple6_gif}></img>

                    </div>
                    <div className="bar_detail center">
                        <p>{name}</p>

                    </div>
                </div>
                <div className="column right">
                    <div className="bars" onClick={exitFromDetail.bind(null)}>
                        <img src={xbutton_img}></img>
                    </div>
                </div>
            </div>
            <div className="row second">
                <div className="box_shadow">
                    <div className="stick_url"></div>
                    <p>Original Url</p>
                    <div className="box_url">
                        <input type="text" value={img} />
                    </div>
                </div>

            </div>
            <div className="row third">
            </div>

            <div className="row content__browser">

                <div className="inside_browser">
                    <h1>{name}</h1>
                    <img src={img}></img>
                </div>
            </div>
        </div>


    )

};


export default PicDetail;
