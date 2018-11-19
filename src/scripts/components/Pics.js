import React, { Component } from 'react';
import store from '../../index';
import { updateOpenDetail } from '../../config/actions/Index';
import '../../styles/Pics.css';
const Pic = ({ pic, propPic }) => {
    const { name, description, img, img_id } = pic;
    // function openDetailToGallery(event) {
    //     propPic.onClick(event);

    // }
    function openDetailToGallery(img_id) {
        store.dispatch(updateOpenDetail(img_id));
        console.log("store.dispatch(updateOpenDetail(event));: ", store.dispatch(updateOpenDetail()));

    }
    return (
        <div className="col-sm-3">
            <div className="Pics" onClick={openDetailToGallery.bind(null, pic)}>
                <div className="card">
                    <img className="pic_src" src={img} alt={img}></img>
                </div>

            </div>
        </div>
    );
}
// const Product = ({ productProd }) => {
//     const { name, description, product_img, price, product_id } = productProd;
//     console.log("productProd:",productProd);
//     function openDetail(product_id) {
//         console.log("detail opened");
//         store.dispatch(updateOpenDetail(product_id));
//     }
//     return (
//         <div className="col-sm-3">
//             <div className="Product" onClick={openDetail.bind(null, productProd)}>
//                 <div className="card">
//                     <img className="product_img" src={product_img} alt={product_img}></img>
//                     <p>{description}</p>
//                 </div>
//                 <p><b>{name}</b> </p><h2>{price}$</h2>
//             </div>
//         </div>
//     );
// }

const Pics = ({ listOfPics }) => {
    console.log("listOfPics pics", listOfPics);

    return (

        <aside className="products">
            <div className="row">
                {listOfPics.map(pr => <Pic pic={pr} key={pr.img_id} />)}
            </div>
        </aside >


    );

}

export default Pics;
