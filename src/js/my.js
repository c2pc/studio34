/**
 * Функция для имитации подбора пороля, для заголовков
 */
function bruteForcePasswordEffect(nick, el) {

    var L = nick.length
        , cursor = 0
        , arr
        , timeout
        , prob = 0.5 // вероятность "разгадывания" очередной позиции
        , rate = 10  // частота "кадров" в секунду
        , delay = 1000 / rate
        , alphabet = []
        , i
        , aL
    ;

    // заполним алфавит из которого брать случайные символы
    for (i = 128; i <= 255; i++) alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    for (i = 1024; i <= 1279; i++) alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
    aL = alphabet.length;

    function tweak() {
        arr = nick.split('');
        for (pos = cursor; pos < L; pos++) {
            arr[pos] = alphabet[Math.floor(aL * Math.random())];
        }
        el.innerText = arr.join('');

        if (cursor === L) return; // done

        if (Math.random() < prob) cursor++;
        timeout = window.setTimeout(tweak, delay);
    }

    tweak();

}

/**
 * Добавление css класса для анимации
 */
var isScrolling = false;
window.addEventListener("scroll", throttleScroll, false);

function throttleScroll(e) {
    if (isScrolling == false) {
        window.requestAnimationFrame(function () {
            scrolling(e);
            isScrolling = false;
        });
    }
    isScrolling = true;
}

//Получаем все section на странице
var allSections = document.querySelectorAll('section')
var sectionTitlesAnim = ''
var sectionTitlesAnimStatus = true
document.addEventListener("DOMContentLoaded", scrolling, false);

function titleAnimation(section) {
    if (!section.classList.contains("animation-start")) {
        sectionTitlesAnim = section.querySelectorAll('.section-title__anime');
        if (sectionTitlesAnim.length) {
            for (var el = 0; el < sectionTitlesAnim.length; el++) {
                bruteForcePasswordEffect(sectionTitlesAnim[el].textContent, sectionTitlesAnim[el])
            }
            sectionTitlesAnim = ''
        }
        sectionTitlesAnim = ''
    }
}

//Проверяем текущий section на видимость
function scrolling(e) {
    for (var i = 0; i < allSections.length; i++) {
        var sectionItem = allSections[i];

        if (!sectionItem.classList.contains("animation-start") && isPartiallyVisible(sectionItem, 300)) {
            titleAnimation(sectionItem);
            sectionItem.classList.add("animation-start");
        }
    }
}

//Определение частично видимых элементов
function isPartiallyVisible(el, count) {
    var elementBoundary = el.getBoundingClientRect();

    var top = elementBoundary.top;
    var bottom = elementBoundary.bottom;
    var height = elementBoundary.height;

    return ((top + height >= 0) && (height + window.innerHeight - count >= bottom));
}

//Button up
$(document).ready(function () {
    $('#goUpBtn').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });
})


//particlesJS

var particlesJsOption = {
    "particles": {
        "number": {"value": 80, "density": {"enable": true, "value_area": 800}},
        "color": {"value": "#ffffff"},
        "shape": {
            "type": "circle",
            "stroke": {"width": 0, "color": "#000000"},
            "polygon": {"nb_sides": 5},
            "image": {"src": "img/github.svg", "width": 100, "height": 100}
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
        },
        "size": {"value": 3, "random": true, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false}},
        "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {"enable": true, "mode": "grab"},
            "onclick": {"enable": true, "mode": "push"},
            "resize": true
        },
        "modes": {
            "grab": {"distance": 400, "line_linked": {"opacity": 1}},
            "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
            "repulse": {"distance": 200, "duration": 0.4},
            "push": {"particles_nb": 4},
            "remove": {"particles_nb": 2}
        }
    },
    "retina_detect": true
};

if(document.getElementById('particles-js__our-mission')) {
    particlesJS("particles-js__our-mission", particlesJsOption);
}
if(document.getElementById('particles-js__stages-work')) {
    particlesJS("particles-js__stages-work", particlesJsOption);
}
if(document.getElementById('particles-js__footer')) {
    particlesJS("particles-js__footer", particlesJsOption);
}