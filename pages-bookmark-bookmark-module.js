(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookmark-bookmark-module"],{

/***/ "./src/app/pages/bookmark/bookmark.html":
/*!**********************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page About -->\r\n<ion-header box-shadow>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row *ngIf=\"posts.length\">\r\n      <ion-col size=\"12\">\r\n        <h2 text-size-lg margin-bottom padding-start>الأخبار المحفوظة</h2>\r\n        <ion-button size=\"small\" text-size-p fill=\"clear\" (click)=\"clearAll()\">مسح الكل</ion-button>\r\n        <div clearfix></div>\r\n        <div list-bokmark margin-bottom *ngFor=\"let item of posts\">\r\n          <news-item [data]=\"item\" [data]=\"item\" (onBookmark)=\"onBookmark($event)\"></news-item>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row *ngIf=\"!posts.length\" class=\"ion-align-items-center\">\r\n      <ion-col>\r\n        <div no-post text-center>\r\n          <img src=\"../assets/imgs/alebaaLogo.png\" alt=\"\" />\r\n          <h1 text-size-xl>لا توجد أخبار محفوظة</h1>\r\n          <p text-size-md>احفظ الاخبار بالنقر على زر حفظ الخبر</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/bookmark/bookmark.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.module.ts ***!
  \***************************************************/
/*! exports provided: BookmarkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPageModule", function() { return BookmarkPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _bookmark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bookmark */ "./src/app/pages/bookmark/bookmark.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var BookmarkPageModule = /** @class */ (function () {
    function BookmarkPageModule() {
    }
    BookmarkPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _bookmark__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]
                    }
                ])
            ],
            declarations: [_bookmark__WEBPACK_IMPORTED_MODULE_6__["BookmarkPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], BookmarkPageModule);
    return BookmarkPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bookmark/bookmark.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(page-bookmark) ion-grid,\n:host-context(page-bookmark) ion-row {\n  height: 100%; }\n\n:host-context(page-bookmark) ion-col {\n  position: relative; }\n\n:host-context(page-bookmark) ion-col ion-button {\n    position: absolute;\n    top: 18px;\n    right: 5px;\n    font-size: 12px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va21hcmsvRTpcXEluZm9cXFByb2plY3RzXFxBbC1FYmFhXFxBcHBcXGFsZWJhYS50di9zcmNcXGFwcFxccGFnZXNcXGJvb2ttYXJrXFxib29rbWFyay5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdJLFlBQVksRUFBQTs7QUFIaEI7RUFPSSxrQkFBa0IsRUFBQTs7QUFQdEI7SUFVTSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDViwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvb2ttYXJrL2Jvb2ttYXJrLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KHBhZ2UtYm9va21hcmspIHtcclxuICBpb24tZ3JpZCxcclxuICBpb24tcm93IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMThweDtcclxuICAgICAgcmlnaHQ6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/bookmark/bookmark.ts":
/*!********************************************!*\
  !*** ./src/app/pages/bookmark/bookmark.ts ***!
  \********************************************/
/*! exports provided: BookmarkPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookmarkPage", function() { return BookmarkPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/app/services/bookmark.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookmarkPage = /** @class */ (function () {
    function BookmarkPage(navCtrl, bookmarkService) {
        this.navCtrl = navCtrl;
        this.bookmarkService = bookmarkService;
        this.posts = [];
        this.title = "Bookmark";
        this.loadBookmarks();
    }
    BookmarkPage.prototype.loadBookmarks = function () {
        var bookmarks = this.bookmarkService.getAllBookmark();
        this.posts = [];
        for (var item in bookmarks) {
            this.posts.push(bookmarks[item]);
        }
    };
    BookmarkPage.prototype.clearAll = function () {
        this.bookmarkService.clearAll();
        this.loadBookmarks();
    };
    BookmarkPage.prototype.ionViewWillEnter = function () {
        this.loadBookmarks();
    };
    BookmarkPage.prototype.onBookmark = function (item) {
        this.bookmarkService.delete(item);
        this.loadBookmarks();
    };
    BookmarkPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-bookmark',
            template: __webpack_require__(/*! ./bookmark.html */ "./src/app/pages/bookmark/bookmark.html"),
            providers: [_services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]],
            styles: [__webpack_require__(/*! ./bookmark.scss */ "./src/app/pages/bookmark/bookmark.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]])
    ], BookmarkPage);
    return BookmarkPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bookmark-bookmark-module.js.map