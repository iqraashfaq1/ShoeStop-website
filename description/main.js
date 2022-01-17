console.log("description");

let product = JSON.parse(localStorage.getItem("product"));

let mainImgSrc = product[0];
let images = product[1];
let text = product[2];

console.log("product", product);

// Set images
const firstImg = document.querySelector("#first");
const secondImg = document.querySelector("#second");
const thirdImg = document.querySelector("#third");
const fourthImg = document.querySelector("#fourth");

const mainImg = document.querySelector("#mainImg");



firstImg.src = images[0];
secondImg.src = images[1];
thirdImg.src = images[2];
fourthImg.src = images[3];
mainImg.src = mainImgSrc;

// Set price
const priceParagraph = document.querySelector("#price");

priceParagraph.innerHTML = text;
