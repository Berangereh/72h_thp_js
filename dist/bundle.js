/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => /* binding */ Home\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Home\", argument);\n};\n\n\n\n//# sourceURL=webpack://thp_convention/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            rating = response.rating,\n            ratings_count = response.ratings_count,\n            developer = response.developer,\n            tags = response.tags;\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"h1.title\").innerHTML = name;\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n        articleDOM.querySelector(\"p.rating span\").innerHTML = rating;\n        articleDOM.querySelector(\"p.ratings_count span\").innerHTML = ratings_count;\n        articleDOM.querySelector(\"p.developer\").innerHTML = developer;\n        articleDOM.querySelector(\"p.tags\").innerHTML = tags;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail container\\\">\\n          <div class=\\\"article\\\">\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"rating\\\"><span></span> / 5</p>\\n            <p class=\\\"ratings_count\\\"><span></span> votes</p>\\n            <h3>Plot</h3>\\n            <p class=\\\"description\\\"></p>\\n            <h3>Gameplay</h3>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <h3>Developer</h3>\\n            <p class=\\\"developer\\\"></p>\\n            <h3>Plateforms</h3>\\n            <h3>Publisher</h3>\\n            <h3>Genre</h3>\\n            <h3>Tags</h3>\\n            <p class=\\\"tags\\\"></p>\\n            \\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://thp_convention/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var datasave = \"\";\n  console.log(\"Page List\", argument);\n\n  var preparePage = function preparePage() {\n    var pagesize = \"&page_size=9\";\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"?search=\" + argument;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (game) {\n          articles += \"   <div id=\\\"cardHover\\\" class=\\\"container\\\">\\n                        <div class=\\\"cardGame card inline-poster center\\\" id=\\\"card\\\">                         \\n                          <div id=\\\"card_img\\\">  \\n                            <img src=\\\"\".concat(game.background_image, \"\\\" class=\\\"card-img-top\\\">\\n                          </div>  \\n                          <div class =\\\"card-body\\\">\\n                                <a href = \\\"#pagedetail/\").concat(game.id, \"\\\" class =\\\"h1 card-text\\\">\").concat(game.name, \"</a>\\n                            </div>\\n                        </div>  \\n                    </div>\");\n          document.querySelector(\".page-list .articles\").innerHTML = articles;\n          var mouseTarget = document.getElementById(\"card_img\");\n          var contentCard = document.getElementById(\"card\");\n          mouseTarget.addEventListener('mouseenter', function (e) {\n            mouseTarget.innerHTML = \"<h3>\".concat(game.released, \"</h3>\\n                <h3>\").concat(game.rating, \"/5 - \").concat(game.ratings_count, \" votes </h3>\\n                <h4>\").concat(game.tags[0].name, \"</h4> \\n                \");\n            console.log('mouse enter!');\n          });\n          mouseTarget.addEventListener('mouseleave', function (e) {\n            mouseTarget.innerHTML = articles; //document.querySelector(\".page-list .articles\").innerHTML = articles;\n          });\n        });\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument + pagesize);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n          <section class=\\\"page-list \\\">\\n            <h1>Welcome,</h1>\\n            <p>The hype Program is so cool! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\\n            <div class=\\\"articles\\\">...loading</div>\\n          </section>\\n        \";\n    preparePage();\n  };\n\n  render();\n};\n\nvar btnshowmore = document.createElement(\"div\");\nbtnshowmore.innerHTML = \"\\n  <button type=\\\"button\\\" class=\\\"btn btn-outline-light\\\" id=\\\"btnshowmore\\\">Plus de jeux</button>\\n  \";\nvar body = document.getElementsByTagName(\"body\")[0];\nbody.appendChild(btnshowmore);\n\n\n//# sourceURL=webpack://thp_convention/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"submit\", function () {\n  var searchInput = document.getElementById('search-input').value;\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_2__.PageList)(searchInput);\n});\nwindow.addEventListener(\"onclick\", function () {\n  var btnshowmore = document.getElementById('btnshowmore');\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_2__.PageList)(\"&page=2\");\n});\n\n//# sourceURL=webpack://thp_convention/./src/js/index.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => /* binding */ routes\n/* harmony export */ });\n/* harmony import */ var _Home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.js */ \"./src/js/Home.js\");\n/* harmony import */ var _PageList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageList.js */ \"./src/js/PageList.js\");\n/* harmony import */ var _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageDetail.js */ \"./src/js/PageDetail.js\");\n\n\n\nvar routes = {\n  \"\": _PageList_js__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  \"pagelist\": _PageList_js__WEBPACK_IMPORTED_MODULE_1__.PageList,\n  \"pagedetail\": _PageDetail_js__WEBPACK_IMPORTED_MODULE_2__.PageDetail\n};\n\n\n//# sourceURL=webpack://thp_convention/./src/js/routes.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://thp_convention/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;