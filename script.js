




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

hamburgerMenu.addEventListener('click', function () {
    var accordionMenu = document.getElementById("accordionMenu");
    var hamburgerMenu = document.getElementById("hamburgerMenu");
    hamburgerMenu.classList.toggle("change");
    if (accordionMenu.style.visibility === "visible") {
        accordionMenu.style.visibility = "hidden";
    } else {
        accordionMenu.style.visibility = "visible";
    }
})


// var menuLinks = document.getElementsByClassName("menuLinks");
// var i;
// for (i = 0; i < menuLinks.length; i++) {
//     menuLinks[i].addEventListener("click", function() {
//         alert("bj");
//     })

// }
//                      accordion menu                  //

var fas1 = document.getElementById("fas1");
var fas2 = document.getElementById("fas2");
var fas3 = document.getElementById("fas3");

accorProLink = () => {
    var apLInk = document.getElementById("accor-pro-link");
    var cmpLink = document.getElementById("accor-comp-link");
    var mylink = document.getElementById("accor-conn-link");

    if(apLInk.style.display === "block") {
        apLInk.style.display = "none";
    } else {
        apLInk.style.display = "block";
        cmpLink.style.display = "none";
        mylink.style.display = "none";
        fas1.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
        fas2.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
        fas3.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
}

accorCompLink = () => {
    var cmpLink = document.getElementById("accor-comp-link");
    var apLInk = document.getElementById("accor-pro-link");
    var mylink = document.getElementById("accor-conn-link")
    
    if (cmpLink.style.display === "block") {
        cmpLink.style.display = "none"
    } else {
        cmpLink.style.display = "block";
        mylink.style.display = "none";
        apLInk.style.display = "none";
        fas2.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
        fas1.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
        fas3.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
 }

accorConnLink = () => {
    var mylink = document.getElementById("accor-conn-link")
    var cmpLink = document.getElementById("accor-comp-link");
    var apLInk = document.getElementById("accor-pro-link");
    if (mylink.style.display === "block") {
        mylink.style.display = "none";
    } else {
        mylink.style.display = "block";
        apLInk.style.display = "none";
        cmpLink.style.display = "none"
        fas3.style.cssText = "-webkit-transform: rotateX(180deg);transform: rotateX(180deg)";
        fas1.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
        fas2.style.cssText = "-webkit-transform: rotateX(0deg);transform: rotateX(0deg)";
    }
}



