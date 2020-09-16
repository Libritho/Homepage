window.onload = addListeners;
let content = {};




function addListeners () {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    content = document.getElementsByClassName("content")[0];
    let btn5 = document.getElementsByClassName("btn-5");
    let queryImages = ['Design', 'Web design', 'Mobile App', 'Illustration', 'Photography'];

    for (let i = 0; i < slides.length; i++) {
        dots[i].onclick = function () {
            dots[i].className += " active";
            slides[i].style.display = "block";

            for (let z = 0; z < slides.length; z++)
                if (z !== i) {
                    {
                        dots[z].className = "dot";
                        slides[z].style.display = "none";
                    }
                }
        }
    }
    for (let i = 0; i < btn5.length; i++) {
        btn5[i].onclick = function () {
            apiLoad(queryImages[i]);
        }
    }

    apiLoad();
}
    function apiLoad(query) {

        fetch(`https://api.unsplash.com/search/photos?client_id=d1qplN8zd1k3SAGdyXJIM5fAA30MkNSBSDRNY3qW8c0&per_page=6&page=1&query=${query}`)
            .then(function (response) {
                response.json().then(function (data) {
                    content.querySelectorAll('*').forEach(img => img.remove());
                    for (let i = 0; i < data.results.length; i++) {
                        let img = document.createElement('img');
                        img.setAttribute('src', `${data.results[i].urls.small}`);
                        img.className = 'picture';


                        content.appendChild(img);


                    }

                })

            })


    }








