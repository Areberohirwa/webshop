/*
// all querrySelectors here
const drMartens1Name = document.querySelector(".shoe-name1");
const drMartens1Color = document.querySelector(".shoe-color1");
const drMartens1Price = document.querySelector(".shoe-price1");
const drMartens2Name = document.querySelector(".shoe-name2")
const drMartens2Color = document.querySelector(".shoe-color2")
const drmartens2Price = document.querySelector(".shoe-price2")
const drMartens3Name = document.querySelector(".shoe-name3");
const drMartens3Color = document.querySelector(".shoe-color3");
const drMartens3Price = document.querySelector(".shoe-price3");

const nike1Name = document.querySelector(".nike-name1");
const nike1Color = document.querySelector(".nike-color1");
const nike1Price = document.querySelector(".nike-price1");
const nike2Name = document.querySelector(".nike-name2");
const nike2Color = document.querySelector(".nike-color2");
const nike2Price = document.querySelector(".nike-price2");
const nike3Name = document.querySelector(".nike-name3");
const nike3Color = document.querySelector(".nike-color3");
const nike3Price = document.querySelector(".nike-price3");

const puma1Name = document.querySelector(".puma-name1");
const puma1Color = document.querySelector(".puma-color1");
const puma1Price = document.querySelector(".puma-price1");
const puma2Name = document.querySelector(".puma-name2");
const puma2Color = document.querySelector(".puma-color2");
const puma2Price = document.querySelector(".puma-price2");
const puma3Name = document.querySelector(".puma-name3");
const puma3Color = document.querySelector(".puma-color3");
const puma3Price = document.querySelector(".puma-price3");

const payBbtn1 = document.querySelector('.pay-btn-7');
const payBbtn2 = document.querySelector('.pay-btn-8');
const payBbtn3 = document.querySelector('.pay-btn-9');
const payNBtn1 = document.querySelector('.pay-btn-4');
const payNBtn2 = document.querySelector('.pay-btn-5');
const payNBtn3 = document.querySelector('.pay-btn-6');
let word = '';

let Link;
const nikeLink = `https://mbo-sd.nl/period3-fetch/clothes-shoe-nike`;
const pumaLink = `https://mbo-sd.nl/period3-fetch/clothes-shoe-puma`;
const drmartensLink = `https://mbo-sd.nl/period3-fetch/clothes-shoe-dr-martens`;

// fetch and display functions
fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-dr-martens").then((credits) => credits.json())
    .then((objData) => {
        let drMartens = objData;
        console.log(objData);

        for (let index = 0; index < drMartens.length; index++) {
            drMartens[index];
            drMartens1Name.innerHTML = drMartens[0].title;
            drMartens1Color.innerHTML = drMartens[0].colour;
            drMartens1Price.innerHTML = drMartens[0].price + ' euros';

            drMartens2Name.innerHTML = drMartens[1].title;
            drMartens2Color.innerHTML = drMartens[1].colour;
            drmartens2Price.innerHTML = drMartens[1].price + ' euros';

            drMartens3Name.innerHTML = drMartens[2].title;
            drMartens3Color.innerHTML = drMartens[2].colour;
            drMartens3Price.innerHTML = drMartens[2].price + ' euros';
        }

    })

fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-puma").then((credit) => credit.json())
    .then((objectData) => {
        let puma = objectData;
        console.log(puma);


        for (let i = 0; i < puma.length; i++) {
            puma[i];
            puma1Name.innerHTML = puma[0].title;
            puma1Color.innerHTML = puma[0].colour;
            puma1Price.innerHTML = puma[0].price + ' euros';

            puma2Name.innerHTML = puma[1].title;
            puma2Color.innerHTML = puma[1].colour;
            puma2Price.innerHTML = puma[1].price + ' euros';

            puma3Name.innerHTML = puma[2].title;
            puma3Color.innerHTML = puma[2].colour;
            puma3Price.innerHTML = puma[2].price + ' euros';
        }

    })

fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-nike").then((creditis) => creditis.json())
    .then((objectDatas) => {
        let nike = objectDatas;
        console.log(nike);

        for (let i = 0; i < nike.length; i++) {
            nike[i];
            nike1Name.innerHTML = nike[0].title;
            nike1Color.innerHTML = nike[0].colour;
            nike1Price.innerHTML = nike[0].price + ' euros';

            nike2Name.innerHTML = nike[1].title;
            nike2Color.innerHTML = nike[1].colour;
            nike2Price.innerHTML = nike[1].price + ' euros';

            nike3Name.innerHTML = nike[2].title;
            nike3Color.innerHTML = nike[2].colour;
            nike3Price.innerHTML = nike[2].price + ' euros';
        }

    })

// functions

function creatCardPuma(card) {
    let htmlCode = `
    <div class="card">
    <img src="${card}" alt="pumashoe">
    <h3>${card}</h3>
    <h3>${card}</h3>
    <h3>${card}</h3>
    <a href="pay.html" class="pay-btn-7">Buy</a>
  </div>
    `;

    return htmlCode;
};

payBbtn3.addEventListener('click', function (event) {
    event.preventDefault();


    fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-puma").then((crediten) => crediten.json())
        .then((objects) => {
            let pumas = objects;
            console.log(pumas);

            for (let ins = 0; ins < pumas.length; ins++) {
                pumas[ins];
                let myobj2 = {
                    word: 'puma3',
                    pumaName: pumas[2].title,
                    pumaColor: pumas[2].colour,
                    pumaPrice: pumas[2].price,
                    pumaDescription: pumas[2].description,
                    pumaSize1: pumas[2].sizes[0],
                    pumaSize2: pumas[2].sizes[1],
                    pumaSize3: pumas[2].sizes[2],

                };
                let myobj2Data = JSON.stringify(myobj2);
                localStorage.setItem('Myobj', myobj2Data);

            }

            window.location.href = 'pay.html';
        })


});

payBbtn2.addEventListener('click', function (events) {
    events.preventDefault();

    fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-puma").then((credite) => credite.json())
        .then((objectser) => {
            let pumaser = objectser;
            console.log(pumaser);

            for (let inser = 0; inser < pumaser.length; inser++) {
                pumaser[inser];
                let myobj1 = {
                    word: 'puma2',
                    pumaName: pumaser[1].title,
                    pumaColor: pumaser[1].colour,
                    pumaPrice: pumaser[1].price,
                    pumaDescription: pumaser[1].description,
                    pumaSize1: pumaser[1].sizes[0],
                    pumaSize2: pumaser[1].sizes[1],
                    pumaSize3: pumaser[1].sizes[2],

                };
                let myobj2Data2 = JSON.stringify(myobj1);
                localStorage.setItem('Myobjec', myobj2Data2);

            }

            window.location.href = 'pay.html';
        })


});

payBbtn1.addEventListener('click', function(eventse) {
    eventse.preventDefault();

    fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-puma").then((points) => points.json())
        .then((objectData) => {
            let pum = objectData;

            for (let count = 0; count < pum.length; count++) {
                pum[count];
                let myobj3 = {
                    word: 'puma1',
                    pumaName: pum[0].title,
                    pumaColor: pum[0].colour,
                    pumaPrice: pum[0].price,
                    pumaDescription: pum[0].description,
                    pumaSize1: pum[0].sizes[0],
                    pumaSize2: pum[0].sizes[1],
                    pumaSize3: pum[0].sizes[2],

                };
                let myobj2Data3 = JSON.stringify(myobj3);
                localStorage.setItem('MyObjects', myobj2Data3);

            }

            window.location.href = 'pay.html';
        })


});

payNBtn1.addEventListener('click', function(ev) {
    ev.preventDefault();

    fetch("https://mbo-sd.nl/period3-fetch/clothes-shoe-nike").then((nikeInfos) => nikeInfos.json())
        .then((nikeData4) => {
            let nike1 = nikeData4;

            for (let counters = 0; counters < nike1.length; counters++) {
                nike1[counters];
                let nike1Obj = {
                    word: 'nike1',
                    nikeName: nike1[0].title,
                    nikeColor: nike1[0].colour,
                    nikePrice: nike1[0].price,
                    nikeDescription: nike1[0].description,
                    nikeSize1: nike1[0].sizes[0],
                    nikeSize2: nike1[0].sizes[1],
                    nikeSize3: nike1[0].sizes[2]
                };
                let nikeObj1Data1 = JSON.stringify(nike1Obj);
                localStorage.setItem('NikeObjects', nikeObj1Data1);

            }

            window.location.href = 'pay.html';
        })

});
*/