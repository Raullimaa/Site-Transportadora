// pagina de css

const screen = document.querySelector("img-container");
const style = document.querySelector('#style');

// carrossel

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrosel() {
    ++idx;

    if(idx > img.length - 1) {
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 1400}px)`;
}

setInterval(carrosel, 3000);
