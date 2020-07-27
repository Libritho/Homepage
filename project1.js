
let slideIndex = 0;
window.onload = showSlides;

function showSlides() {
    console.log('999999'
    )
    let i;
    let slides = document.getElementsByClassName('mySlides');
    console.log(slides)
    let dots = document.getElementsByClassName('dot');
    console.log('dots', dots)
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides)
    console.log(slides[0])
    console.log('slides[slideIndex-1]', slides[slideIndex-1])
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}