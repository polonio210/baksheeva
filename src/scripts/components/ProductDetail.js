import React from 'react';
import { exitFromProductDetail } from '../../config/actions/Index';
import store from '../../index';
import '../../styles/Detail.css';

import { triple6_gif, xbutton_img, spider_gif } from '../../config/data/Assets';

const ProductDetail = ({ product_data }) => {
    console.log("product_data: ", product_data);
    const { product_id } = product_data;
    // console.log("img_id: ", img_id);
    const { name, description, product_img } = product_id;

    function exitFromDetail() {
        store.dispatch(exitFromProductDetail());

    }
    return (
        // <p>hola detail</p>

        <div className="container container_browser product_detail">
            <div className="row first product_detail">

                <div className="column middle">
                    <div className="bar_detail left">
                        <img src={spider_gif}></img>

                    </div>
                    <div className="bar_detail right">
                        <img src={spider_gif}></img>

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
                        <input type="text" value={product_img} />
                    </div>
                </div>

            </div>
            <div className="row third">
            </div>

            <div className="row content__browser">

                <div className="inside_browser product_detail">
                    <h1>{name}</h1>
                    <div className="content_product">
                        <div className="content_product imgs">
                            <p>Product imgs</p>

                            <img src={product_img}></img>
                        </div>
                        <div className="content_product data">
                            <p>Product data</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>


    )

};


export default ProductDetail;
