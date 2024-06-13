// querySelectors

const firstName = document.querySelector('.first-name');
const secondName = document.querySelector('.second-name');
const thirdName = document.querySelector('.third-name');
const gender = document.querySelector('.gender');
const email = document.querySelector('.email');
const phoneNum = document.querySelector('.phone-number');
const payBtn1 = document.querySelector('.pay1-btn');

const productImg = document.querySelector('.img');
const productName = document.querySelector('.object-name');
const productColour = document.querySelector('.object-colour');
const productDetails = document.querySelector('.object-description');
const productChoosen = document.querySelector('.object-size');
const productPrice = document.querySelector('.price');
const productFinalPrice =document.querySelector('.object-price')
const productSize1 = document.querySelector('.size-1');
const productSize2 = document.querySelector('.size-2');
const productSize3 = document.querySelector('.size-3');


// const object2PumaShoe = localStorage.getItem('Myobj');

// const puma2Shoe = JSON.parse(object2PumaShoe);
// console.log(puma2Shoe);


// if (puma2Shoe.word === 'puma3') {
//     productImg.src = 'img/shoe3puma.webp';
//     productName.textContent = puma2Shoe.pumaName;
//     productColour.textContent = puma2Shoe.pumaColor;
//     productDetails.innerHTML = puma2Shoe.pumaDescription;
//     productPrice.innerHTML = '€ '+ puma2Shoe.pumaPrice;
//     productFinalPrice.innerHTML = '€ '+ Math.ceil(puma2Shoe.pumaPrice*1.21)+ ' (incl. BTW & verzendKosten)';
//     productSize1.innerHTML = puma2Shoe.pumaSize1;
//     productSize2.innerHTML = puma2Shoe.pumaSize2;
//     productSize3.innerHTML = puma2Shoe.pumaSize3;

// } else {
//     alert('er is iets fout gegaan.');
// }

// const object1PumaShoe = localStorage.getItem('Myobjec');
// const puma1Shoe = JSON.parse(object1PumaShoe);

// if (puma1Shoe.word === 'puma2') {
//     productImg.src = 'img/shoe2puma.webp';
//     productName.innerHTML = puma1Shoe.pumaName;
//     productColour.innerHTML = puma1Shoe.pumaColor;
//     productDetails.innerHTML = puma1Shoe.pumaDescription;
//     productPrice.innerHTML = '€ '+puma1Shoe.pumaPrice;
//     productSize1.innerHTML = puma1Shoe.pumaSize1;
//     productSize2.innerHTML = puma1Shoe.pumaSize2;
//     productSize3.innerHTML = puma1Shoe.pumaSize3;
//     productFinalPrice.innerHTML = '€ '+ Math.ceil(puma1Shoe.pumaPrice*1.21)+ ' (incl. BTW & verzendKosten)';
// } else {
//     alert('er is iets fout gegaan.');
// }

// const object3PumaShoe = localStorage.getItem('MyObjects');
// const puma2Shoe = JSON.parse(object3PumaShoe);

// if (puma2Shoe.word == 'puma1') {
//     productImg.src = 'img/shoe1puma.webp';
//     productName.innerHTML = puma2Shoe.pumaName;
//     productColour.innerHTML = puma2Shoe.pumaColor;
//     productDetails.innerHTML = puma2Shoe.pumaDescription;
//     productPrice.innerHTML = '€ '+puma2Shoe.pumaPrice;
//     productSize1.innerHTML = puma2Shoe.pumaSize1;
//     productSize2.innerHTML = puma2Shoe.pumaSize2;
//     productSize3.innerHTML = puma2Shoe.pumaSize3;
//     productFinalPrice.innerHTML = '€ '+ Math.ceil(puma2Shoe.pumaPrice*1.21)+ ' (incl. BTW & verzendKosten)';
// } else {
//     alert('error 404!!');
// }

const object1NikeShoe = localStorage.getItem('NikeObjects');
const nike1Shoe = JSON.parse(object1NikeShoe);

if (nike1Shoe.word === 'nike1') {
    productImg.src = 'img/shoe1nike.webp';
    productName.innerHTML = nike1Shoe.nikeName;
    productColour.innerHTML = nike1Shoe.nikeColor;
    productDetails.innerHTML = nike1Shoe.nikeDescription;
    productPrice.innerHTML = '€ '+nike1Shoe.nikePrice;
    productSize1.innerHTML = nike1Shoe.nikeSize1;
    productSize2.innerHTML = nike1Shoe.nikeSize2;
    productSize3.innerHTML = nike1Shoe.nikeSize3;
    productFinalPrice.innerHTML = '€ '+ Math.ceil(nike1Shoe.nikePrice*1.21)+ ' (incl. BTW & verzendKosten)';
} else {
    alert('error 404!!');
}