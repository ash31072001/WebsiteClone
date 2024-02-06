const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    const elemContainer = document.querySelector("#elem-container");
    const fixedImage = document.querySelector("#fixed-image");
    const elems = document.querySelectorAll(".elem");

    elemContainer.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block";
    });

    elemContainer.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none";
    });

    elems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            const image = elem.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`;
        });
    });

    // Additional code for triggering on scroll through .elem
    scroll.on('scroll', (obj) => {
        elems.forEach((elem) => {
            const rect = elem.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                
                elem.classList.add('in-view');
            } else {
                
                elem.classList.remove('in-view');
            }
        });
    });
}


page4Animation();

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
}

swiperAnimation();

var menu = document.querySelector("nav h3");
var full = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img")
var flag = 0;
menu.addEventListener("click",function(){
    if (flag===0){
        full.style.top = 0;
        navimg.style.opacity=0;
        flag = 1;
    }else{
        full.style.top = "-100%";
        navimg.style.opacity=0;
        flag = 0;
    }
    
});

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200);
}

loaderAnimation();
