(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"],{

/***/ "./src/app/pages/about/about.html":
/*!****************************************!*\
  !*** ./src/app/pages/about/about.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page About -->\r\n<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title text-uppercase>About</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\" text-center align-self-start>\r\n        <div logo padding-vertical>\r\n          <img src=\"../assets/imgs/alebaaLogo.png\" alt=\"\" />\r\n          <h1>Deco News</h1>\r\n          <p>WordPress to Ionic 4 News App</p>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"12\" align-self-end box-shadow no-padding>\r\n        <ion-item lines=\"none\">\r\n          <h2 header-title>Amazing list of features</h2>\r\n        </ion-item>\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>No need for development skills</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n              <h3 text-size-md>Wordpress as Backend</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>Amazing Documentation & Support</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>Firebased Push Notifications</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>AdMob Integration</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>Light & Dark theme</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n              <h3 text-size-md>Design files (Sketch, Adobe Xd & Photoshop)</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>Ionic 3, Sass & Angular 6</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\">\r\n          <img slot=\"start\" src=\"../assets/imgs/checkmark.png\" alt=\"\">\r\n          <ion-label>\r\n            <h3 text-size-md>Compatible with Android & iOS</h3>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer transparent>\r\n  <ion-toolbar>\r\n    <ion-button default-button expand=\"full\">Purchase Now</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/about/about.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/about/about.module.ts ***!
  \*********************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about */ "./src/app/pages/about/about.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AboutPageModule = /** @class */ (function () {
    function AboutPageModule() {
    }
    AboutPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _about__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
                    }
                ])
            ],
            declarations: [_about__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], AboutPageModule);
    return AboutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/about/about.ts":
/*!**************************************!*\
  !*** ./src/app/pages/about/about.ts ***!
  \**************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_about_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/about.service */ "./src/app/services/about.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, aboutService) {
        this.navCtrl = navCtrl;
        this.aboutService = aboutService;
        this.about = this.aboutService.getAboutInformation();
    }
    AboutPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-about',
            template: __webpack_require__(/*! ./about.html */ "./src/app/pages/about/about.html"),
            providers: [_services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_about_service__WEBPACK_IMPORTED_MODULE_2__["AboutService"]])
    ], AboutPage);
    return AboutPage;
}());



/***/ }),

/***/ "./src/app/services/about.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/about.service.ts ***!
  \*******************************************/
/*! exports provided: AboutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutService", function() { return AboutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutService = /** @class */ (function () {
    function AboutService() {
    }
    AboutService.prototype.getAboutInformation = function () {
        return {
            "title": "About"
        };
    };
    AboutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [])
    ], AboutService);
    return AboutService;
}());



/***/ })

}]);
//# sourceMappingURL=pages-about-about-module.js.map