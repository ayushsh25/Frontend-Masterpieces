const slidesContainer = document.querySelector(".slides-container");

const slides = document.querySelectorAll(".slide");

const items = document.querySelectorAll(".item");

const prevBtn = document.getElementById("prevBtn");

const nextBtn = document.getElementById("nextBtn");

let currentSlide = 0;

let autoSlide;

// Show Slide

function showSlide(index){

    if(index < 0){
        currentSlide = slides.length - 1;
    }
    else if(index >= slides.length){
        currentSlide = 0;
    }
    else{
        currentSlide = index;
    }

    slidesContainer.style.transform =
    `translateX(-${currentSlide * 100}%)`;

    items.forEach(item=>{
        item.classList.remove("active");
    });

    items[currentSlide].classList.add("active");

}

// Next

nextBtn.addEventListener("click",()=>{

    showSlide(currentSlide + 1);

});

// Previous

prevBtn.addEventListener("click",()=>{

    showSlide(currentSlide - 1);

});

// Thumbnail Click

items.forEach((item,index)=>{

    item.addEventListener("click",()=>{

        showSlide(index);

    });

});

// Auto Slide

function startAutoSlide(){

    autoSlide = setInterval(()=>{

        showSlide(currentSlide + 1);

    },3000);

}

startAutoSlide();

// Stop Auto Slide on Hover

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter",()=>{

    clearInterval(autoSlide);

});

carousel.addEventListener("mouseleave",()=>{

    startAutoSlide();

});

// Keyboard Support

document.addEventListener("keydown",(e)=>{

    if(e.key==="ArrowRight"){

        showSlide(currentSlide + 1);

    }

    if(e.key==="ArrowLeft"){

        showSlide(currentSlide - 1);

    }

});

// Swipe Support

let startX = 0;

carousel.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

});

carousel.addEventListener("touchend",(e)=>{

    let endX = e.changedTouches[0].clientX;

    if(startX - endX > 50){

        showSlide(currentSlide + 1);

    }

    if(endX - startX > 50){

        showSlide(currentSlide - 1);

    }

});