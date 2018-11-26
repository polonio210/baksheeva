import React, { Component } from 'react';
import store from '../../index';
import { updateOpenProductDetail } from '../../config/actions/Index';
import '../../styles/Store.css';
import ProductDetail from './ProductDetail';

const Product = ({ prod }) => {
    console.log("PRDO FROM PRODUCT: ", prod);
    const { product_id, name, description, price, product_img } = prod;
    let className = 'Products';
    let isActiveClass = false;

    function addClass(active) {
        isActiveClass = active;
    }
    function openProductDetail(product_id) {
        console.log("abriendo store product..");

        store.dispatch(updateOpenProductDetail(product_id));
        console.log("store.dispatch(updateOpenProductDetail(product_id))....", store.dispatch(updateOpenProductDetail(product_id)));
    }
    if (isActiveClass) {
        className += ' detail-active';

    }
    return (
        <div className="col-sm-3">
            <div className={className} onClick={openProductDetail.bind(null, prod)} >
                <div className="card" >
                    {/* <img className="pic_src" src={img} alt={img}></img> */}
                    <img className="product_src" src={product_img}></img>

                </div>


            </div>
        </div>

    );
}

const Products = ({ listOfProducts, detailOpenPr }) => {
    return (

        <aside className="products">

            <div className="container">

                {detailOpenPr ?

                    <div className="detail-opened product_detail">
                        <ProductDetail product_data={detailOpenPr}></ProductDetail>
                    </div>
                    : null}
                <div className="row">
                    {listOfProducts.map(pr => <Product prod={pr} key={pr.product_id} />)}
                </div>

            </div>

        </aside >


    );


}

export default Products;
