import React, { Component } from 'react';
import store from '../../index';
import { updateOpenProductDetail } from '../../config/actions/Index';

import '../../styles/list.css';

import ProductDetail from './ProductDetail';

const Product = ({ prod }) => {
    const { product_id, name, description, price, product_img } = prod;
    let className = 'list-content';
    let isActiveClass = false;

    function addClass(active) {
        isActiveClass = active;
    }
    function openProductDetail(product_id) {
        store.dispatch(updateOpenProductDetail(product_id));
    }
    if (isActiveClass) {
        className += ' detail-active';

    }
    return (
        <div className="col-sm-4">
            <div className={className} onClick={openProductDetail.bind(null, prod)} >
                <div className={className + "-card"} >
                    <img src={product_img}></img>
                    <div className="list-content-product">
                        <p>{name}</p>
                        <p>{price} $</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

const Products = ({ listOfProducts, detailOpenPr }) => {
    return (

        <aside >
            <div>

                {detailOpenPr ?

                    <div className="list-content-detail">
                        <ProductDetail product_data={detailOpenPr}></ProductDetail>
                    </div>
                    : null}
                <div className="row ">
                    {listOfProducts.map(pr => <Product prod={pr} key={pr.product_id} />)}
                </div>

            </div>

        </aside >


    );


}

export default Products;
