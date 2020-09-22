/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/about_company/ideology/ideology.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/about_company/ideology/ideology.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  //Google map api settings
  (function initMap() {
    var sLatLng = {
      lat: 59.93172927746452,
      lng: 30.322663050000028
    }; // Styles a map in night mode.

    var map = new google.maps.Map(document.getElementById('googleMap'), {
      center: sLatLng,
      zoom: 18,
      disableDefaultUI: true,
      styles: [{
        elementType: 'geometry',
        stylers: [{
          color: '#343332'
        }]
      }, {
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#242f3e'
        }]
      }, {
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#746855'
        }]
      }, {
        elementType: "labels.icon",
        stylers: [{
          visibility: "off"
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{
          color: '#454545'
        }]
      }, {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#212a37'
        }]
      }, {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{
          color: '#746855'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{
          color: '#1f2835'
        }]
      }, {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{
          color: '#191a1a'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{
          color: '#9d9d9d'
        }]
      }, {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{
          color: '#9d9d9d'
        }]
      }]
    });
    new google.maps.Marker({
      position: sLatLng,
      map: map,
      title: "Hello World!",
      icon: {
        url: "img/map-marker.svg",
        scaledSize: new google.maps.Size(80, 100)
      }
    });
  })();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/main/contact-form/contact-form.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/main/contact-form/contact-form.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/*Contact form script*/
$(document).ready(function () {
  var sContactForm = document.getElementById('s-contact-form');

  if (sContactForm) {
    var sFormAllInput = sContactForm.querySelectorAll('input');
    sFormAllInput.forEach(function (item) {
      item.addEventListener('input', function () {
        if (!item.classList.contains('visited')) item.classList.add('visited');
      });
    });
  }
});
/*Contact form script*/
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/main/main-banner/main-banner.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/main/main-banner/main-banner.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {//Stop video on modal window close
$(document).ready(function () {
  var mainBannerVideoBlock = document.getElementById('main-modal-video');

  if (mainBannerVideoBlock) {
    var mainBannerVideoIframe = mainBannerVideoBlock.getElementsByTagName("iframe")[0];

    if (mainBannerVideoIframe) {
      var mainBannerVideoUrl = mainBannerVideoIframe.getAttribute('src');
      $('#videoModal').on('hidden.bs.modal', function () {
        mainBannerVideoIframe.setAttribute('src', '');
        mainBannerVideoIframe.setAttribute('src', mainBannerVideoUrl);
      });
    }
  }
}); //Stop video on modal window close
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/main/stages-work/stages-work.js":
/*!************************************************************!*\
  !*** ./src/blocks/modules/main/stages-work/stages-work.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", function () {
  var stagesWorkBlock = document.getElementById('stages-work');

  function addAnimClass(elem) {
    elem.classList.toggle('stage-hover-animation');
  }

  if (stagesWorkBlock) {
    var hoverElem = stagesWorkBlock.querySelectorAll('[data-hover]');

    if (hoverElem.length) {
      for (var i = 0; i < hoverElem.length; i++) {
        (function (i) {
          var animStagesElem = stagesWorkBlock.querySelector('[data-animation=' + hoverElem[i].dataset.hover + ']');

          if (animStagesElem) {
            hoverElem[i].addEventListener('mouseover', function () {
              addAnimClass(animStagesElem);
            });
            hoverElem[i].addEventListener('mouseout', function () {
              addAnimClass(animStagesElem);
            });
          }
        })(i);
      }
    }
  }
}, false);

/***/ }),

/***/ "./src/js/aos-setting.js":
/*!*******************************!*\
  !*** ./src/js/aos-setting.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aos/dist/aos */ "./node_modules/aos/dist/aos.js");
/* harmony import */ var aos_dist_aos__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aos_dist_aos__WEBPACK_IMPORTED_MODULE_0__);

aos_dist_aos__WEBPACK_IMPORTED_MODULE_0___default.a.init();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap/js/dist/util */ "./node_modules/bootstrap/js/dist/util.js");
/* harmony import */ var bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_util__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/js/dist/collapse */ "./node_modules/bootstrap/js/dist/collapse.js");
/* harmony import */ var bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/js/dist/dropdown */ "./node_modules/bootstrap/js/dist/dropdown.js");
/* harmony import */ var bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! bootstrap/js/dist/modal */ "./node_modules/bootstrap/js/dist/modal.js");
/* harmony import */ var bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(bootstrap_js_dist_modal__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blocks/modules/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_header_header__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _blocks_modules_main_stages_work_stages_work__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../blocks/modules/main/stages-work/stages-work */ "./src/blocks/modules/main/stages-work/stages-work.js");
/* harmony import */ var _blocks_modules_main_stages_work_stages_work__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_main_stages_work_stages_work__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _blocks_modules_main_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../blocks/modules/main/contact-form/contact-form */ "./src/blocks/modules/main/contact-form/contact-form.js");
/* harmony import */ var _blocks_modules_main_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_main_contact_form_contact_form__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _blocks_modules_main_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../blocks/modules/main/main-banner/main-banner */ "./src/blocks/modules/main/main-banner/main-banner.js");
/* harmony import */ var _blocks_modules_main_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_main_main_banner_main_banner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blocks/modules/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_footer_footer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _swiper_settings__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swiper-settings */ "./src/js/swiper-settings.js");
/* harmony import */ var _particles_min__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./particles.min */ "./src/js/particles.min.js");
/* harmony import */ var _particles_min__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_particles_min__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _priority_nav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./priority-nav */ "./src/js/priority-nav.js");
/* harmony import */ var _priority_nav__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_priority_nav__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _aos_setting__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./aos-setting */ "./src/js/aos-setting.js");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./my */ "./src/js/my.js");
/* harmony import */ var _my__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_my__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _blocks_modules_about_company_ideology_ideology__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../blocks/modules/about_company/ideology/ideology */ "./src/blocks/modules/about_company/ideology/ideology.js");
/* harmony import */ var _blocks_modules_about_company_ideology_ideology__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_modules_about_company_ideology_ideology__WEBPACK_IMPORTED_MODULE_15__);
// Импортируем jQuery
 // Импортируем необходимые js-файлы Bootstrap 4




 // Импортируем другие js-файлы










 //about_company



/***/ }),

/***/ "./src/js/my.js":
/*!**********************!*\
  !*** ./src/js/my.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * Функция для имитации подбора пороля, для заголовков
 */
function bruteForcePasswordEffect(nick, el) {
  var L = nick.length,
      cursor = 0,
      arr,
      timeout,
      prob = 0.5 // вероятность "разгадывания" очередной позиции
  ,
      rate = 10 // частота "кадров" в секунду
  ,
      delay = 1000 / rate,
      alphabet = [],
      i,
      aL; // заполним алфавит из которого брать случайные символы

  for (i = 128; i <= 255; i++) {
    alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
  }

  for (i = 1024; i <= 1279; i++) {
    alphabet.push(String.fromCharCode(97 + Math.floor(Math.random() * 26)));
  }

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
} //Получаем все section на странице


var allSections = document.querySelectorAll('section');
var sectionTitlesAnim = '';
var sectionTitlesAnimStatus = true;
document.addEventListener("DOMContentLoaded", scrolling, false);

function titleAnimation(section) {
  if (!section.classList.contains("animation-start")) {
    sectionTitlesAnim = section.querySelectorAll('.section-title__anime');

    if (sectionTitlesAnim.length) {
      for (var el = 0; el < sectionTitlesAnim.length; el++) {
        bruteForcePasswordEffect(sectionTitlesAnim[el].textContent, sectionTitlesAnim[el]);
      }

      sectionTitlesAnim = '';
    }

    sectionTitlesAnim = '';
  }
} //Проверяем текущий section на видимость


function scrolling(e) {
  for (var i = 0; i < allSections.length; i++) {
    var sectionItem = allSections[i];

    if (!sectionItem.classList.contains("animation-start") && isPartiallyVisible(sectionItem, 300)) {
      titleAnimation(sectionItem);
      sectionItem.classList.add("animation-start");
    }
  }
} //Определение частично видимых элементов


function isPartiallyVisible(el, count) {
  var elementBoundary = el.getBoundingClientRect();
  var top = elementBoundary.top;
  var bottom = elementBoundary.bottom;
  var height = elementBoundary.height;
  return top + height >= 0 && height + window.innerHeight - count >= bottom;
} //Button up


$(document).ready(function () {
  $('#goUpBtn').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
  });
}); //particlesJS

var particlesJsOption = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

if (document.getElementById('particles-js__our-mission')) {
  particlesJS("particles-js__our-mission", particlesJsOption);
}

if (document.getElementById('particles-js__stages-work')) {
  particlesJS("particles-js__stages-work", particlesJsOption);
}

if (document.getElementById('particles-js__footer')) {
  particlesJS("particles-js__footer", particlesJsOption);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/particles.min.js":
/*!*********************************!*\
  !*** ./src/js/particles.min.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? {
    r: parseInt(t[1], 16),
    g: parseInt(t[2], 16),
    b: parseInt(t[3], 16)
  } : null;
}

function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}

function isInArray(e, a) {
  return a.indexOf(e) > -1;
}

var pJS = function pJS(e, a) {
  var t = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: {
      el: t,
      w: t.offsetWidth,
      h: t.offsetHeight
    },
    particles: {
      number: {
        value: 400,
        density: {
          enable: !0,
          value_area: 800
        }
      },
      color: {
        value: "#fff"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#ff0000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "",
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: !1,
        anim: {
          enable: !1,
          speed: 2,
          opacity_min: 0,
          sync: !1
        }
      },
      size: {
        value: 20,
        random: !1,
        anim: {
          enable: !1,
          speed: 20,
          size_min: 0,
          sync: !1
        }
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "none",
        random: !1,
        straight: !1,
        out_mode: "out",
        bounce: !1,
        attract: {
          enable: !1,
          rotateX: 3e3,
          rotateY: 3e3
        }
      },
      array: []
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: !0,
          mode: "grab"
        },
        onclick: {
          enable: !0,
          mode: "push"
        },
        resize: !0
      },
      modes: {
        grab: {
          distance: 100,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 200,
          size: 80,
          duration: .4
        },
        repulse: {
          distance: 200,
          duration: .4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      },
      mouse: {}
    },
    retina_detect: !1,
    fn: {
      interact: {},
      modes: {},
      vendors: {}
    },
    tmp: {}
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a), i.tmp.obj = {
    size_value: i.particles.size.value,
    size_anim_speed: i.particles.size.anim.speed,
    move_speed: i.particles.move.speed,
    line_linked_distance: i.particles.line_linked.distance,
    line_linked_width: i.particles.line_linked.width,
    mode_grab_distance: i.interactivity.modes.grab.distance,
    mode_bubble_distance: i.interactivity.modes.bubble.distance,
    mode_bubble_size: i.interactivity.modes.bubble.size,
    mode_repulse_distance: i.interactivity.modes.repulse.distance
  }, i.fn.retinaInit = function () {
    i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio;
  }, i.fn.canvasInit = function () {
    i.canvas.ctx = i.canvas.el.getContext("2d");
  }, i.fn.canvasSize = function () {
    i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
      i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles();
    });
  }, i.fn.canvasPaint = function () {
    i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.canvasClear = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
  }, i.fn.particle = function (e, a, t) {
    if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == _typeof(e.value)) {
      if (e.value instanceof Array) {
        var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
        this.color.rgb = hexToRgb(s);
      } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
        r: e.value.r,
        g: e.value.g,
        b: e.value.b
      }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
        h: e.value.h,
        s: e.value.s,
        l: e.value.l
      });
    } else "random" == e.value ? this.color.rgb = {
      r: Math.floor(256 * Math.random()) + 0,
      g: Math.floor(256 * Math.random()) + 0,
      b: Math.floor(256 * Math.random()) + 0
    } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
    this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
    var n = {};

    switch (i.particles.move.direction) {
      case "top":
        n = {
          x: 0,
          y: -1
        };
        break;

      case "top-right":
        n = {
          x: .5,
          y: -.5
        };
        break;

      case "right":
        n = {
          x: 1,
          y: -0
        };
        break;

      case "bottom-right":
        n = {
          x: .5,
          y: .5
        };
        break;

      case "bottom":
        n = {
          x: 0,
          y: 1
        };
        break;

      case "bottom-left":
        n = {
          x: -.5,
          y: 1
        };
        break;

      case "left":
        n = {
          x: -1,
          y: 0
        };
        break;

      case "top-left":
        n = {
          x: -.5,
          y: -.5
        };
        break;

      default:
        n = {
          x: 0,
          y: 0
        };
    }

    i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
    var r = i.particles.shape.type;

    if ("object" == _typeof(r)) {
      if (r instanceof Array) {
        var c = r[Math.floor(Math.random() * r.length)];
        this.shape = c;
      }
    } else this.shape = r;

    if ("image" == this.shape) {
      var o = i.particles.shape;
      this.img = {
        src: o.image.src,
        ratio: o.image.width / o.image.height
      }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
    }
  }, i.fn.particle.prototype.draw = function () {
    function e() {
      i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio);
    }

    var a = this;
    if (void 0 != a.radius_bubble) var t = a.radius_bubble;else var t = a.radius;
    if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;else var s = a.opacity;
    if (a.color.rgb) var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")";else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";

    switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
      case "circle":
        i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
        break;

      case "edge":
        i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
        break;

      case "triangle":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
        break;

      case "polygon":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
        break;

      case "star":
        i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
        break;

      case "image":
        if ("svg" == i.tmp.img_type) var r = a.img.obj;else var r = i.tmp.img_obj;
        r && e();
    }

    i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill();
  }, i.fn.particlesCreate = function () {
    for (var e = 0; e < i.particles.number.value; e++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }
  }, i.fn.particlesUpdate = function () {
    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];

      if (i.particles.move.enable) {
        var t = i.particles.move.speed / 2;
        a.x += a.vx * t, a.y += a.vy * t;
      }

      if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode) var s = {
        x_left: a.radius,
        x_right: i.canvas.w,
        y_top: a.radius,
        y_bottom: i.canvas.h
      };else var s = {
        x_left: -a.radius,
        x_right: i.canvas.w + a.radius,
        y_top: -a.radius,
        y_bottom: i.canvas.h + a.radius
      };

      switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
        case "bounce":
          a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy);
      }

      if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable) for (var n = e + 1; n < i.particles.array.length; n++) {
        var r = i.particles.array[n];
        i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
      }
    }
  }, i.fn.particlesDraw = function () {
    i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();

    for (var e = 0; e < i.particles.array.length; e++) {
      var a = i.particles.array[e];
      a.draw();
    }
  }, i.fn.particlesEmpty = function () {
    i.particles.array = [];
  }, i.fn.particlesRefresh = function () {
    cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
  }, i.fn.interact.linkParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;

      if (r > 0) {
        var c = i.particles.line_linked.color_rgb_line;
        i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
      }
    }
  }, i.fn.interact.attractParticles = function (e, a) {
    var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);

    if (n <= i.particles.line_linked.distance) {
      var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
      e.vx -= r, e.vy -= c, a.vx += r, a.vy += c;
    }
  }, i.fn.interact.bounceParticles = function (e, a) {
    var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
    n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy);
  }, i.fn.modes.pushParticles = function (e, a) {
    i.tmp.pushing = !0;

    for (var t = 0; e > t; t++) {
      i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
        x: a ? a.pos_x : Math.random() * i.canvas.w,
        y: a ? a.pos_y : Math.random() * i.canvas.h
      })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1);
    }
  }, i.fn.modes.removeParticles = function (e) {
    i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
  }, i.fn.modes.bubbleParticle = function (e) {
    function a() {
      e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
    }

    function t(a, t, s, n, c) {
      if (a != t) if (i.tmp.bubble_duration_end) {
        if (void 0 != s) {
          var o = n - p * (n - a) / i.interactivity.modes.bubble.duration,
              l = a - o;
          d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else if (r <= i.interactivity.modes.bubble.distance) {
        if (void 0 != s) var v = s;else var v = n;

        if (v != a) {
          var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
          "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d);
        }
      } else "size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0);
    }

    if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
      var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;

      if (r <= i.interactivity.modes.bubble.distance) {
        if (c >= 0 && "mousemove" == i.interactivity.status) {
          if (i.interactivity.modes.bubble.size != i.particles.size.value) if (i.interactivity.modes.bubble.size > i.particles.size.value) {
            var o = e.radius + i.interactivity.modes.bubble.size * c;
            o >= 0 && (e.radius_bubble = o);
          } else {
            var l = e.radius - i.interactivity.modes.bubble.size,
                o = e.radius - l * c;
            o > 0 ? e.radius_bubble = o : e.radius_bubble = 0;
          }
          if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value) if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
            var v = i.interactivity.modes.bubble.opacity * c;
            v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          } else {
            var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
            v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
          }
        }
      } else a();

      "mouseleave" == i.interactivity.status && a();
    } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
      if (i.tmp.bubble_clicking) {
        var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
        p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1);
      }

      i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
    }
  }, i.fn.modes.repulseParticle = function (e) {
    function a() {
      var a = Math.atan2(d, p);

      if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
        var t = {
          x: e.x + e.vx,
          y: e.y + e.vy
        };
        t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy);
      }
    }

    if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
      var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = {
        x: t / n,
        y: s / n
      },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = {
        x: e.x + r.x * l,
        y: e.y + r.y * l
      };
      "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y);
    } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode)) if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
      var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
          p = i.interactivity.mouse.click_pos_x - e.x,
          d = i.interactivity.mouse.click_pos_y - e.y,
          m = p * p + d * d,
          u = -c / m * 1;
      c >= m && a();
    } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);
  }, i.fn.modes.grabParticle = function (e) {
    if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
      var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);

      if (s <= i.interactivity.modes.grab.distance) {
        var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;

        if (n > 0) {
          var r = i.particles.line_linked.color_rgb_line;
          i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath();
        }
      }
    }
  }, i.fn.vendors.eventsListeners = function () {
    "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
      if (i.interactivity.el == window) var a = e.clientX,
          t = e.clientY;else var a = e.offsetX || e.clientX,
          t = e.offsetY || e.clientY;
      i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove";
    }), i.interactivity.el.addEventListener("mouseleave", function (e) {
      i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave";
    })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
      if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = new Date().getTime(), i.interactivity.events.onclick.enable) switch (i.interactivity.events.onclick.mode) {
        case "push":
          i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
          break;

        case "remove":
          i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
          break;

        case "bubble":
          i.tmp.bubble_clicking = !0;
          break;

        case "repulse":
          i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
            i.tmp.repulse_clicking = !1;
          }, 1e3 * i.interactivity.modes.repulse.duration);
      }
    });
  }, i.fn.vendors.densityAutoParticles = function () {
    if (i.particles.number.density.enable) {
      var e = i.canvas.el.width * i.canvas.el.height / 1e3;
      i.tmp.retina && (e /= 2 * i.canvas.pxratio);
      var a = e * i.particles.number.value / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
      0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
    }
  }, i.fn.vendors.checkOverlap = function (e, a) {
    for (var t = 0; t < i.particles.array.length; t++) {
      var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
      c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e));
    }
  }, i.fn.vendors.createSvgImg = function (e) {
    var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
      return n;
    }),
        n = new Blob([s], {
      type: "image/svg+xml;charset=utf-8"
    }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
    o.addEventListener("load", function () {
      e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++;
    }), o.src = c;
  }, i.fn.vendors.destroypJS = function () {
    cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null;
  }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
    var r = s * n,
        c = s / n,
        o = 180 * (c - 2) / c,
        l = Math.PI - Math.PI * o / 180;
    e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);

    for (var v = 0; r > v; v++) {
      e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
    }

    e.fill(), e.restore();
  }, i.fn.vendors.exportImg = function () {
    window.open(i.canvas.el.toDataURL("image/png"), "_blank");
  }, i.fn.vendors.loadImg = function (e) {
    if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src) {
      if ("svg" == e) {
        var a = new XMLHttpRequest();
        a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
          4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0));
        }, a.send();
      } else {
        var t = new Image();
        t.addEventListener("load", function () {
          i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw();
        }), t.src = i.particles.shape.image.src;
      }
    } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0;
  }, i.fn.vendors.draw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
  }, i.fn.vendors.checkBeforeDraw = function () {
    "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw());
  }, i.fn.vendors.init = function () {
    i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color);
  }, i.fn.vendors.start = function () {
    isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
  }, i.fn.vendors.eventsListeners(), i.fn.vendors.start();
};

Object.deepExtend = function (e, a) {
  for (var t in a) {
    a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
  }

  return e;
}, window.requestAnimFrame = function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  };
}(), window.cancelRequestAnimFrame = function () {
  return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
  "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
  var t = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = t.getElementsByClassName(i);
  if (s.length) for (; s.length > 0;) {
    t.removeChild(s[0]);
  }
  var n = document.createElement("canvas");
  n.className = i, n.style.width = "100%", n.style.height = "100%";
  var r = document.getElementById(e).appendChild(n);
  null != r && pJSDom.push(new pJS(e, a));
}, window.particlesJS.load = function (e, a, t) {
  var i = new XMLHttpRequest();
  i.open("GET", a), i.onreadystatechange = function (a) {
    if (4 == i.readyState) if (200 == i.status) {
      var s = JSON.parse(a.currentTarget.response);
      window.particlesJS(e, s), t && t();
    } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found");
  }, i.send();
};

/***/ }),

/***/ "./src/js/priority-nav.js":
/*!********************************!*\
  !*** ./src/js/priority-nav.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * priority-nav - v1.0.13 | (c) 2018 @gijsroge | MIT license
 * Repository: https://github.com/gijsroge/priority-navigation.git
 * Description: Priority+ pattern navigation that hides menu items if they don't fit on screen.
 * Demo: http://gijsroge.github.io/priority-nav.js/
 */
(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(window || this, function (root) {
  "use strict";
  /**
   * Variables
   */

  var priorityNav = {}; // Object for public APIs

  var breaks = []; // Object to store instances with breakpoints where the instances menu item"s didin"t fit.

  var supports = !!document.querySelector && !!root.addEventListener; // Feature test

  var settings = {};
  var instance = 0;
  var count = 0;
  var mainNavWrapper, totalWidth, restWidth, mainNav, navDropdown, navDropdownToggle, dropDownWidth, toggleWrapper;
  var viewportWidth = 0;
  /**
   * Default settings
   * @type {{initClass: string, navDropdown: string, navDropdownToggle: string, mainNavWrapper: string, moved: Function, movedBack: Function}}
   */

  var defaults = {
    initClass: "js-priorityNav",
    // Class that will be printed on html element to allow conditional css styling.
    mainNavWrapper: "nav",
    // mainnav wrapper selector (must be direct parent from mainNav)
    mainNav: "ul",
    // mainnav selector. (must be inline-block)
    navDropdownClassName: "nav__dropdown",
    // class used for the dropdown.
    navDropdownToggleClassName: "nav__dropdown-toggle",
    // class used for the dropdown toggle.
    navDropdownLabel: "",
    // Text that is used for the dropdown toggle.
    navDropdownBreakpointLabel: "",
    //button label for navDropdownToggle when the breakPoint is reached.
    breakPoint: 710,
    //amount of pixels when all menu items should be moved to dropdown to simulate a mobile menu
    throttleDelay: 50,
    // this will throttle the calculating logic on resize because i'm a responsible dev.
    offsetPixels: 0,
    // increase to decrease the time it takes to move an item.
    count: true,
    // prints the amount of items are moved to the attribute data-count to style with css counter.
    //Callbacks
    moved: function moved() {},
    movedBack: function movedBack() {}
  };
  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists
   * @private
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function} callback Callback function for each iteration
   * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
   */

  var forEach = function forEach(collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === "[object Object]") {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };
  /**
   * Get the closest matching element up the DOM tree
   * @param {Element} elem Starting element
   * @param {String} selector Selector to match against (class, ID, or data attribute)
   * @return {Boolean|Element} Returns false if not match found
   */


  var getClosest = function getClosest(elem, selector) {
    var firstChar = selector.charAt(0);

    for (; elem && elem !== document; elem = elem.parentNode) {
      if (firstChar === ".") {
        if (elem.classList.contains(selector.substr(1))) {
          return elem;
        }
      } else if (firstChar === "#") {
        if (elem.id === selector.substr(1)) {
          return elem;
        }
      } else if (firstChar === "[") {
        if (elem.hasAttribute(selector.substr(1, selector.length - 2))) {
          return elem;
        }
      }
    }

    return false;
  };
  /**
   * Merge defaults with user options
   * @private
   * @param {Object} defaults Default settings
   * @param {Object} options User options
   * @returns {Object} Merged values of defaults and options
   */


  var extend = function extend(defaults, options) {
    var extended = {};
    forEach(defaults, function (value, prop) {
      extended[prop] = defaults[prop];
    });
    forEach(options, function (value, prop) {
      extended[prop] = options[prop];
    });
    return extended;
  };
  /**
   * Debounced resize to throttle execution
   * @param func
   * @param wait
   * @param immediate
   * @returns {Function}
   */


  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
          args = arguments;

      var later = function later() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };

      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  /**
   * Toggle class on element
   * @param el
   * @param className
   */


  var toggleClass = function toggleClass(el, className) {
    if (el.classList) {
      el.classList.toggle(className);
    } else {
      var classes = el.className.split(" ");
      var existingIndex = classes.indexOf(className);
      if (existingIndex >= 0) classes.splice(existingIndex, 1);else classes.push(className);
      el.className = classes.join(" ");
    }
  };
  /**
   * Check if dropdown menu is already on page before creating it
   * @param mainNavWrapper
   */


  var prepareHtml = function prepareHtml(_this, settings) {
    /**
     * Create dropdow menu
     * @type {HTMLElement}
     */
    toggleWrapper = document.createElement("span");
    navDropdown = document.createElement("ul");
    navDropdownToggle = document.createElement("button");
    /**
     * Set label for dropdown toggle
     * @type {string}
     */

    navDropdownToggle.innerHTML = settings.navDropdownLabel;
    /**
     * Set aria attributes for accessibility
     */

    navDropdownToggle.setAttribute("aria-controls", "menu");
    navDropdownToggle.setAttribute("type", "button");
    navDropdown.setAttribute("aria-hidden", "true");
    /**
     * Move elements to the right spot
     */

    if (_this.querySelector(mainNav).parentNode !== _this) {
      console.warn("mainNav is not a direct child of mainNavWrapper, double check please");
      return;
    }

    _this.insertAfter(toggleWrapper, _this.querySelector(mainNav));

    toggleWrapper.appendChild(navDropdownToggle);
    toggleWrapper.appendChild(navDropdown);
    /**
     * Add classes so we can target elements
     */

    navDropdown.classList.add(settings.navDropdownClassName);
    navDropdown.classList.add("priority-nav__dropdown");
    navDropdownToggle.classList.add(settings.navDropdownToggleClassName);
    navDropdownToggle.classList.add("priority-nav__dropdown-toggle"); //fix so button is type="button" and do not submit forms

    navDropdownToggle.setAttribute("type", "button");
    toggleWrapper.classList.add(settings.navDropdownClassName + "-wrapper");
    toggleWrapper.classList.add("priority-nav__wrapper");

    _this.classList.add("priority-nav");
  };
  /**
   * Get innerwidth without padding
   * @param element
   * @returns {number}
   */


  var getElementContentWidth = function getElementContentWidth(element) {
    var styles = window.getComputedStyle(element);
    var padding = parseFloat(styles.paddingLeft) + parseFloat(styles.paddingRight);
    return element.clientWidth - padding;
  };
  /**
   * Get viewport size
   * @returns {{width: number, height: number}}
   */


  var viewportSize = function viewportSize() {
    var doc = document,
        w = window;
    var docEl = doc.compatMode && doc.compatMode === "CSS1Compat" ? doc.documentElement : doc.body;
    var width = docEl.clientWidth;
    var height = docEl.clientHeight; // mobile zoomed in?

    if (w.innerWidth && width > w.innerWidth) {
      width = w.innerWidth;
      height = w.innerHeight;
    }

    return {
      width: width,
      height: height
    };
  };
  /**
   * Get width
   * @param elem
   * @returns {number}
   */


  var calculateWidths = function calculateWidths(_this) {
    totalWidth = getElementContentWidth(_this); //Check if parent is the navwrapper before calculating its width

    if (_this.querySelector(navDropdown).parentNode === _this) {
      dropDownWidth = _this.querySelector(navDropdown).offsetWidth;
    } else {
      dropDownWidth = 0;
    }

    restWidth = getChildrenWidth(_this) + settings.offsetPixels;
    viewportWidth = viewportSize().width;
  };
  /**
   * Move item to array
   * @param item
   */


  priorityNav.doesItFit = function (_this) {
    /**
     * Check if it is the first run
     */
    var delay = _this.getAttribute("instance") === 0 ? delay : settings.throttleDelay;
    /**
     * Increase instance
     */

    instance++;
    /**
     * Debounced execution of the main logic
     */

    debounce(function () {
      /**
       * Get the current element"s instance
       * @type {string}
       */
      var identifier = _this.getAttribute("instance");
      /**
       * Update width
       */


      calculateWidths(_this);
      /**
       * Keep executing until all menu items that are overflowing are moved
       */

      while (totalWidth <= restWidth && _this.querySelector(mainNav).children.length > 0 || viewportWidth < settings.breakPoint && _this.querySelector(mainNav).children.length > 0) {
        //move item to dropdown
        priorityNav.toDropdown(_this, identifier); //recalculate widths

        calculateWidths(_this, identifier); //update dropdownToggle label

        if (viewportWidth < settings.breakPoint) updateLabel(_this, identifier, settings.navDropdownBreakpointLabel);
      }
      /**
       * Keep executing until all menu items that are able to move back are moved
       */


      while (totalWidth >= breaks[identifier][breaks[identifier].length - 1] && viewportWidth > settings.breakPoint) {
        //move item to menu
        priorityNav.toMenu(_this, identifier); //update dropdownToggle label

        if (viewportWidth > settings.breakPoint) updateLabel(_this, identifier, settings.navDropdownLabel);
      }
      /**
       * If there are no items in dropdown hide dropdown
       */


      if (breaks[identifier].length < 1) {
        _this.querySelector(navDropdown).classList.remove("show"); //show navDropdownLabel


        updateLabel(_this, identifier, settings.navDropdownLabel);
      }
      /**
       * If there are no items in menu
       */


      if (_this.querySelector(mainNav).children.length < 1) {
        //show navDropdownBreakpointLabel
        _this.classList.add("is-empty");

        updateLabel(_this, identifier, settings.navDropdownBreakpointLabel);
      } else {
        _this.classList.remove("is-empty");
      }
      /**
       * Check if we need to show toggle menu button
       */


      showToggle(_this, identifier);
    }, delay)();
  };
  /**
   * Show/hide toggle button
   */


  var showToggle = function showToggle(_this, identifier) {
    if (breaks[identifier].length < 1) {
      _this.querySelector(navDropdownToggle).classList.add("priority-nav-is-hidden");

      _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-visible");

      _this.classList.remove("priority-nav-has-dropdown");
      /**
       * Set aria attributes for accessibility
       */


      _this.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "false");
    } else {
      _this.querySelector(navDropdownToggle).classList.add("priority-nav-is-visible");

      _this.querySelector(navDropdownToggle).classList.remove("priority-nav-is-hidden");

      _this.classList.add("priority-nav-has-dropdown");
      /**
       * Set aria attributes for accessibility
       */


      _this.querySelector(".priority-nav__wrapper").setAttribute("aria-haspopup", "true");
    }
  };
  /**
   * Update count on dropdown toggle button
   */


  var updateCount = function updateCount(_this, identifier) {
    _this.querySelector(navDropdownToggle).setAttribute("priorityNav-count", breaks[identifier].length);
  };

  var updateLabel = function updateLabel(_this, identifier, label) {
    _this.querySelector(navDropdownToggle).innerHTML = label;
  };
  /**
   * Move item to dropdown
   */


  priorityNav.toDropdown = function (_this, identifier) {
    /**
     * move last child of navigation menu to dropdown
     */
    if (_this.querySelector(navDropdown).firstChild && _this.querySelector(mainNav).children.length > 0) {
      _this.querySelector(navDropdown).insertBefore(_this.querySelector(mainNav).lastElementChild, _this.querySelector(navDropdown).firstChild);
    } else if (_this.querySelector(mainNav).children.length > 0) {
      _this.querySelector(navDropdown).appendChild(_this.querySelector(mainNav).lastElementChild);
    }
    /**
     * store breakpoints
     */


    breaks[identifier].push(restWidth);
    /**
     * check if we need to show toggle menu button
     */

    showToggle(_this, identifier);
    /**
     * update count on dropdown toggle button
     */

    if (_this.querySelector(mainNav).children.length > 0 && settings.count) {
      updateCount(_this, identifier);
    }
    /**
     * If item has been moved to dropdown trigger the callback
     */


    settings.moved();
  };
  /**
   * Move item to menu
   */


  priorityNav.toMenu = function (_this, identifier) {
    /**
     * move last child of navigation menu to dropdown
     */
    if (_this.querySelector(navDropdown).children.length > 0) _this.querySelector(mainNav).appendChild(_this.querySelector(navDropdown).firstElementChild);
    /**
     * remove last breakpoint
     */

    breaks[identifier].pop();
    /**
     * Check if we need to show toggle menu button
     */

    showToggle(_this, identifier);
    /**
     * update count on dropdown toggle button
     */

    if (_this.querySelector(mainNav).children.length > 0 && settings.count) {
      updateCount(_this, identifier);
    }
    /**
     * If item has been moved back to the main menu trigger the callback
     */


    settings.movedBack();
  };
  /**
   * Count width of children and return the value
   * @param e
   */


  var getChildrenWidth = function getChildrenWidth(e) {
    var children = e.childNodes;
    var sum = 0;

    for (var i = 0; i < children.length; i++) {
      if (children[i].nodeType !== 3) {
        if (!isNaN(children[i].offsetWidth)) {
          sum += children[i].offsetWidth;
        }
      }
    }

    return sum;
  };
  /**
   * Bind eventlisteners
   */


  var listeners = function listeners(_this, settings) {
    // Check if an item needs to move
    if (window.attachEvent) {
      window.attachEvent("onresize", function () {
        if (priorityNav.doesItFit) priorityNav.doesItFit(_this);
      });
    } else if (window.addEventListener) {
      window.addEventListener("resize", function () {
        if (priorityNav.doesItFit) priorityNav.doesItFit(_this);
      }, true);
    } // Toggle dropdown


    _this.querySelector(navDropdownToggle).addEventListener("click", function () {
      toggleClass(_this.querySelector(navDropdown), "show");
      toggleClass(this, "is-open");
      toggleClass(_this, "is-open");
      /**
       * Toggle aria hidden for accessibility
       */

      if (-1 !== _this.className.indexOf("is-open")) {
        _this.querySelector(navDropdown).setAttribute("aria-hidden", "false");
      } else {
        _this.querySelector(navDropdown).setAttribute("aria-hidden", "true");

        _this.querySelector(navDropdown).blur();
      }
    });
    /*
     * Remove when clicked outside dropdown
     */


    document.addEventListener("click", function (event) {
      if (!getClosest(event.target, "." + settings.navDropdownClassName) && event.target !== _this.querySelector(navDropdownToggle)) {
        _this.querySelector(navDropdown).classList.remove("show");

        _this.querySelector(navDropdownToggle).classList.remove("is-open");

        _this.classList.remove("is-open");
      }
    });
    /**
     * Remove when escape key is pressed
     */

    document.onkeydown = function (evt) {
      evt = evt || window.event;

      if (evt.keyCode === 27) {
        document.querySelector(navDropdown).classList.remove("show");
        document.querySelector(navDropdownToggle).classList.remove("is-open");
        mainNavWrapper.classList.remove("is-open");
      }
    };
  };
  /**
   * Remove function
   */


  Element.prototype.remove = function () {
    this.parentElement.removeChild(this);
  };
  /*global HTMLCollection */


  NodeList.prototype.remove = HTMLCollection.prototype.remove = function () {
    for (var i = 0, len = this.length; i < len; i++) {
      if (this[i] && this[i].parentElement) {
        this[i].parentElement.removeChild(this[i]);
      }
    }
  };
  /**
   * Destroy the current initialization.
   * @public
   */


  priorityNav.destroy = function () {
    // If plugin isn"t already initialized, stop
    if (!settings) return; // Remove feedback class

    document.documentElement.classList.remove(settings.initClass); // Remove toggle

    toggleWrapper.remove(); // Remove settings

    settings = null;
    delete priorityNav.init;
    delete priorityNav.doesItFit;
  };
  /**
   * insertAfter function
   * @param n
   * @param r
   */


  if (supports && typeof Node !== "undefined") {
    Node.prototype.insertAfter = function (n, r) {
      this.insertBefore(n, r.nextSibling);
    };
  }

  var checkForSymbols = function checkForSymbols(string) {
    var firstChar = string.charAt(0);

    if (firstChar === "." || firstChar === "#") {
      return false;
    } else {
      return true;
    }
  };
  /**
   * Initialize Plugin
   * @public
   * @param {Object} options User settings
   */


  priorityNav.init = function (options) {
    /**
     * Merge user options with defaults
     * @type {Object}
     */
    settings = extend(defaults, options || {}); // Feature test.

    if (!supports && typeof Node === "undefined") {
      console.warn("This browser doesn't support priorityNav");
      return;
    } // Options check


    if (!checkForSymbols(settings.navDropdownClassName) || !checkForSymbols(settings.navDropdownToggleClassName)) {
      console.warn("No symbols allowed in navDropdownClassName & navDropdownToggleClassName. These are not selectors.");
      return;
    }
    /**
     * Store nodes
     * @type {NodeList}
     */


    var elements = document.querySelectorAll(settings.mainNavWrapper);
    /**
     * Loop over every instance and reference _this
     */

    forEach(elements, function (_this) {
      /**
       * Create breaks array
       * @type {number}
       */
      breaks[count] = [];
      /**
       * Set the instance number as data attribute
       */

      _this.setAttribute("instance", count++);
      /**
       * Store the wrapper element
       */


      mainNavWrapper = _this;

      if (!mainNavWrapper) {
        console.warn("couldn't find the specified mainNavWrapper element");
        return;
      }
      /**
       * Store the menu elementStore the menu element
       */


      mainNav = settings.mainNav;

      if (!_this.querySelector(mainNav)) {
        console.warn("couldn't find the specified mainNav element");
        return;
      }
      /**
       * Check if we need to create the dropdown elements
       */


      prepareHtml(_this, settings);
      /**
       * Store the dropdown element
       */

      navDropdown = "." + settings.navDropdownClassName;

      if (!_this.querySelector(navDropdown)) {
        console.warn("couldn't find the specified navDropdown element");
        return;
      }
      /**
       * Store the dropdown toggle element
       */


      navDropdownToggle = "." + settings.navDropdownToggleClassName;

      if (!_this.querySelector(navDropdownToggle)) {
        console.warn("couldn't find the specified navDropdownToggle element");
        return;
      }
      /**
       * Event listeners
       */


      listeners(_this, settings);
      /**
       * Start first check
       */

      priorityNav.doesItFit(_this);
    });
    /**
     * Count amount of instances
     */

    instance++;
    /**
     * Add class to HTML element to activate conditional CSS
     */

    document.documentElement.classList.add(settings.initClass);
  };
  /**
   * Public APIs
   */


  priorityNav.init();
  return priorityNav;
});

/***/ }),

/***/ "./src/js/swiper-settings.js":
/*!***********************************!*\
  !*** ./src/js/swiper-settings.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/js/swiper.esm.bundle.js");
// Импортируем Swiper slider
 //Инициализация слайдера work-examples

new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('.work-examples__slider', {
  centeredSlides: true,
  slidesPerView: 'auto',
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.work-examples__slider-next',
    prevEl: '.work-examples__slider-prev'
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 25,
      centeredSlides: false
    },
    // when window width is >= 441px
    441: {
      spaceBetween: 40,
      centeredSlides: false
    },
    // when window width is >= 641px
    641: {
      centeredSlides: true
    },
    // when window width is >= 1205px
    1205: {
      spaceBetween: 60
    }
  }
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map