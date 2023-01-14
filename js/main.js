window.addEventListener('scroll', function () {
    const navbar = document.getElementById("main-navbar")

    if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-after-scroll")
    } else {
        navbar.classList.remove("navbar-after-scroll")
    }
})


//Slides
let startFrame = 1;
showFrames(startFrame);

/*move to next frame by increasing the index */
function nextFrame() {
    showFrames(startFrame += 1);
}

/* move to previous frame by decreasing the index */
function prevFrame() {
    showFrames(startFrame -= 1);
}


function showFrames(changeTo) {
    let slides = document.getElementsByClassName("imgCarousel");

    if (changeTo > slides.length) {
        startFrame = 1
    }
    if (changeTo < 1) {
        startFrame = slides.length
    }

    for (let slide of slides) {
        slide.style.opacity = "0"
    }
    slides[startFrame - 1].style.opacity = "1";

    let conteoCarousel = document.getElementById("conteoCarousel");
    conteoCarousel.innerHTML = '0' + startFrame;
}
