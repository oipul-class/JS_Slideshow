"use strich";
const images = [
    { 'id': '1', 'url':'./img/gwr/3700.jpg' },
    { 'id': '2', 'url':'./img/gwr/4073.jpg' },
    { 'id': '3', 'url':'./img/gwr/4900.jpg' },
    { 'id': '4', 'url':'./img/gwr/9400.jpg' },
]
const containerItem = document.querySelector("#container-items");
const nextButton = document.querySelector("#action-button-next");
const previousButton = document.querySelector("#action-button-previous");

const loadImages = (images, containerItem) => {
    images.forEach ( image => {
        containerItem.innerHTML += `
        <div class="itens">
            <img src='${image.url}'>
        </div>
        `
            
    })
}

loadImages ( images, containerItem);

let itens = document.querySelectorAll(".itens");

const previous = () => {
    containerItem.appendChild(itens[0]);
    itens = document.querySelectorAll(".itens");

}

const next = () => {
    const lastItem = itens [itens.length - 1];
    containerItem.insertBefore ( lastItem , itens[0]);
    itens = document.querySelectorAll(".itens");

}

previousButton.addEventListener ("click" , previous);
nextButton.addEventListener ("click" , next);

const buttonslide1 = document.getElementById("slide1");
const buttonslide2 = document.getElementById("slide2");
const buttonslide3 = document.getElementById("slide3");
const buttonslide4 = document.getElementById("slide4");


