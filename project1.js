window.onload = addListeners;
let content = {};

function addListeners () {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    content = document.getElementsByClassName("content")[0];

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
    fetch('https://api.unsplash.com/search/photos?client_id=d1qplN8zd1k3SAGdyXJIM5fAA30MkNSBSDRNY3qW8c0&per_page=5&page=1&query=office')
        .then(function (response) {
            response.json().then(function (data) {
                console.log('data', data)
                console.log('content', content)
                for (let i = 0; i < data.results.length; i++) {
                    const img = document.createElement('img');
                    img.setAttribute('src', `${data.results[i].urls.small}`)
                    content.appendChild(img);
                }
            })
        })
}
