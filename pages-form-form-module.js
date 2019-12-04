(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-form-module"],{

/***/ "./src/app/pages/form/form.html":
/*!**************************************!*\
  !*** ./src/app/pages/form/form.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Form-->\r\n<ion-header>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n      </ion-buttons>\r\n      <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <!-- Input type name-->\r\n        <ion-item margin-top lines=\"none\" box-shadow>\r\n          <ion-input type=\"text\" placeholder=\"اسمك الكامل\" [(ngModel)]=\"authorName\"></ion-input>\r\n          <!-- Error for name valid-->\r\n          <div item-content>\r\n            <ion-icon ion-text *ngIf=\"!isAuthorValid\" color=\"danger\" name=\"remove-circle\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n        <!-- Input type email-->\r\n        <ion-item margin-top lines=\"none\" box-shadow>\r\n          <ion-input type=\"text\" placeholder=\"بريدك الالكتروني\" [(ngModel)]=\"authorEmail\"></ion-input>\r\n          <!-- Error for email valid-->\r\n          <div item-content>\r\n            <ion-icon ion-text *ngIf=\"!isEmailValid\" color=\"danger\" name=\"remove-circle\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n        <!-- Input type Comment -->\r\n        <ion-item textarea margin-top lines=\"none\" box-shadow textarea>\r\n          <ion-textarea placeholder=\"تعليقك\" [(ngModel)]=\"comment\"></ion-textarea>\r\n          <!-- Error for comments valid-->\r\n          <div item-content>\r\n            <ion-icon margin-top ion-text *ngIf=\"!isCommentValid\" color=\"danger\" name=\"remove-circle\"></ion-icon>\r\n          </div>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <!-- Wtite a comment-->\r\n    <ion-button default-button expand=\"full\" text-capitalize box-shadow (click)=\"addComment($event)\">كتابة تعليق</ion-button>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form */ "./src/app/pages/form/form.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var FormPageModule = /** @class */ (function () {
    function FormPageModule() {
    }
    FormPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _form__WEBPACK_IMPORTED_MODULE_6__["FormPage"]
                    }
                ])
            ],
            declarations: [_form__WEBPACK_IMPORTED_MODULE_6__["FormPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FormPageModule);
    return FormPageModule;
}());



/***/ }),

/***/ "./src/app/pages/form/form.scss":
/*!**************************************!*\
  !*** ./src/app/pages/form/form.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host-context(page-form) .scroll-content {\n  padding-bottom: 0 !important; }\n\n:host-context(page-form) ion-item {\n  --background: var(--alebaa-toobarBackground, #ffffff) !important;\n  --color: var(--alebaa-light, #09292e); }\n\n:host-context(page-form) ion-textarea {\n  background: var(--alebaa-toobarBackground, #ffffff) !important; }\n\n:host-context(page-form) ion-grid {\n  height: 100%;\n  padding: 0 !important; }\n\n:host-context(page-form) ion-grid ion-row {\n    height: 100%; }\n\n:host-context(page-form) .item.item-input.input-has-focus .item-inner,\n:host-context(page-form) .item.item-input.ng-valid.input-has-value:not(.input-has-focus):not(.item-input-has-focus) .item-inner {\n  box-shadow: none !important; }\n\n:host-context(page-form) [box-shadow] {\n  margin-top: 10px; }\n\n:host-context(page-form) [textarea] {\n  background: var(--alebaa-toobarBackground, #ffffff) !important;\n  height: calc(100% - 135px);\n  min-height: 280px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9FOlxcSW5mb1xcUHJvamVjdHNcXEFsLUViYWFcXEFwcFxcYWxlYmFhLnR2L3NyY1xcYXBwXFxwYWdlc1xcZm9ybVxcZm9ybS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksNEJBQTRCLEVBQUE7O0FBRmhDO0VBTUksZ0VBQWE7RUFDYixxQ0FBUSxFQUFBOztBQVBaO0VBV0ksOERBQThELEVBQUE7O0FBWGxFO0VBZUksWUFBWTtFQUNaLHFCQUFxQixFQUFBOztBQWhCekI7SUFtQk0sWUFBWSxFQUFBOztBQW5CbEI7O0VBMEJJLDJCQUEyQixFQUFBOztBQTFCL0I7RUE4QkksZ0JBQWdCLEVBQUE7O0FBOUJwQjtFQWtDSSw4REFBOEQ7RUFDOUQsMEJBQTBCO0VBQzFCLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybS9mb3JtLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdC1jb250ZXh0KHBhZ2UtZm9ybSkge1xyXG4gIC5zY3JvbGwtY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWl0ZW0gIHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICAtLWNvbG9yOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpO1xyXG4gIH1cclxuXHJcbiAgaW9uLXRleHRhcmVhIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWFsZWJhYS10b29iYXJCYWNrZ3JvdW5kLCAjZmZmZmZmKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWdyaWQge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgIGlvbi1yb3cge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaXRlbS5pdGVtLWlucHV0LmlucHV0LWhhcy1mb2N1cyAuaXRlbS1pbm5lcixcclxuICAuaXRlbS5pdGVtLWlucHV0Lm5nLXZhbGlkLmlucHV0LWhhcy12YWx1ZTpub3QoLmlucHV0LWhhcy1mb2N1cyk6bm90KC5pdGVtLWlucHV0LWhhcy1mb2N1cykgLml0ZW0taW5uZXIge1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBbYm94LXNoYWRvd10ge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gIFt0ZXh0YXJlYV0ge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEzNXB4KTtcclxuICAgIG1pbi1oZWlnaHQ6IDI4MHB4O1xyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/form/form.ts":
/*!************************************!*\
  !*** ./src/app/pages/form/form.ts ***!
  \************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
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




var FormPage = /** @class */ (function () {
    function FormPage(navCtrl, route, commentService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.route = route;
        this.commentService = commentService;
        this.authorName = "";
        this.authorEmail = "";
        this.comment = "";
        this.isAuthorValid = true;
        this.isEmailValid = true;
        this.isCommentValid = true;
        this.regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var self = this;
        this.route.queryParams.subscribe(function (params) {
            self.postId = params['postId'];
            if (!_this.postId) {
                self.navCtrl.pop();
            }
        });
    }
    FormPage.prototype.resetError = function () {
        this.isAuthorValid = true;
        this.isEmailValid = true;
        this.isCommentValid = true;
    };
    FormPage.prototype.isDataValid = function () {
        if (this.authorName.trim().length <= 1) {
            this.isAuthorValid = false;
        }
        this.isEmailValid = this.regex.test(this.authorEmail);
        if (this.comment.trim().length <= 2) {
            this.isCommentValid = false;
        }
        return this.isAuthorValid && this.isEmailValid && this.isCommentValid;
    };
    FormPage.prototype.addComment = function () {
        var _this = this;
        this.resetError();
        if (this.isDataValid()) {
            this.commentService
                .addComment(this.postId, this.comment, this.authorName, this.authorEmail)
                .subscribe(function (item) {
                _this.navCtrl.pop();
            });
        }
    };
    FormPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'page-form',
            template: __webpack_require__(/*! ./form.html */ "./src/app/pages/form/form.html"),
            providers: [_services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]],
            styles: [__webpack_require__(/*! ./form.scss */ "./src/app/pages/form/form.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_comment_service__WEBPACK_IMPORTED_MODULE_2__["CommentService"]])
    ], FormPage);
    return FormPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-form-form-module.js.map