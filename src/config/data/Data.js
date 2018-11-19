import _ from 'lodash';
import faker from 'faker';
import shortid from 'shortid';
/**
@param {Number} numberOfImgs
@returns {Array}
*/
export const pictures = generateListOfImgs(19);
export const state = {
    picture: generateImg(19),
    openDetail: null,
};
export function generateImg() {
    return {
        img_id: shortid.generate(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        img: "http://pixelartmaker.com/art/30ac2a54dfa0553.png"
        // img: "https://1.bp.blogspot.com/-vTvkXilOcIk/VCmOwDFI_6I/AAAAAAAB9vM/NQPJKN_wSX4/s1600/Skeleton%2BFrolic%2B(12).jpg"
    }
}
function generateListOfImgs(numberOfImgs) {
    return Array.from({ length: numberOfImgs }, (v, i) => generateImg(i));
}