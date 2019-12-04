(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-recent-news-recent-news-module"],{

/***/ "./src/app/pages/recent-news/recent-news.html":
/*!****************************************************!*\
  !*** ./src/app/pages/recent-news/recent-news.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header box-shadow>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <news-list [categoryId]=\"categoryId\" [title]=\"\"></news-list>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/recent-news/recent-news.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/recent-news/recent-news.module.ts ***!
  \*********************************************************/
/*! exports provided: RecentNewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentNewsPageModule", function() { return RecentNewsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _recent_news__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./recent-news */ "./src/app/pages/recent-news/recent-news.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RecentNewsPageModule = /** @class */ (function () {
    function RecentNewsPageModule() {
    }
    RecentNewsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _recent_news__WEBPACK_IMPORTED_MODULE_6__["RecentNewsPage"]
                    }
                ])
            ],
            declarations: [_recent_news__WEBPACK_IMPORTED_MODULE_6__["RecentNewsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], RecentNewsPageModule);
    return RecentNewsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/recent-news/recent-news.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/recent-news/recent-news.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlY2VudC1uZXdzL3JlY2VudC1uZXdzLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/recent-news/recent-news.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/recent-news/recent-news.ts ***!
  \**************************************************/
/*! exports provided: RecentNewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentNewsPage", function() { return RecentNewsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecentNewsPage = /** @class */ (function () {
    function RecentNewsPage(navCtrl, route) {
        this.navCtrl = navCtrl;
        this.route = route;
        var self = this;
        this.route.queryParams.subscribe(function (params) {
            self.categoryId = JSON.parse(params['id']);
        });
    }
    RecentNewsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-recent-news',
            template: __webpack_require__(/*! ./recent-news.html */ "./src/app/pages/recent-news/recent-news.html"),
            styles: [__webpack_require__(/*! ./recent-news.scss */ "./src/app/pages/recent-news/recent-news.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecentNewsPage);
    return RecentNewsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-recent-news-recent-news-module.js.map