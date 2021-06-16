// var chevron = document.getElementsByClassName("fa-chevron-down")
// var i;
// for (let i = 0; i < chevron.length; i++) {
//     chevron[i].addEventListener("click", function () {
//         // var productTab = document.getElementById("product-tab");

// }
////////////////////////////////////
// document.getElementById("product-tab").addEventListener("click", productLinks);

// function productLinks() {

//     var proLinks = document.getElementById("mylink");

//     if (proLinks.style.visibility === "hidden") {
//         proLinks.style.visibility = "none";
//      } 
//      else {
//         proLinks.style.visibility = "visible";
//      } 
// }
////////////////////////////////////
var proLink = document.getElementById("prolink");
var chevOne = document.getElementById("chevOne");
var comLink = document.getElementById("comlink");
var chevTwo = document.getElementById("chevTwo");
var connLink = document.getElementById("connlink");
var chevThree = document.getElementById("chevThree");

function proLinks() {
    proLink.style.visibility = "visible";
    chevOne.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
}

window.addEventListener('mouseup', function (event) {
    if (event.target != proLink && event.target.parentNode != proLink) {
        proLink.style.visibility = "hidden";
        chevOne.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
})

function comLinks() {
    comLink.style.visibility = "visible";
    chevTwo.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
}

window.addEventListener('mouseup', function (eventCom) {
    if (eventCom.target != comLink && eventCom.target.parentNode != comLink) {
        comLink.style.visibility = "hidden";
        chevTwo.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
})

function connLinks() {
    connLink.style.visibility = "visible";
    chevThree.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
}

window.addEventListener('mouseup', function (eventConn) {
    if (eventConn.target != connLink && eventConn.target.parentNode != connLink) {
        connLink.style.visibility = "hidden";
        chevThree.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
})