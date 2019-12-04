(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-category-category-module"],{

/***/ "./src/app/pages/category/category.html":
/*!**********************************************!*\
  !*** ./src/app/pages/category/category.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\r\n<ion-header box-shadow>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid no-padding>\r\n    <ion-row>\r\n      <!--- Category List -->\r\n      <ion-col size=\"6\" size-md=\"4\" *ngFor=\"let item of categories\" (click)=\"openCategory(item)\">\r\n        <ion-card box-shadow text-center padding>\r\n            <h2 text-size-md text-capitalize>{{item.name}}</h2>\r\n            <h3 text-size-xs margin-top text-capitalize>{{item.count}} خبر</h3>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"تحميل المزيد\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/category/category.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/category/category.module.ts ***!
  \***************************************************/
/*! exports provided: CategoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPageModule", function() { return CategoryPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category */ "./src/app/pages/category/category.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CategoryPageModule = /** @class */ (function () {
    function CategoryPageModule() {
    }
    CategoryPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _category__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]
                    }
                ])
            ],
            declarations: [_category__WEBPACK_IMPORTED_MODULE_6__["CategoryPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CategoryPageModule);
    return CategoryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/category/category.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/category/category.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(page-category) [text-size-md],\n:host-context(page-category) [text-size-xs] {\n  font-weight: 400; }\n\n:host-context(page-category) ion-card {\n  --background: var(--alebaa-toobarBackground, #ffffff) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2F0ZWdvcnkvRTpcXEluZm9cXFByb2plY3RzXFxBbC1FYmFhXFxBcHBcXGFsZWJhYS50di9zcmNcXGFwcFxccGFnZXNcXGNhdGVnb3J5XFxjYXRlZ29yeS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUdJLGdCQUFnQixFQUFBOztBQUhwQjtFQU1JLGdFQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXRlZ29yeS9jYXRlZ29yeS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3QtY29udGV4dChwYWdlLWNhdGVnb3J5KSB7XHJcbiAgW3RleHQtc2l6ZS1tZF0sXHJcbiAgW3RleHQtc2l6ZS14c10ge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB9XHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtdG9vYmFyQmFja2dyb3VuZCwgI2ZmZmZmZikgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/category/category.ts":
/*!********************************************!*\
  !*** ./src/app/pages/category/category.ts ***!
  \********************************************/
/*! exports provided: CategoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryPage", function() { return CategoryPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_categoty_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/categoty.service */ "./src/app/services/categoty.service.ts");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/config */ "./src/app/services/config.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoryPage = /** @class */ (function () {
    function CategoryPage(navCtrl, categoryService, domSanitizer) {
        this.navCtrl = navCtrl;
        this.categoryService = categoryService;
        this.domSanitizer = domSanitizer;
        this.categories = [];
        this.categoryPageLoaded = 1;
        this.loadCategories(null);
    }
    CategoryPage.prototype.openCategory = function (category) {
        var navigationExtras = {
            queryParams: { id: category.id }
        };
        this.navCtrl.navigateForward(['/recent-news'], navigationExtras);
    };
    CategoryPage.prototype.getHtmlTitle = function (title) {
        if (title) {
            return this.domSanitizer.bypassSecurityTrustHtml(title);
        }
    };
    CategoryPage.prototype.doInfinite = function (event) {
        this.loadCategories(event);
    };
    CategoryPage.prototype.loadCategories = function (event) {
        var _this = this;
        this.categoryService
            .getCategories(this.categoryPageLoaded++)
            .subscribe(function (data) {
            if (data) {
                var newData = data.filter(function (item) {
                    if (item.count == 0)
                        return false;
                    if (!_services_config__WEBPACK_IMPORTED_MODULE_3__["ConfigData"].enableExcludeFromMenu)
                        return true;
                    return _services_config__WEBPACK_IMPORTED_MODULE_3__["ConfigData"].excludeFromMenu[item.name.toLocaleLowerCase()];
                });
                if (newData && newData.length > 0) {
                    _this.categories = _this.categories.concat(newData);
                }
            }
            if (event) {
                event.target.complete();
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonInfiniteScroll"])
    ], CategoryPage.prototype, "infiniteScroll", void 0);
    CategoryPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-category',
            template: __webpack_require__(/*! ./category.html */ "./src/app/pages/category/category.html"),
            providers: [_services_categoty_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]],
            styles: [__webpack_require__(/*! ./category.scss */ "./src/app/pages/category/category.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _services_categoty_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]])
    ], CategoryPage);
    return CategoryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-category-category-module.js.map