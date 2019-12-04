(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-comments-comments-module"],{

/***/ "./src/app/pages/comments/comments.html":
/*!**********************************************!*\
  !*** ./src/app/pages/comments/comments.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Form-->\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-refresher (ionRefresh)=\"doRefresh($event)\">\r\n    <ion-refresher-content></ion-refresher-content>\r\n  </ion-refresher>\r\n  <ion-grid>\r\n    <ion-row  *ngIf=\"comments.length\">\r\n      <ion-col size=\"12\" *ngIf=\"post\">\r\n          <!-- List  all comments-->\r\n          <div comments-list box-shadow border-radius margin-bottom padding *ngFor=\"let item of comments\">\r\n            <ion-item lines=\"none\" no-padding transparent>\r\n              <ion-avatar slot=\"start\">\r\n                <img [src]=\"item.avatar\" />\r\n              </ion-avatar>\r\n              <ion-label>\r\n                <h2 text-size-md font-bold class=\"ion-padding-end\" text-nowrap>{{item.author_name}}</h2>\r\n              </ion-label>\r\n              <ion-label>\r\n                <h2 text-size-xs>{{item.date | date:'d MMMM yyyy'}}</h2>\r\n              </ion-label>\r\n            </ion-item>\r\n            <div commnets-read class=\"ion-text-wrap\" text-size-p [innerHTML]=\"item.content.rendered\"></div>\r\n          </div>\r\n      </ion-col>\r\n    </ion-row>\r\n    <!-- No comment -->\r\n    <ion-row *ngIf=\"!comments.length\" class=\"ion-align-items-center\">\r\n      <ion-col size=\"12\">\r\n        <div no-post text-center>\r\n          <img src=\"../assets/imgs/alebaaLogo.png\" alt=\"\" />\r\n          <h1 text-size-xl>لا توجد تعليقات</h1>\r\n          <p text-size-md>لا توجد تعليقات لهذا الخبر</p>\r\n        </div>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"doInfinite($event)\">\r\n    <ion-infinite-scroll-content\r\n      loadingSpinner=\"bubbles\"\r\n      loadingText=\"تحميل المزيد\">\r\n    </ion-infinite-scroll-content>\r\n  </ion-infinite-scroll>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-button expand=\"full\" default-button (click)=\"openComment($event)\">كتابة تعليق</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/comments/comments.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/comments/comments.module.ts ***!
  \***************************************************/
/*! exports provided: CommentsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPageModule", function() { return CommentsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./comments */ "./src/app/pages/comments/comments.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CommentsPageModule = /** @class */ (function () {
    function CommentsPageModule() {
    }
    CommentsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _comments__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]
                    }
                ])
            ],
            declarations: [_comments__WEBPACK_IMPORTED_MODULE_6__["CommentsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], CommentsPageModule);
    return CommentsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/comments/comments.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/comments/comments.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[commnets-read] {\n  padding-left: 55px;\n  margin-top: -15px;\n  color: var(--alebaa-light, #09292e); }\n\nion-grid,\nion-row {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbWVudHMvY29tbWVudHMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29tbWVudHMvRTpcXEluZm9cXFByb2plY3RzXFxBbC1FYmFhXFxBcHBcXGFsZWJhYS50di9zcmNcXGFwcFxccGFnZXNcXGNvbW1lbnRzXFxjb21tZW50cy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VDQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixtQ0FBbUMsRUFBQTs7QUFHckM7O0VBRUUsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbWVudHMvY29tbWVudHMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjb21tbmV0cy1yZWFkXSB7XG4gIHBhZGRpbmctbGVmdDogNTVweDtcbiAgbWFyZ2luLXRvcDogLTE1cHg7XG4gIGNvbG9yOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpOyB9XG5cbmlvbi1ncmlkLFxuaW9uLXJvdyB7XG4gIGhlaWdodDogMTAwJTsgfVxuIiwiW2NvbW1uZXRzLXJlYWRdIHtcclxuICBwYWRkaW5nLWxlZnQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XHJcbn1cclxuXHJcbmlvbi1ncmlkLFxyXG5pb24tcm93IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/comments/comments.ts":
/*!********************************************!*\
  !*** ./src/app/pages/comments/comments.ts ***!
  \********************************************/
/*! exports provided: CommentsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsPage", function() { return CommentsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_comment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/comment.service */ "./src/app/services/comment.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsPage = /** @class */ (function () {
    function CommentsPage(navCtrl, route, commentService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.commentService = commentService;
        this.commentPageLoaded = 1;
        var self = this;
        this.route.queryParams.subscribe(function (params) {
            self.post = JSON.parse(params['item']);
            self.onCompleteEvent(_this.post.comments);
            self.doRefresh(null);
        });
    }
    CommentsPage.prototype.openComment = function (event) {
        if (event) {
            event.stopPropagation();
        }
        var navigationExtras = {
            queryParams: { postId: this.post.id }
        };
        this.navCtrl.navigateForward(['/form-page'], navigationExtras);
    };
    CommentsPage.prototype.onCompleteEvent = function (comments) {
        this.comments = comments ? comments : [];
        this.comments.forEach(function (element) { return element.avatar = element.author_avatar_urls['96']; });
    };
    CommentsPage.prototype.doRefresh = function (event) {
        var _this = this;
        this.commentService
            .getAllCommentsForPostById(this.post.id, this.commentPageLoaded++)
            .subscribe(function (comments) {
            _this.onCompleteEvent(comments);
            if (event) {
                event.target.complete();
            }
        }, function (err) {
            if (event) {
                event.target.complete();
            }
        }, function () {
            if (event) {
                event.target.complete();
            }
        });
    };
    CommentsPage.prototype.doInfinite = function (event) {
        this.doRefresh(event);
    };
    CommentsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-comments',
            template: __webpack_require__(/*! ./comments.html */ "./src/app/pages/comments/comments.html"),
            providers: [_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]],
            styles: [__webpack_require__(/*! ./comments.scss */ "./src/app/pages/comments/comments.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], CommentsPage);
    return CommentsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-comments-comments-module.js.map