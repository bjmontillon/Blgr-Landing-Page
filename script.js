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

    var bars1 = document.getElementById("bars1");
    var bars2 = document.getElementById("bars2");
    var bars3 = document.getElementById("bars3");

document.getElementById("hamburgerMenu").addEventListener('click', function () {
    var accordionMenu = document.getElementById("accordionMenu");
    accordionMenu.style.visibility = "visible";
})

window.addEventListener('mouseup', function (eventAccor) {
    var hamMenu = document.getElementById("hamburgerMenu");
    var bars1 = document.getElementById("bars1");
    var bars2 = document.getElementById("bars2");
    var bars3 = document.getElementById("bars3");
    if (eventAccor.target != hamMenu && eventAccor.target.parentNode != hamMenu) {
        accordionMenu.style.visibility = "hidden";
        bars1.style.cssText = "-webkit-transform: rotate(0deg) translate(0px, 0px); transform: rotate(0deg) translate(0px, 0px);"
        bars2.style.cssText = "opacity: 10;"
        bars3.style.cssText = "-webkit-transform: rotate(0deg) translate(-0px, 0px); transform: rotate(0deg) translate(0px, 0px);"
    }
})


// function myFunction(x) {
//     x.classList.toggle("change");
// }


function myFunction() {
    // var bars1Style =(bars1).style.cssText = "-webkit-transform: rotate(-45deg) translate(-9px, 6px); transform: rotate(-45deg) translate(-5px, 4px);";
    // bars1.style.toggle(bars1Style);'
    bars1.classList.toggle("bars1Style");
    bars2.classList.toggle("bars2Style");
    bars1.classList.toggle("bars1Style");
}