import React from 'react';
import { exitFromProductDetail } from '../../config/actions/Index';
import store from '../../index';
import '../../styles/Detail.css';
import ReactDOM from 'react-dom';

import { triple6_gif, xbutton_img, spider_gif } from '../../config/data/Assets';

const ProductDetail = ({ product_data }) => {
    const { product_id } = product_data;
    const { name, description, product_img, price } = product_id;

    function exitFromDetail() {
        store.dispatch(exitFromProductDetail());
    }

    return (
        <div className="detail-container container">
            <div className="detail-container-bar detail-container-bar--store row">

                <div className="detail-container-bar-content">
                    <div className="detail-container-bar-content_left">
                        <img src={spider_gif}></img>

                    </div>
                    <div className="detail-container-bar-content_right">
                        <img src={spider_gif}></img>

                    </div>
                    <div className="detail-container-bar-content_center">
                        <p>{name}</p>
                    </div>
                </div>
                <div>
                    <div className="detail-container-bar_exit" onClick={exitFromDetail.bind(null)}>
                        <img src={xbutton_img}></img>
                    </div>
                </div>
            </div>
            <div className="detail-container-url row">
                <div className="detail-container-url_wrap">
                    <div className="detail-container-url_stick"></div>
                    <p>Original Url</p>
                    <div className="detail-container-url_box">
                        <input type="text" value={product_img} />
                    </div>
                </div>

            </div>
            <div className="row">
                <div className="detail-container-content">
                    <div className="detail-container-data">

                        <div className="detail-container-data-content--left">
                            <img className="detail-container-data-content_img" src={product_img}></img>

                        </div>

                        <div className="detail-container-data-content--right">
                            <div className="detail-data-content-right">
                                <p>{name}</p>
                                <p>{price} $</p>
                                <p>Quantity</p>
                                <select>
                                    <option>option select 1</option>
                                    <option>option select 2</option>
                                    <option>option select 3</option>
                                </select>
                                <button >Add to Basket</button>

                                <div className="">
                                    <p>{description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

};


export default ProductDetail;
