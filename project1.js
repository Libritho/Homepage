window.onload = addListeners;

function addListeners () {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i<slides.length; i++) {
        dots[i].onclick = function () {
            dots[i].className += " active";
            slides[i].style.display = "block";


            for (let z = 0; z<slides.length; z++)
                if (z !== i) {
            {

                    dots[z].className = "dot";
                    slides[z].style.display = "none";
                }
            }
        }
    }
}