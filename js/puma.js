console.log("joki");

const containerDisp = document.querySelector(".puma-displayer");

fetch("http://localhost:3000/puma-shoes").then(data => data.json())
    .then(myJsonData => showCards(myJsonData));


function showCards(shoes) {
    console.log(shoes);
    let htmlCode = '';
    for (let i = 0; i < shoes.length; i++) {
        const shoe = shoes[i];
        htmlCode += createCard(shoe);
    }
    containerDisp.innerHTML += htmlCode;
}

function createCard(shoe) {
    let htmlCodes = `
    <div class="card">
    <img src="${shoe.imageUrl}" alt="pumashoe">
    <h3>${shoe.title}</h3>
    <h3>${shoe.colour}</h3>
    <h3> € ${shoe.price}</h3>
    <a href="pay.html" class="pay-btn-7">Buy</a>
  </div>
    `;

    return htmlCodes;
};
