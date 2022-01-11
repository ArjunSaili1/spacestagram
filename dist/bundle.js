/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/code/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/code/styles.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@media only screen and (max-width: 700px) {\\n    .feed-card{\\n        width: 450px !important; \\n    }\\n}\\n\\n@media only screen and (max-width: 470px) {\\n    .feed-card{\\n        width: 90vw!important; \\n    }\\n    .media-container{\\n        height: 300px !important;\\n    }\\n    .post-date{\\n        font-size: .75em;\\n    }\\n    .post-title{\\n        font-size: 1em;\\n    }\\n    .description{\\n        font-size: 0.7em;\\n    }\\n}\\n\\n*{\\n    padding: 0;\\n    margin: 0;\\n    border: 0;\\n    box-sizing: border-box;\\n    font-family: Helvetica, sans-serif;\\n}\\n\\n#main-header{\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    align-items: center;\\n    margin-bottom: 20px;\\n    box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);\\n}\\n\\n#main-title{\\n    margin: 10px;\\n}\\n\\n.post-header{\\n    display: flex;\\n    justify-content: space-between;\\n    padding: 3% 3% 3% 4%;\\n}\\n\\n#main-title{\\n    padding: 1%;\\n    font-size: 3rem;\\n}\\n\\n#feed{\\n    display: flex;\\n    gap: 5vw;\\n    flex-direction:column;\\n    align-items: center;\\n}\\n\\n.media-container{\\n    height: 450px;\\n}\\n\\nimg{\\n    height: 100%;\\n    width: 100%;\\n}\\n\\n.feed-card{\\n    border-radius: 16px;\\n    box-shadow: 0px 0px 26px 5px rgb(0 0 0 / 9%);\\n    width: 530px;\\n}\\n\\n.heart-icon{\\n    height: 1.3em;\\n    width: 1.3em;\\n    margin: 5px 0px 5px 0px\\n}\\n\\n.description{\\n    word-wrap: break-word;\\n    line-height: 1.4em;\\n    font-weight: 500;\\n    font-size: 14px;\\n}\\n\\n.post-footer{\\n    padding: 0 2% 0 2%;\\n    margin: 5px 0px 10px 0px;\\n}\\n\\n.post-date{\\n    color: grey;\\n}\\n\\n.like-container{\\n    display: flex;\\n    align-items: center;\\n    gap: 1%;\\n}\\n\\n.error-text-container{\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    height: 100%;\\n    word-wrap: break-word;\\n}\\n\\niframe{\\n    height: 100%;\\n    width: 100%;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://spacestagram/./src/code/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://spacestagram/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://spacestagram/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/code/styles.css":
/*!*****************************!*\
  !*** ./src/code/styles.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/code/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://spacestagram/./src/code/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://spacestagram/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/icons/heart.svg":
/*!*****************************!*\
  !*** ./src/icons/heart.svg ***!
  \*****************************/
/***/ ((module) => {

eval("module.exports = \"<svg xmlns:inkscape=\\\"http://www.inkscape.org/namespaces/inkscape\\\" xmlns:rdf=\\\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" xmlns:ns1=\\\"http://sozi.baierouge.fr\\\" xmlns:cc=\\\"http://creativecommons.org/ns#\\\" xmlns:dc=\\\"http://purl.org/dc/elements/1.1/\\\" id=\\\"svg19871\\\" viewBox=\\\"0 0 604.96 556.17\\\" version=\\\"1.1\\\" inkscape:version=\\\"0.48.5 r10040\\\"><g id=\\\"layer1\\\" inkscape:label=\\\"Calque 1\\\" inkscape:groupmode=\\\"layer\\\" transform=\\\"translate(-69.568 -427.74)\\\"><path id=\\\"path18741\\\" class=\\\"heart-svg\\\" style=\\\"color:#000000;stroke:#000000;stroke-width:53.15;fill:none\\\" inkscape:connector-curvature=\\\"0\\\" d=\\\"m586.75 734.03c37.196-28.491 61.2-73.36 61.2-123.83 0-86.088-69.799-155.89-155.89-155.89-48.272 0-91.426 21.952-120.02 56.407-28.592-34.455-71.746-56.407-120.02-56.407-86.088 0-155.89 69.799-155.89 155.89 0 50.469 24.003 95.338 61.2 123.83l214.72 223.3z\\\"></path></g></svg>\"\n\n//# sourceURL=webpack://spacestagram/./src/icons/heart.svg?");

/***/ }),

/***/ "./src/code/apiLogic.js":
/*!******************************!*\
  !*** ./src/code/apiLogic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"apiLogic\": () => (/* binding */ apiLogic)\n/* harmony export */ });\nconst apiLogic = (() => {\n  async function queryAPI(query) {\n    try {\n      const apiResponse = await fetch(\n        `https://api.nasa.gov/planetary/apod?api_key=RniEDW1yakFezEGAKtaMcLMz2KtS5xUKPdMUlky0&date=${query}`,\n        {mode: \"cors\"},\n      );\n      const apiResponseJSON = await apiResponse.json();\n      return apiResponseJSON;\n    } catch {\n      // Error Handling is yet to be implemented\n      console.log(\"yikes\");\n    }\n  }\n\n  function getRandomDate() {\n    const todayDate = new Date();\n    const startDate = new Date(1995, 5, 16);\n    return new Date(\n      startDate.getTime() +\n        (Math.random() * (todayDate.getTime() - startDate.getTime())),\n    ).toLocaleDateString(\"fr-CA\");\n  }\n\n  async function getRandomAPOD() {\n    const randomDate = getRandomDate();\n    const randomAPOD = await queryAPI(randomDate);\n    return randomAPOD;\n  }\n\n  return {queryAPI, getRandomAPOD};\n})();\n\n\n//# sourceURL=webpack://spacestagram/./src/code/apiLogic.js?");

/***/ }),

/***/ "./src/code/displayControl.js":
/*!************************************!*\
  !*** ./src/code/displayControl.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayControl\": () => (/* binding */ displayControl)\n/* harmony export */ });\n/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../icons */ \"./src/icons/index.js\");\n\n\nconst displayControl = (() => {\n  function createFeedCard(apodData) {\n    const feed = document.querySelector(\"#feed\");\n    const cardContainer = document.createElement(\"div\");\n    cardContainer.classList.add(\"feed-card\");\n    const header = createCardHeader(apodData);\n    const mediaContainer = createCardMediaContainer(apodData);\n    const footer = createCardFooter(apodData);\n    cardContainer.appendChild(header);\n    cardContainer.appendChild(mediaContainer);\n    cardContainer.appendChild(footer);\n    feed.appendChild(cardContainer);\n  }\n\n  function createCardHeader(apodData) {\n    const header = document.createElement(\"header\");\n    header.classList.add(\"post-header\");\n    const title = document.createElement(\"h4\");\n    title.classList.add(\"post-title\");\n    title.textContent = apodData.title;\n    const date = document.createElement(\"time\");\n    date.classList.add(\"post-date\");\n    date.dateTime = apodData.date;\n    date.textContent = apodData.date;\n    header.appendChild(title);\n    header.appendChild(date);\n    return header;\n  }\n\n  function createCardMediaContainer(apodData) {\n    const mediaContainer = document.createElement(\"figure\");\n    mediaContainer.classList.add(\"media-container\");\n    if (apodData.media_type === \"video\") {\n      const video = document.createElement(\"iframe\");\n      video.src = getAPODUrl(apodData);\n      mediaContainer.appendChild(video);\n    } else {\n      const image = document.createElement(\"img\");\n      image.classList.add(\"post-img\");\n      image.src = getAPODUrl(apodData);\n      mediaContainer.appendChild(image);\n    }\n    mediaContainer.children[0].onError = function() {\n      mediaContainer.children[0].remove();\n      const errorTextContainer = document.createElement(\"figure\");\n      errorTextContainer.classList.add(\"error-text-container\");\n      const errorText = document.createElement(\"h2\");\n      errorText.textContent = \"Sorry, This Media Could Not Be Loaded :(\";\n      errorTextContainer.appendChild(errorText);\n      mediaContainer.appendChild(errorTextContainer);\n    };\n    return mediaContainer;\n  }\n\n  function createCardFooter(apodData) {\n    const footer = document.createElement(\"footer\");\n    footer.classList.add(\"post-footer\");\n    const likeContainer = createLikeContainer();\n    footer.appendChild(likeContainer);\n    const description = createCardDescription(apodData);\n    footer.appendChild(description);\n    return footer;\n  }\n\n  function createCardDescription(apodData) {\n    const descriptionContainer = document.createElement(\"div\");\n    descriptionContainer.classList.add(\"description-container\");\n    const description = document.createElement(\"figcaption\");\n    description.classList.add(\"description\");\n    if (apodData.explanation.length > 500) {\n      description.textContent = apodData.explanation.slice(0, 500);\n      const seeMoreBtn = document.createElement(\"button\");\n      const seeMoreTxt = document.createElement(\"h5\");\n      seeMoreTxt.textContent = \"...see more\";\n      seeMoreBtn.appendChild(seeMoreTxt);\n      seeMoreBtn.classList.add(\"see-more-btn\");\n      seeMoreBtn.addEventListener(\"click\", () => {\n        description.textContent = apodData.explanation;\n      });\n      description.appendChild(seeMoreBtn);\n    } else {\n      description.textContent = apodData.explanation;\n    }\n    descriptionContainer.appendChild(description);\n    return descriptionContainer;\n  }\n\n  function createLikeContainer() {\n    const likeContainer = document.createElement(\"span\");\n    likeContainer.classList.add(\"like-container\");\n    const likeCount = document.createElement(\"h5\");\n    likeCount.textContent = \"0 Likes\";\n    likeContainer.innerHTML += _icons__WEBPACK_IMPORTED_MODULE_0__.heart;\n    const heartIcon = likeContainer.children[0];\n    heartIcon.classList.add(\"heart-icon\");\n    heartIcon.addEventListener(\"click\", (e) => {updateLikeCount(e, likeCount)});\n    likeContainer.appendChild(likeCount);\n    return likeContainer;\n  }\n\n  function updateLikeCount(heartIconEvent, likeCount) {\n    const heartSVGPath = document.querySelector(\"#path18741\");\n    if (likeCount.textContent === \"1 like\") {\n      likeCount.textContent = \"0 likes\";\n      heartSVGPath.style.fill = \"none\";\n    } else {\n      likeCount.textContent = \"1 like\";\n      heartSVGPath.style.fill = \"red\";\n    }\n  }\n\n  function getAPODUrl(apodData) {\n    if (apodData.hdurl) {\n      return apodData.hdurl;\n    } else {\n      return apodData.url;\n    }\n  }\n\n  return {createFeedCard};\n})();\n\n\n//# sourceURL=webpack://spacestagram/./src/code/displayControl.js?");

/***/ }),

/***/ "./src/code/index.js":
/*!***************************!*\
  !*** ./src/code/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayControl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayControl */ \"./src/code/displayControl.js\");\n/* harmony import */ var _apiLogic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiLogic */ \"./src/code/apiLogic.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/code/styles.css\");\n\n\n\n\nconst App = (() => {\n  async function createFeed() {\n    _displayControl__WEBPACK_IMPORTED_MODULE_0__.displayControl.createFeedCard(await _apiLogic__WEBPACK_IMPORTED_MODULE_1__.apiLogic.getRandomAPOD());\n    _displayControl__WEBPACK_IMPORTED_MODULE_0__.displayControl.createFeedCard(await _apiLogic__WEBPACK_IMPORTED_MODULE_1__.apiLogic.getRandomAPOD());\n    window.addEventListener(\"scroll\", updateFeed);\n  }\n\n  async function updateFeed() {\n    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {\n      _displayControl__WEBPACK_IMPORTED_MODULE_0__.displayControl.createFeedCard(await _apiLogic__WEBPACK_IMPORTED_MODULE_1__.apiLogic.getRandomAPOD());\n    }\n  }\n  return {createFeed};\n})();\n\nApp.createFeed();\n\n\n//# sourceURL=webpack://spacestagram/./src/code/index.js?");

/***/ }),

/***/ "./src/icons/index.js":
/*!****************************!*\
  !*** ./src/icons/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"heart\": () => (/* reexport default from dynamic */ _heart_svg__WEBPACK_IMPORTED_MODULE_0___default.a)\n/* harmony export */ });\n/* harmony import */ var _heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heart.svg */ \"./src/icons/heart.svg\");\n/* harmony import */ var _heart_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heart_svg__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://spacestagram/./src/icons/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/code/index.js");
/******/ 	
/******/ })()
;