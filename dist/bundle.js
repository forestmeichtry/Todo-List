/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Assets/WixMadeforDisplay-VariableFont_wght.ttf */ "./src/Assets/WixMadeforDisplay-VariableFont_wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! Assets/square-edit-outline.svg */ "./src/Assets/square-edit-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! Assets/delete-outline.svg */ "./src/Assets/delete-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! Assets/bookmark-plus-outline.svg */ "./src/Assets/bookmark-plus-outline.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! Assets/chevron-up.svg */ "./src/Assets/chevron-up.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! Assets/menu.svg */ "./src/Assets/menu.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --darkSlateGray: #395e66;\n    --myrtleGreen: #387d7a;\n    --seaGreen: #32936f;\n    --jadeGreen: #26a96c;\n    --kellyGreen: #2bc016;\n\n    --headerHeight: 120px;\n    --sideNavWidth: 300px;\n    --taskHeight: 100px;\n\n    --gradientColorOne: var(--kellyGreen);\n    --gradientColorTwo: #54c046;\n    --gradientStop: 110%;\n}\n\n@font-face {\n    font-family: wixFont;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n\nbody {\n    display: grid;\n    grid-template-columns: var(--sideNavWidth) 1fr;\n    grid-template-rows: var(--headerHeight) 1fr;\n    height: 100vh;\n    margin: 0px;\n    font-family: wixFont, sans-serif;\n    overflow-y: hidden;\n}\n\nbutton {\n    border: none;\n    background-color: black;\n    height: 40px;\n    width: 60px;\n    border-radius: 6px;\n    color: var(--kellyGreen);\n}\n\nbutton:hover {\n    background-color: rgb(31, 31, 31);\n    cursor: pointer;\n    transition-delay: 0s !important;\n    transition-duration: 0s !important;\n}\n\n.pageHeader {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 10px;\n    font-size: x-large;\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: var(--darkSlateGray);\n}\n\n.sortButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 100px;\n    margin-bottom: 10px;\n    width: 87px;\n}\n\n.addTaskButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 10px;\n    margin-bottom: 10px;\n    width: 80px;\n}\n\n.sideNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    background-color: var(--myrtleGreen);\n    z-index: 10;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    font-size: x-large;\n    width: calc(100% - 20px);\n    padding: 10px;\n    text-decoration: underline;\n    margin-bottom: 20px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: 1fr 40px 40px;\n    align-items: center;\n    font-size: large;\n    padding-left: 20px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.project:hover {\n    background-color: rgba(0, 0, 0, .1);\n    cursor: pointer;\n}\n\n.project.selected {\n    background-color: rgba(0, 0, 0, .2);\n}\n\n.projectTitle {\n    background-color: rgba(0, 0, 0, 0);\n    font-size: large;\n    width: 160px;\n    padding: 6px;\n    border: none;\n}\n\n.projectTitle:disabled {\n    color: black;\n}\n\n.editProjectButton,\n.deleteProjectButton,\n.addNewProjectButton {\n    background-color: rgba(0, 0, 0, 0);\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 20px;\n    padding: 12px;\n    justify-self: center;\n}\n\n.editProjectButton:hover,\n.deleteProjectButton:hover,\n.addNewProjectButton:hover {\n    background-color: rgba(0, 0, 0, .1);\n}\n\n.editProjectButton {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n}\n\n.deleteProjectButton {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n}\n\n.addNewProjectButton {\n    display: flex;\n    color: black;\n    font-size: large;\n    width: 200px;\n    height: 40px;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    margin-top: 20px;\n}\n\n.addNewProjectButton::before,\n.addNewProjectButton::after {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ");\n    margin-left: 3px;\n    margin-right: 3px;\n    height: 25px;\n    width: 25px;\n    content: \"\";\n}\n\n.taskContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--seaGreen);\n    padding: 10px;\n    gap: 10px;\n    overflow-y: auto;\n}\n\n.taskWrapper {\n    position: relative;\n    display: grid;\n    gap: 10px;\n    grid-template-columns: 1fr 120px 120px;\n    grid-template-rows: 45px 20px 40px 80px;\n    height: var(--taskHeight);\n    flex-shrink: 0;\n    border-radius: 6px;\n    padding: 15px;\n    background: linear-gradient(30deg, var(--gradientColorOne), var(--gradientStop), var(--gradientColorTwo));\n    background-size: 600%;\n    background-position: center;\n    overflow: hidden;\n    transition: .5s;\n    transition-timing-function: ease-in-out;\n}\n\n.taskWrapper.expanded {\n    height: calc(var(--taskHeight) * 2);\n}\n\n.taskName {\n    grid-area: 1 / 1 / 2 / 4;\n    font-size: x-large;\n}\n\n.taskDescription {\n    grid-area: 3 / 1 / 5 / 2;\n    opacity: 0;\n    transition-duration: .5s;\n}\n\n.taskDescription::before {\n    white-space: pre-wrap;\n    font-weight: bold;\n    content: 'Description: \\A';\n}\n\n.taskWrapper.expanded .taskDescription {\n    opacity: 1;\n    transition-delay: .3s;\n}\n\n.dueDate {\n    grid-area: 2 / 2 / 3 / 3;\n    align-self: center;\n}\n\n.dueDate::before {\n    white-space: pre-wrap;\n    font-weight: bold;\n    content: 'Due: \\A';\n}\n\n.taskImportance {\n    grid-area: 2 / 3 / 3 / 4;\n    align-self: center;\n}\n\n.taskImportance::before {\n    font-weight: bold;\n    content: 'Importance: ';\n}\n\n.chevron {\n    position: absolute;\n    justify-self: center;\n    align-self: flex-end;\n    height: 40px;\n    width: 160px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotateZ(180deg);\n    transition: .5s;\n}\n\n.taskWrapper.expanded .chevron {\n    transform: rotateY(180deg);\n}\n\n.editButton,\n.completeButton {\n    position: relative;\n    bottom: 10px;\n    width: 80px;\n    align-self: center;\n    transition-duration: .5s;\n    opacity: 0;\n}\n\n.taskWrapper.expanded .editButton,\n.taskWrapper.expanded .completeButton {\n    opacity: 1;\n    transition-delay: .3s;\n}\n\n.editButton {\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.completeButton {\n    grid-area: 4 / 3 / 5 / 4;\n}\n\n.addTaskPopup,\n.warningPopup {\n    position: absolute;\n    transform: translateY(-400px);\n    transition-duration: .5s;\n    height: 1px;\n    width: 1px;\n    justify-self: center;\n    overflow: hidden;\n    z-index: 20;\n    border: solid black 2px;\n    border-radius: 6px;\n}\n\n.addTaskPopup {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.warningPopup {\n    display: grid;\n}\n\n.addTaskPopup > *,\n.warningPopup > *,\n.warningPopup {\n    opacity: 0;\n}\n\n.addTaskPopup.active,\n.warningPopup.active {\n    background-color: var(--myrtleGreen);\n    padding-left: 3px;\n    padding-right: 3px;\n}\n\n.addTaskPopup.active {\n    transform: translateY(10vmax);\n    height: min(70vmax, 450px);\n    width: min(80vw, 400px);\n}\n\n.warningPopup.active {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    height: 150px;\n    width: 200px;\n    transform: translateY(15vmax);\n}\n\n.addTaskPopup.active > *,\n.warningPopup.active > *,\n.warningPopup.active {\n    opacity: 1;\n}\n\n.warningText {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    padding-top: 10px;\n}\n\n.warningCancel,\n.warningDelete {\n    justify-self: center;\n}\n\nfieldset {\n    height: 93%;\n    width: 90%;\n    border-radius: 6px;\n}\n\nlabel {\n    margin-bottom: -18px;\n}\n\n.formList {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.radioWrap {\n    display: flex;\n}\n\n.formButtonWrap {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n}\n\ntextarea {\n    resize: none;\n}\n\n@media (max-width: 1024px) {\n    body {\n        grid-template-columns: 0px 1fr;\n        transition-duration: .4s;\n    }\n\n    body.mobileMenu {\n        grid-template-columns: 250px 1fr;\n    }\n\n    .taskContainer {\n        grid-area: 2 / 1 / 3 / 3;\n    }\n\n    .sideNavBar {\n        grid-area: 2 / 1 / 3 / 1;\n    }\n\n    .sideNavBar > * {\n        position: relative;\n        left: -200px;\n        transition-duration: .4s;\n    }\n\n    body.mobileMenu .sideNavBar > *{\n        left: 0px;\n    }\n\n    .projectTitle {\n        width: 100px;\n    }\n\n    .expandSideNavButton {\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ");\n        background-size: cover;\n        height: 40px;\n        width: 40px;\n        border: none;\n        background-color: var(--darkSlateGray);\n    }\n\n    button:hover {\n        background-color: black;\n    }\n\n    .expandSideNavButton:hover {\n        background-color: var(--darkSlateGray);\n    }\n\n    .taskWrapper {\n        grid-template-columns: 1fr 1fr;\n        padding-right: 5px;\n    }\n\n    .taskName {\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .dueDate {\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .taskImportance {\n        grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .taskDescription {\n        position: relative;\n        grid-area: 3 / 1 / 5 / 4;\n    }\n\n    .editButton,\n    .completeButton {\n        position: relative;\n        bottom: 10px;\n        width: 80px;\n        justify-self: center;\n        align-self: center;\n    }\n\n    .editButton {\n        grid-area: 4 / 1 / 5 / 2;\n    }\n\n    .completeButton {\n        grid-area: 4 / 2 / 5 / 3;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --darkSlateGray: #395e66;\n    --myrtleGreen: #387d7a;\n    --seaGreen: #32936f;\n    --jadeGreen: #26a96c;\n    --kellyGreen: #2bc016;\n\n    --headerHeight: 120px;\n    --sideNavWidth: 300px;\n    --taskHeight: 100px;\n\n    --gradientColorOne: var(--kellyGreen);\n    --gradientColorTwo: #54c046;\n    --gradientStop: 110%;\n}\n\n@font-face {\n    font-family: wixFont;\n    src: url(Assets/WixMadeforDisplay-VariableFont_wght.ttf);\n}\n\nbody {\n    display: grid;\n    grid-template-columns: var(--sideNavWidth) 1fr;\n    grid-template-rows: var(--headerHeight) 1fr;\n    height: 100vh;\n    margin: 0px;\n    font-family: wixFont, sans-serif;\n    overflow-y: hidden;\n}\n\nbutton {\n    border: none;\n    background-color: black;\n    height: 40px;\n    width: 60px;\n    border-radius: 6px;\n    color: var(--kellyGreen);\n}\n\nbutton:hover {\n    background-color: rgb(31, 31, 31);\n    cursor: pointer;\n    transition-delay: 0s !important;\n    transition-duration: 0s !important;\n}\n\n.pageHeader {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-top: 10px;\n    font-size: x-large;\n    grid-area: 1 / 1 / 2 / 3;\n    background-color: var(--darkSlateGray);\n}\n\n.sortButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 100px;\n    margin-bottom: 10px;\n    width: 87px;\n}\n\n.addTaskButton {\n    position: absolute;\n    align-self: flex-end;\n    right: 10px;\n    margin-bottom: 10px;\n    width: 80px;\n}\n\n.sideNavBar {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    background-color: var(--myrtleGreen);\n    z-index: 10;\n    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;\n}\n\n.projectHeader {\n    display: block;\n    text-align: center;\n    font-size: x-large;\n    width: calc(100% - 20px);\n    padding: 10px;\n    text-decoration: underline;\n    margin-bottom: 20px;\n}\n\n.project {\n    display: grid;\n    grid-template-columns: 1fr 40px 40px;\n    align-items: center;\n    font-size: large;\n    padding-left: 20px;\n    padding-right: 10px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n}\n\n.project:hover {\n    background-color: rgba(0, 0, 0, .1);\n    cursor: pointer;\n}\n\n.project.selected {\n    background-color: rgba(0, 0, 0, .2);\n}\n\n.projectTitle {\n    background-color: rgba(0, 0, 0, 0);\n    font-size: large;\n    width: 160px;\n    padding: 6px;\n    border: none;\n}\n\n.projectTitle:disabled {\n    color: black;\n}\n\n.editProjectButton,\n.deleteProjectButton,\n.addNewProjectButton {\n    background-color: rgba(0, 0, 0, 0);\n    background-position: center;\n    background-repeat: no-repeat;\n    height: 20px;\n    padding: 12px;\n    justify-self: center;\n}\n\n.editProjectButton:hover,\n.deleteProjectButton:hover,\n.addNewProjectButton:hover {\n    background-color: rgba(0, 0, 0, .1);\n}\n\n.editProjectButton {\n    background-image: url(Assets/square-edit-outline.svg);\n}\n\n.deleteProjectButton {\n    background-image: url(Assets/delete-outline.svg);\n}\n\n.addNewProjectButton {\n    display: flex;\n    color: black;\n    font-size: large;\n    width: 200px;\n    height: 40px;\n    justify-content: center;\n    align-items: center;\n    align-self: center;\n    margin-top: 20px;\n}\n\n.addNewProjectButton::before,\n.addNewProjectButton::after {\n    background-image: url(Assets/bookmark-plus-outline.svg);\n    margin-left: 3px;\n    margin-right: 3px;\n    height: 25px;\n    width: 25px;\n    content: \"\";\n}\n\n.taskContainer {\n    display: flex;\n    flex-direction: column;\n    background-color: var(--seaGreen);\n    padding: 10px;\n    gap: 10px;\n    overflow-y: auto;\n}\n\n.taskWrapper {\n    position: relative;\n    display: grid;\n    gap: 10px;\n    grid-template-columns: 1fr 120px 120px;\n    grid-template-rows: 45px 20px 40px 80px;\n    height: var(--taskHeight);\n    flex-shrink: 0;\n    border-radius: 6px;\n    padding: 15px;\n    background: linear-gradient(30deg, var(--gradientColorOne), var(--gradientStop), var(--gradientColorTwo));\n    background-size: 600%;\n    background-position: center;\n    overflow: hidden;\n    transition: .5s;\n    transition-timing-function: ease-in-out;\n}\n\n.taskWrapper.expanded {\n    height: calc(var(--taskHeight) * 2);\n}\n\n.taskName {\n    grid-area: 1 / 1 / 2 / 4;\n    font-size: x-large;\n}\n\n.taskDescription {\n    grid-area: 3 / 1 / 5 / 2;\n    opacity: 0;\n    transition-duration: .5s;\n}\n\n.taskDescription::before {\n    white-space: pre-wrap;\n    font-weight: bold;\n    content: 'Description: \\A';\n}\n\n.taskWrapper.expanded .taskDescription {\n    opacity: 1;\n    transition-delay: .3s;\n}\n\n.dueDate {\n    grid-area: 2 / 2 / 3 / 3;\n    align-self: center;\n}\n\n.dueDate::before {\n    white-space: pre-wrap;\n    font-weight: bold;\n    content: 'Due: \\A';\n}\n\n.taskImportance {\n    grid-area: 2 / 3 / 3 / 4;\n    align-self: center;\n}\n\n.taskImportance::before {\n    font-weight: bold;\n    content: 'Importance: ';\n}\n\n.chevron {\n    position: absolute;\n    justify-self: center;\n    align-self: flex-end;\n    height: 40px;\n    width: 160px;\n    background-image: url(Assets/chevron-up.svg);\n    background-position: center;\n    background-repeat: no-repeat;\n    transform: rotateZ(180deg);\n    transition: .5s;\n}\n\n.taskWrapper.expanded .chevron {\n    transform: rotateY(180deg);\n}\n\n.editButton,\n.completeButton {\n    position: relative;\n    bottom: 10px;\n    width: 80px;\n    align-self: center;\n    transition-duration: .5s;\n    opacity: 0;\n}\n\n.taskWrapper.expanded .editButton,\n.taskWrapper.expanded .completeButton {\n    opacity: 1;\n    transition-delay: .3s;\n}\n\n.editButton {\n    grid-area: 4 / 2 / 5 / 3;\n}\n\n.completeButton {\n    grid-area: 4 / 3 / 5 / 4;\n}\n\n.addTaskPopup,\n.warningPopup {\n    position: absolute;\n    transform: translateY(-400px);\n    transition-duration: .5s;\n    height: 1px;\n    width: 1px;\n    justify-self: center;\n    overflow: hidden;\n    z-index: 20;\n    border: solid black 2px;\n    border-radius: 6px;\n}\n\n.addTaskPopup {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.warningPopup {\n    display: grid;\n}\n\n.addTaskPopup > *,\n.warningPopup > *,\n.warningPopup {\n    opacity: 0;\n}\n\n.addTaskPopup.active,\n.warningPopup.active {\n    background-color: var(--myrtleGreen);\n    padding-left: 3px;\n    padding-right: 3px;\n}\n\n.addTaskPopup.active {\n    transform: translateY(10vmax);\n    height: min(70vmax, 450px);\n    width: min(80vw, 400px);\n}\n\n.warningPopup.active {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 2fr 1fr;\n    height: 150px;\n    width: 200px;\n    transform: translateY(15vmax);\n}\n\n.addTaskPopup.active > *,\n.warningPopup.active > *,\n.warningPopup.active {\n    opacity: 1;\n}\n\n.warningText {\n    grid-area: 1 / 1 / 2 / 3;\n    text-align: center;\n    padding-top: 10px;\n}\n\n.warningCancel,\n.warningDelete {\n    justify-self: center;\n}\n\nfieldset {\n    height: 93%;\n    width: 90%;\n    border-radius: 6px;\n}\n\nlabel {\n    margin-bottom: -18px;\n}\n\n.formList {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.radioWrap {\n    display: flex;\n}\n\n.formButtonWrap {\n    display: flex;\n    justify-content: space-evenly;\n    width: 100%;\n}\n\ntextarea {\n    resize: none;\n}\n\n@media (max-width: 1024px) {\n    body {\n        grid-template-columns: 0px 1fr;\n        transition-duration: .4s;\n    }\n\n    body.mobileMenu {\n        grid-template-columns: 250px 1fr;\n    }\n\n    .taskContainer {\n        grid-area: 2 / 1 / 3 / 3;\n    }\n\n    .sideNavBar {\n        grid-area: 2 / 1 / 3 / 1;\n    }\n\n    .sideNavBar > * {\n        position: relative;\n        left: -200px;\n        transition-duration: .4s;\n    }\n\n    body.mobileMenu .sideNavBar > *{\n        left: 0px;\n    }\n\n    .projectTitle {\n        width: 100px;\n    }\n\n    .expandSideNavButton {\n        position: absolute;\n        top: 30px;\n        left: 30px;\n        background-image: url(Assets/menu.svg);\n        background-size: cover;\n        height: 40px;\n        width: 40px;\n        border: none;\n        background-color: var(--darkSlateGray);\n    }\n\n    button:hover {\n        background-color: black;\n    }\n\n    .expandSideNavButton:hover {\n        background-color: var(--darkSlateGray);\n    }\n\n    .taskWrapper {\n        grid-template-columns: 1fr 1fr;\n        padding-right: 5px;\n    }\n\n    .taskName {\n        grid-area: 1 / 1 / 2 / 3;\n    }\n\n    .dueDate {\n        grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .taskImportance {\n        grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .taskDescription {\n        position: relative;\n        grid-area: 3 / 1 / 5 / 4;\n    }\n\n    .editButton,\n    .completeButton {\n        position: relative;\n        bottom: 10px;\n        width: 80px;\n        justify-self: center;\n        align-self: center;\n    }\n\n    .editButton {\n        grid-area: 4 / 1 / 5 / 2;\n    }\n\n    .completeButton {\n        grid-area: 4 / 2 / 5 / 3;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
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

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
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

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   warningPopup: () => (/* binding */ warningPopup)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _taskMethods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskMethods */ "./src/taskMethods.js");
/* harmony import */ var _projectMethods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectMethods */ "./src/projectMethods.js");




const pageHeader = document.createElement('div');
pageHeader.classList.add('pageHeader');
document.body.appendChild(pageHeader);

const sideNavBar = document.createElement('div');
sideNavBar.classList.add('sideNavBar');
document.body.appendChild(sideNavBar);

const projectHeader = document.createElement('span');
projectHeader.classList.add('projectHeader');
projectHeader.textContent = "Projects";
sideNavBar.appendChild(projectHeader);

const addNewProjectButton = document.createElement('button');
addNewProjectButton.classList.add('addNewProjectButton');
addNewProjectButton.textContent = 'Add Project';
addNewProjectButton.addEventListener('click', () => {
    const newProjectInput = (0,_projectMethods__WEBPACK_IMPORTED_MODULE_2__.addProject)('').querySelector('.projectTitle');
    newProjectInput.disabled = '';
    newProjectInput.focus();
});
sideNavBar.appendChild(addNewProjectButton);

const addTaskPopup = document.createElement('div');
createTaskForm();

const warningPopup = document.createElement('div');
warningPopup.classList.add('warningPopup');
const warningText = document.createElement('span');
warningText.classList.add('warningText');
warningText.textContent = "This project contains unfinished tasks, do you still want to delete it?";
warningPopup.appendChild(warningText);
const warningCancel = document.createElement('button');
warningCancel.textContent = "Cancel";
warningCancel.classList.add('warningCancel');
warningCancel.addEventListener('click', () => {
    warningPopup.classList.remove('active');
});
const warningDelete = document.createElement('button');
warningDelete.classList.add('warningDelete');
warningDelete.textContent = "Delete";
warningDelete.addEventListener('click', () => {
    _projectMethods__WEBPACK_IMPORTED_MODULE_2__.projectList.deleteProject(warningPopup.dataset.projectIndex);
    warningPopup.classList.remove('active');
});
warningPopup.appendChild(warningCancel);
warningPopup.appendChild(warningDelete);
document.body.appendChild(warningPopup);


const taskContainer = document.createElement('div');
taskContainer.classList.add('taskContainer');
document.body.appendChild(taskContainer);

pageHeader.textContent = "Taskmaster";

const sortButton = document.createElement('button');
sortButton.classList.add('sortButton');
sortButton.textContent = "Sort By: Priority";
pageHeader.appendChild(sortButton);

sortButton.addEventListener('click', () => {
    if (sortButton.textContent === 'Sort By: Priority') {
        sortButton.textContent = "Sort By: Due Date";
        _projectMethods__WEBPACK_IMPORTED_MODULE_2__.projectList.sortBy = 'Date';
    } else {
        sortButton.textContent = "Sort By: Priority";
        _projectMethods__WEBPACK_IMPORTED_MODULE_2__.projectList.sortBy = 'Priority';
    }

    (0,_taskMethods__WEBPACK_IMPORTED_MODULE_1__.sortTasks)();
});

const addTaskButton = document.createElement('button');
addTaskButton.classList.add('addTaskButton');
addTaskButton.textContent = "Add Task";
pageHeader.appendChild(addTaskButton);

addTaskButton.addEventListener('click', () => {
    addTaskPopup.classList.toggle('active');
    addTaskPopup.dataset.mode = 'add';
    addTaskPopup.querySelector('.fieldsetLegend').textContent = 'New Task';
});

if (window.screen.width <= 1024) {
    const expandSideNavButton = document.createElement('button');
    expandSideNavButton.classList.add('expandSideNavButton');
    pageHeader.appendChild(expandSideNavButton);

    expandSideNavButton.addEventListener('click', () => {
        document.body.classList.toggle('mobileMenu');
    });
}

if (storageAvailable('localStorage') && window.localStorage.getItem("projects")) {
    let projects = JSON.parse(window.localStorage.getItem("projects"));
    for (let project of projects) {
        const projectDomElement = (0,_projectMethods__WEBPACK_IMPORTED_MODULE_2__.addProject)(project.name);
        _projectMethods__WEBPACK_IMPORTED_MODULE_2__.projectList.selectProject(projectDomElement.dataset.index);
        for (let task of project.tasks) {
            (0,_taskMethods__WEBPACK_IMPORTED_MODULE_1__.addTask)(task.taskName, task.description, task.dueDate, task.importance);
        };
    };
} else {
    (0,_projectMethods__WEBPACK_IMPORTED_MODULE_2__.addProject)('Work');
    (0,_projectMethods__WEBPACK_IMPORTED_MODULE_2__.addProject)('Home');
};

(0,_taskMethods__WEBPACK_IMPORTED_MODULE_1__.animateTaskBackground)();

function createTaskForm() {
    addTaskPopup.classList.add('addTaskPopup');
    document.body.appendChild(addTaskPopup);

    const taskFieldset = document.createElement('fieldset');
    addTaskPopup.appendChild(taskFieldset);
    const legend = document.createElement('legend');
    legend.classList.add('fieldsetLegend');
    taskFieldset.appendChild(legend);

    const formList = document.createElement('form');
    formList.classList.add('formList');
    taskFieldset.appendChild(formList);
    const labelOne = document.createElement('label');
    formList.appendChild(labelOne);
    const nameInput = document.createElement('input');
    nameInput.required = 'true';
    nameInput.autocomplete = 'off';
    formList.appendChild(nameInput);
    labelOne.htmlFor = 'Task Name';
    labelOne.textContent = 'Task Name:';
    nameInput.type = 'text';
    nameInput.id = 'Task Name';
    nameInput.name = 'task_name';
    const labelTwo = document.createElement('label');
    formList.appendChild(labelTwo);
    const dateInput = document.createElement('input');
    formList.appendChild(dateInput);
    labelTwo.htmlFor = 'Task Due Date';
    labelTwo.textContent = 'Due Date:';
    dateInput.type = 'date';
    dateInput.id = 'Task Due Date';
    dateInput.name = 'due_date';
    const labelThree = document.createElement('label');
    formList.appendChild(labelThree);
    const radioWrap = document.createElement('div');
    radioWrap.classList.add('radioWrap');
    formList.appendChild(radioWrap);
    const radioLow = document.createElement('input');
    radioWrap.appendChild(radioLow);
    const labelLow = document.createElement('label');
    radioWrap.appendChild(labelLow);
    radioLow.type = 'radio';
    radioLow.id = 'importanceLow';
    radioLow.name = 'importance';
    radioLow.value = 'Low';
    labelLow.htmlFor = 'importanceLow';
    labelLow.textContent = 'Low';
    labelThree.textContent = 'Importance:';
    const radioMed = document.createElement('input');
    radioWrap.appendChild(radioMed);
    const labelMed = document.createElement('label');
    radioWrap.appendChild(labelMed);
    radioMed.type = 'radio';
    radioMed.id = 'importanceMed';
    radioMed.name = 'importance';
    radioMed.value = 'Medium';
    radioMed.checked = true;
    labelMed.htmlFor = 'importanceMedium';
    labelMed.textContent = 'Medium';
    const radioHigh = document.createElement('input');
    radioWrap.appendChild(radioHigh);
    const labelHigh = document.createElement('label');
    radioWrap.appendChild(labelHigh);
    radioHigh.type = 'radio';
    radioHigh.id = 'importanceHigh';
    radioHigh.name = 'importance';
    radioHigh.value = 'High';
    labelHigh.htmlFor = 'importanceHigh';
    labelHigh.textContent = 'High';
    const labelFour = document.createElement('label');
    formList.appendChild(labelFour);
    const descriptionInput = document.createElement('textarea');
    descriptionInput.rows = '8';
    formList.appendChild(descriptionInput);
    labelFour.htmlFor = 'Task Description';
    labelFour.textContent = 'Task Description:';
    descriptionInput.id = 'Task Description';
    descriptionInput.name = 'description';
    const formButtonWrap = document.createElement('div');
    formButtonWrap.classList.add('formButtonWrap');
    formList.appendChild(formButtonWrap);

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.type = 'button';
    formButtonWrap.appendChild(cancelButton);
    cancelButton.addEventListener('click', () => {
        addTaskPopup.classList.remove('active');
    });

    const submitButton = document.createElement('button');
    submitButton.textContent = 'Submit';
    submitButton.type = 'submit';
    formButtonWrap.appendChild(submitButton);

    formList.addEventListener('submit', function(event) {
        event.preventDefault();
        addTaskPopup.classList.remove('active');
        
        if (addTaskPopup.dataset.mode === 'edit') {
            _projectMethods__WEBPACK_IMPORTED_MODULE_2__.projectList.removeTask(addTaskPopup.dataset.editIndex);
        };

        formSubmit(nameInput.value, descriptionInput.value, dateInput.value);

        formList.reset();
        radioMed.checked = true;
    });
};

function formSubmit(nameInput, descriptionInput, dateInput) {
    let dateValue = null;
    if (dateInput === '') {
        dateValue = 'No Due Date';
    } else {
        dateValue = dateInput;
    };

    let checkedRadio = null;
    let radioElements = document.getElementsByName('importance');
    for (let i = 0; i < 3; i++) {
        if (radioElements[i].checked) {
            checkedRadio = radioElements[i].value;
        };
    };

    let descriptionValue = null;
    if (descriptionInput === '') {
        descriptionValue = 'None';
    } else {
        descriptionValue = descriptionInput;
    };

    (0,_taskMethods__WEBPACK_IMPORTED_MODULE_1__.addTask)(nameInput, descriptionValue, dateValue, checkedRadio);
}


function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = "__storage_test__";
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            // everything except Firefox
            (e.code === 22 ||
                // Firefox
                e.code === 1014 ||
                // test name field too, because code might not be present
                // everything except Firefox
                e.name === "QuotaExceededError" ||
                // Firefox
                e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage &&
            storage.length !== 0
        );
    };
};



/***/ }),

/***/ "./src/projectMethods.js":
/*!*******************************!*\
  !*** ./src/projectMethods.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addProject: () => (/* binding */ addProject),
/* harmony export */   projectList: () => (/* binding */ projectList)
/* harmony export */ });
/* harmony import */ var _taskMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskMethods */ "./src/taskMethods.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! . */ "./src/index.js");



function addProject(projectName) {
    const domElement = addProjectToDom(projectName);
    projectList.addProject({name: projectName, element: domElement, tasks: []});
    return domElement;
};

function addProjectToDom(projectName) {
    const sideNavBar = document.querySelector('.sideNavBar');
    const addProjectButton = document.querySelector('.addNewProjectButton');

    const newProject = document.createElement('div');
    newProject.dataset.index = projectList.projects.length;
    newProject.classList.add('project');

    const projectTitle = document.createElement('input');
    projectTitle.classList.add('projectTitle');
    projectTitle.value = projectName;
    projectTitle.disabled = 'disabled';
    projectTitle.addEventListener('focusout', () => {
        projectTitle.disabled = 'disabled';
        if (projectTitle.value === '') {
            projectTitle.value = 'Unnamed Project'
        };
    });
    projectTitle.addEventListener('input', function() {
        projectList.editProject(newProject.dataset.index, this.value);
    });
    newProject.appendChild(projectTitle);

    const editButton = document.createElement('button');
    editButton.addEventListener('click', () => {
        projectTitle.disabled = '';
        projectTitle.focus();
    });
    editButton.classList.add('editProjectButton');

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteProjectButton');
    deleteButton.addEventListener('click', () => {
        if (!projectList.isProjectEmpty(newProject.dataset.index)) {
            ___WEBPACK_IMPORTED_MODULE_1__.warningPopup.classList.add('active');
            ___WEBPACK_IMPORTED_MODULE_1__.warningPopup.dataset.projectIndex = newProject.dataset.index;
        } else {
            projectList.deleteProject(newProject.dataset.index);
        }
    });

    newProject.appendChild(editButton);
    newProject.appendChild(deleteButton);

    newProject.addEventListener('click', () => {
        projectList.selectProject(newProject.dataset.index);
    });

    sideNavBar.insertBefore(newProject, addProjectButton);

    return newProject;
}

const projectList = {
    sortBy: 'Priority',
    activeProject: null,
    projects: [],
    addProject: function(project) {
        this.projects.push(project);
        if (this.projects.length < 2) {
            project.element.classList.add('selected');
            this.activeProject = project;
        };
        this.addToStorage();
    },
    selectProject: function(index) {
        for (let i = 0; i < this.projects.length; i++) {
            if (i === parseInt(index)) {
                this.projects[i].element.classList.add('selected');
                this.activeProject = this.projects[i];
            } else {
                this.projects[i].element.classList.remove('selected');
            };
        };

        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();
    },
    editProject: function(index, newName) {
        this.projects[index].name = newName;
        this.addToStorage();
    },
    addTask: function(task) {
        this.activeProject.tasks.push(task);
    },
    removeTask: function(index) {
        this.activeProject.tasks.splice(index, 1);
        (0,_taskMethods__WEBPACK_IMPORTED_MODULE_0__.sortTasks)();
        this.addToStorage();
    },
    addToStorage: function() {
        window.localStorage.projects = JSON.stringify(this.projects);
    },
    isProjectEmpty: function(index) {
        if (this.projects[index].tasks.length > 0) {
            return false;
        } else {
            return true;
        }
    },
    deleteProject: function(index) {
        const taskElements = document.querySelectorAll('.taskWrapper');
        for (let element of taskElements) {
            element.remove();
        }
        this.projects[index].element.remove();
        this.projects.splice(index, 1);
        this.addToStorage();
    }
};



/***/ }),

/***/ "./src/taskMethods.js":
/*!****************************!*\
  !*** ./src/taskMethods.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTask: () => (/* binding */ addTask),
/* harmony export */   animateTaskBackground: () => (/* binding */ animateTaskBackground),
/* harmony export */   sortTasks: () => (/* binding */ sortTasks)
/* harmony export */ });
/* harmony import */ var _projectMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectMethods */ "./src/projectMethods.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");



function addTask(taskName, description, dueDate, importance) {
    const newTask = taskFactory(taskName, description, dueDate, importance);
    _projectMethods__WEBPACK_IMPORTED_MODULE_0__.projectList.addTask(newTask);
    sortTasks();
    _projectMethods__WEBPACK_IMPORTED_MODULE_0__.projectList.addToStorage();
};

function sortTasks() {
    const project = _projectMethods__WEBPACK_IMPORTED_MODULE_0__.projectList.activeProject;
    const sortType = _projectMethods__WEBPACK_IMPORTED_MODULE_0__.projectList.sortBy;
    const taskContainer = document.querySelector('.taskContainer');

    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.lastChild);
    };

    if (sortType === 'Date') {
        project.tasks.sort((a, b) => {
            if (a.dueDate === 'No Due Date') {
                return 1;
            } else if (b.dueDate === 'No Due Date') {
                return -1;
            } else {
                 return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(a.dueDate), (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(b.dueDate));
            }
        });
    } else {
        project.tasks.sort((a, b) => {
            if (a.importance === b.importance) {
                return 0;
            } else if (a.importance === 'High' || b.importance === 'Low') {
                return -1;
            } else if (b.importance === 'High' || a.importance === 'Low') {
                return 1;
            };
        });
    };

    for (let task of project.tasks) {
        addTaskToDOM(task);
    }
}

function addTaskToDOM(task) {
    const taskContainer = document.querySelector('.taskContainer');

    const taskWrapper = document.createElement('div');
    taskWrapper.classList.add('taskWrapper');

    const taskName = document.createElement('span');
    taskName.textContent = task.taskName;
    taskName.classList.add('taskName');
    taskWrapper.appendChild(taskName);

    const dueDate = document.createElement('span');
    dueDate.textContent = task.dueDate;
    dueDate.classList.add('dueDate');
    taskWrapper.appendChild(dueDate);

    const taskImportance = document.createElement('span');
    taskImportance.textContent = task.importance;
    taskImportance.classList.add('taskImportance');
    taskWrapper.appendChild(taskImportance);

    const taskDescription = document.createElement('span');
    taskDescription.textContent = task.description;
    taskDescription.classList.add('taskDescription');
    taskWrapper.appendChild(taskDescription);

    const chevron = document.createElement('div');
    chevron.classList.add('chevron');
    chevron.addEventListener('click', () => {
        taskWrapper.classList.toggle('expanded');
    });
    taskWrapper.appendChild(chevron);

    const completeButton = document.createElement('button');
    completeButton.classList.add('completeButton');
    completeButton.textContent = "Complete";
    completeButton.addEventListener('click', () => {
        _projectMethods__WEBPACK_IMPORTED_MODULE_0__.projectList.removeTask(Array.from(taskContainer.children).indexOf(taskWrapper));
    });
    taskWrapper.appendChild(completeButton);

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = "Edit";
    editButton.addEventListener('click', () => {
        activateEditTaskForm(
            Array.from(taskContainer.children).indexOf(taskWrapper),
            task.taskName,
            task.dueDate,
            task.importance,
            task.description);
    });
    taskWrapper.appendChild(editButton);

    taskContainer.appendChild(taskWrapper);
};

function activateEditTaskForm(taskIndex, taskName, dueDate, taskImportance, taskDescription) {
    const popup = document.querySelector('.addTaskPopup');
    popup.classList.add('active');
    popup.dataset.mode = 'edit';
    popup.dataset.editIndex = taskIndex;

    popup.querySelector('.fieldsetLegend').textContent = 'Edit Task';

    popup.querySelector('[id="Task Name"]').value = taskName;

    if (dueDate != 'No Due Date') {
        popup.querySelector('[id="Task Due Date"]').value = dueDate;
    };

    let radioElements = document.getElementsByName('importance');
    for (let i = 0; i < 3; i++) {
        if (radioElements[i].value === taskImportance) {
            radioElements[i].checked = 'true';
        };
    };

    if (taskDescription != 'None') {
        popup.querySelector('[id="Task Description"]').value = taskDescription;
    };
};

const taskFactory = (taskName, description, dueDate, importance) => {
    // const thisIsAnExample = () => console.log('this is a function');
    // then include the function in returned properties
    return {taskName, description, dueDate, importance};
};

function animateTaskBackground() {
    const root = document.querySelector(':root');
    const gradientStop = getComputedStyle(root).getPropertyValue('--gradientStop');
    const gradientColorOne = getComputedStyle(root).getPropertyValue('--gradientColorOne');
    const gradientColorTwo = getComputedStyle(root).getPropertyValue('--gradientColorTwo');
    const parsedStop =  parseInt(gradientStop.replace(/\D/g, ''));
    
    if (parsedStop < 101) {
        root.style.setProperty('--gradientStop', (parsedStop + 1) + '%');
    } else {
        root.style.setProperty('--gradientStop', '0%');
        root.style.setProperty('--gradientColorOne', gradientColorTwo);
        root.style.setProperty('--gradientColorTwo', gradientColorOne);
    };

    setTimeout(animateTaskBackground, 10);
};



/***/ }),

/***/ "./src/Assets/WixMadeforDisplay-VariableFont_wght.ttf":
/*!************************************************************!*\
  !*** ./src/Assets/WixMadeforDisplay-VariableFont_wght.ttf ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ac88628c01d141957c0.ttf";

/***/ }),

/***/ "./src/Assets/bookmark-plus-outline.svg":
/*!**********************************************!*\
  !*** ./src/Assets/bookmark-plus-outline.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "51c137b490d2b46fe909.svg";

/***/ }),

/***/ "./src/Assets/chevron-up.svg":
/*!***********************************!*\
  !*** ./src/Assets/chevron-up.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c3bd4beab414bf074b0.svg";

/***/ }),

/***/ "./src/Assets/delete-outline.svg":
/*!***************************************!*\
  !*** ./src/Assets/delete-outline.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de0bb67a90c508546224.svg";

/***/ }),

/***/ "./src/Assets/menu.svg":
/*!*****************************!*\
  !*** ./src/Assets/menu.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d4061552fac064ed076.svg";

/***/ }),

/***/ "./src/Assets/square-edit-outline.svg":
/*!********************************************!*\
  !*** ./src/Assets/square-edit-outline.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8421b7fc701a0f1a93be.svg";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sT0FBTyxVQUFVLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssWUFB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkplO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSDs7Ozs7O1VDUkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb25zdGFudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9wYXJzZUlTTy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Byb2plY3RNZXRob2RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrTWV0aG9kcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJBc3NldHMvV2l4TWFkZWZvckRpc3BsYXktVmFyaWFibGVGb250X3dnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiQXNzZXRzL3NxdWFyZS1lZGl0LW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2RlbGV0ZS1vdXRsaW5lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIkFzc2V0cy9ib29rbWFyay1wbHVzLW91dGxpbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiQXNzZXRzL2NoZXZyb24tdXAuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18gPSBuZXcgVVJMKFwiQXNzZXRzL21lbnUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAgIC0tZGFya1NsYXRlR3JheTogIzM5NWU2NjtcXG4gICAgLS1teXJ0bGVHcmVlbjogIzM4N2Q3YTtcXG4gICAgLS1zZWFHcmVlbjogIzMyOTM2ZjtcXG4gICAgLS1qYWRlR3JlZW46ICMyNmE5NmM7XFxuICAgIC0ta2VsbHlHcmVlbjogIzJiYzAxNjtcXG5cXG4gICAgLS1oZWFkZXJIZWlnaHQ6IDEyMHB4O1xcbiAgICAtLXNpZGVOYXZXaWR0aDogMzAwcHg7XFxuICAgIC0tdGFza0hlaWdodDogMTAwcHg7XFxuXFxuICAgIC0tZ3JhZGllbnRDb2xvck9uZTogdmFyKC0ta2VsbHlHcmVlbik7XFxuICAgIC0tZ3JhZGllbnRDb2xvclR3bzogIzU0YzA0NjtcXG4gICAgLS1ncmFkaWVudFN0b3A6IDExMCU7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogd2l4Rm9udDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlTmF2V2lkdGgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXJIZWlnaHQpIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB3aXhGb250LCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6IHZhcigtLWtlbGx5R3JlZW4pO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1NsYXRlR3JheSk7XFxufVxcblxcbi5zb3J0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogODdweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5zaWRlTmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teXJ0bGVHcmVlbik7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHggNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGU6ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbixcXG4uZGVsZXRlUHJvamVjdEJ1dHRvbixcXG4uYWRkTmV3UHJvamVjdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9uOmhvdmVyLFxcbi5kZWxldGVQcm9qZWN0QnV0dG9uOmhvdmVyLFxcbi5hZGROZXdQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XFxufVxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0QnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKTtcXG59XFxuXFxuLmFkZE5ld1Byb2plY3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uYWRkTmV3UHJvamVjdEJ1dHRvbjo6YmVmb3JlLFxcbi5hZGROZXdQcm9qZWN0QnV0dG9uOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIik7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFHcmVlbik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2tXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4IDEyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMjBweCA0MHB4IDgwcHg7XFxuICAgIGhlaWdodDogdmFyKC0tdGFza0hlaWdodCk7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgdmFyKC0tZ3JhZGllbnRDb2xvck9uZSksIHZhcigtLWdyYWRpZW50U3RvcCksIHZhcigtLWdyYWRpZW50Q29sb3JUd28pKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IC41cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza1dyYXBwZXIuZXhwYW5kZWQge1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdGFza0hlaWdodCkgKiAyKTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNSAvIDI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0Rlc2NyaXB0aW9uOiBcXFxcQSc7XFxufVxcblxcbi50YXNrV3JhcHBlci5leHBhbmRlZCAudGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZHVlRGF0ZTo6YmVmb3JlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0R1ZTogXFxcXEEnO1xcbn1cXG5cXG4udGFza0ltcG9ydGFuY2Uge1xcbiAgICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tJbXBvcnRhbmNlOjpiZWZvcmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0ltcG9ydGFuY2U6ICc7XFxufVxcblxcbi5jaGV2cm9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xcbiAgICB0cmFuc2l0aW9uOiAuNXM7XFxufVxcblxcbi50YXNrV3JhcHBlci5leHBhbmRlZCAuY2hldnJvbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xcbn1cXG5cXG4uZWRpdEJ1dHRvbixcXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4udGFza1dyYXBwZXIuZXhwYW5kZWQgLmVkaXRCdXR0b24sXFxuLnRhc2tXcmFwcGVyLmV4cGFuZGVkIC5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb24tZGVsYXk6IC4zcztcXG59XFxuXFxuLmVkaXRCdXR0b24ge1xcbiAgICBncmlkLWFyZWE6IDQgLyAyIC8gNSAvIDM7XFxufVxcblxcbi5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgIGdyaWQtYXJlYTogNCAvIDMgLyA1IC8gNDtcXG59XFxuXFxuLmFkZFRhc2tQb3B1cCxcXG4ud2FybmluZ1BvcHVwIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTQwMHB4KTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjVzO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHotaW5kZXg6IDIwO1xcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDJweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG4uYWRkVGFza1BvcHVwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi53YXJuaW5nUG9wdXAge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbn1cXG5cXG4uYWRkVGFza1BvcHVwID4gKixcXG4ud2FybmluZ1BvcHVwID4gKixcXG4ud2FybmluZ1BvcHVwIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmFkZFRhc2tQb3B1cC5hY3RpdmUsXFxuLndhcm5pbmdQb3B1cC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teXJ0bGVHcmVlbik7XFxuICAgIHBhZGRpbmctbGVmdDogM3B4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcHg7XFxufVxcblxcbi5hZGRUYXNrUG9wdXAuYWN0aXZlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwdm1heCk7XFxuICAgIGhlaWdodDogbWluKDcwdm1heCwgNDUwcHgpO1xcbiAgICB3aWR0aDogbWluKDgwdncsIDQwMHB4KTtcXG59XFxuXFxuLndhcm5pbmdQb3B1cC5hY3RpdmUge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTV2bWF4KTtcXG59XFxuXFxuLmFkZFRhc2tQb3B1cC5hY3RpdmUgPiAqLFxcbi53YXJuaW5nUG9wdXAuYWN0aXZlID4gKixcXG4ud2FybmluZ1BvcHVwLmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi53YXJuaW5nVGV4dCB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG59XFxuXFxuLndhcm5pbmdDYW5jZWwsXFxuLndhcm5pbmdEZWxldGUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgICBoZWlnaHQ6IDkzJTtcXG4gICAgd2lkdGg6IDkwJTtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIG1hcmdpbi1ib3R0b206IC0xOHB4O1xcbn1cXG5cXG4uZm9ybUxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5yYWRpb1dyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9ybUJ1dHRvbldyYXAge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwcHggMWZyO1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjRzO1xcbiAgICB9XFxuXFxuICAgIGJvZHkubW9iaWxlTWVudSB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcXG4gICAgfVxcblxcbiAgICAudGFza0NvbnRhaW5lciB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnNpZGVOYXZCYXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAxO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlTmF2QmFyID4gKiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBsZWZ0OiAtMjAwcHg7XFxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuNHM7XFxuICAgIH1cXG5cXG4gICAgYm9keS5tb2JpbGVNZW51IC5zaWRlTmF2QmFyID4gKntcXG4gICAgICAgIGxlZnQ6IDBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdFRpdGxlIHtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgfVxcblxcbiAgICAuZXhwYW5kU2lkZU5hdkJ1dHRvbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0b3A6IDMwcHg7XFxuICAgICAgICBsZWZ0OiAzMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKTtcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogNDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtTbGF0ZUdyYXkpO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgfVxcblxcbiAgICAuZXhwYW5kU2lkZU5hdkJ1dHRvbjpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrU2xhdGVHcmF5KTtcXG4gICAgfVxcblxcbiAgICAudGFza1dyYXBwZXIge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICB9XFxuXFxuICAgIC50YXNrTmFtZSB7XFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIH1cXG5cXG4gICAgLmR1ZURhdGUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAyO1xcbiAgICB9XFxuXFxuICAgIC50YXNrSW1wb3J0YW5jZSB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDM7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tEZXNjcmlwdGlvbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBncmlkLWFyZWE6IDMgLyAxIC8gNSAvIDQ7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRCdXR0b24sXFxuICAgIC5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBib3R0b206IDEwcHg7XFxuICAgICAgICB3aWR0aDogODBweDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuXFxuICAgIC5lZGl0QnV0dG9uIHtcXG4gICAgICAgIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gMjtcXG4gICAgfVxcblxcbiAgICAuY29tcGxldGVCdXR0b24ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiA0IC8gMiAvIDUgLyAzO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1C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WTtRQUNaLFdBQVc7UUFDWCxvQkFBb0I7UUFDcEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksd0JBQXdCO0lBQzVCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcbiAgICAtLWRhcmtTbGF0ZUdyYXk6ICMzOTVlNjY7XFxuICAgIC0tbXlydGxlR3JlZW46ICMzODdkN2E7XFxuICAgIC0tc2VhR3JlZW46ICMzMjkzNmY7XFxuICAgIC0tamFkZUdyZWVuOiAjMjZhOTZjO1xcbiAgICAtLWtlbGx5R3JlZW46ICMyYmMwMTY7XFxuXFxuICAgIC0taGVhZGVySGVpZ2h0OiAxMjBweDtcXG4gICAgLS1zaWRlTmF2V2lkdGg6IDMwMHB4O1xcbiAgICAtLXRhc2tIZWlnaHQ6IDEwMHB4O1xcblxcbiAgICAtLWdyYWRpZW50Q29sb3JPbmU6IHZhcigtLWtlbGx5R3JlZW4pO1xcbiAgICAtLWdyYWRpZW50Q29sb3JUd286ICM1NGMwNDY7XFxuICAgIC0tZ3JhZGllbnRTdG9wOiAxMTAlO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IHdpeEZvbnQ7XFxuICAgIHNyYzogdXJsKEFzc2V0cy9XaXhNYWRlZm9yRGlzcGxheS1WYXJpYWJsZUZvbnRfd2dodC50dGYpO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlTmF2V2lkdGgpIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiB2YXIoLS1oZWFkZXJIZWlnaHQpIDFmcjtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiB3aXhGb250LCBzYW5zLXNlcmlmO1xcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgY29sb3I6IHZhcigtLWtlbGx5R3JlZW4pO1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzEsIDMxLCAzMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHMgIWltcG9ydGFudDtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMHMgIWltcG9ydGFudDtcXG59XFxuXFxuLnBhZ2VIZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1NsYXRlR3JheSk7XFxufVxcblxcbi5zb3J0QnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgcmlnaHQ6IDEwMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB3aWR0aDogODdweDtcXG59XFxuXFxuLmFkZFRhc2tCdXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxufVxcblxcbi5zaWRlTmF2QmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1teXJ0bGVHcmVlbik7XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMjUpIDBweCA1NHB4IDU1cHgsIHJnYmEoMCwgMCwgMCwgMC4xMikgMHB4IDRweCA2cHgsIHJnYmEoMCwgMCwgMCwgMC4xNykgMHB4IDEycHggMTNweCwgcmdiYSgwLCAwLCAwLCAwLjA5KSAwcHggLTNweCA1cHg7XFxufVxcblxcbi5wcm9qZWN0SGVhZGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDQwcHggNDBweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiBsYXJnZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3Quc2VsZWN0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC4yKTtcXG59XFxuXFxuLnByb2plY3RUaXRsZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiAxNjBweDtcXG4gICAgcGFkZGluZzogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0VGl0bGU6ZGlzYWJsZWQge1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbixcXG4uZGVsZXRlUHJvamVjdEJ1dHRvbixcXG4uYWRkTmV3UHJvamVjdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICBwYWRkaW5nOiAxMnB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLmVkaXRQcm9qZWN0QnV0dG9uOmhvdmVyLFxcbi5kZWxldGVQcm9qZWN0QnV0dG9uOmhvdmVyLFxcbi5hZGROZXdQcm9qZWN0QnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAuMSk7XFxufVxcblxcbi5lZGl0UHJvamVjdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvc3F1YXJlLWVkaXQtb3V0bGluZS5zdmcpO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdEJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvZGVsZXRlLW91dGxpbmUuc3ZnKTtcXG59XFxuXFxuLmFkZE5ld1Byb2plY3RCdXR0b24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uYWRkTmV3UHJvamVjdEJ1dHRvbjo6YmVmb3JlLFxcbi5hZGROZXdQcm9qZWN0QnV0dG9uOjphZnRlciB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvYm9va21hcmstcGx1cy1vdXRsaW5lLnN2Zyk7XFxuICAgIG1hcmdpbi1sZWZ0OiAzcHg7XFxuICAgIG1hcmdpbi1yaWdodDogM3B4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWFHcmVlbik7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGdhcDogMTBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuLnRhc2tXcmFwcGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEyMHB4IDEyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQ1cHggMjBweCA0MHB4IDgwcHg7XFxuICAgIGhlaWdodDogdmFyKC0tdGFza0hlaWdodCk7XFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMGRlZywgdmFyKC0tZ3JhZGllbnRDb2xvck9uZSksIHZhcigtLWdyYWRpZW50U3RvcCksIHZhcigtLWdyYWRpZW50Q29sb3JUd28pKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiA2MDAlO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIHRyYW5zaXRpb246IC41cztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4udGFza1dyYXBwZXIuZXhwYW5kZWQge1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0tdGFza0hlaWdodCkgKiAyKTtcXG59XFxuXFxuLnRhc2tOYW1lIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA0O1xcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24ge1xcbiAgICBncmlkLWFyZWE6IDMgLyAxIC8gNSAvIDI7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG59XFxuXFxuLnRhc2tEZXNjcmlwdGlvbjo6YmVmb3JlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0Rlc2NyaXB0aW9uOiBcXFxcQSc7XFxufVxcblxcbi50YXNrV3JhcHBlci5leHBhbmRlZCAudGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjNzO1xcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZHVlRGF0ZTo6YmVmb3JlIHtcXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0R1ZTogXFxcXEEnO1xcbn1cXG5cXG4udGFza0ltcG9ydGFuY2Uge1xcbiAgICBncmlkLWFyZWE6IDIgLyAzIC8gMyAvIDQ7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tJbXBvcnRhbmNlOjpiZWZvcmUge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29udGVudDogJ0ltcG9ydGFuY2U6ICc7XFxufVxcblxcbi5jaGV2cm9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDE2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoQXNzZXRzL2NoZXZyb24tdXAuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcXG4gICAgdHJhbnNpdGlvbjogLjVzO1xcbn1cXG5cXG4udGFza1dyYXBwZXIuZXhwYW5kZWQgLmNoZXZyb24ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcXG59XFxuXFxuLmVkaXRCdXR0b24sXFxuLmNvbXBsZXRlQnV0dG9uIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2tXcmFwcGVyLmV4cGFuZGVkIC5lZGl0QnV0dG9uLFxcbi50YXNrV3JhcHBlci5leHBhbmRlZCAuY29tcGxldGVCdXR0b24ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XFxufVxcblxcbi5lZGl0QnV0dG9uIHtcXG4gICAgZ3JpZC1hcmVhOiA0IC8gMiAvIDUgLyAzO1xcbn1cXG5cXG4uY29tcGxldGVCdXR0b24ge1xcbiAgICBncmlkLWFyZWE6IDQgLyAzIC8gNSAvIDQ7XFxufVxcblxcbi5hZGRUYXNrUG9wdXAsXFxuLndhcm5pbmdQb3B1cCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC00MDBweCk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC41cztcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB6LWluZGV4OiAyMDtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxuLmFkZFRhc2tQb3B1cCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ud2FybmluZ1BvcHVwIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLmFkZFRhc2tQb3B1cCA+ICosXFxuLndhcm5pbmdQb3B1cCA+ICosXFxuLndhcm5pbmdQb3B1cCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5hZGRUYXNrUG9wdXAuYWN0aXZlLFxcbi53YXJuaW5nUG9wdXAuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbXlydGxlR3JlZW4pO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gICAgcGFkZGluZy1yaWdodDogM3B4O1xcbn1cXG5cXG4uYWRkVGFza1BvcHVwLmFjdGl2ZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHZtYXgpO1xcbiAgICBoZWlnaHQ6IG1pbig3MHZtYXgsIDQ1MHB4KTtcXG4gICAgd2lkdGg6IG1pbig4MHZ3LCA0MDBweCk7XFxufVxcblxcbi53YXJuaW5nUG9wdXAuYWN0aXZlIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDE1dm1heCk7XFxufVxcblxcbi5hZGRUYXNrUG9wdXAuYWN0aXZlID4gKixcXG4ud2FybmluZ1BvcHVwLmFjdGl2ZSA+ICosXFxuLndhcm5pbmdQb3B1cC5hY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ud2FybmluZ1RleHQge1xcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxufVxcblxcbi53YXJuaW5nQ2FuY2VsLFxcbi53YXJuaW5nRGVsZXRlIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gICAgaGVpZ2h0OiA5MyU7XFxuICAgIHdpZHRoOiA5MCU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuXFxubGFiZWwge1xcbiAgICBtYXJnaW4tYm90dG9tOiAtMThweDtcXG59XFxuXFxuLmZvcm1MaXN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4ucmFkaW9XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZvcm1CdXR0b25XcmFwIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xcbiAgICBib2R5IHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMHB4IDFmcjtcXG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC40cztcXG4gICAgfVxcblxcbiAgICBib2R5Lm1vYmlsZU1lbnUge1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNTBweCAxZnI7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tDb250YWluZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyAzO1xcbiAgICB9XFxuXFxuICAgIC5zaWRlTmF2QmFyIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMTtcXG4gICAgfVxcblxcbiAgICAuc2lkZU5hdkJhciA+ICoge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgbGVmdDogLTIwMHB4O1xcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjRzO1xcbiAgICB9XFxuXFxuICAgIGJvZHkubW9iaWxlTWVudSAuc2lkZU5hdkJhciA+ICp7XFxuICAgICAgICBsZWZ0OiAwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RUaXRsZSB7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmV4cGFuZFNpZGVOYXZCdXR0b24ge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAzMHB4O1xcbiAgICAgICAgbGVmdDogMzBweDtcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChBc3NldHMvbWVudS5zdmcpO1xcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFya1NsYXRlR3JheSk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB9XFxuXFxuICAgIC5leHBhbmRTaWRlTmF2QnV0dG9uOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmtTbGF0ZUdyYXkpO1xcbiAgICB9XFxuXFxuICAgIC50YXNrV3JhcHBlciB7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tOYW1lIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMztcXG4gICAgfVxcblxcbiAgICAuZHVlRGF0ZSB7XFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDI7XFxuICAgIH1cXG5cXG4gICAgLnRhc2tJbXBvcnRhbmNlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gMztcXG4gICAgfVxcblxcbiAgICAudGFza0Rlc2NyaXB0aW9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGdyaWQtYXJlYTogMyAvIDEgLyA1IC8gNDtcXG4gICAgfVxcblxcbiAgICAuZWRpdEJ1dHRvbixcXG4gICAgLmNvbXBsZXRlQnV0dG9uIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGJvdHRvbTogMTBweDtcXG4gICAgICAgIHdpZHRoOiA4MHB4O1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLmVkaXRCdXR0b24ge1xcbiAgICAgICAgZ3JpZC1hcmVhOiA0IC8gMSAvIDUgLyAyO1xcbiAgICB9XFxuXFxuICAgIC5jb21wbGV0ZUJ1dHRvbiB7XFxuICAgICAgICBncmlkLWFyZWE6IDQgLyAyIC8gNSAvIDM7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCIvKipcbiAqIERheXMgaW4gMSB3ZWVrLlxuICpcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogRGF5cyBpbiAxIHllYXJcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICpcbiAqIEBuYW1lIGRheXNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBNaWxsaXNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5Ib3VyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKlxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5TZWNvbmRcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWlsbGlzZWNvbmRzSW5TZWNvbmQgPSAxMDAwO1xuXG4vKipcbiAqIE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWluVGltZSA9IC1tYXhUaW1lO1xuXG4vKipcbiAqIE1pbnV0ZXMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgbWludXRlc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaW51dGVzSW5Ib3VyID0gNjA7XG5cbi8qKlxuICogTW9udGhzIGluIDEgcXVhcnRlclxuICpcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtb250aHNJblF1YXJ0ZXIgPSAzO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5ZZWFyID0gMTI7XG5cbi8qKlxuICogUXVhcnRlcnMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBob3VyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgbWludXRlXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBkYXlcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5EYXlcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSB3ZWVrXG4gKlxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1vbnRoXG4gKlxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7IiwiaW1wb3J0IHsgbWlsbGlzZWNvbmRzSW5Ib3VyLCBtaWxsaXNlY29uZHNJbk1pbnV0ZSB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBwYXJzZUlTT1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBQYXJzZSBJU08gc3RyaW5nXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBQYXJzZSB0aGUgZ2l2ZW4gc3RyaW5nIGluIElTTyA4NjAxIGZvcm1hdCBhbmQgcmV0dXJuIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpc24ndCBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIGNhbm5vdCBwYXJzZSB0aGUgc3RyaW5nIG9yXG4gKiB0aGUgdmFsdWVzIGFyZSBpbnZhbGlkLCBpdCByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0gezB8MXwyfSBbb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzPTJdIC0gdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5hZGRpdGlvbmFsRGlnaXRzYCBtdXN0IGJlIDAsIDEgb3IgMlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnMjAxNC0wMi0xMVQxMTozMDozMCcgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcyMDE0LTAyLTExVDExOjMwOjMwJylcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgc3RyaW5nICcrMDIwMTQxMDEnIHRvIGRhdGUsXG4gKiAvLyBpZiB0aGUgYWRkaXRpb25hbCBudW1iZXIgb2YgZGlnaXRzIGluIHRoZSBleHRlbmRlZCB5ZWFyIGZvcm1hdCBpcyAxOlxuICogY29uc3QgcmVzdWx0ID0gcGFyc2VJU08oJyswMjAxNDEwMScsIHsgYWRkaXRpb25hbERpZ2l0czogMSB9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcGFyc2VJU08oYXJndW1lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIF9vcHRpb25zJGFkZGl0aW9uYWxEaTtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhZGRpdGlvbmFsRGlnaXRzID0gdG9JbnRlZ2VyKChfb3B0aW9ucyRhZGRpdGlvbmFsRGkgPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0cykgIT09IG51bGwgJiYgX29wdGlvbnMkYWRkaXRpb25hbERpICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRhZGRpdGlvbmFsRGkgOiAyKTtcbiAgaWYgKGFkZGl0aW9uYWxEaWdpdHMgIT09IDIgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMSAmJiBhZGRpdGlvbmFsRGlnaXRzICE9PSAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2FkZGl0aW9uYWxEaWdpdHMgbXVzdCBiZSAwLCAxIG9yIDInKTtcbiAgfVxuICBpZiAoISh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCkgPT09ICdbb2JqZWN0IFN0cmluZ10nKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciBkYXRlU3RyaW5ncyA9IHNwbGl0RGF0ZVN0cmluZyhhcmd1bWVudCk7XG4gIHZhciBkYXRlO1xuICBpZiAoZGF0ZVN0cmluZ3MuZGF0ZSkge1xuICAgIHZhciBwYXJzZVllYXJSZXN1bHQgPSBwYXJzZVllYXIoZGF0ZVN0cmluZ3MuZGF0ZSwgYWRkaXRpb25hbERpZ2l0cyk7XG4gICAgZGF0ZSA9IHBhcnNlRGF0ZShwYXJzZVllYXJSZXN1bHQucmVzdERhdGVTdHJpbmcsIHBhcnNlWWVhclJlc3VsdC55ZWFyKTtcbiAgfVxuICBpZiAoIWRhdGUgfHwgaXNOYU4oZGF0ZS5nZXRUaW1lKCkpKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgdGltZSA9IDA7XG4gIHZhciBvZmZzZXQ7XG4gIGlmIChkYXRlU3RyaW5ncy50aW1lKSB7XG4gICAgdGltZSA9IHBhcnNlVGltZShkYXRlU3RyaW5ncy50aW1lKTtcbiAgICBpZiAoaXNOYU4odGltZSkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfVxuICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICBvZmZzZXQgPSBwYXJzZVRpbWV6b25lKGRhdGVTdHJpbmdzLnRpbWV6b25lKTtcbiAgICBpZiAoaXNOYU4ob2Zmc2V0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciBkaXJ0eURhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKTtcbiAgICAvLyBqcyBwYXJzZWQgc3RyaW5nIGFzc3VtaW5nIGl0J3MgaW4gVVRDIHRpbWV6b25lXG4gICAgLy8gYnV0IHdlIG5lZWQgaXQgdG8gYmUgcGFyc2VkIGluIG91ciB0aW1lem9uZVxuICAgIC8vIHNvIHdlIHVzZSB1dGMgdmFsdWVzIHRvIGJ1aWxkIGRhdGUgaW4gb3VyIHRpbWV6b25lLlxuICAgIC8vIFllYXIgdmFsdWVzIGZyb20gMCB0byA5OSBtYXAgdG8gdGhlIHllYXJzIDE5MDAgdG8gMTk5OVxuICAgIC8vIHNvIHNldCB5ZWFyIGV4cGxpY2l0bHkgd2l0aCBzZXRGdWxsWWVhci5cbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUoMCk7XG4gICAgcmVzdWx0LnNldEZ1bGxZZWFyKGRpcnR5RGF0ZS5nZXRVVENGdWxsWWVhcigpLCBkaXJ0eURhdGUuZ2V0VVRDTW9udGgoKSwgZGlydHlEYXRlLmdldFVUQ0RhdGUoKSk7XG4gICAgcmVzdWx0LnNldEhvdXJzKGRpcnR5RGF0ZS5nZXRVVENIb3VycygpLCBkaXJ0eURhdGUuZ2V0VVRDTWludXRlcygpLCBkaXJ0eURhdGUuZ2V0VVRDU2Vjb25kcygpLCBkaXJ0eURhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIHRpbWUgKyBvZmZzZXQpO1xufVxudmFyIHBhdHRlcm5zID0ge1xuICBkYXRlVGltZURlbGltaXRlcjogL1tUIF0vLFxuICB0aW1lWm9uZURlbGltaXRlcjogL1taIF0vaSxcbiAgdGltZXpvbmU6IC8oW1orLV0uKikkL1xufTtcbnZhciBkYXRlUmVnZXggPSAvXi0/KD86KFxcZHszfSl8KFxcZHsyfSkoPzotPyhcXGR7Mn0pKT98VyhcXGR7Mn0pKD86LT8oXFxkezF9KSk/fCkkLztcbnZhciB0aW1lUmVnZXggPSAvXihcXGR7Mn0oPzpbLixdXFxkKik/KSg/Ojo/KFxcZHsyfSg/OlsuLF1cXGQqKT8pKT8oPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/JC87XG52YXIgdGltZXpvbmVSZWdleCA9IC9eKFsrLV0pKFxcZHsyfSkoPzo6PyhcXGR7Mn0pKT8kLztcbmZ1bmN0aW9uIHNwbGl0RGF0ZVN0cmluZyhkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9O1xuICB2YXIgYXJyYXkgPSBkYXRlU3RyaW5nLnNwbGl0KHBhdHRlcm5zLmRhdGVUaW1lRGVsaW1pdGVyKTtcbiAgdmFyIHRpbWVTdHJpbmc7XG5cbiAgLy8gVGhlIHJlZ2V4IG1hdGNoIHNob3VsZCBvbmx5IHJldHVybiBhdCBtYXhpbXVtIHR3byBhcnJheSBlbGVtZW50cy5cbiAgLy8gW2RhdGVdLCBbdGltZV0sIG9yIFtkYXRlLCB0aW1lXS5cbiAgaWYgKGFycmF5Lmxlbmd0aCA+IDIpIHtcbiAgICByZXR1cm4gZGF0ZVN0cmluZ3M7XG4gIH1cbiAgaWYgKC86Ly50ZXN0KGFycmF5WzBdKSkge1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVswXTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF07XG4gICAgdGltZVN0cmluZyA9IGFycmF5WzFdO1xuICAgIGlmIChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlci50ZXN0KGRhdGVTdHJpbmdzLmRhdGUpKSB7XG4gICAgICBkYXRlU3RyaW5ncy5kYXRlID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy50aW1lWm9uZURlbGltaXRlcilbMF07XG4gICAgICB0aW1lU3RyaW5nID0gZGF0ZVN0cmluZy5zdWJzdHIoZGF0ZVN0cmluZ3MuZGF0ZS5sZW5ndGgsIGRhdGVTdHJpbmcubGVuZ3RoKTtcbiAgICB9XG4gIH1cbiAgaWYgKHRpbWVTdHJpbmcpIHtcbiAgICB2YXIgdG9rZW4gPSBwYXR0ZXJucy50aW1lem9uZS5leGVjKHRpbWVTdHJpbmcpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmcucmVwbGFjZSh0b2tlblsxXSwgJycpO1xuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVN0cmluZ3MudGltZSA9IHRpbWVTdHJpbmc7XG4gICAgfVxuICB9XG4gIHJldHVybiBkYXRlU3RyaW5ncztcbn1cbmZ1bmN0aW9uIHBhcnNlWWVhcihkYXRlU3RyaW5nLCBhZGRpdGlvbmFsRGlnaXRzKSB7XG4gIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14oPzooXFxcXGR7NH18WystXVxcXFxkeycgKyAoNCArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pfChcXFxcZHsyfXxbKy1dXFxcXGR7JyArICgyICsgYWRkaXRpb25hbERpZ2l0cykgKyAnfSkkKScpO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKHJlZ2V4KTtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIHtcbiAgICB5ZWFyOiBOYU4sXG4gICAgcmVzdERhdGVTdHJpbmc6ICcnXG4gIH07XG4gIHZhciB5ZWFyID0gY2FwdHVyZXNbMV0gPyBwYXJzZUludChjYXB0dXJlc1sxXSkgOiBudWxsO1xuICB2YXIgY2VudHVyeSA9IGNhcHR1cmVzWzJdID8gcGFyc2VJbnQoY2FwdHVyZXNbMl0pIDogbnVsbDtcblxuICAvLyBlaXRoZXIgeWVhciBvciBjZW50dXJ5IGlzIG51bGwsIG5vdCBib3RoXG4gIHJldHVybiB7XG4gICAgeWVhcjogY2VudHVyeSA9PT0gbnVsbCA/IHllYXIgOiBjZW50dXJ5ICogMTAwLFxuICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKChjYXB0dXJlc1sxXSB8fCBjYXB0dXJlc1syXSkubGVuZ3RoKVxuICB9O1xufVxuZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGVTdHJpbmcsIHllYXIpIHtcbiAgLy8gSW52YWxpZCBJU08tZm9ybWF0dGVkIHllYXJcbiAgaWYgKHllYXIgPT09IG51bGwpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgY2FwdHVyZXMgPSBkYXRlU3RyaW5nLm1hdGNoKGRhdGVSZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCBzdHJpbmdcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIHZhciBpc1dlZWtEYXRlID0gISFjYXB0dXJlc1s0XTtcbiAgdmFyIGRheU9mWWVhciA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbW9udGggPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzJdKSAtIDE7XG4gIHZhciBkYXkgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzNdKTtcbiAgdmFyIHdlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzRdKTtcbiAgdmFyIGRheU9mV2VlayA9IHBhcnNlRGF0ZVVuaXQoY2FwdHVyZXNbNV0pIC0gMTtcbiAgaWYgKGlzV2Vla0RhdGUpIHtcbiAgICBpZiAoIXZhbGlkYXRlV2Vla0RhdGUoeWVhciwgd2VlaywgZGF5T2ZXZWVrKSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gICAgfVxuICAgIHJldHVybiBkYXlPZklTT1dlZWtZZWFyKHllYXIsIHdlZWssIGRheU9mV2Vlayk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgICBpZiAoIXZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF5KSB8fCAhdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBNYXRoLm1heChkYXlPZlllYXIsIGRheSkpO1xuICAgIHJldHVybiBkYXRlO1xuICB9XG59XG5mdW5jdGlvbiBwYXJzZURhdGVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSA/IHBhcnNlSW50KHZhbHVlKSA6IDE7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWUodGltZVN0cmluZykge1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lU3RyaW5nLm1hdGNoKHRpbWVSZWdleCk7XG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBOYU47IC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB0aW1lXG5cbiAgdmFyIGhvdXJzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1sxXSk7XG4gIHZhciBtaW51dGVzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1syXSk7XG4gIHZhciBzZWNvbmRzID0gcGFyc2VUaW1lVW5pdChjYXB0dXJlc1szXSk7XG4gIGlmICghdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgcmV0dXJuIGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlICsgc2Vjb25kcyAqIDEwMDA7XG59XG5mdW5jdGlvbiBwYXJzZVRpbWVVbml0KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoJywnLCAnLicpKSB8fCAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lem9uZSh0aW1lem9uZVN0cmluZykge1xuICBpZiAodGltZXpvbmVTdHJpbmcgPT09ICdaJykgcmV0dXJuIDA7XG4gIHZhciBjYXB0dXJlcyA9IHRpbWV6b25lU3RyaW5nLm1hdGNoKHRpbWV6b25lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gMDtcbiAgdmFyIHNpZ24gPSBjYXB0dXJlc1sxXSA9PT0gJysnID8gLTEgOiAxO1xuICB2YXIgaG91cnMgPSBwYXJzZUludChjYXB0dXJlc1syXSk7XG4gIHZhciBtaW51dGVzID0gY2FwdHVyZXNbM10gJiYgcGFyc2VJbnQoY2FwdHVyZXNbM10pIHx8IDA7XG4gIGlmICghdmFsaWRhdGVUaW1lem9uZShob3VycywgbWludXRlcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBzaWduICogKGhvdXJzICogbWlsbGlzZWNvbmRzSW5Ib3VyICsgbWludXRlcyAqIG1pbGxpc2Vjb25kc0luTWludXRlKTtcbn1cbmZ1bmN0aW9uIGRheU9mSVNPV2Vla1llYXIoaXNvV2Vla1llYXIsIHdlZWssIGRheSkge1xuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApO1xuICBkYXRlLnNldFVUQ0Z1bGxZZWFyKGlzb1dlZWtZZWFyLCAwLCA0KTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgNztcbiAgdmFyIGRpZmYgPSAod2VlayAtIDEpICogNyArIGRheSArIDEgLSBmb3VydGhPZkphbnVhcnlEYXk7XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSArIGRpZmYpO1xuICByZXR1cm4gZGF0ZTtcbn1cblxuLy8gVmFsaWRhdGlvbiBmdW5jdGlvbnNcblxuLy8gRmVicnVhcnkgaXMgbnVsbCB0byBoYW5kbGUgdGhlIGxlYXAgeWVhciAodXNpbmcgfHwpXG52YXIgZGF5c0luTW9udGhzID0gWzMxLCBudWxsLCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV07XG5mdW5jdGlvbiBpc0xlYXBZZWFySW5kZXgoeWVhcikge1xuICByZXR1cm4geWVhciAlIDQwMCA9PT0gMCB8fCB5ZWFyICUgNCA9PT0gMCAmJiB5ZWFyICUgMTAwICE9PSAwO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXRlKHllYXIsIG1vbnRoLCBkYXRlKSB7XG4gIHJldHVybiBtb250aCA+PSAwICYmIG1vbnRoIDw9IDExICYmIGRhdGUgPj0gMSAmJiBkYXRlIDw9IChkYXlzSW5Nb250aHNbbW9udGhdIHx8IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAyOSA6IDI4KSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZURheU9mWWVhckRhdGUoeWVhciwgZGF5T2ZZZWFyKSB7XG4gIHJldHVybiBkYXlPZlllYXIgPj0gMSAmJiBkYXlPZlllYXIgPD0gKGlzTGVhcFllYXJJbmRleCh5ZWFyKSA/IDM2NiA6IDM2NSk7XG59XG5mdW5jdGlvbiB2YWxpZGF0ZVdlZWtEYXRlKF95ZWFyLCB3ZWVrLCBkYXkpIHtcbiAgcmV0dXJuIHdlZWsgPj0gMSAmJiB3ZWVrIDw9IDUzICYmIGRheSA+PSAwICYmIGRheSA8PSA2O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XG4gIGlmIChob3VycyA9PT0gMjQpIHtcbiAgICByZXR1cm4gbWludXRlcyA9PT0gMCAmJiBzZWNvbmRzID09PSAwO1xuICB9XG4gIHJldHVybiBzZWNvbmRzID49IDAgJiYgc2Vjb25kcyA8IDYwICYmIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDwgNjAgJiYgaG91cnMgPj0gMCAmJiBob3VycyA8IDI1O1xufVxuZnVuY3Rpb24gdmFsaWRhdGVUaW1lem9uZShfaG91cnMsIG1pbnV0ZXMpIHtcbiAgcmV0dXJuIG1pbnV0ZXMgPj0gMCAmJiBtaW51dGVzIDw9IDU5O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgeyBhZGRUYXNrLCBzb3J0VGFza3MsIGFuaW1hdGVUYXNrQmFja2dyb3VuZCB9IGZyb20gJy4vdGFza01ldGhvZHMnO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgcHJvamVjdExpc3QgfSBmcm9tICcuL3Byb2plY3RNZXRob2RzJztcblxuY29uc3QgcGFnZUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xucGFnZUhlYWRlci5jbGFzc0xpc3QuYWRkKCdwYWdlSGVhZGVyJyk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuXG5jb25zdCBzaWRlTmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zaWRlTmF2QmFyLmNsYXNzTGlzdC5hZGQoJ3NpZGVOYXZCYXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2lkZU5hdkJhcik7XG5cbmNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5wcm9qZWN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RIZWFkZXInKTtcbnByb2plY3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5zaWRlTmF2QmFyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xuXG5jb25zdCBhZGROZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGROZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZE5ld1Byb2plY3RCdXR0b24nKTtcbmFkZE5ld1Byb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuYWRkTmV3UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBhZGRQcm9qZWN0KCcnKS5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFRpdGxlJyk7XG4gICAgbmV3UHJvamVjdElucHV0LmRpc2FibGVkID0gJyc7XG4gICAgbmV3UHJvamVjdElucHV0LmZvY3VzKCk7XG59KTtcbnNpZGVOYXZCYXIuYXBwZW5kQ2hpbGQoYWRkTmV3UHJvamVjdEJ1dHRvbik7XG5cbmNvbnN0IGFkZFRhc2tQb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY3JlYXRlVGFza0Zvcm0oKTtcblxuY29uc3Qgd2FybmluZ1BvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53YXJuaW5nUG9wdXAuY2xhc3NMaXN0LmFkZCgnd2FybmluZ1BvcHVwJyk7XG5jb25zdCB3YXJuaW5nVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbndhcm5pbmdUZXh0LmNsYXNzTGlzdC5hZGQoJ3dhcm5pbmdUZXh0Jyk7XG53YXJuaW5nVGV4dC50ZXh0Q29udGVudCA9IFwiVGhpcyBwcm9qZWN0IGNvbnRhaW5zIHVuZmluaXNoZWQgdGFza3MsIGRvIHlvdSBzdGlsbCB3YW50IHRvIGRlbGV0ZSBpdD9cIjtcbndhcm5pbmdQb3B1cC5hcHBlbmRDaGlsZCh3YXJuaW5nVGV4dCk7XG5jb25zdCB3YXJuaW5nQ2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG53YXJuaW5nQ2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbndhcm5pbmdDYW5jZWwuY2xhc3NMaXN0LmFkZCgnd2FybmluZ0NhbmNlbCcpO1xud2FybmluZ0NhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB3YXJuaW5nUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KTtcbmNvbnN0IHdhcm5pbmdEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbndhcm5pbmdEZWxldGUuY2xhc3NMaXN0LmFkZCgnd2FybmluZ0RlbGV0ZScpO1xud2FybmluZ0RlbGV0ZS50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG53YXJuaW5nRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHByb2plY3RMaXN0LmRlbGV0ZVByb2plY3Qod2FybmluZ1BvcHVwLmRhdGFzZXQucHJvamVjdEluZGV4KTtcbiAgICB3YXJuaW5nUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59KTtcbndhcm5pbmdQb3B1cC5hcHBlbmRDaGlsZCh3YXJuaW5nQ2FuY2VsKTtcbndhcm5pbmdQb3B1cC5hcHBlbmRDaGlsZCh3YXJuaW5nRGVsZXRlKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQod2FybmluZ1BvcHVwKTtcblxuXG5jb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250YWluZXInKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG5cbnBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIlRhc2ttYXN0ZXJcIjtcblxuY29uc3Qgc29ydEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc29ydEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzb3J0QnV0dG9uJyk7XG5zb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTb3J0IEJ5OiBQcmlvcml0eVwiO1xucGFnZUhlYWRlci5hcHBlbmRDaGlsZChzb3J0QnV0dG9uKTtcblxuc29ydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBpZiAoc29ydEJ1dHRvbi50ZXh0Q29udGVudCA9PT0gJ1NvcnQgQnk6IFByaW9yaXR5Jykge1xuICAgICAgICBzb3J0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTb3J0IEJ5OiBEdWUgRGF0ZVwiO1xuICAgICAgICBwcm9qZWN0TGlzdC5zb3J0QnkgPSAnRGF0ZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc29ydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiU29ydCBCeTogUHJpb3JpdHlcIjtcbiAgICAgICAgcHJvamVjdExpc3Quc29ydEJ5ID0gJ1ByaW9yaXR5JztcbiAgICB9XG5cbiAgICBzb3J0VGFza3MoKTtcbn0pO1xuXG5jb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5hZGRUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKTtcbmFkZFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5wYWdlSGVhZGVyLmFwcGVuZENoaWxkKGFkZFRhc2tCdXR0b24pO1xuXG5hZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGFkZFRhc2tQb3B1cC5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICBhZGRUYXNrUG9wdXAuZGF0YXNldC5tb2RlID0gJ2FkZCc7XG4gICAgYWRkVGFza1BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5maWVsZHNldExlZ2VuZCcpLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbn0pO1xuXG5pZiAod2luZG93LnNjcmVlbi53aWR0aCA8PSAxMDI0KSB7XG4gICAgY29uc3QgZXhwYW5kU2lkZU5hdkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGV4cGFuZFNpZGVOYXZCdXR0b24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kU2lkZU5hdkJ1dHRvbicpO1xuICAgIHBhZ2VIZWFkZXIuYXBwZW5kQ2hpbGQoZXhwYW5kU2lkZU5hdkJ1dHRvbik7XG5cbiAgICBleHBhbmRTaWRlTmF2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoJ21vYmlsZU1lbnUnKTtcbiAgICB9KTtcbn1cblxuaWYgKHN0b3JhZ2VBdmFpbGFibGUoJ2xvY2FsU3RvcmFnZScpICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB7XG4gICAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZSh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgZm9yIChsZXQgcHJvamVjdCBvZiBwcm9qZWN0cykge1xuICAgICAgICBjb25zdCBwcm9qZWN0RG9tRWxlbWVudCA9IGFkZFByb2plY3QocHJvamVjdC5uYW1lKTtcbiAgICAgICAgcHJvamVjdExpc3Quc2VsZWN0UHJvamVjdChwcm9qZWN0RG9tRWxlbWVudC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgZm9yIChsZXQgdGFzayBvZiBwcm9qZWN0LnRhc2tzKSB7XG4gICAgICAgICAgICBhZGRUYXNrKHRhc2sudGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSwgdGFzay5pbXBvcnRhbmNlKTtcbiAgICAgICAgfTtcbiAgICB9O1xufSBlbHNlIHtcbiAgICBhZGRQcm9qZWN0KCdXb3JrJyk7XG4gICAgYWRkUHJvamVjdCgnSG9tZScpO1xufTtcblxuYW5pbWF0ZVRhc2tCYWNrZ3JvdW5kKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tGb3JtKCkge1xuICAgIGFkZFRhc2tQb3B1cC5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrUG9wdXAnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tQb3B1cCk7XG5cbiAgICBjb25zdCB0YXNrRmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICAgIGFkZFRhc2tQb3B1cC5hcHBlbmRDaGlsZCh0YXNrRmllbGRzZXQpO1xuICAgIGNvbnN0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdmaWVsZHNldExlZ2VuZCcpO1xuICAgIHRhc2tGaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gICAgY29uc3QgZm9ybUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybUxpc3QuY2xhc3NMaXN0LmFkZCgnZm9ybUxpc3QnKTtcbiAgICB0YXNrRmllbGRzZXQuYXBwZW5kQ2hpbGQoZm9ybUxpc3QpO1xuICAgIGNvbnN0IGxhYmVsT25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBmb3JtTGlzdC5hcHBlbmRDaGlsZChsYWJlbE9uZSk7XG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBuYW1lSW5wdXQucmVxdWlyZWQgPSAndHJ1ZSc7XG4gICAgbmFtZUlucHV0LmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XG4gICAgbGFiZWxPbmUuaHRtbEZvciA9ICdUYXNrIE5hbWUnO1xuICAgIGxhYmVsT25lLnRleHRDb250ZW50ID0gJ1Rhc2sgTmFtZTonO1xuICAgIG5hbWVJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIG5hbWVJbnB1dC5pZCA9ICdUYXNrIE5hbWUnO1xuICAgIG5hbWVJbnB1dC5uYW1lID0gJ3Rhc2tfbmFtZSc7XG4gICAgY29uc3QgbGFiZWxUd28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKGxhYmVsVHdvKTtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKGRhdGVJbnB1dCk7XG4gICAgbGFiZWxUd28uaHRtbEZvciA9ICdUYXNrIER1ZSBEYXRlJztcbiAgICBsYWJlbFR3by50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZTonO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5pZCA9ICdUYXNrIER1ZSBEYXRlJztcbiAgICBkYXRlSW5wdXQubmFtZSA9ICdkdWVfZGF0ZSc7XG4gICAgY29uc3QgbGFiZWxUaHJlZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgZm9ybUxpc3QuYXBwZW5kQ2hpbGQobGFiZWxUaHJlZSk7XG4gICAgY29uc3QgcmFkaW9XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcmFkaW9XcmFwLmNsYXNzTGlzdC5hZGQoJ3JhZGlvV3JhcCcpO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKHJhZGlvV3JhcCk7XG4gICAgY29uc3QgcmFkaW9Mb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHJhZGlvV3JhcC5hcHBlbmRDaGlsZChyYWRpb0xvdyk7XG4gICAgY29uc3QgbGFiZWxMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIHJhZGlvV3JhcC5hcHBlbmRDaGlsZChsYWJlbExvdyk7XG4gICAgcmFkaW9Mb3cudHlwZSA9ICdyYWRpbyc7XG4gICAgcmFkaW9Mb3cuaWQgPSAnaW1wb3J0YW5jZUxvdyc7XG4gICAgcmFkaW9Mb3cubmFtZSA9ICdpbXBvcnRhbmNlJztcbiAgICByYWRpb0xvdy52YWx1ZSA9ICdMb3cnO1xuICAgIGxhYmVsTG93Lmh0bWxGb3IgPSAnaW1wb3J0YW5jZUxvdyc7XG4gICAgbGFiZWxMb3cudGV4dENvbnRlbnQgPSAnTG93JztcbiAgICBsYWJlbFRocmVlLnRleHRDb250ZW50ID0gJ0ltcG9ydGFuY2U6JztcbiAgICBjb25zdCByYWRpb01lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmFkaW9XcmFwLmFwcGVuZENoaWxkKHJhZGlvTWVkKTtcbiAgICBjb25zdCBsYWJlbE1lZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgcmFkaW9XcmFwLmFwcGVuZENoaWxkKGxhYmVsTWVkKTtcbiAgICByYWRpb01lZC50eXBlID0gJ3JhZGlvJztcbiAgICByYWRpb01lZC5pZCA9ICdpbXBvcnRhbmNlTWVkJztcbiAgICByYWRpb01lZC5uYW1lID0gJ2ltcG9ydGFuY2UnO1xuICAgIHJhZGlvTWVkLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgcmFkaW9NZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgbGFiZWxNZWQuaHRtbEZvciA9ICdpbXBvcnRhbmNlTWVkaXVtJztcbiAgICBsYWJlbE1lZC50ZXh0Q29udGVudCA9ICdNZWRpdW0nO1xuICAgIGNvbnN0IHJhZGlvSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcmFkaW9XcmFwLmFwcGVuZENoaWxkKHJhZGlvSGlnaCk7XG4gICAgY29uc3QgbGFiZWxIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICByYWRpb1dyYXAuYXBwZW5kQ2hpbGQobGFiZWxIaWdoKTtcbiAgICByYWRpb0hpZ2gudHlwZSA9ICdyYWRpbyc7XG4gICAgcmFkaW9IaWdoLmlkID0gJ2ltcG9ydGFuY2VIaWdoJztcbiAgICByYWRpb0hpZ2gubmFtZSA9ICdpbXBvcnRhbmNlJztcbiAgICByYWRpb0hpZ2gudmFsdWUgPSAnSGlnaCc7XG4gICAgbGFiZWxIaWdoLmh0bWxGb3IgPSAnaW1wb3J0YW5jZUhpZ2gnO1xuICAgIGxhYmVsSGlnaC50ZXh0Q29udGVudCA9ICdIaWdoJztcbiAgICBjb25zdCBsYWJlbEZvdXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKGxhYmVsRm91cik7XG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5yb3dzID0gJzgnO1xuICAgIGZvcm1MaXN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uSW5wdXQpO1xuICAgIGxhYmVsRm91ci5odG1sRm9yID0gJ1Rhc2sgRGVzY3JpcHRpb24nO1xuICAgIGxhYmVsRm91ci50ZXh0Q29udGVudCA9ICdUYXNrIERlc2NyaXB0aW9uOic7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5pZCA9ICdUYXNrIERlc2NyaXB0aW9uJztcbiAgICBkZXNjcmlwdGlvbklucHV0Lm5hbWUgPSAnZGVzY3JpcHRpb24nO1xuICAgIGNvbnN0IGZvcm1CdXR0b25XcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJ1dHRvbldyYXAuY2xhc3NMaXN0LmFkZCgnZm9ybUJ1dHRvbldyYXAnKTtcbiAgICBmb3JtTGlzdC5hcHBlbmRDaGlsZChmb3JtQnV0dG9uV3JhcCk7XG5cbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGZvcm1CdXR0b25XcmFwLmFwcGVuZENoaWxkKGNhbmNlbEJ1dHRvbik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBhZGRUYXNrUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdWJtaXRCdXR0b24udGV4dENvbnRlbnQgPSAnU3VibWl0JztcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdzdWJtaXQnO1xuICAgIGZvcm1CdXR0b25XcmFwLmFwcGVuZENoaWxkKHN1Ym1pdEJ1dHRvbik7XG5cbiAgICBmb3JtTGlzdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBhZGRUYXNrUG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIFxuICAgICAgICBpZiAoYWRkVGFza1BvcHVwLmRhdGFzZXQubW9kZSA9PT0gJ2VkaXQnKSB7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5yZW1vdmVUYXNrKGFkZFRhc2tQb3B1cC5kYXRhc2V0LmVkaXRJbmRleCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZm9ybVN1Ym1pdChuYW1lSW5wdXQudmFsdWUsIGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsIGRhdGVJbnB1dC52YWx1ZSk7XG5cbiAgICAgICAgZm9ybUxpc3QucmVzZXQoKTtcbiAgICAgICAgcmFkaW9NZWQuY2hlY2tlZCA9IHRydWU7XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBmb3JtU3VibWl0KG5hbWVJbnB1dCwgZGVzY3JpcHRpb25JbnB1dCwgZGF0ZUlucHV0KSB7XG4gICAgbGV0IGRhdGVWYWx1ZSA9IG51bGw7XG4gICAgaWYgKGRhdGVJbnB1dCA9PT0gJycpIHtcbiAgICAgICAgZGF0ZVZhbHVlID0gJ05vIER1ZSBEYXRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBkYXRlVmFsdWUgPSBkYXRlSW5wdXQ7XG4gICAgfTtcblxuICAgIGxldCBjaGVja2VkUmFkaW8gPSBudWxsO1xuICAgIGxldCByYWRpb0VsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2ltcG9ydGFuY2UnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBpZiAocmFkaW9FbGVtZW50c1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkUmFkaW8gPSByYWRpb0VsZW1lbnRzW2ldLnZhbHVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBsZXQgZGVzY3JpcHRpb25WYWx1ZSA9IG51bGw7XG4gICAgaWYgKGRlc2NyaXB0aW9uSW5wdXQgPT09ICcnKSB7XG4gICAgICAgIGRlc2NyaXB0aW9uVmFsdWUgPSAnTm9uZSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZGVzY3JpcHRpb25WYWx1ZSA9IGRlc2NyaXB0aW9uSW5wdXQ7XG4gICAgfTtcblxuICAgIGFkZFRhc2sobmFtZUlucHV0LCBkZXNjcmlwdGlvblZhbHVlLCBkYXRlVmFsdWUsIGNoZWNrZWRSYWRpbyk7XG59XG5cblxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgICApO1xuICAgIH07XG59O1xuXG5leHBvcnQgeyB3YXJuaW5nUG9wdXAgfTsiLCJpbXBvcnQgeyBzb3J0VGFza3MgfSBmcm9tIFwiLi90YXNrTWV0aG9kc1wiO1xuaW1wb3J0IHsgd2FybmluZ1BvcHVwIH0gZnJvbSBcIi5cIjtcblxuZnVuY3Rpb24gYWRkUHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBhZGRQcm9qZWN0VG9Eb20ocHJvamVjdE5hbWUpO1xuICAgIHByb2plY3RMaXN0LmFkZFByb2plY3Qoe25hbWU6IHByb2plY3ROYW1lLCBlbGVtZW50OiBkb21FbGVtZW50LCB0YXNrczogW119KTtcbiAgICByZXR1cm4gZG9tRWxlbWVudDtcbn07XG5cbmZ1bmN0aW9uIGFkZFByb2plY3RUb0RvbShwcm9qZWN0TmFtZSkge1xuICAgIGNvbnN0IHNpZGVOYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZU5hdkJhcicpO1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkTmV3UHJvamVjdEJ1dHRvbicpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld1Byb2plY3QuZGF0YXNldC5pbmRleCA9IHByb2plY3RMaXN0LnByb2plY3RzLmxlbmd0aDtcbiAgICBuZXdQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgcHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RUaXRsZScpO1xuICAgIHByb2plY3RUaXRsZS52YWx1ZSA9IHByb2plY3ROYW1lO1xuICAgIHByb2plY3RUaXRsZS5kaXNhYmxlZCA9ICdkaXNhYmxlZCc7XG4gICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0VGl0bGUuZGlzYWJsZWQgPSAnZGlzYWJsZWQnO1xuICAgICAgICBpZiAocHJvamVjdFRpdGxlLnZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnZhbHVlID0gJ1VubmFtZWQgUHJvamVjdCdcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcHJvamVjdExpc3QuZWRpdFByb2plY3QobmV3UHJvamVjdC5kYXRhc2V0LmluZGV4LCB0aGlzLnZhbHVlKTtcbiAgICB9KTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdFRpdGxlLmRpc2FibGVkID0gJyc7XG4gICAgICAgIHByb2plY3RUaXRsZS5mb2N1cygpO1xuICAgIH0pO1xuICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdFByb2plY3RCdXR0b24nKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0QnV0dG9uJyk7XG4gICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoIXByb2plY3RMaXN0LmlzUHJvamVjdEVtcHR5KG5ld1Byb2plY3QuZGF0YXNldC5pbmRleCkpIHtcbiAgICAgICAgICAgIHdhcm5pbmdQb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHdhcm5pbmdQb3B1cC5kYXRhc2V0LnByb2plY3RJbmRleCA9IG5ld1Byb2plY3QuZGF0YXNldC5pbmRleDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmRlbGV0ZVByb2plY3QobmV3UHJvamVjdC5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbmV3UHJvamVjdC5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcbiAgICBuZXdQcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbik7XG5cbiAgICBuZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0TGlzdC5zZWxlY3RQcm9qZWN0KG5ld1Byb2plY3QuZGF0YXNldC5pbmRleCk7XG4gICAgfSk7XG5cbiAgICBzaWRlTmF2QmFyLmluc2VydEJlZm9yZShuZXdQcm9qZWN0LCBhZGRQcm9qZWN0QnV0dG9uKTtcblxuICAgIHJldHVybiBuZXdQcm9qZWN0O1xufVxuXG5jb25zdCBwcm9qZWN0TGlzdCA9IHtcbiAgICBzb3J0Qnk6ICdQcmlvcml0eScsXG4gICAgYWN0aXZlUHJvamVjdDogbnVsbCxcbiAgICBwcm9qZWN0czogW10sXG4gICAgYWRkUHJvamVjdDogZnVuY3Rpb24ocHJvamVjdCkge1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIGlmICh0aGlzLnByb2plY3RzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHByb2plY3QuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICB9LFxuICAgIHNlbGVjdFByb2plY3Q6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPT09IHBhcnNlSW50KGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHNbaV0uZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlUHJvamVjdCA9IHRoaXMucHJvamVjdHNbaV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvamVjdHNbaV0uZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBzb3J0VGFza3MoKTtcbiAgICB9LFxuICAgIGVkaXRQcm9qZWN0OiBmdW5jdGlvbihpbmRleCwgbmV3TmFtZSkge1xuICAgICAgICB0aGlzLnByb2plY3RzW2luZGV4XS5uYW1lID0gbmV3TmFtZTtcbiAgICAgICAgdGhpcy5hZGRUb1N0b3JhZ2UoKTtcbiAgICB9LFxuICAgIGFkZFRhc2s6IGZ1bmN0aW9uKHRhc2spIHtcbiAgICAgICAgdGhpcy5hY3RpdmVQcm9qZWN0LnRhc2tzLnB1c2godGFzayk7XG4gICAgfSxcbiAgICByZW1vdmVUYXNrOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB0aGlzLmFjdGl2ZVByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgc29ydFRhc2tzKCk7XG4gICAgICAgIHRoaXMuYWRkVG9TdG9yYWdlKCk7XG4gICAgfSxcbiAgICBhZGRUb1N0b3JhZ2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnByb2plY3RzID0gSlNPTi5zdHJpbmdpZnkodGhpcy5wcm9qZWN0cyk7XG4gICAgfSxcbiAgICBpc1Byb2plY3RFbXB0eTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdHNbaW5kZXhdLnRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkZWxldGVQcm9qZWN0OiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICBjb25zdCB0YXNrRWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza1dyYXBwZXInKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBvZiB0YXNrRWxlbWVudHMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcm9qZWN0c1tpbmRleF0uZWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmFkZFRvU3RvcmFnZSgpO1xuICAgIH1cbn07XG5cbmV4cG9ydCB7IGFkZFByb2plY3QsIHByb2plY3RMaXN0IH07IiwiaW1wb3J0IHsgcHJvamVjdExpc3QgfSBmcm9tIFwiLi9wcm9qZWN0TWV0aG9kc1wiO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgcGFyc2VJU08sIHNldCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5mdW5jdGlvbiBhZGRUYXNrKHRhc2tOYW1lLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW5jZSkge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSh0YXNrTmFtZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UpO1xuICAgIHByb2plY3RMaXN0LmFkZFRhc2sobmV3VGFzayk7XG4gICAgc29ydFRhc2tzKCk7XG4gICAgcHJvamVjdExpc3QuYWRkVG9TdG9yYWdlKCk7XG59O1xuXG5mdW5jdGlvbiBzb3J0VGFza3MoKSB7XG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RMaXN0LmFjdGl2ZVByb2plY3Q7XG4gICAgY29uc3Qgc29ydFR5cGUgPSBwcm9qZWN0TGlzdC5zb3J0Qnk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGFpbmVyJyk7XG5cbiAgICB3aGlsZSAodGFza0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIHRhc2tDb250YWluZXIucmVtb3ZlQ2hpbGQodGFza0NvbnRhaW5lci5sYXN0Q2hpbGQpO1xuICAgIH07XG5cbiAgICBpZiAoc29ydFR5cGUgPT09ICdEYXRlJykge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLmR1ZURhdGUgPT09ICdObyBEdWUgRGF0ZScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYi5kdWVEYXRlID09PSAnTm8gRHVlIERhdGUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVBc2MocGFyc2VJU08oYS5kdWVEYXRlKSwgcGFyc2VJU08oYi5kdWVEYXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3QudGFza3Muc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuaW1wb3J0YW5jZSA9PT0gYi5pbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGEuaW1wb3J0YW5jZSA9PT0gJ0hpZ2gnIHx8IGIuaW1wb3J0YW5jZSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGIuaW1wb3J0YW5jZSA9PT0gJ0hpZ2gnIHx8IGEuaW1wb3J0YW5jZSA9PT0gJ0xvdycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBmb3IgKGxldCB0YXNrIG9mIHByb2plY3QudGFza3MpIHtcbiAgICAgICAgYWRkVGFza1RvRE9NKHRhc2spO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkVGFza1RvRE9NKHRhc2spIHtcbiAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250YWluZXInKTtcblxuICAgIGNvbnN0IHRhc2tXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LmFkZCgndGFza1dyYXBwZXInKTtcblxuICAgIGNvbnN0IHRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tOYW1lLnRleHRDb250ZW50ID0gdGFzay50YXNrTmFtZTtcbiAgICB0YXNrTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrTmFtZScpO1xuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tOYW1lKTtcblxuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZURhdGUnKTtcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGNvbnN0IHRhc2tJbXBvcnRhbmNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tJbXBvcnRhbmNlLnRleHRDb250ZW50ID0gdGFzay5pbXBvcnRhbmNlO1xuICAgIHRhc2tJbXBvcnRhbmNlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tJbXBvcnRhbmNlJyk7XG4gICAgdGFza1dyYXBwZXIuYXBwZW5kQ2hpbGQodGFza0ltcG9ydGFuY2UpO1xuXG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tEZXNjcmlwdGlvbicpO1xuICAgIHRhc2tXcmFwcGVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBjaGV2cm9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2hldnJvbi5jbGFzc0xpc3QuYWRkKCdjaGV2cm9uJyk7XG4gICAgY2hldnJvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza1dyYXBwZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kZWQnKTtcbiAgICB9KTtcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChjaGV2cm9uKTtcblxuICAgIGNvbnN0IGNvbXBsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29tcGxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnY29tcGxldGVCdXR0b24nKTtcbiAgICBjb21wbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcbiAgICBjb21wbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdExpc3QucmVtb3ZlVGFzayhBcnJheS5mcm9tKHRhc2tDb250YWluZXIuY2hpbGRyZW4pLmluZGV4T2YodGFza1dyYXBwZXIpKTtcbiAgICB9KTtcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG5cbiAgICBjb25zdCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0QnV0dG9uJyk7XG4gICAgZWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFjdGl2YXRlRWRpdFRhc2tGb3JtKFxuICAgICAgICAgICAgQXJyYXkuZnJvbSh0YXNrQ29udGFpbmVyLmNoaWxkcmVuKS5pbmRleE9mKHRhc2tXcmFwcGVyKSxcbiAgICAgICAgICAgIHRhc2sudGFza05hbWUsXG4gICAgICAgICAgICB0YXNrLmR1ZURhdGUsXG4gICAgICAgICAgICB0YXNrLmltcG9ydGFuY2UsXG4gICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uKTtcbiAgICB9KTtcbiAgICB0YXNrV3JhcHBlci5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKTtcblxuICAgIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1dyYXBwZXIpO1xufTtcblxuZnVuY3Rpb24gYWN0aXZhdGVFZGl0VGFza0Zvcm0odGFza0luZGV4LCB0YXNrTmFtZSwgZHVlRGF0ZSwgdGFza0ltcG9ydGFuY2UsIHRhc2tEZXNjcmlwdGlvbikge1xuICAgIGNvbnN0IHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZFRhc2tQb3B1cCcpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIHBvcHVwLmRhdGFzZXQubW9kZSA9ICdlZGl0JztcbiAgICBwb3B1cC5kYXRhc2V0LmVkaXRJbmRleCA9IHRhc2tJbmRleDtcblxuICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5maWVsZHNldExlZ2VuZCcpLnRleHRDb250ZW50ID0gJ0VkaXQgVGFzayc7XG5cbiAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJUYXNrIE5hbWVcIl0nKS52YWx1ZSA9IHRhc2tOYW1lO1xuXG4gICAgaWYgKGR1ZURhdGUgIT0gJ05vIER1ZSBEYXRlJykge1xuICAgICAgICBwb3B1cC5xdWVyeVNlbGVjdG9yKCdbaWQ9XCJUYXNrIER1ZSBEYXRlXCJdJykudmFsdWUgPSBkdWVEYXRlO1xuICAgIH07XG5cbiAgICBsZXQgcmFkaW9FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdpbXBvcnRhbmNlJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgaWYgKHJhZGlvRWxlbWVudHNbaV0udmFsdWUgPT09IHRhc2tJbXBvcnRhbmNlKSB7XG4gICAgICAgICAgICByYWRpb0VsZW1lbnRzW2ldLmNoZWNrZWQgPSAndHJ1ZSc7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGlmICh0YXNrRGVzY3JpcHRpb24gIT0gJ05vbmUnKSB7XG4gICAgICAgIHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJ1tpZD1cIlRhc2sgRGVzY3JpcHRpb25cIl0nKS52YWx1ZSA9IHRhc2tEZXNjcmlwdGlvbjtcbiAgICB9O1xufTtcblxuY29uc3QgdGFza0ZhY3RvcnkgPSAodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlKSA9PiB7XG4gICAgLy8gY29uc3QgdGhpc0lzQW5FeGFtcGxlID0gKCkgPT4gY29uc29sZS5sb2coJ3RoaXMgaXMgYSBmdW5jdGlvbicpO1xuICAgIC8vIHRoZW4gaW5jbHVkZSB0aGUgZnVuY3Rpb24gaW4gcmV0dXJuZWQgcHJvcGVydGllc1xuICAgIHJldHVybiB7dGFza05hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpbXBvcnRhbmNlfTtcbn07XG5cbmZ1bmN0aW9uIGFuaW1hdGVUYXNrQmFja2dyb3VuZCgpIHtcbiAgICBjb25zdCByb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICBjb25zdCBncmFkaWVudFN0b3AgPSBnZXRDb21wdXRlZFN0eWxlKHJvb3QpLmdldFByb3BlcnR5VmFsdWUoJy0tZ3JhZGllbnRTdG9wJyk7XG4gICAgY29uc3QgZ3JhZGllbnRDb2xvck9uZSA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1ncmFkaWVudENvbG9yT25lJyk7XG4gICAgY29uc3QgZ3JhZGllbnRDb2xvclR3byA9IGdldENvbXB1dGVkU3R5bGUocm9vdCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS1ncmFkaWVudENvbG9yVHdvJyk7XG4gICAgY29uc3QgcGFyc2VkU3RvcCA9ICBwYXJzZUludChncmFkaWVudFN0b3AucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gICAgXG4gICAgaWYgKHBhcnNlZFN0b3AgPCAxMDEpIHtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ncmFkaWVudFN0b3AnLCAocGFyc2VkU3RvcCArIDEpICsgJyUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWdyYWRpZW50U3RvcCcsICcwJScpO1xuICAgICAgICByb290LnN0eWxlLnNldFByb3BlcnR5KCctLWdyYWRpZW50Q29sb3JPbmUnLCBncmFkaWVudENvbG9yVHdvKTtcbiAgICAgICAgcm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ncmFkaWVudENvbG9yVHdvJywgZ3JhZGllbnRDb2xvck9uZSk7XG4gICAgfTtcblxuICAgIHNldFRpbWVvdXQoYW5pbWF0ZVRhc2tCYWNrZ3JvdW5kLCAxMCk7XG59O1xuXG5leHBvcnQgeyBhZGRUYXNrLCBzb3J0VGFza3MsIGFuaW1hdGVUYXNrQmFja2dyb3VuZCB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==