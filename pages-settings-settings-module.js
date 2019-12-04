(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-settings-settings-module"],{

/***/ "./src/app/pages/settings/settings.html":
/*!**********************************************!*\
  !*** ./src/app/pages/settings/settings.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Page Form-->\r\n<ion-header box-shadow>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button defaultHref=\"/\"></ion-menu-button>\r\n    </ion-buttons>\r\n    <ion-title text-uppercase><img src=\"../assets/imgs/alebaaTitle.png\" alt=\"\" /></ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<!-- Content -->\r\n<ion-content>\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col size=\"12\">\r\n        <ion-item transparent>\r\n          <ion-lable text-size-xs>تفعيل الاشعارات</ion-lable>\r\n          <ion-checkbox checkbox slot=\"end\" [(ngModel)]=\"isPushNotificationEnabled\" (ionChange)=\"ionChange($event)\"></ion-checkbox>\r\n        </ion-item>\r\n\r\n        <ion-button default-button margin (click)=\"changeTheme('autumn')\">فاتح</ion-button>\r\n        <ion-button default-button margin (click)=\"changeTheme('night')\">غامق</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/settings/settings.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../components/shared.module */ "./src/app/components/shared.module.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./src/app/pages/settings/settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SettingsPageModule = /** @class */ (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _components_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _settings__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]
                    }
                ])
            ],
            declarations: [_settings__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/settings/settings.scss":
/*!**********************************************!*\
  !*** ./src/app/pages/settings/settings.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzL3NldHRpbmdzLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/settings/settings.ts":
/*!********************************************!*\
  !*** ./src/app/pages/settings/settings.ts ***!
  \********************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "./node_modules/@ionic-native/onesignal/ngx/index.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme.service */ "./src/app/services/theme.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsPage = /** @class */ (function () {
    function SettingsPage(oneSignal, file, theme) {
        this.oneSignal = oneSignal;
        this.file = file;
        this.theme = theme;
        this.themes = {
            autumn: {
                primary: "#ffffff",
                secondary: "#fafafa",
                danger: "#0c896c",
                light: "#09292e",
                sliderColor: "#fff",
                colorIcon: "#CCCBDA",
                colorIconText: "#7F7E96",
                category: "#fff",
                listBackgroundColor: "#ffffff",
                backgroundColor: "#fafafa",
                toobarBackground: "#ffffff",
                toobarButton: "#AAB2B7",
                toobarText: "#FFFFFF"
            },
            night: {
                primary: "#282C39",
                secondary: "#09292e",
                danger: "#0c896c",
                sliderColor: "#ffffff",
                light: "#ffffff",
                colorIcon: "#375c54",
                colorIconText: "#375c54",
                category: "#ffffff",
                listBackgroundColor: "#09292e",
                backgroundColor: "#03353a",
                toobarBackground: "#09292e",
                toobarButton: "#D8D8D8",
                toobarText: "#FFFFFF",
            }
        };
        this.isLightColorSelected = true;
        this.isPushNotificationEnabled = true;
        this.isRTLEnabled = true;
        this.isPushNotificationEnabled = localStorage.getItem('isPushNotificationEnabled') == "true";
        this.isLightColorSelected = localStorage.getItem('isLightColorSelected') == "true";
        this.isRTLEnabled = localStorage.getItem('isRTLEnabled') == "true";
    }
    SettingsPage.prototype.changeTheme = function (name) {
        this.theme.setTheme(this.themes[name]);
    };
    SettingsPage.prototype.ionChangeSelectedTheme = function (e) {
        localStorage.setItem('isLightColorSelected', this.isLightColorSelected + "");
        this.writeToFile();
        var theme = this.isLightColorSelected ? "colorLight" : "colorDark";
        document.getElementsByTagName("body")[0].setAttribute("class", theme);
    };
    //Enable/Disable push notification OneSignal
    SettingsPage.prototype.ionChange = function (e) {
        this.oneSignal.setSubscription(this.isPushNotificationEnabled);
        localStorage.setItem('isPushNotificationEnabled', "" + this.isPushNotificationEnabled);
        this.writeToFile();
        if (this.isPushNotificationEnabled) {
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        }
        else {
            this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
        }
        this.oneSignal.endInit();
    };
    SettingsPage.prototype.ionChangeRTL = function (e) {
        localStorage.setItem('isRTLEnabled', "" + this.isRTLEnabled);
        document.getElementsByTagName('ion-menu')[0]
            .setAttribute('side', this.isRTLEnabled ? 'end' : 'start');
        document.getElementsByTagName('html')[0]
            .setAttribute('dir', this.isRTLEnabled ? 'rtl' : 'ltr');
    };
    SettingsPage.prototype.getSettingsObject = function () {
        var result = {
            'bookmark': localStorage.getItem('bookmark'),
            'isPushNotificationEnabled': localStorage.getItem('isPushNotificationEnabled'),
            'isLightColorSelected': localStorage.getItem('isLightColorSelected'),
            'isRTLEnabled': localStorage.getItem('isRTLEnabled'),
        };
        return JSON.stringify(result);
    };
    SettingsPage.prototype.writeToFile = function () {
        this.file.writeFile(this.file.externalRootDirectory, 'settings.json', this.getSettingsObject(), { replace: true });
    };
    SettingsPage.prototype.readFromFile = function () {
        return this.file.readAsText(this.file.externalRootDirectory, 'settings.json');
    };
    SettingsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'settings',
            template: __webpack_require__(/*! ./settings.html */ "./src/app/pages/settings/settings.html"),
            styles: [__webpack_require__(/*! ./settings.scss */ "./src/app/pages/settings/settings.scss")]
        }),
        __metadata("design:paramtypes", [_ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_1__["OneSignal"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__["File"], _services_theme_service__WEBPACK_IMPORTED_MODULE_3__["ThemeService"]])
    ], SettingsPage);
    return SettingsPage;
}());



/***/ }),

/***/ "./src/app/services/theme.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/*! exports provided: ThemeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeService", function() { return ThemeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ThemeService = /** @class */ (function () {
    function ThemeService(document, storage) {
        var _this = this;
        this.document = document;
        this.storage = storage;
        storage.get('theme').then(function (cssText) {
            _this.setGlobalCSS(cssText);
        });
    }
    // Override all global variables with a new theme
    ThemeService.prototype.setTheme = function (theme) {
        var cssText = CSSTextGenerator(theme);
        this.setGlobalCSS(cssText);
        this.storage.set('theme', cssText);
    };
    // Define a single CSS variable
    ThemeService.prototype.setVariable = function (name, value) {
        this.document.documentElement.style.setProperty(name, value);
    };
    ThemeService.prototype.setGlobalCSS = function (css) {
        this.document.documentElement.style.cssText = css;
    };
    Object.defineProperty(ThemeService.prototype, "storedTheme", {
        get: function () {
            return this.storage.get('theme');
        },
        enumerable: true,
        configurable: true
    });
    ThemeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [Document,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], ThemeService);
    return ThemeService;
}());

var defaults = {
    primary: "#ffffff",
    secondary: "#fafafa",
    danger: "#0c896c",
    light: "#09292e",
    sliderColor: "#ffffff",
    colorIcon: "#CCCBDA",
    colorIconText: "#7F7E96",
    category: "#ffffff",
    listBackgroundColor: "#ffffff",
    backgroundColor: "#fafafa",
    toobarBackground: "#09292e",
    toobarButton: "#AAB2B7",
    toobarText: "#FFFFFF"
};
function CSSTextGenerator(colors) {
    colors = __assign({}, defaults, colors);
    var primary = colors.primary, secondary = colors.secondary, danger = colors.danger, light = colors.light, sliderColor = colors.sliderColor, colorIcon = colors.colorIcon, colorIconText = colors.colorIconText, category = colors.category, listBackgroundColor = colors.listBackgroundColor, backgroundColor = colors.backgroundColor, toobarBackground = colors.toobarBackground, toobarButton = colors.toobarButton, toobarText = colors.toobarText;
    return "\n    --alebaa-primary: " + primary + ";\n    --alebaa-secondary: " + secondary + ";\n    --alebaa-danger: " + danger + ";\n    --alebaa-light: " + light + ";\n    --alebaa-sliderColor: " + sliderColor + ";\n    --alebaa-colorIcon: " + colorIcon + ";\n    --alebaa-colorIconText: " + colorIconText + ";\n    --alebaa-category: " + category + ";\n    --alebaa-listBackgroundColor: " + listBackgroundColor + ";\n    --alebaa-backgroundColor: " + backgroundColor + ";\n    --alebaa-toobarBackground: " + toobarBackground + ";\n    --alebaa-toobarButton: " + toobarButton + ";\n    --alebaa-toobarText: " + toobarText + ";\n  ";
}


/***/ })

}]);
//# sourceMappingURL=pages-settings-settings-module.js.map