/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 65:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(667);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(702), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(616), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(50), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(462), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(256), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted currentColor;\n          text-decoration: underline dotted currentColor;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow: 0 0 rgba(0,0,0,0);\n  --tw-ring-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow: 0 0 rgba(0,0,0,0);\n  --tw-shadow-colored: 0 0 rgba(0,0,0,0);\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}.container {\n  width: 100%;\n}@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}.fixed {\n  position: fixed;\n}.absolute {\n  position: absolute;\n}.relative {\n  position: relative;\n}.top-0 {\n  top: 0px;\n}.right-7 {\n  right: 1.75rem;\n}.left-0 {\n  left: 0px;\n}.top-24 {\n  top: 6rem;\n}.left-12 {\n  left: 3rem;\n}.left-6 {\n  left: 1.5rem;\n}.top-\\[170px\\] {\n  top: 170px;\n}.right-\\[180px\\] {\n  right: 180px;\n}.top-\\[100px\\] {\n  top: 100px;\n}.right-0 {\n  right: 0px;\n}.right-20 {\n  right: 5rem;\n}.-bottom-2 {\n  bottom: -0.5rem;\n}.right-5 {\n  right: 1.25rem;\n}.bottom-5 {\n  bottom: 1.25rem;\n}.-top-\\[40px\\] {\n  top: -40px;\n}.right-10 {\n  right: 2.5rem;\n}.top-5 {\n  top: 1.25rem;\n}.z-20 {\n  z-index: 20;\n}.z-10 {\n  z-index: 10;\n}.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}.mt-5 {\n  margin-top: 1.25rem;\n}.mt-10 {\n  margin-top: 2.5rem;\n}.ml-4 {\n  margin-left: 1rem;\n}.ml-auto {\n  margin-left: auto;\n}.mt-auto {\n  margin-top: auto;\n}.mt-20 {\n  margin-top: 5rem;\n}.mt-16 {\n  margin-top: 4rem;\n}.mt-7 {\n  margin-top: 1.75rem;\n}.mt-3 {\n  margin-top: 0.75rem;\n}.mt-2 {\n  margin-top: 0.5rem;\n}.mt-1 {\n  margin-top: 0.25rem;\n}.mt-4 {\n  margin-top: 1rem;\n}.block {\n  display: block;\n}.inline-block {\n  display: inline-block;\n}.flex {\n  display: flex;\n}.grid {\n  display: grid;\n}.hidden {\n  display: none;\n}.h-screen {\n  height: 100vh;\n}.h-1 {\n  height: 0.25rem;\n}.h-\\[930px\\] {\n  height: 930px;\n}.h-0 {\n  height: 0px;\n}.h-full {\n  height: 100%;\n}.h-96 {\n  height: 24rem;\n}.h-12 {\n  height: 3rem;\n}.h-5 {\n  height: 1.25rem;\n}.max-h-\\[820px\\] {\n  max-height: 820px;\n}.min-h-\\[700px\\] {\n  min-height: 700px;\n}.w-full {\n  width: 100%;\n}.w-44 {\n  width: 11rem;\n}.w-0 {\n  width: 0px;\n}.w-10\\/12 {\n  width: 83.333333%;\n}.w-36 {\n  width: 9rem;\n}.w-48 {\n  width: 12rem;\n}.w-32 {\n  width: 8rem;\n}.w-10 {\n  width: 2.5rem;\n}.w-9 {\n  width: 2.25rem;\n}.w-20 {\n  width: 5rem;\n}.w-7 {\n  width: 1.75rem;\n}.w-5 {\n  width: 1.25rem;\n}.w-24 {\n  width: 6rem;\n}.max-w-lg {\n  max-width: 32rem;\n}.grow {\n  flex-grow: 1;\n}.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}.animate-spin {\n  animation: spin 1s linear infinite;\n}.cursor-pointer {\n  cursor: pointer;\n}.resize {\n  resize: both;\n}.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}.grid-rows-3 {\n  grid-template-rows: repeat(3, minmax(0, 1fr));\n}.flex-col {\n  flex-direction: column;\n}.items-center {\n  align-items: center;\n}.justify-center {\n  justify-content: center;\n}.justify-between {\n  justify-content: space-between;\n}.justify-around {\n  justify-content: space-around;\n}.gap-10 {\n  gap: 2.5rem;\n}.gap-20 {\n  gap: 5rem;\n}.gap-5 {\n  gap: 1.25rem;\n}.gap-x-20 {\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n}.gap-y-5 {\n  row-gap: 1.25rem;\n}.overflow-hidden {\n  overflow: hidden;\n}.scroll-smooth {\n  scroll-behavior: smooth;\n}.rounded-md {\n  border-radius: 0.375rem;\n}.border-2 {\n  border-width: 2px;\n}.border-4 {\n  border-width: 4px;\n}.border-black {\n  --tw-border-opacity: 1;\n  border-color: rgba(0, 0, 0, var(--tw-border-opacity));\n}.bg-slate-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(241, 245, 249, var(--tw-bg-opacity));\n}.bg-purple-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(147, 51, 234, var(--tw-bg-opacity));\n}.bg-\\[\\#f8f8f8\\] {\n  --tw-bg-opacity: 1;\n  background-color: rgba(248, 248, 248, var(--tw-bg-opacity));\n}.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgba(17, 24, 39, var(--tw-bg-opacity));\n}.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}.from-\\[\\#fc4a1a\\] {\n  --tw-gradient-from: #fc4a1a;\n  --tw-gradient-to: rgba(252, 74, 26, 0);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}.to-\\[\\#f7b733\\] {\n  --tw-gradient-to: #f7b733;\n}.bg-cover {\n  background-size: cover;\n}.bg-center {\n  background-position: center;\n}.fill-white {\n  fill: #fff;\n}.p-2 {\n  padding: 0.5rem;\n}.p-5 {\n  padding: 1.25rem;\n}.p-3 {\n  padding: 0.75rem;\n}.px-7 {\n  padding-left: 1.75rem;\n  padding-right: 1.75rem;\n}.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}.pl-7 {\n  padding-left: 1.75rem;\n}.pt-32 {\n  padding-top: 8rem;\n}.pt-10 {\n  padding-top: 2.5rem;\n}.pb-40 {\n  padding-bottom: 10rem;\n}.text-left {\n  text-align: left;\n}.text-center {\n  text-align: center;\n}.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}.font-bold {\n  font-weight: 700;\n}.font-medium {\n  font-weight: 500;\n}.font-normal {\n  font-weight: 400;\n}.leading-\\[40px\\] {\n  line-height: 40px;\n}.text-white {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.text-purple-600 {\n  --tw-text-opacity: 1;\n  color: rgba(147, 51, 234, var(--tw-text-opacity));\n}.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgba(220, 38, 38, var(--tw-text-opacity));\n}.text-purple-700 {\n  --tw-text-opacity: 1;\n  color: rgba(126, 34, 206, var(--tw-text-opacity));\n}.opacity-20 {\n  opacity: 0.2;\n}.opacity-80 {\n  opacity: 0.8;\n}.opacity-0 {\n  opacity: 0;\n}.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow);\n}.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}.duration-700 {\n  transition-duration: 700ms;\n}.duration-200 {\n  transition-duration: 200ms;\n}.header-nav button:nth-child(-n+3){position:relative}.header-nav button:nth-child(-n+3):after{content:\"\";position:absolute;width:0px;height:2px;background-color:#000;left:-5px;bottom:-10px;transition:all .2s ease-in}.header-nav button:nth-child(-n+3):hover::after{width:calc(100% + 10px)}@media(min-width: 1024px){.grid-container{grid-template-columns:1fr 2fr}}.mobile-menu-bg{background-image:linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))}.cube,.sphere,.globe,.triangle{will-change:transform;transition:transform .4s cubic-bezier(0.25, 0.46, 0.45, 0.94);transition-duration:.7s;transform-style:preserve-3d}.circle{animation:rotate 10s linear infinite}@keyframes rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.changing-image{animation:image 15s infinite alternate}.changing-image::after{content:\"\";width:100%;height:100%;display:block;background-image:linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))}@keyframes image{0%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}25%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ")}50%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ")}75%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ")}100%{background-image:url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ")}}.placeholder\\:text-xl::-moz-placeholder {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.placeholder\\:text-xl::placeholder {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}.hover\\:bg-purple-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(147, 51, 234, var(--tw-bg-opacity));\n}.hover\\:bg-purple-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgba(126, 34, 206, var(--tw-bg-opacity));\n}.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgba(255, 255, 255, var(--tw-text-opacity));\n}.focus\\:outline-0:focus {\n  outline-width: 0px;\n}.focus-visible\\:border-purple-700.focus-visible {\n  --tw-border-opacity: 1;\n  border-color: rgba(126, 34, 206, var(--tw-border-opacity));\n}.focus-visible\\:border-purple-700.focus-visible {\n  --tw-border-opacity: 1;\n  border-color: rgba(126, 34, 206, var(--tw-border-opacity));\n}.focus-visible\\:border-purple-700:focus-visible {\n  --tw-border-opacity: 1;\n  border-color: rgba(126, 34, 206, var(--tw-border-opacity));\n}.active\\:bg-purple-700:active {\n  --tw-bg-opacity: 1;\n  background-color: rgba(126, 34, 206, var(--tw-bg-opacity));\n}.group:hover .group-hover\\:block {\n  display: block;\n}.group:hover .group-hover\\:flex {\n  display: flex;\n}.group:hover .group-hover\\:hidden {\n  display: none;\n}.group:hover .group-hover\\:h-full {\n  height: 100%;\n}.group:hover .group-hover\\:w-full {\n  width: 100%;\n}.group:hover .group-hover\\:scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}@media (min-width: 768px) {\n\n  .md\\:left-20 {\n    left: 5rem;\n  }\n\n  .md\\:right-\\[300px\\] {\n    right: 300px;\n  }\n\n  .md\\:top-\\[300px\\] {\n    top: 300px;\n  }\n\n  .md\\:right-10 {\n    right: 2.5rem;\n  }\n\n  .md\\:top-\\[190px\\] {\n    top: 190px;\n  }\n\n  .md\\:right-40 {\n    right: 10rem;\n  }\n\n  .md\\:bottom-0 {\n    bottom: 0px;\n  }\n\n  .md\\:-top-\\[55px\\] {\n    top: -55px;\n  }\n\n  .md\\:right-32 {\n    right: 8rem;\n  }\n\n  .md\\:ml-14 {\n    margin-left: 3.5rem;\n  }\n\n  .md\\:mt-52 {\n    margin-top: 13rem;\n  }\n\n  .md\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n\n  .md\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n\n  .md\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .md\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n\n  .md\\:block {\n    display: block;\n  }\n\n  .md\\:hidden {\n    display: none;\n  }\n\n  .md\\:h-\\[750px\\] {\n    height: 750px;\n  }\n\n  .md\\:w-64 {\n    width: 16rem;\n  }\n\n  .md\\:w-96 {\n    width: 24rem;\n  }\n\n  .md\\:w-60 {\n    width: 15rem;\n  }\n\n  .md\\:w-20 {\n    width: 5rem;\n  }\n\n  .md\\:w-28 {\n    width: 7rem;\n  }\n\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n\n  .md\\:items-start {\n    align-items: flex-start;\n  }\n\n  .md\\:gap-0 {\n    gap: 0px;\n  }\n\n  .md\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n\n  .md\\:text-left {\n    text-align: left;\n  }\n\n  .md\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n}@media (min-width: 1024px) {\n\n  .lg\\:left-48 {\n    left: 12rem;\n  }\n\n  .lg\\:top-\\[300px\\] {\n    top: 300px;\n  }\n\n  .lg\\:left-20 {\n    left: 5rem;\n  }\n\n  .lg\\:top-\\[200px\\] {\n    top: 200px;\n  }\n\n  .lg\\:right-20 {\n    right: 5rem;\n  }\n\n  .lg\\:right-72 {\n    right: 18rem;\n  }\n\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n\n  .lg\\:row-span-4 {\n    grid-row: span 4 / span 4;\n  }\n\n  .lg\\:row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n\n  .lg\\:ml-20 {\n    margin-left: 5rem;\n  }\n\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n\n  .lg\\:mt-56 {\n    margin-top: 14rem;\n  }\n\n  .lg\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .lg\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n\n  .lg\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n\n  .lg\\:flex {\n    display: flex;\n  }\n\n  .lg\\:h-\\[600px\\] {\n    height: 600px;\n  }\n\n  .lg\\:h-\\[700px\\] {\n    height: 700px;\n  }\n\n  .lg\\:h-full {\n    height: 100%;\n  }\n\n  .lg\\:w-8\\/12 {\n    width: 66.666667%;\n  }\n\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-rows-4 {\n    grid-template-rows: repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n\n  .lg\\:items-center {\n    align-items: center;\n  }\n\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n\n  .lg\\:p-2 {\n    padding: 0.5rem;\n  }\n\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n\n  .lg\\:placeholder\\:text-base::-moz-placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n\n  .lg\\:placeholder\\:text-base::placeholder {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n}@media (min-width: 1280px) {\n\n  .xl\\:left-0 {\n    left: 0px;\n  }\n\n  .xl\\:top-0 {\n    top: 0px;\n  }\n\n  .xl\\:top-\\[300px\\] {\n    top: 300px;\n  }\n\n  .xl\\:right-10 {\n    right: 2.5rem;\n  }\n\n  .xl\\:-left-12 {\n    left: -3rem;\n  }\n\n  .xl\\:top-44 {\n    top: 11rem;\n  }\n\n  .xl\\:-right-10 {\n    right: -2.5rem;\n  }\n\n  .xl\\:top-64 {\n    top: 16rem;\n  }\n\n  .xl\\:right-\\[510px\\] {\n    right: 510px;\n  }\n\n  .xl\\:-top-\\[80px\\] {\n    top: -80px;\n  }\n\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n\n  .xl\\:mt-32 {\n    margin-top: 8rem;\n  }\n\n  .xl\\:block {\n    display: block;\n  }\n\n  .xl\\:flex {\n    display: flex;\n  }\n\n  .xl\\:w-\\[550px\\] {\n    width: 550px;\n  }\n\n  .xl\\:w-16 {\n    width: 4rem;\n  }\n\n  .xl\\:w-40 {\n    width: 10rem;\n  }\n\n  .xl\\:max-w-md {\n    max-width: 28rem;\n  }\n\n  .xl\\:justify-between {\n    justify-content: space-between;\n  }\n\n  .xl\\:pt-0 {\n    padding-top: 0px;\n  }\n\n  .xl\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n\n  .xl\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n\n  .xl\\:leading-\\[45px\\] {\n    line-height: 45px;\n  }\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 645:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 667:
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ 81:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 379:
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 569:
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ 702:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-1.webp";

/***/ }),

/***/ 50:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-2.webp";

/***/ }),

/***/ 616:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-3.webp";

/***/ }),

/***/ 462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-4.webp";

/***/ }),

/***/ 256:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/image-5.webp";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			826: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/index.scss
var cjs_js_src = __webpack_require__(65);
;// CONCATENATED MODULE: ./src/index.scss

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(cjs_js_src/* default */.Z, options);




       /* harmony default export */ const src = (cjs_js_src/* default */.Z && cjs_js_src/* default.locals */.Z.locals ? cjs_js_src/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/index.js
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


// apply aos
AOS.init();

// progress bar animation

var scrollProgress = function scrollProgress() {
  var progressBar = document.getElementById("progress-bar");
  var max = document.body.scrollHeight - innerHeight;
  var percent = pageYOffset / max * 100;
  progressBar.style.width = percent + "%";
};
addEventListener("scroll", scrollProgress);
// scroll to section

var scrollToSection = function scrollToSection() {
  var links = document.querySelectorAll("[data-location]");
  _toConsumableArray(links).forEach(function (link) {
    link.addEventListener('click', function () {
      var section = document.getElementById(link.getAttribute('data-location'));
      section.scrollIntoView({
        block: "center"
      });
    });
  });
};
scrollToSection();

// mobile menu

var mobileMenu = function mobileMenu() {
  var hamburger = document.getElementById("hamburger");
  var mobileMenu = document.getElementById("mobile-menu");
  var close = document.getElementById("close-icon");
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    // mobileMenu.querySelector("nav").classList.toggle("hidden")
    if (!mobileMenu.classList.contains("hidden")) {
      hamburger.classList.add("opacity-0");
      close.classList.remove("hidden");
    } else {
      hamburger.classList.remove("opacity-0");
      close.classList.add("hidden");
    }
  });
  mobileMenu.querySelectorAll("nav > button").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
      close.classList.add("hidden");
      hamburger.classList.remove("opacity-0");
    });
  });
};
mobileMenu();
var heroImage = document.getElementById("hero-image");
var cube = document.getElementById("cube");
var sphere = document.getElementById("sphere");
var globe = document.getElementById("globe");
var triangle = document.getElementById("triangle");
var transform = function transform(x, y, element) {
  element.style.transform = "translate(".concat(x, "px,").concat(y, "px)");
};
heroImage.addEventListener("mouseover", function (event) {
  var maxX = 40;
  var mousex = event.clientX / maxX;
  var mousey = event.clientY / 10;
  transform(-mousex, mousey, cube);
  transform(mousex, -mousey, sphere);
  transform(-mousex, -mousey, globe);
  transform(-mousex, -mousey, triangle);
});
heroImage.addEventListener("mouseleave", function () {
  [cube, sphere, globe, triangle].forEach(function (element) {
    element.style.transform = "translate(0,0)";
  });
});

// form 

var currentUrl = window.location.href;
var submitPage = document.getElementById("submit-page");
submitPage.value = "".concat(currentUrl, "submit.html");
function validateForm() {
  var fields = document.querySelectorAll(".input-field");
  var isValue = _toConsumableArray(fields).every(function (field) {
    return field.length !== 0;
  });
  var submit = document.getElementById("submit-button");
  var spinner = document.getElementById("spinner");
  if (isValue) {
    submit.classList.add("hidden");
    spinner.classList.remove("hidden");
  }
}
document.getElementById("contact-form").addEventListener('submit', validateForm);
})();

/******/ })()
;