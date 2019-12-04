(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./node_modules/rxjs-compat/_esm5/Observable.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/Observable.js ***!
  \******************************************************/
/*! exports provided: Observable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"]; });


//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./src/app/pages/home/home.html":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header box-shadow>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <!-- Segment Btton Home Page -->\r\n    <ion-segment [(ngModel)]=\"selectedItem\">\r\n      <ion-segment-button text-capitalize [value]=\"item.name\" *ngFor=\"let item of categories\" (click)=\"refreshData(item)\">\r\n        {{item.name}}\r\n      </ion-segment-button>\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <!-- Featured News -->\r\n        <h1 text-size-lg>اخر الاخبار</h1>\r\n        <!-- Slider For Featured News -->\r\n        <ion-slides #wizardSlider pager=\"true\">\r\n          <ion-slide background-size padding *ngFor=\"let item of posts\" [ngStyle]=\"{'background-image': 'url(' + item.image + ')'}\" (click)=\"openSinglePost(item)\">\r\n            <ion-button fill=\"clear\" bookMark (click)=\"bookmark(item, $event)\">\r\n              <ion-icon icon-small name=\"ios-bookmark\" margin-left [ngClass]=\"{'active' : item.bookmark}\"></ion-icon>\r\n            </ion-button>\r\n            <span category border-radius text-uppercase>{{item.category}}</span>\r\n            <h2 class=\"ion-text-start\" wizard-title [innerHTML]=\"getHtmlTitle(item.title)\"></h2>\r\n            <div clearfix></div>\r\n            <!-- Time -->\r\n            <ion-chip>\r\n              <ion-icon icon name=\"ios-stopwatch\"></ion-icon>\r\n              <ion-label text-size-p class=\"ion-margin-end\">{{item.time | date:'d MMMM yyyy'}}</ion-label>\r\n            </ion-chip>\r\n          </ion-slide>\r\n        </ion-slides>\r\n      </ion-col>\r\n      <!-- Name Category -->\r\n      <ion-col size=\"12\" no-padding *ngIf=\"postsRecentNews.length\">\r\n        <h1 padding-start text-size-lg>{{selectedCategory ? selectedCategory.name:\"\"}}</h1>\r\n      </ion-col>\r\n      <!-- List Category Posts -->\r\n      <ion-col size=\"6\" size-md=\"3\" *ngFor=\"let item of postsRecentNews\">\r\n        <news-item-home [data]=\"item\"></news-item-home>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"تحميل المزيد\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home */ "./src/app/pages/home/home.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home__WEBPACK_IMPORTED_MODULE_6__["HomePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.scss":
/*!**************************************!*\
  !*** ./src/app/pages/home/home.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Settings Segments Button\r\n===============================*/\n:host-context(page-home) {\n  /* Settings Slider Image*/ }\n:host-context(page-home) ion-segment {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    overflow: auto;\n    -webkit-box-pack: start;\n            justify-content: flex-start; }\n:host-context(page-home) ion-segment ion-segment-button.segment-button {\n      width: auto !important;\n      overflow: visible;\n      margin: 0 5px; }\n:host-context(page-home) ion-slides {\n    padding-bottom: 40px; }\n:host-context(page-home) ion-slides .slide-zoom {\n      height: 100%;\n      text-align: left; }\n:host-context(page-home) [background-size] {\n    position: relative;\n    height: 230px;\n    overflow: hidden;\n    border-radius: 4px !important;\n    /* Settings Wizard */\n    /* Settings DataTime */\n    /* Settings BookMark */ }\n:host-context(page-home) [background-size]::after {\n      content: \"\";\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      top: 0;\n      background: rgba(0, 0, 0, 0.34); }\n:host-context(page-home) [background-size] [wizard-title] {\n      color: var(--alebaa-sliderColor, #ffffff);\n      font-size: 18px;\n      z-index: 999;\n      padding: 16px;\n      left: 0;\n      position: absolute;\n      bottom: 25px; }\n:host-context(page-home) [background-size] ion-chip {\n      z-index: 999;\n      padding: 16px;\n      position: absolute;\n      bottom: 10px;\n      left: 0;\n      font-size: 14px; }\n:host-context(page-home) [background-size] ion-chip ion-icon,\n      :host-context(page-home) [background-size] ion-chip ion-label {\n        color: var(--alebaa-sliderColor, #ffffff) !important; }\n:host-context(page-home) [background-size] [bookMark] {\n      z-index: 99;\n      position: absolute;\n      top: 5px;\n      right: 16px; }\n:host-context(page-home) [background-size] [bookMark] ion-icon {\n        color: var(--alebaa-sliderColor, #ffffff); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9FOlxcSW5mb1xcUHJvamVjdHNcXEFsLUViYWFcXEFwcFxcYWxlYmFhLnR2L3NyY1xcYXBwXFxwYWdlc1xcaG9tZVxcaG9tZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtnQ0NDZ0M7QURDaEM7RUF1QkUseUJBQUEsRUFBMEI7QUF2QjVCO0lBR0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQW1CO0lBQW5CLDZCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHVCQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtBQU4vQjtNQVNNLHNCQUFzQjtNQUN0QixpQkFBaUI7TUFDakIsYUFBYSxFQUFBO0FBWG5CO0lBZ0JJLG9CQUFvQixFQUFBO0FBaEJ4QjtNQW1CTSxZQUFZO01BQ1osZ0JBQWdCLEVBQUE7QUFwQnRCO0lBeUJJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQVc3QixvQkFBQTtJQVVBLHNCQUFBO0lBY0Esc0JBQUEsRUFBdUI7QUEvRDNCO01BK0JNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO01BQ1IsTUFBTTtNQUNOLCtCQUErQixFQUFBO0FBckNyQztNQXlDTSx5Q0FBeUM7TUFDekMsZUFBZTtNQUNmLFlBQVk7TUFDWixhQUFhO01BQ2IsT0FBTztNQUNQLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7QUEvQ2xCO01BbURNLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLFlBQVk7TUFDWixPQUFPO01BQ1AsZUFBZSxFQUFBO0FBeERyQjs7UUE0RFEsb0RBQW9ELEVBQUE7QUE1RDVEO01BaUVNLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFdBQVcsRUFBQTtBQXBFakI7UUF1RVEseUNBQXlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNldHRpbmdzIFNlZ21lbnRzIEJ1dHRvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuOmhvc3QtY29udGV4dChwYWdlLWhvbWUpIHtcclxuXHJcbiAgaW9uLXNlZ21lbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24ge1xyXG4gICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlvbi1zbGlkZXMge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgLnNsaWRlLXpvb20ge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC8qIFNldHRpbmdzIFNsaWRlciBJbWFnZSovXHJcbiAgW2JhY2tncm91bmQtc2l6ZV0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAyMzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzQpO1xyXG4gICAgfVxyXG4gICAgLyogU2V0dGluZ3MgV2l6YXJkICovXHJcbiAgICBbd2l6YXJkLXRpdGxlXSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hbGViYWEtc2xpZGVyQ29sb3IsICNmZmZmZmYpO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBib3R0b206IDI1cHg7XHJcbiAgICB9XHJcbiAgICAvKiBTZXR0aW5ncyBEYXRhVGltZSAqL1xyXG4gICAgaW9uLWNoaXAge1xyXG4gICAgICB6LWluZGV4OiA5OTk7XHJcbiAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAxMHB4O1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICBpb24taWNvbixcclxuICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWxlYmFhLXNsaWRlckNvbG9yLCAjZmZmZmZmKSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvKiBTZXR0aW5ncyBCb29rTWFyayAqL1xyXG4gICAgW2Jvb2tNYXJrXSB7XHJcbiAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogNXB4O1xyXG4gICAgICByaWdodDogMTZweDtcclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWxlYmFhLXNsaWRlckNvbG9yLCAjZmZmZmZmKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIvKiBTZXR0aW5ncyBTZWdtZW50cyBCdXR0b25cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG46aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkge1xuICAvKiBTZXR0aW5ncyBTbGlkZXIgSW1hZ2UqLyB9XG4gIDpob3N0LWNvbnRleHQocGFnZS1ob21lKSBpb24tc2VnbWVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgfVxuICAgIDpob3N0LWNvbnRleHQocGFnZS1ob21lKSBpb24tc2VnbWVudCBpb24tc2VnbWVudC1idXR0b24uc2VnbWVudC1idXR0b24ge1xuICAgICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgICAgbWFyZ2luOiAwIDVweDsgfVxuICA6aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkgaW9uLXNsaWRlcyB7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cbiAgICA6aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkgaW9uLXNsaWRlcyAuc2xpZGUtem9vbSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0OyB9XG4gIDpob3N0LWNvbnRleHQocGFnZS1ob21lKSBbYmFja2dyb3VuZC1zaXplXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMjMwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggIWltcG9ydGFudDtcbiAgICAvKiBTZXR0aW5ncyBXaXphcmQgKi9cbiAgICAvKiBTZXR0aW5ncyBEYXRhVGltZSAqL1xuICAgIC8qIFNldHRpbmdzIEJvb2tNYXJrICovIH1cbiAgICA6aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkgW2JhY2tncm91bmQtc2l6ZV06OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMzQpOyB9XG4gICAgOmhvc3QtY29udGV4dChwYWdlLWhvbWUpIFtiYWNrZ3JvdW5kLXNpemVdIFt3aXphcmQtdGl0bGVdIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1hbGViYWEtc2xpZGVyQ29sb3IsICNmZmZmZmYpO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDI1cHg7IH1cbiAgICA6aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkgW2JhY2tncm91bmQtc2l6ZV0gaW9uLWNoaXAge1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBmb250LXNpemU6IDE0cHg7IH1cbiAgICAgIDpob3N0LWNvbnRleHQocGFnZS1ob21lKSBbYmFja2dyb3VuZC1zaXplXSBpb24tY2hpcCBpb24taWNvbixcbiAgICAgIDpob3N0LWNvbnRleHQocGFnZS1ob21lKSBbYmFja2dyb3VuZC1zaXplXSBpb24tY2hpcCBpb24tbGFiZWwge1xuICAgICAgICBjb2xvcjogdmFyKC0tYWxlYmFhLXNsaWRlckNvbG9yLCAjZmZmZmZmKSAhaW1wb3J0YW50OyB9XG4gICAgOmhvc3QtY29udGV4dChwYWdlLWhvbWUpIFtiYWNrZ3JvdW5kLXNpemVdIFtib29rTWFya10ge1xuICAgICAgei1pbmRleDogOTk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDVweDtcbiAgICAgIHJpZ2h0OiAxNnB4OyB9XG4gICAgICA6aG9zdC1jb250ZXh0KHBhZ2UtaG9tZSkgW2JhY2tncm91bmQtc2l6ZV0gW2Jvb2tNYXJrXSBpb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1hbGViYWEtc2xpZGVyQ29sb3IsICNmZmZmZmYpOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.ts":
/*!************************************!*\
  !*** ./src/app/pages/home/home.ts ***!
  \************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_categoty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categoty.service */ "./src/app/services/categoty.service.ts");
/* harmony import */ var _services_sync_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/sync.service */ "./src/app/services/sync.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/post.service */ "./src/app/services/post.service.ts");
/* harmony import */ var _services_media_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/media.service */ "./src/app/services/media.service.ts");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/app/services/bookmark.service.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/config */ "./src/app/services/config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, domSanitizer, syncService, categoryService, postService, mediaService, bookmarkService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.syncService = syncService;
        this.categoryService = categoryService;
        this.postService = postService;
        this.mediaService = mediaService;
        this.bookmarkService = bookmarkService;
        this.categories = [];
        this.posts = [];
        this.postsRecentNews = [];
        this.postPageLoaded = 1;
        this.bookmark = function (item, e) {
            if (e) {
                e.stopPropagation();
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
        this.postPageLoaded = 1;
        this.syncService.sync().subscribe(function (data) {
            _this.categoryService.getCategories(1).subscribe(function (data) {
                if (!data) {
                    return;
                }
                _this.categories = data.filter(function (item) {
                    if (item.count == 0)
                        return false;
                    if (!_services_config__WEBPACK_IMPORTED_MODULE_8__["ConfigData"].enableExcludeFromMenu)
                        return true;
                    return _services_config__WEBPACK_IMPORTED_MODULE_8__["ConfigData"].excludeFromMenu[item.name.toLocaleLowerCase()];
                });
                if (_this.categories && _this.categories.length > 0) {
                    _this.refreshData(_this.categories[0]);
                }
            });
        });
    }
    HomePage.prototype.getHtmlTitle = function (title) {
        if (title) {
            return this.domSanitizer.bypassSecurityTrustHtml(title);
        }
    };
    HomePage.prototype.loadData = function (categoryId, event) {
        var _this = this;
        this.postService.getPostListWithFilter(categoryId, this.postPageLoaded++).subscribe(function (data) {
            if (_this.posts && _this.posts.length == 0) {
                _this.posts = data.slice(0, 3);
                if (data.length > 3) {
                    _this.postsRecentNews = _this.postsRecentNews.concat(data.slice(3, data.length));
                }
            }
            else {
                _this.postsRecentNews = _this.postsRecentNews.concat(data);
            }
            if (event) {
                event.target.complete();
            }
            _this.posts.forEach(function (element) {
                element.bookmark = _this.bookmarkService[element.id] ? true : false;
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
            _this.postsRecentNews.forEach(function (element) {
                element.bookmark = _this.bookmarkService[element.id] ? true : false;
                if (element.mediaId) {
                    _this.mediaService.getItemById(element.mediaId).subscribe(function (media) {
                        _this.postsRecentNews.forEach(function (element) {
                            if (media['id'] === element['mediaId']) {
                                element.image = media['source_url'];
                            }
                        });
                    });
                }
            });
        });
    };
    HomePage.prototype.refreshData = function (category) {
        this.selectedItem = category.name;
        this.selectedCategory = category;
        this.postsRecentNews = [];
        this.posts = [];
        this.postPageLoaded = 1;
        this.loadData(category.id, null);
    };
    HomePage.prototype.doInfinite = function (event) {
        this.loadData(this.selectedCategory.id, event);
    };
    HomePage.prototype.openSinglePost = function (item) {
        var navigationExtras = {
            queryParams: { item: JSON.stringify(item) }
        };
        this.navCtrl.navigateForward(['/single-page'], navigationExtras);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"])
    ], HomePage.prototype, "infiniteScroll", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-home',
            template: __webpack_require__(/*! ./home.html */ "./src/app/pages/home/home.html"),
            providers: [_services_categoty_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
                _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], _services_media_service__WEBPACK_IMPORTED_MODULE_6__["MediaService"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__["BookmarkService"]
            ],
            styles: [__webpack_require__(/*! ./home.scss */ "./src/app/pages/home/home.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"],
            _services_sync_service__WEBPACK_IMPORTED_MODULE_3__["SyncService"],
            _services_categoty_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"],
            _services_media_service__WEBPACK_IMPORTED_MODULE_6__["MediaService"],
            _services_bookmark_service__WEBPACK_IMPORTED_MODULE_7__["BookmarkService"]])
    ], HomePage);
    return HomePage;
}());



/***/ }),

/***/ "./src/app/services/sync.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/sync.service.ts ***!
  \******************************************/
/*! exports provided: SyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncService", function() { return SyncService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _categoty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categoty.service */ "./src/app/services/categoty.service.ts");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SyncService = /** @class */ (function () {
    function SyncService(userService, categoryService) {
        this.userService = userService;
        this.categoryService = categoryService;
    }
    SyncService.prototype.sync = function () {
        var _this = this;
        return new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.userService.getItemList().subscribe(function (items) {
                if (!items) {
                    return;
                }
                var storeItem = {};
                items.forEach(function (element) {
                    storeItem[element.id] = element;
                });
                localStorage.setItem('users', JSON.stringify(storeItem));
            });
            _this.categoryService.getCategories(1).subscribe(function (items) {
                var storeItem = {};
                if (!items) {
                    return;
                }
                items.forEach(function (element) {
                    storeItem[element.id] = element;
                });
                localStorage.setItem('category', JSON.stringify(storeItem));
                observer.next(storeItem);
                observer.complete();
            });
        });
    };
    SyncService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _categoty_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]])
    ], SyncService);
    return SyncService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
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



var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, http, 'users') || this;
        _this.http = http;
        return _this;
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}(_service__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map