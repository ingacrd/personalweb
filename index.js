// JavaScript source code

var slideArray = ["img/slider1.jpg", "img/slider2.jpg", "img/slider3.jpg", "img/slider4.jpg", "img/slider5.jpg"];
var captionArray = [" ", " ", " ", " ", " "];

setupDots();

var slideIndex = 1;     // slides indexed from 1
showSlides(slideIndex);

var timeout = null;
timeout = setTimeout(automaticChange, 7000);  // To avoid automatic slide change, comment this line

function setupDots() {
    var i;
    var dotSet = document.getElementsByClassName("dots-container")[0];
    for (i = 0; i < slideArray.length; i++) {
        var dot = document.createElement('span'); // create a new element of type (tag) span
        dot.className = "dot";                    // give it class="dot"
        dot.index = i + 1;                        // give it an attribute index to remember its index
        dot.onclick = function () { currentSlide(this.index) };  // give it the onclick event
        dotSet.appendChild(dot);                  // add it as a child to to div "dots-container"
    }
}

function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function currentSlide(n) {
    slideIndex = n
    showSlides(slideIndex);
    /* if automaticChange is on, reset the timer */
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = setTimeout(automaticChange, 7000);
    }
}

function showSlides(n) {
    //
    // We use removeChild() / appendChild() to force animation to play
    // at each change of image.
    //
    // Using removeChild(), we remove the the (only) slide from the DOM
    // (from "slide-container"). Then, we change de backgroundImage attribute
    // in the slide and, using appendChild(), we insert it back into the
    // DOM (into "slide-container").
    //
    var i;
    var slideContainer = document.getElementsByClassName("slide-container")[0];
    var slide = document.getElementsByClassName("mySlides")[0];
    var numbertext = document.getElementsByClassName("numbertext")[0];
    var text = document.getElementsByClassName("text")[0];
    var dots = document.getElementsByClassName("dot");

    if (n > slideArray.length) { slideIndex = 1 }   // if beyond the last one, go to the first one
    if (n < 1) { slideIndex = slideArray.length }   // if before the first one, go to the last one

    slideContainer.removeChild(slide);

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slide.style.backgroundImage = "url('" + slideArray[slideIndex - 1] + "')";
    numbertext.innerHTML = slideIndex + " / " + slideArray.length;
    text.innerHTML = captionArray[slideIndex - 1];
    slide.style.display = "flex";                  // to continue to centrilize the paragraph
    slideContainer.appendChild(slide);

    dots[slideIndex - 1].className += " active";
}

function automaticChange() {
    slideIndex++;
    showSlides(slideIndex);
    timeout = setTimeout(automaticChange, 7000);   // call again automaticChange() after 7s
}

