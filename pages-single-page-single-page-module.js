(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-single-page-single-page-module"],{

/***/ "./src/app/pages/single-page/single-page.html":
/*!****************************************************!*\
  !*** ./src/app/pages/single-page/single-page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Single Page -->\r\n<ion-header box-shadow>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid no-padding>\r\n    <ion-row no-padding>\r\n      <ion-col col-12 no-padding *ngIf=\"post\">\r\n        <!-- Header Images -->\r\n        <div no-post-image>\r\n          <div background-size id=\"elastic-header\" [hidden]=\"!post.image\"\r\n          [ngStyle]=\"{'background-image': 'url(' + post.image + ')'}\"></div>\r\n        </div>\r\n        <ion-card padding single-page box-shadow border-radius>\r\n          <ion-card-header class=\"ion-no-padding\">\r\n            <!-- Name Category -->\r\n            <span category class=\"ion-float-start\" border-radius>{{post.category}}</span>\r\n            <!-- Bookmark -->\r\n            <ion-button class=\"ion-float-end\" fill=\"clear\" bookMark float-end (click)=\"bookmark(post, $event)\" size=\"small\">\r\n              <ion-icon slot=\"icon-only\" icon-small name=\"ios-bookmark\" [ngClass]=\"{'active' : post.bookmark}\"></ion-icon>\r\n            </ion-button >\r\n            <!-- Share -->\r\n            <ion-button class=\"ion-float-end\" (click)=\"share(post, $event)\" float-end fill=\"clear\" size=\"small\">\r\n              <ion-icon slot=\"icon-only\" icon-small  name=\"share\" ></ion-icon>\r\n            </ion-button>\r\n            <div clearfix></div>\r\n            <!--- Title Post -->\r\n            <h1 text-size-lg [innerHTML]=\"htmlTitle\"></h1>\r\n            <ion-item no-padding lines=\"none\" transparent>\r\n              <!-- Time -->\r\n              <ion-chip slot=\"start\">\r\n                <ion-icon icon name=\"ios-stopwatch\"></ion-icon>\r\n                <ion-label text-size-p class=\"ion-margin-end\">{{post.time | date:'d MMMM yyyy'}}</ion-label>\r\n              </ion-chip>\r\n              <!-- Commnets -->\r\n              <ion-chip (click)=\"openCommentList(post, $event)\">\r\n                <ion-icon icon name=\"ios-chatbubbles\"></ion-icon>\r\n                <ion-label text-size-p>التعليقات</ion-label>\r\n              </ion-chip>\r\n            </ion-item>\r\n          </ion-card-header>\r\n          <!-- Content -->\r\n          <ion-card-content class=\"ion-no-padding\">\r\n            <!--- Content with web site-->\r\n            <div [innerHTML]=\"htmlContent\"></div>\r\n          </ion-card-content>\r\n        </ion-card>\r\n        <news-list [categoryId]=\"post.categoryId\" [postId]=\"post.id\" [title]=\"\" (onItemClick)=\"onItemClick($event)\"></news-list>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <!-- Wtite a comment-->\r\n    <ion-button expand=\"full\" default-button (click)=\"openComment(post, $event)\">كتابة تعليق</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/single-page/single-page.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/single-page/single-page.module.ts ***!
  \*********************************************************/
/*! exports provided: SinglePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePageModule", function() { return SinglePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _single_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./single-page */ "./src/app/pages/single-page/single-page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SinglePageModule = /** @class */ (function () {
    function SinglePageModule() {
    }
    SinglePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _single_page__WEBPACK_IMPORTED_MODULE_6__["SinglePage"]
                    }
                ])
            ],
            declarations: [_single_page__WEBPACK_IMPORTED_MODULE_6__["SinglePage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SinglePageModule);
    return SinglePageModule;
}());



/***/ }),

/***/ "./src/app/pages/single-page/single-page.scss":
/*!****************************************************!*\
  !*** ./src/app/pages/single-page/single-page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(single-page) [background-size] {\n  height: 250px; }\n\n:host-context(single-page) ion-card {\n  --background: var(--alebaa-backgroundColor, #fafafa);\n  margin-top: -20px; }\n\n:host-context(single-page) ion-card [category] {\n    top: 8px;\n    left: 0; }\n\n:host-context(single-page) a {\n  color: red; }\n\n:host-context(single-page) i {\n  font-style: italic;\n  color: var(--alebaa-light, #09292e); }\n\n:host-context(single-page) b {\n  font-style: bold !important;\n  color: var(--alebaa-light, #09292e); }\n\n:host-context(single-page) h2,\n:host-context(single-page) h3,\n:host-context(single-page) h4,\n:host-context(single-page) h5,\n:host-context(single-page) h6 {\n  color: var(--alebaa-light, #09292e) !important; }\n\n:host-context(single-page) p {\n  color: var(--alebaa-light, #09292e) !important;\n  font-size: 14px !important;\n  line-height: 16px !important;\n  margin: 10px 0 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2luZ2xlLXBhZ2UvRTpcXEluZm9cXFByb2plY3RzXFxBbC1FYmFhXFxBcHBcXGFsZWJhYS50di9zcmNcXGFwcFxccGFnZXNcXHNpbmdsZS1wYWdlXFxzaW5nbGUtcGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksYUFBYSxFQUFBOztBQUZqQjtFQU1JLG9EQUFhO0VBQ2IsaUJBQWlCLEVBQUE7O0FBUHJCO0lBVU0sUUFBUTtJQUNSLE9BQU8sRUFBQTs7QUFYYjtFQWdCSSxVQUFVLEVBQUE7O0FBaEJkO0VBb0JJLGtCQUFrQjtFQUNsQixtQ0FBbUMsRUFBQTs7QUFyQnZDO0VBeUJJLDJCQUEyQjtFQUMzQixtQ0FBbUMsRUFBQTs7QUExQnZDOzs7OztFQWtDSSw4Q0FBOEMsRUFBQTs7QUFsQ2xEO0VBc0NJLDhDQUE4QztFQUM5QywwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2luZ2xlLXBhZ2Uvc2luZ2xlLXBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LWNvbnRleHQoc2luZ2xlLXBhZ2UpIHtcclxuICBbYmFja2dyb3VuZC1zaXplXSB7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtYmFja2dyb3VuZENvbG9yLCAjZmFmYWZhKTtcclxuICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG5cclxuICAgIFtjYXRlZ29yeV0ge1xyXG4gICAgICB0b3A6IDhweDtcclxuICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGZvbnQtc3R5bGU6IGJvbGQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpO1xyXG4gIH1cclxuXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgaDQsXHJcbiAgaDUsXHJcbiAgaDYge1xyXG4gICAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMTBweCAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/single-page/single-page.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/single-page/single-page.ts ***!
  \**************************************************/
/*! exports provided: SinglePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePage", function() { return SinglePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_bookmark_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bookmark.service */ "./src/app/services/bookmark.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SinglePage = /** @class */ (function () {
    function SinglePage(navCtrl, _ngZone, route, domSanitizer, commentService, socialSharing, bookmarkService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this._ngZone = _ngZone;
        this.route = route;
        this.domSanitizer = domSanitizer;
        this.commentService = commentService;
        this.socialSharing = socialSharing;
        this.bookmarkService = bookmarkService;
        this.numberOfComment = 0;
        this.share = function (item, e) {
            _this.socialSharing.shareViaFacebook(item.title, "", item.link)
                .then(function () {
            }).catch(function () {
            });
        };
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
        var self = this;
        this.route.queryParams.subscribe(function (params) {
            self.post = JSON.parse(params['item']);
            if (self.post && self.post.content) {
                self.htmlContent = self.domSanitizer.bypassSecurityTrustHtml(self.post.content);
            }
            if (_this.post && _this.post.title) {
                self.htmlTitle = _this.domSanitizer.bypassSecurityTrustHtml(_this.post.title);
            }
            self.commentService
                .getAllCommentsForPostById(self.post.id, 1)
                .subscribe(function (comments) {
                self.numberOfComment = comments.length;
                self.post.comments = comments;
            });
        });
        this.incrementPostCounter();
    }
    SinglePage.prototype.incrementPostCounter = function () {
        var counter = 0;
        if (localStorage.getItem('post-counter')) {
            counter = parseInt(localStorage.getItem('post-counter'));
        }
        counter++;
        localStorage.setItem('post-counter', counter + "");
    };
    SinglePage.prototype.openComment = function (item, event) {
        if (event) {
            event.stopPropagation();
        }
        var navigationExtras = {
            queryParams: { postId: JSON.stringify(this.post.id) }
        };
        this.navCtrl.navigateForward(['/form-page'], navigationExtras);
    };
    SinglePage.prototype.openCommentList = function (item, e) {
        if (e) {
            e.stopPropagation();
        }
        var navigationExtras = {
            queryParams: { item: JSON.stringify(item) }
        };
        this.navCtrl.navigateForward(['/comment-page'], navigationExtras);
    };
    SinglePage.prototype.isClassActive = function () {
        return this.active;
    };
    SinglePage.prototype.setClassActive = function (newValue) {
        var _this = this;
        if (this.active != newValue) {
            this._ngZone.run(function () {
                _this.active = newValue;
            });
        }
    };
    SinglePage.prototype.onItemClick = function (item) {
        this.content.scrollToTop(200);
    };
    SinglePage.prototype.ionViewDidLeave = function () {
        Array
            .prototype.slice
            .call(document.getElementsByTagName('video'))
            .forEach(function (video) { return video.pause(); });
    };
    SinglePage.prototype.subscribeToIonScroll = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonContent"])
    ], SinglePage.prototype, "content", void 0);
    SinglePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'single-page',
            template: __webpack_require__(/*! ./single-page.html */ "./src/app/pages/single-page/single-page.html"),
            providers: [_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"], _services_bookmark_service__WEBPACK_IMPORTED_MODULE_4__["BookmarkService"]],
            styles: [__webpack_require__(/*! ./single-page.scss */ "./src/app/pages/single-page/single-page.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"],
            _services_bookmark_service__WEBPACK_IMPORTED_MODULE_4__["BookmarkService"]])
    ], SinglePage);
    return SinglePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-single-page-single-page-module.js.map