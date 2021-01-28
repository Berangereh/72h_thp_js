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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => /* binding */ PageDetail\n/* harmony export */ });\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n\n    var fetchGame = function fetchGame(url, argument) {\n      var finalURL = url + argument;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            ratings_count = response.ratings_count,\n            rating = response.rating,\n            background_image = response.background_image,\n            developers = response.developers,\n            genres = response.genres,\n            tags = response.tags,\n            parent_platforms = response.parent_platforms,\n            website = response.website,\n            clip = response.clip;\n        var gametags = [];\n        var tagsID = [];\n        tags.forEach(function (e) {\n          gametags += e.name + \" - \";\n          tagsID += e.id;\n        });\n        var gamegenres = \"\";\n        var genreID = [];\n        genres.forEach(function (e) {\n          gamegenres += e.name + \" \";\n          genreID += e.id;\n        });\n        var articleDOM = document.querySelector(\".page-detail .article\");\n        articleDOM.querySelector(\"#detailtitle\").innerHTML = name;\n        articleDOM.querySelector(\"#detaildate\").innerHTML = released;\n        articleDOM.querySelector(\"#rating span\").innerHTML = rating;\n        articleDOM.querySelector(\"#ratings_count span\").innerHTML = ratings_count;\n        articleDOM.querySelector(\"#jumbo\").style.backgroundImage = \"url('\".concat(background_image, \"')\"); //articleDOM.querySelector(\"#detailplatformlogo\").innerHTML = detailplatformlist; \n\n        articleDOM.querySelector(\"#detailwebsite\").href = \"\\\"\".concat(website, \"\\\"\");\n        articleDOM.querySelector(\"#detailgenres\").innerHTML = gamegenres;\n        articleDOM.querySelector(\"#detailtags\").innerHTML = gametags;\n        articleDOM.querySelector(\"#detailvideo\").src = \"https://www.youtube.com/embed/\".concat(clip.video);\n        articleDOM.querySelector(\"#detaildescription\").innerHTML = description;\n        articleDOM.querySelector(\"#detaildevelopers\").innerHTML = devname;\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\", cleanedArgument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n      <section class=\\\"page-detail\\\">\\n      <a class=\\\"btn btn-light mb-5\\\" href=\\\"#pagelist\\\">Voir les autres jeux</a>\\n        <div class=\\\"article\\\">\\n          <div id=\\\"jumbo\\\" class=\\\"jumbotron jumbotron-fluid\\\">\\n            <a id=\\\"detailwebsite\\\" class=\\\"btn btnWebsite mt-4 ml-4\\\">Check website</a>\\n          </div>\\n          <div class=\\\"container\\\">\\n            <h1 id=\\\"detailtitle\\\" class=\\\"title\\\"></h1>\\n            <p id=\\\"rating\\\" class=\\\"highlight\\\"><span></span> / 5</p>\\n            <p id=\\\"ratings_count\\\" class=\\\"highlight\\\"><span></span> votes</p>\\n            <p id=\\\"detailplatformlogo\\\"></p>\\n            \\n          </div>\\n          \\n          <div class=\\\"container\\\">\\n            <h1>Trailer</h1>\\n            <iframe id=\\\"detailvideo\\\" width=\\\"420\\\" height=\\\"315\\\"></iframe>\\n            <h1>Description</h1>\\n            <p id=\\\"detaildescription\\\" class=\\\"description\\\"></p>\\n            <h4>Release date</h4>\\n            <p class=\\\"release-date lead\\\"><span id=\\\"detaildate\\\"></span></p>\\n            <h4>Developer</h4>\\n            <p id=\\\"detaildevelopers\\\"></p>\\n            <h4>Genres</h4>\\n            <p id=\\\"detailgenres\\\"></p>\\n            <h4>Tags</h4>\\n            <p id=\\\"detailtags\\\"></p>\\n          </div>\\n        </div>\\n      </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://thp_convention/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => /* binding */ PageList\n/* harmony export */ });\nvar PageList = function PageList() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  var datasave = \"\";\n  var nextpage = \"\";\n  var count = 0;\n\n  var preparePage = function preparePage() {\n    var currentgame = \"&dates=2021-01-20,2030-12-31\";\n    var pagesize = \"&page_size=9\";\n    var cleanedArgument = argument.replace(/\\s+/g, \"-\");\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = \"\";\n\n      if (argument == \"\") {\n        finalURL = url + \"?search=\" + pagesize + currentgame;\n      } else if (argument != \"Next\") {\n        finalURL = url + \"?search=\" + argument + pagesize;\n      } else if (argument == \"Next\") {\n        finalURL = url;\n      }\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        datasave = response;\n        console.log(datasave);\n        nextpage = datasave.next; // let gametags = [];\n        // let tagsID = [];\n        //   tags.forEach((e) => {\n        //     gametags += e.name + \" - \"\n        //     tagsID += e.id\n        // })\n\n        datasave.results.forEach(function (game) {\n          articles += \"   <div id=\\\"cardHover\\\">\\n                        <a class=\\\"center\\\" id=\\\"card\\\" href = \\\"#pagedetail/\".concat(game.id, \"\\\">                         \\n                           \\n                          <img src=\\\"\").concat(game.background_image, \"\\\" class=\\\"card-img-top img_card\\\">                          \\n                          \\n                          <div id=\\\"hiddenCard class=\\\"card-body center\\\" style=\\\"display: none;\\\">\\n                            <p>\").concat(game.released, \"</p>\\n                            <p>\").concat(game.rating, \"/5 - \").concat(game.ratings_count, \" votes </p>\\n                            <p>\").concat(game.tags, \"</p>\\n                          </div> \\n\\n                          <div id=\\\"card_title\\\" class =\\\"card-body\\\">\\n                            <h3>\").concat(game.name, \"</h3>\\n                          </div>\\n                        </a> \\n                    </div>\");\n          document.querySelector(\".page-list .articles\").innerHTML = articles; //bouton next page\n\n          var button = document.getElementById(\"buttonshowmore\");\n          button.innerHTML = \"<button type=\\\"button\\\" class=\\\"btn center btnShowMore\\\">Plus de Games</button>\";\n\n          var newFetch = function newFetch() {\n            count += 1;\n            console.log(count);\n            button.removeEventListener(\"click\", newFetch);\n            console.log(nextpage);\n            fetchList(nextpage, \"Next\");\n          };\n\n          button.addEventListener(\"click\", newFetch);\n          var cardlist = document.querySelectorAll(\"#cardHover\");\n          cardlist.forEach(function (element) {\n            element.addEventListener(\"mouseover\", function () {\n              element.childNodes[1].childNodes[1].style.display = \"none\";\n              element.childNodes[1].childNodes[3].style.display = \"block\";\n            });\n          });\n          cardlist.forEach(function (element) {\n            element.addEventListener(\"mouseleave\", function () {\n              element.childNodes[1].childNodes[1].style.display = \"block\";\n              element.childNodes[1].childNodes[3].style.display = \"none\";\n            });\n          });\n        });\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games\", cleanedArgument + pagesize);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n          <section class=\\\"page-list \\\">\\n            <h1>Welcome,</h1>\\n            <p>The hype Program is so cool! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\\n            <div class=\\\"articles row row-cols-3\\\">...loading</div>\\n            <div class=\\\"mt-3\\\" id=\\\"buttonshowmore\\\"></div>\\n\\n          </section>\\n        \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://thp_convention/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_1__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"submit\", function () {\n  var searchInput = document.getElementById('search-input').value;\n  (0,_PageList__WEBPACK_IMPORTED_MODULE_2__.PageList)(searchInput);\n});\nvar moregames = document.getElementById(\"buttonshowmore\");\nmoregames.addEventListener(\"click\", function () {\n  return (0,_PageList__WEBPACK_IMPORTED_MODULE_2__.PageList)();\n});\n\n//# sourceURL=webpack://thp_convention/./src/js/index.js?");

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