let strategyEle = document.getElementById("strategy")
let designEle = document.getElementById("design");
let developEle = document.getElementById("develop");
let bankingEle = document.getElementById("banking");
let healthEle = document.getElementById("healthcare");
let itEle = document.getElementById("itConsulting");
let bankingEle2 = document.getElementById("banking2");
let healthEle2 = document.getElementById("healthcare2");
let itEle2 = document.getElementById("itConsulting2");

let digitalImg = document.getElementById("digitalImg");
let digitalArrow = document.getElementById("digitalArrow");
let designArrow = document.getElementById("designArrow");
let developArrow = document.getElementById("developArrow");

let industrySection = document.getElementById("industrySection");



function reveal() {
    imageReveal()
    reveal1();
    reveal2();
    reveal3();
    reveal4();
    reveal5();
    reveal6();
    reveal7();
    reveal8();
    reveal9();

    let revealElements = document.getElementsByClassName("reveal");
    for (i = 0; i < revealElements.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = revealElements[i].getBoundingClientRect().top;
        let elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {

            revealElements[i].classList.add("active");


        } else {
            revealElements[i].classList.remove("active")
        }
    }

}

function imageReveal() {
    var windowHeight = window.innerHeight;
    var elementTop = industrySection.getBoundingClientRect().top;
    var elementVisible = 300;
    if (elementTop < windowHeight - elementVisible) {

        digitalImg.style.opacity = "0";
        digitalImg.classList.add("digital-img1")

    } else {
        digitalImg.style.opacity = "1";
        digitalImg.classList.add("digital-img1");

    }

}

function reveal1() {


    var windowHeight = window.innerHeight;
    var elementTop = strategyEle.getBoundingClientRect().top;
    var elementVisible = 300;
    if (elementTop < windowHeight - elementVisible) {

        digitalImg.classList.remove("triangle")


        strategyEle.classList.add("active");
        digitalArrow.classList.add("active");

        digitalImg.classList.add("rounded-circle");
        digitalImg.style.borderBottomRightRadius = "0px";
        digitalImg.classList.add("digital-img1");


        designEle.classList.add("design-strategy-section-opacity-60");
        designArrow.classList.add("opacity-60")

        developEle.classList.add("design-strategy-section-opacity-20");
        developArrow.classList.add("opacity-20")


    } else {
        strategyEle.classList.remove("active");
        digitalArrow.classList.remove("active");

        digitalImg.classList.remove("rounded-circle");

    }
}

function reveal2() {

    var windowHeight = window.innerHeight;
    var elementTop = designEle.getBoundingClientRect().top;
    var elementVisible = 330;
    if (elementTop < windowHeight - elementVisible) {
        strategyEle.classList.remove("active");
        digitalArrow.classList.remove("active");

        digitalImg.classList.remove("rounded-circle")
        designEle.classList.remove("design-strategy-section-opacity-60")
        developEle.classList.remove("design-strategy-section-opacity-20")

        designArrow.classList.remove("opacity-60")
        developArrow.classList.remove("opacity-20")

        designEle.classList.add("active");
        designArrow.classList.add("active");

        digitalImg.src = "images/digital.png";

        digitalImg.classList.add("triangle")

        strategyEle.classList.add("design-strategy-section-opacity-20");
        digitalArrow.classList.add("opacity-20");

        developEle.classList.add("design-strategy-section-opacity-60");
        developArrow.classList.add("opacity-60")



    } else {
        designEle.classList.remove("active");
        designArrow.classList.remove("active");
        digitalImg.src = "images/digital2.png";

    }
}

function reveal3() {


    var windowHeight = window.innerHeight;
    var elementTop = developEle.getBoundingClientRect().top;
    var elementVisible = 330;
    if (elementTop < windowHeight - elementVisible) {
        designEle.classList.remove("active");
        designArrow.classList.remove("active")

        digitalImg.classList.remove("triangle")
        strategyEle.classList.remove("design-strategy-section-opacity-60");
        digitalArrow.classList.remove("opacity-60");

        developEle.classList.remove("design-strategy-section-opacity-20");
        developArrow.classList.remove("opacity-20");

        developEle.classList.add("active");
        developArrow.classList.add("active");

        digitalImg.src = "images/digital2.png";
        digitalImg.classList.add("square")
        strategyEle.classList.add("design-strategy-section-opacity-20");
        digitalArrow.classList.add("opacity-20");

        designEle.classList.add("design-strategy-section-opacity-60");
        designArrow.classList.add("opacity-20");



    } else {
        developEle.classList.remove("active");
        developArrow.classList.remove("active");
        digitalImg.classList.remove("square");



    }
}

function reveal4() {
    var windowHeight = window.innerHeight;
    var elementTop = bankingEle.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
        bankingEle.classList.add("active");
        healthEle.classList.add("opacity-60")
        itEle.classList.add("opacity-20")
        bankingEle2.classList.add("opacity-20");
        healthEle2.classList.add("opacity-20")
        itEle2.classList.add("opacity-20")
    } else {
        bankingEle.classList.remove("active");
    }
}

function reveal5() {
    var windowHeight = window.innerHeight;
    var elementTop = healthEle.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {
        bankingEle.classList.remove("active");
        healthEle.classList.remove("opacity-60")
        itEle.classList.remove("opacity-20")

        healthEle.classList.add("active");
        bankingEle.classList.add("opacity-60");
        itEle.classList.add("opacity-60")
        bankingEle2.classList.add("opacity-20");
        healthEle2.classList.add("opacity-20")
        itEle2.classList.add("opacity-20")
    } else {
        healthEle.classList.remove("active");
    }
}

function reveal6() {
    var windowHeight = window.innerHeight;
    var elementTop = itEle.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {


        healthEle.classList.remove("active");
        bankingEle2.classList.remove("opacity-20");
        itEle.classList.remove("opacity-60");

        itEle.classList.add("active");
        healthEle.classList.add("opacity-60");

        bankingEle2.classList.add("opacity-60");
        healthEle2.classList.add("opacity-20")
        itEle2.classList.add("opacity-20")
    } else {
        itEle.classList.remove("active");

    }
}

function reveal7() {
    var windowHeight = window.innerHeight;
    var elementTop = bankingEle2.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {

        itEle.classList.remove("active");
        bankingEle2.classList.remove("opacity-20");
        healthEle.classList.remove("opacity-60");
        healthEle2.classList.remove("opacity-20")

        bankingEle2.classList.add("active");
        itEle.classList.add("opacity-60");
        healthEle.classList.add("opacity-20");
        bankingEle.classList.add("opacity-20");


        healthEle2.classList.add("opacity-60")
        itEle2.classList.add("opacity-20")
    } else {
        bankingEle2.classList.remove("active");
    }
}

function reveal8() {
    var windowHeight = window.innerHeight;
    var elementTop = healthEle2.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {

        bankingEle2.classList.remove("active");
        itEle2.classList.remove("opacity-20")

        healthEle2.classList.add("active");
        itEle.classList.add("opacity-20")
        healthEle.classList.add("opacity-20");
        bankingEle.classList.add("opacity-20");
        bankingEle2.classList.add("opacity-60");


        healthEle2.classList.add("opacity-60")
        itEle2.classList.add("opacity-60")
    } else {
        healthEle2.classList.remove("active");
    }
}

function reveal9() {
    var windowHeight = window.innerHeight;
    var elementTop = itEle2.getBoundingClientRect().top;
    var elementVisible = 200;
    if (elementTop < windowHeight - elementVisible) {

        healthEle2.classList.remove("active");


        itEle2.classList.add("active");
        itEle.classList.add("opacity-20")
        healthEle.classList.add("opacity-20");
        bankingEle.classList.add("opacity-20");
        healthEle2.classList.add("opacity-60");

        bankingEle2.classList.add("opacity-20");


    } else {
        itEle2.classList.remove("active");
    }
}








window.addEventListener("scroll", reveal);