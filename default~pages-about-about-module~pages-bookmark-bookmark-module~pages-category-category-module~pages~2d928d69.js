(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-bookmark-bookmark-module~pages-category-category-module~pages~2d928d69"],{

/***/ "./src/app/components/news-item-home/news-item-home.html":
/*!***************************************************************!*\
  !*** ./src/app/components/news-item-home/news-item-home.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-card no-margin box-shadow border-radius *ngIf=\"data\" (click)=\"openSinglePost(data)\">\r\n  <div card-image>\r\n    <img border-radius [src]=\"data.image\" alt=\"\">\r\n    <span border-radius category text-uppercase>{{data.category}}</span>\r\n  </div>\r\n  <ion-card-content>\r\n    <h4 text-wrap text-size-xs>{{data.title}}</h4>\r\n    <div dataTime class=\"ion-margin-top\">\r\n      <ion-chip>\r\n        <ion-icon icon name=\"ios-stopwatch\"></ion-icon>\r\n        <ion-label text-size-p class=\"ion-margin-end\">{{data.time | date:'d MMMM yyyy'}}</ion-label>\r\n      </ion-chip>\r\n    </div>\r\n  </ion-card-content>\r\n</ion-card>\r\n"

/***/ }),

/***/ "./src/app/components/news-item-home/news-item-home.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/news-item-home/news-item-home.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(news-item-home) ion-card {\n  --background: var(--alebaa-toobarBackground, #ffffff); }\n  :host-context(news-item-home) ion-card img {\n    height: 100px; }\n  :host-context(news-item-home) ion-card ion-card-content {\n    padding: 8px; }\n  :host-context(news-item-home) ion-card [card-image] {\n    position: relative; }\n  :host-context(news-item-home) ion-card [card-image] [category] {\n      position: absolute;\n      top: 8px;\n      left: 8px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWl0ZW0taG9tZS9FOlxcSW5mb1xcUHJvamVjdHNcXEFsLUViYWFcXEFwcFxcYWxlYmFhLnR2L3NyY1xcYXBwXFxjb21wb25lbnRzXFxuZXdzLWl0ZW0taG9tZVxcbmV3cy1pdGVtLWhvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHFEQUFhLEVBQUE7RUFGakI7SUFLTSxhQUFhLEVBQUE7RUFMbkI7SUFTTSxZQUFZLEVBQUE7RUFUbEI7SUFhTSxrQkFBa0IsRUFBQTtFQWJ4QjtNQWdCUSxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1pdGVtLWhvbWUvbmV3cy1pdGVtLWhvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQobmV3cy1pdGVtLWhvbWUpIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWFsZWJhYS10b29iYXJCYWNrZ3JvdW5kLCAjZmZmZmZmKTtcclxuXHJcbiAgICBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgW2NhcmQtaW1hZ2VdIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgW2NhdGVnb3J5XSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogOHB4O1xyXG4gICAgICAgIGxlZnQ6IDhweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/news-item-home/news-item-home.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/news-item-home/news-item-home.ts ***!
  \*************************************************************/
/*! exports provided: NewsItemHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemHomePage", function() { return NewsItemHomePage; });
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



var NewsItemHomePage = /** @class */ (function () {
    function NewsItemHomePage(navCtrl, bookmarkService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bookmarkService = bookmarkService;
        this.bookmark = function (item, event) {
            if (event) {
                event.stopPropagation();
            }
            if (item.bookmark) {
                item.bookmark = false;
                _this.bookmarkService.delete(item);
            }
            else {
                item.bookmark = true;
                _this.bookmarkService.save(item);
            }
        };
    }
    NewsItemHomePage.prototype.openSinglePost = function (item) {
        var navigationExtras = {
            queryParams: { item: JSON.stringify(item) }
        };
        this.navCtrl.navigateForward(['/single-page'], navigationExtras);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], NewsItemHomePage.prototype, "data", void 0);
    NewsItemHomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news-item-home',
            template: __webpack_require__(/*! ./news-item-home.html */ "./src/app/components/news-item-home/news-item-home.html"),
            providers: [_services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]],
            styles: [__webpack_require__(/*! ./news-item-home.scss */ "./src/app/components/news-item-home/news-item-home.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]])
    ], NewsItemHomePage);
    return NewsItemHomePage;
}());



/***/ }),

/***/ "./src/app/components/news-item/news-item.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news-item/news-item.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-item lines=\"none\" box-shadow no-padding border-radius *ngIf=\"data\" (click)=\"openSinglePost(data)\">\r\n  <ion-thumbnail slot=\"start\">\r\n    <img border-radius [src]=\"data.image\" alt=\"\">\r\n    <span border-radius text-uppercase category>{{data.category}}</span>\r\n  </ion-thumbnail>\r\n  <ion-label>\r\n    <p text-wrap text-size-xs margin-bottom>{{data.title}}</p>\r\n    <div data-info>\r\n      <!-- Data time -->\r\n      <ion-chip>\r\n        <ion-icon class=\"ion-no-margin\" icon-small name=\"ios-stopwatch\"></ion-icon>\r\n        <ion-label text-size-p>{{data.time | date:'d MMMM yyyy'}}</ion-label>\r\n      </ion-chip>\r\n      <!-- Bookmark -->\r\n      <div bookMark (click)=\"bookmark(data, $event)\">\r\n        <ion-icon icon-small name=\"ios-bookmark\" margin-left [ngClass]=\"{'active' : data.bookmark}\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </ion-label>\r\n</ion-item>\r\n"

/***/ }),

/***/ "./src/app/components/news-item/news-item.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news-item/news-item.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(news-item) :host {\n  --size-thumbnail: 120px; }\n\n:host-context(news-item) ion-item {\n  --background: var(--alebaa-toobarBackground, #ffffff); }\n\n:host-context(news-item) ion-thumbnail {\n  position: relative;\n  height: var(--size-thumbnail, 120px);\n  width: var(--size-thumbnail, 120px); }\n\n:host-context(news-item) [slot=start] {\n  -webkit-margin-start: 8px;\n          margin-inline-start: 8px; }\n\n:host-context(news-item) [category] {\n  position: absolute;\n  top: 8px;\n  z-index: 999;\n  left: 8px;\n  border-radius: 4px;\n  background: var(--alebaa-danger, #0c896c);\n  padding: 5px;\n  font-size: 10px;\n  color: var(--alebaa-category, #ffffff); }\n\n:host-context(news-item) ion-label {\n  padding: 5px;\n  height: 100%;\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n          flex-direction: column !important;\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important; }\n\n:host-context(news-item) [data-info] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWl0ZW0vRTpcXEluZm9cXFByb2plY3RzXFxBbC1FYmFhXFxBcHBcXGFsZWJhYS50di9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmV3cy1pdGVtXFxuZXdzLWl0ZW0uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLHVCQUFpQixFQUFBOztBQUh2QjtFQU9JLHFEQUFhLEVBQUE7O0FBUGpCO0VBV0ksa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxtQ0FBbUMsRUFBQTs7QUFidkM7RUFpQkkseUJBQXdCO1VBQXhCLHdCQUF3QixFQUFBOztBQWpCNUI7RUFxQk0sa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGVBQWU7RUFDZixzQ0FBc0MsRUFBQTs7QUE3QjVDO0VBaUNJLFlBQVk7RUFDWixZQUFZO0VBQ1osK0JBQXdCO0VBQXhCLHdCQUF3QjtFQUN4Qix1Q0FBaUM7RUFBakMsd0NBQWlDO1VBQWpDLGlDQUFpQztFQUNqQyxvQ0FBeUM7VUFBekMseUNBQXlDLEVBQUE7O0FBckM3QztFQXlDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0VBQzlCLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1pdGVtL25ld3MtaXRlbS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dChuZXdzLWl0ZW0pIHtcclxuXHJcbiAgOmhvc3Qge1xyXG4gICAgICAtLXNpemUtdGh1bWJuYWlsOiAxMjBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pdGVtIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRodW1ibmFpbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IHZhcigtLXNpemUtdGh1bWJuYWlsLCAxMjBweCk7XHJcbiAgICB3aWR0aDogdmFyKC0tc2l6ZS10aHVtYm5haWwsIDEyMHB4KTtcclxuICB9XHJcblxyXG4gIFtzbG90PXN0YXJ0XSB7XHJcbiAgICBtYXJnaW4taW5saW5lLXN0YXJ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBbY2F0ZWdvcnldIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgei1pbmRleDogOTk5O1xyXG4gICAgICBsZWZ0OiA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLWRhbmdlciwgIzBjODk2Yyk7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tYWxlYmFhLWNhdGVnb3J5LCAjZmZmZmZmKTtcclxuICB9XHJcblxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIFtkYXRhLWluZm9de1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/news-item/news-item.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news-item/news-item.ts ***!
  \***************************************************/
/*! exports provided: NewsItemPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsItemPage", function() { return NewsItemPage; });
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



var NewsItemPage = /** @class */ (function () {
    function NewsItemPage(navCtrl, bookmarkService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.bookmarkService = bookmarkService;
        this.onBookmark = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.bookmark = function (item, event) {
            if (event) {
                event.stopPropagation();
            }
            if (item.bookmark) {
                item.bookmark = false;
                _this.bookmarkService.delete(item);
            }
            else {
                item.bookmark = true;
                _this.bookmarkService.save(item);
            }
            _this.onBookmark.emit(item);
        };
    }
    NewsItemPage.prototype.ngOnChanges = function (changes) {
        this.data = changes['data'].currentValue;
    };
    NewsItemPage.prototype.openSinglePost = function (item) {
        var navigationExtras = {
            queryParams: { item: JSON.stringify(item) }
        };
        this.onItemClick.emit(item);
        this.navCtrl.navigateForward(['/single-page'], navigationExtras);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('data'),
        __metadata("design:type", Object)
    ], NewsItemPage.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsItemPage.prototype, "onBookmark", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsItemPage.prototype, "onItemClick", void 0);
    NewsItemPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news-item',
            template: __webpack_require__(/*! ./news-item.html */ "./src/app/components/news-item/news-item.html"),
            providers: [_services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]],
            styles: [__webpack_require__(/*! ./news-item.scss */ "./src/app/components/news-item/news-item.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_2__["BookmarkService"]])
    ], NewsItemPage);
    return NewsItemPage;
}());



/***/ }),

/***/ "./src/app/components/news-list/news-list.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news-list/news-list.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- News list -->\r\n<ion-row>\r\n  <ion-col col-12>\r\n    <h2 text-size-lg padding-start>اخر الاخبار</h2>\r\n  </ion-col>\r\n  <ion-col size=\"12\" *ngFor=\"let item of posts\">\r\n    <news-item [data]=\"item\" (onItemClick)=\"itemClick($event)\"></news-item>\r\n  </ion-col>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"تحميل المزيد\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./src/app/components/news-list/news-list.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/news-list/news-list.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3cy1saXN0L25ld3MtbGlzdC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/news-list/news-list.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news-list/news-list.ts ***!
  \***************************************************/
/*! exports provided: NewsListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsListPage", function() { return NewsListPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/media.service */ "./src/app/services/media.service.ts");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/app/services/bookmark.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsListPage = /** @class */ (function () {
    function NewsListPage(postService, mediaService, bookmarkService) {
        this.postService = postService;
        this.mediaService = mediaService;
        this.bookmarkService = bookmarkService;
        this.onItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.posts = [];
        this.events = {};
        this.bookmarks = {};
        this.postPageLoaded = 1;
        this.bookmarks = this.bookmarkService.getAllBookmark();
    }
    NewsListPage.prototype.ngOnChanges = function () {
        this.loadData(this.categoryId, null);
    };
    NewsListPage.prototype.doInfinite = function (event) {
        this.loadData(this.categoryId, event);
    };
    NewsListPage.prototype.itemClick = function (item) {
        this.onItemClick.emit(item);
    };
    NewsListPage.prototype.loadData = function (categoryId, event) {
        var _this = this;
        this.postService.getPostListWithFilter(categoryId, this.postPageLoaded++).subscribe(function (data) {
            console.log("postService");
            var newData = _this.postId ? data.filter(function (it) { return it.id != _this.postId; }) : data;
            _this.posts = _this.posts.concat(newData);
            if (event) {
                console.log("event");
                event.target.complete();
            }
            newData.forEach(function (element) {
                element.bookmark = _this.bookmarks[element.id] ? true : false;
                if (element.mediaId) {
                    _this.mediaService.getItemById(element.mediaId).subscribe(function (media) {
                        _this.posts.forEach(function (element) {
                            if (media['id'] === element['mediaId']) {
                                element.image = media['source_url'];
                            }
                        });
                    });
                }
            });
        }, function (err) {
            console.log("err");
            if (event) {
                event.target.complete();
            }
        }, function () {
            console.log("done");
            if (event) {
                event.target.complete();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('categoryId'),
        __metadata("design:type", Object)
    ], NewsListPage.prototype, "categoryId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('title'),
        __metadata("design:type", Object)
    ], NewsListPage.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('postId'),
        __metadata("design:type", Object)
    ], NewsListPage.prototype, "postId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], NewsListPage.prototype, "onItemClick", void 0);
    NewsListPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'news-list',
            template: __webpack_require__(/*! ./news-list.html */ "./src/app/components/news-list/news-list.html"),
            providers: [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"], _services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_3__["BookmarkService"]],
            styles: [__webpack_require__(/*! ./news-list.scss */ "./src/app/components/news-list/news-list.scss")]
        }),
        __metadata("design:paramtypes", [_services_post_service__WEBPACK_IMPORTED_MODULE_1__["PostService"],
            _services_media_service__WEBPACK_IMPORTED_MODULE_2__["MediaService"],
            _services_bookmark_service__WEBPACK_IMPORTED_MODULE_3__["BookmarkService"]])
    ], NewsListPage);
    return NewsListPage;
}());



/***/ }),

/***/ "./src/app/components/shared.module.ts":
/*!*********************************************!*\
  !*** ./src/app/components/shared.module.ts ***!
  \*********************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _news_item_news_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-item/news-item */ "./src/app/components/news-item/news-item.ts");
/* harmony import */ var _news_item_home_news_item_home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./news-item-home/news-item-home */ "./src/app/components/news-item-home/news-item-home.ts");
/* harmony import */ var _news_list_news_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-list/news-list */ "./src/app/components/news-list/news-list.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]
            ],
            declarations: [
                _news_item_news_item__WEBPACK_IMPORTED_MODULE_4__["NewsItemPage"], _news_item_home_news_item_home__WEBPACK_IMPORTED_MODULE_5__["NewsItemHomePage"], _news_list_news_list__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]
            ],
            exports: [
                _news_item_news_item__WEBPACK_IMPORTED_MODULE_4__["NewsItemPage"], _news_item_home_news_item_home__WEBPACK_IMPORTED_MODULE_5__["NewsItemHomePage"], _news_list_news_list__WEBPACK_IMPORTED_MODULE_6__["NewsListPage"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/services/media.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/media.service.ts ***!
  \*******************************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaService = /** @class */ (function (_super) {
    __extends(MediaService, _super);
    function MediaService(http) {
        var _this = _super.call(this, http, 'media') || this;
        _this.http = http;
        return _this;
    }
    MediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MediaService);
    return MediaService;
}(_service__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/post.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/post.service.ts ***!
  \******************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostService = /** @class */ (function (_super) {
    __extends(PostService, _super);
    function PostService(http) {
        var _this = _super.call(this, http, 'posts') || this;
        _this.http = http;
        return _this;
    }
    PostService.prototype.getPostListWithFilter = function (categoryId, page) {
        var _this = this;
        if (page === void 0) { page = null; }
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            var categories = JSON.parse(localStorage.getItem("category"));
            var posts = [];
            var query = categoryId ? "categories=" + categoryId : null;
            var itemListRequest = page ? _this.getItemList(query, null, null, page, 10) : _this.getItemList(query);
            itemListRequest.subscribe(function (data) {
                data.forEach(function (element) {
                    posts.push({
                        "category": categories[element.categories[0]] ? categories[element.categories[0]].name : "",
                        "categoryId": element.categories[0],
                        "title": element.title.rendered,
                        "time": element.date,
                        "image": "",
                        "id": element.id,
                        "link": element.link,
                        "content": element.content.rendered,
                        "mediaId": element.featured_media
                    });
                });
                observer.next(posts);
                observer.complete();
            }, function (err) {
                observer.next(posts);
                observer.complete();
            }, function () {
                observer.next(posts);
                observer.complete();
            });
        });
    };
    ;
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}(_service__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/services/service.ts":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/app/services/config.ts");

var Service = /** @class */ (function () {
    function Service(http, path) {
        this.http = http;
        this.path = path;
    }
    Service.prototype.getRootUrl = function () {
        return "" + _config__WEBPACK_IMPORTED_MODULE_0__["ConfigData"].rootUrl + this.path;
    };
    Service.prototype.getItemList = function (filter, orderBy, order, page, perPage) {
        if (filter === void 0) { filter = null; }
        if (orderBy === void 0) { orderBy = null; }
        if (order === void 0) { order = null; }
        if (page === void 0) { page = null; }
        if (perPage === void 0) { perPage = null; }
        var query = "";
        var filterData = filter ? filter : "";
        var orderByData = orderBy ? "orderby=" + orderBy : "";
        var orderData = order ? "order=" + order : "";
        if (filterData) {
            query += "?" + filterData;
        }
        if (orderByData) {
            if (query) {
                query += "&" + filterData;
            }
            else {
                query += "?" + filterData;
            }
        }
        if (orderData) {
            if (query) {
                query += "&" + order;
            }
            else {
                query += "?" + order;
            }
        }
        if (page) {
            if (query) {
                query += "&page=" + page;
            }
            else {
                query += "?page=" + page;
            }
        }
        if (perPage) {
            if (query) {
                query += "&per_page=" + perPage;
            }
            else {
                query += "?per_page=" + perPage;
            }
        }
        if (query) {
            query += "&timestepm=" + new Date().getTime();
        }
        else {
            query += "?timestepm=" + new Date().getTime();
        }
        var url = "" + this.getRootUrl() + query;
        console.log(url);
        return this.http.get(url);
    };
    Service.prototype.getItemById = function (itemId) {
        return this.http.get(this.getRootUrl() + "/" + itemId);
    };
    return Service;
}());



/***/ })

}]);
//# sourceMappingURL=default~pages-about-about-module~pages-bookmark-bookmark-module~pages-category-category-module~pages~2d928d69.js.map