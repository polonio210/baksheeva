import _ from 'lodash';
import faker from 'faker';
import shortid from 'shortid';
/**
@param {Number} numberOfImgs
@param {Number} numberOfProducts
@returns {Array}
*/
export const pictures = generateListOfImgs(19);
export const products = generateListOfProducts(19);

export const state = {
    picture: generateImg(19),
    product: generateProduct(19),
    openPicDetail: null,
    openProductDetail: null,

};
export function generateImg() {
    return {
        img_id: shortid.generate(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img: "https://images-na.ssl-images-amazon.com/images/I/41MPZ-52wVL._SX331_BO1,204,203,200_.jpg"
        // img: "https://1.bp.blogspot.com/-vTvkXilOcIk/VCmOwDFI_6I/AAAAAAAB9vM/NQPJKN_wSX4/s1600/Skeleton%2BFrolic%2B(12).jpg"
    }
}
export function generateProduct() {
    return {
        product_id: shortid.generate(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: faker.commerce.price(),
        product_img: "https://i.gifer.com/OxTR.gif"
        // img: "https://1.bp.blogspot.com/-vTvkXilOcIk/VCmOwDFI_6I/AAAAAAAB9vM/NQPJKN_wSX4/s1600/Skeleton%2BFrolic%2B(12).jpg"
    }
}
function generateListOfImgs(numberOfImgs) {
    return Array.from({ length: numberOfImgs }, (v, i) => generateImg(i));
}

function generateListOfProducts(numberOfProducts) {
    return Array.from({ length: numberOfProducts }, (v, i) => generateProduct(i));
}