(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/global.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "html.ios {\n  --ion-default-font: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n}\n\nhtml.md {\n  --ion-default-font: \"Roboto\", \"Helvetica Neue\", sans-serif;\n}\n\nhtml {\n  --ion-font-family: var(--ion-default-font);\n}\n\nbody {\n  background: var(--ion-background-color);\n}\n\nbody.backdrop-no-scroll {\n  overflow: hidden;\n}\n\n.ion-color-primary {\n  --ion-color-base: var(--ion-color-primary, #3880ff) !important;\n  --ion-color-base-rgb: var(--ion-color-primary-rgb, 56, 128, 255) !important;\n  --ion-color-contrast: var(--ion-color-primary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-primary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-primary-shade, #3171e0) !important;\n  --ion-color-tint: var(--ion-color-primary-tint, #4c8dff) !important;\n}\n\n.ion-color-secondary {\n  --ion-color-base: var(--ion-color-secondary, #0cd1e8) !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12, 209, 232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #0bb8cc) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important;\n}\n\n.ion-color-tertiary {\n  --ion-color-base: var(--ion-color-tertiary, #7044ff) !important;\n  --ion-color-base-rgb: var(--ion-color-tertiary-rgb, 112, 68, 255) !important;\n  --ion-color-contrast: var(--ion-color-tertiary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-tertiary-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-tertiary-shade, #633ce0) !important;\n  --ion-color-tint: var(--ion-color-tertiary-tint, #7e57ff) !important;\n}\n\n.ion-color-success {\n  --ion-color-base: var(--ion-color-success, #10dc60) !important;\n  --ion-color-base-rgb: var(--ion-color-success-rgb, 16, 220, 96) !important;\n  --ion-color-contrast: var(--ion-color-success-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-success-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-success-shade, #0ec254) !important;\n  --ion-color-tint: var(--ion-color-success-tint, #28e070) !important;\n}\n\n.ion-color-warning {\n  --ion-color-base: var(--ion-color-warning, #ffce00) !important;\n  --ion-color-base-rgb: var(--ion-color-warning-rgb, 255, 206, 0) !important;\n  --ion-color-contrast: var(--ion-color-warning-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-warning-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-warning-shade, #e0b500) !important;\n  --ion-color-tint: var(--ion-color-warning-tint, #ffd31a) !important;\n}\n\n.ion-color-danger {\n  --ion-color-base: var(--ion-color-danger, #f04141) !important;\n  --ion-color-base-rgb: var(--ion-color-danger-rgb, 240, 65, 65) !important;\n  --ion-color-contrast: var(--ion-color-danger-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-danger-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-danger-shade, #d33939) !important;\n  --ion-color-tint: var(--ion-color-danger-tint, #f25454) !important;\n}\n\n.ion-color-light {\n  --ion-color-base: var(--ion-color-light, #f4f5f8) !important;\n  --ion-color-base-rgb: var(--ion-color-light-rgb, 244, 245, 248) !important;\n  --ion-color-contrast: var(--ion-color-light-contrast, #000) !important;\n  --ion-color-contrast-rgb: var(--ion-color-light-contrast-rgb, 0, 0, 0) !important;\n  --ion-color-shade: var(--ion-color-light-shade, #d7d8da) !important;\n  --ion-color-tint: var(--ion-color-light-tint, #f5f6f9) !important;\n}\n\n.ion-color-medium {\n  --ion-color-base: var(--ion-color-medium, #989aa2) !important;\n  --ion-color-base-rgb: var(--ion-color-medium-rgb, 152, 154, 162) !important;\n  --ion-color-contrast: var(--ion-color-medium-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-medium-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-medium-shade, #86888f) !important;\n  --ion-color-tint: var(--ion-color-medium-tint, #a2a4ab) !important;\n}\n\n.ion-color-dark {\n  --ion-color-base: var(--ion-color-dark, #222428) !important;\n  --ion-color-base-rgb: var(--ion-color-dark-rgb, 34, 36, 40) !important;\n  --ion-color-contrast: var(--ion-color-dark-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-dark-contrast-rgb, 255, 255, 255) !important;\n  --ion-color-shade: var(--ion-color-dark-shade, #1e2023) !important;\n  --ion-color-tint: var(--ion-color-dark-tint, #383a3e) !important;\n}\n\n.ion-page {\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  contain: layout size style;\n  overflow: hidden;\n  z-index: 0;\n}\n\nion-route,\nion-route-redirect,\nion-router,\nion-select-option,\nion-nav-controller,\nion-menu-controller,\nion-action-sheet-controller,\nion-alert-controller,\nion-loading-controller,\nion-modal-controller,\nion-picker-controller,\nion-popover-controller,\nion-toast-controller,\n.ion-page-hidden,\n[hidden] {\n  /* stylelint-disable-next-line declaration-no-important */\n  display: none !important;\n}\n\n.ion-page-invisible {\n  opacity: 0;\n}\n\nhtml.plt-ios.plt-hybrid, html.plt-ios.plt-pwa {\n  --ion-statusbar-padding: 20px;\n}\n\n@supports (padding-top: 20px) {\n  html {\n    --ion-safe-area-top: var(--ion-statusbar-padding);\n  }\n}\n\n@supports (padding-top: constant(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: constant(safe-area-inset-top);\n    --ion-safe-area-bottom: constant(safe-area-inset-bottom);\n    --ion-safe-area-left: constant(safe-area-inset-left);\n    --ion-safe-area-right: constant(safe-area-inset-right);\n  }\n}\n\n@supports (padding-top: env(safe-area-inset-top)) {\n  html {\n    --ion-safe-area-top: env(safe-area-inset-top);\n    --ion-safe-area-bottom: env(safe-area-inset-bottom);\n    --ion-safe-area-left: env(safe-area-inset-left);\n    --ion-safe-area-right: env(safe-area-inset-right);\n  }\n}\n\n.menu-content {\n  -webkit-transform: translate3d(0,  0,  0);\n          transform: translate3d(0,  0,  0);\n}\n\n.menu-content-open {\n  cursor: pointer;\n  touch-action: manipulation;\n  pointer-events: none;\n}\n\n.ios .menu-content-reveal {\n  box-shadow: -8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n[dir=rtl].ios .menu-content-reveal {\n  box-shadow: 8px 0 42px rgba(0, 0, 0, 0.08);\n}\n\n.md .menu-content-reveal {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\n.md .menu-content-push {\n  box-shadow: 0 2px 22px 0 rgba(0, 0, 0, 0.09), 4px 0 16px 0 rgba(0, 0, 0, 0.18);\n}\n\naudio,\ncanvas,\nprogress,\nvideo {\n  vertical-align: baseline;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nb,\nstrong {\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n  border: 0;\n}\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\nfigure {\n  margin: 1em 40px;\n}\n\nhr {\n  height: 1px;\n  border-width: 0;\n  box-sizing: content-box;\n}\n\npre {\n  overflow: auto;\n}\n\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\n\nlabel,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  line-height: normal;\n}\n\ntextarea {\n  overflow: auto;\n  height: auto;\n  font: inherit;\n  color: inherit;\n}\n\ntextarea::-webkit-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-moz-placeholder {\n  padding-left: 2px;\n}\n\ntextarea:-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::-ms-input-placeholder {\n  padding-left: 2px;\n}\n\ntextarea::placeholder {\n  padding-left: 2px;\n}\n\nform,\ninput,\noptgroup,\nselect {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\n\nhtml input[type=button],\ninput[type=reset],\ninput[type=submit] {\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\na,\na div,\na span,\na ion-icon,\na ion-label,\nbutton,\nbutton div,\nbutton span,\nbutton ion-icon,\nbutton ion-label,\n.ion-tappable,\n[tappable],\n[tappable] div,\n[tappable] span,\n[tappable] ion-icon,\n[tappable] ion-label,\ninput,\ntextarea {\n  touch-action: manipulation;\n}\n\na ion-label,\nbutton ion-label {\n  pointer-events: none;\n}\n\nbutton {\n  border: 0;\n  border-radius: 0;\n  font-family: inherit;\n  font-style: inherit;\n  font-variant: inherit;\n  line-height: 1;\n  text-transform: none;\n  cursor: pointer;\n  -webkit-appearance: button;\n}\n\n[tappable] {\n  cursor: pointer;\n}\n\na[disabled],\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\n\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\n\ninput[type=checkbox],\ninput[type=radio] {\n  padding: 0;\n  box-sizing: border-box;\n}\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n\ninput[type=search]::-webkit-search-cancel-button,\ninput[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\ntd,\nth {\n  padding: 0;\n}\n\n* {\n  box-sizing: border-box;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none;\n}\n\nhtml {\n  width: 100%;\n  height: 100%;\n  -webkit-text-size-adjust: 100%;\n     -moz-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n}\n\nhtml:not(.hydrated) body {\n  display: none;\n}\n\nhtml.plt-pwa {\n  height: 100vh;\n}\n\nbody {\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n  position: fixed;\n  width: 100%;\n  max-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  text-rendering: optimizeLegibility;\n  overflow: hidden;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -ms-content-zooming: none;\n  word-wrap: break-word;\n  overscroll-behavior-y: none;\n  -webkit-text-size-adjust: none;\n     -moz-text-size-adjust: none;\n      -ms-text-size-adjust: none;\n          text-size-adjust: none;\n}\n\nhtml {\n  font-family: var(--ion-font-family);\n}\n\na {\n  background-color: transparent;\n  color: var(--ion-color-primary, #3880ff);\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  margin-top: 16px;\n  margin-bottom: 10px;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 26px;\n}\n\nh2 {\n  margin-top: 18px;\n  font-size: 24px;\n}\n\nh3 {\n  font-size: 22px;\n}\n\nh4 {\n  font-size: 20px;\n}\n\nh5 {\n  font-size: 18px;\n}\n\nh6 {\n  font-size: 16px;\n}\n\nsmall {\n  font-size: 75%;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsup {\n  top: -0.5em;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\n.ion-no-padding,\n[no-padding] {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  padding-left: 0;\n  padding-right: 0;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.ion-padding,\n[padding] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding,\n[padding] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-top,\n[padding-top] {\n  --padding-top: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n}\n\n.ion-padding-start,\n[padding-start] {\n  --padding-start: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-start,\n[padding-start] {\n    padding-left: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-end,\n[padding-end] {\n  --padding-end: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-end,\n[padding-end] {\n    padding-right: unset;\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-padding-bottom,\n[padding-bottom] {\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-vertical,\n[padding-vertical] {\n  --padding-top: var(--ion-padding, 16px);\n  --padding-bottom: var(--ion-padding, 16px);\n  padding-top: var(--ion-padding, 16px);\n  padding-bottom: var(--ion-padding, 16px);\n}\n\n.ion-padding-horizontal,\n[padding-horizontal] {\n  --padding-start: var(--ion-padding, 16px);\n  --padding-end: var(--ion-padding, 16px);\n  padding-left: var(--ion-padding, 16px);\n  padding-right: var(--ion-padding, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-padding-horizontal,\n[padding-horizontal] {\n    padding-left: unset;\n    padding-right: unset;\n    -webkit-padding-start: var(--ion-padding, 16px);\n    padding-inline-start: var(--ion-padding, 16px);\n    -webkit-padding-end: var(--ion-padding, 16px);\n    padding-inline-end: var(--ion-padding, 16px);\n  }\n}\n\n.ion-no-margin,\n[no-margin] {\n  --margin-start: 0;\n  --margin-end: 0;\n  --margin-top: 0;\n  --margin-bottom: 0;\n  margin-left: 0;\n  margin-right: 0;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\n.ion-margin,\n[margin] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin,\n[margin] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-top,\n[margin-top] {\n  --margin-top: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n}\n\n.ion-margin-start,\n[margin-start] {\n  --margin-start: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-start,\n[margin-start] {\n    margin-left: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-end,\n[margin-end] {\n  --margin-end: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-end,\n[margin-end] {\n    margin-right: unset;\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-margin-bottom,\n[margin-bottom] {\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-vertical,\n[margin-vertical] {\n  --margin-top: var(--ion-margin, 16px);\n  --margin-bottom: var(--ion-margin, 16px);\n  margin-top: var(--ion-margin, 16px);\n  margin-bottom: var(--ion-margin, 16px);\n}\n\n.ion-margin-horizontal,\n[margin-horizontal] {\n  --margin-start: var(--ion-margin, 16px);\n  --margin-end: var(--ion-margin, 16px);\n  margin-left: var(--ion-margin, 16px);\n  margin-right: var(--ion-margin, 16px);\n}\n\n@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0) {\n  .ion-margin-horizontal,\n[margin-horizontal] {\n    margin-left: unset;\n    margin-right: unset;\n    -webkit-margin-start: var(--ion-margin, 16px);\n    margin-inline-start: var(--ion-margin, 16px);\n    -webkit-margin-end: var(--ion-margin, 16px);\n    margin-inline-end: var(--ion-margin, 16px);\n  }\n}\n\n.ion-float-left,\n[float-left] {\n  float: left !important;\n}\n\n.ion-float-right,\n[float-right] {\n  float: right !important;\n}\n\n.ion-float-start,\n[float-start] {\n  float: left !important;\n}\n\n[dir=rtl] .ion-float-start, :host-context([dir=rtl]) .ion-float-start, [dir=rtl] [float-start], :host-context([dir=rtl]) [float-start] {\n  float: right !important;\n}\n\n.ion-float-end,\n[float-end] {\n  float: right !important;\n}\n\n[dir=rtl] .ion-float-end, :host-context([dir=rtl]) .ion-float-end, [dir=rtl] [float-end], :host-context([dir=rtl]) [float-end] {\n  float: left !important;\n}\n\n@media (min-width: 576px) {\n  .ion-float-sm-left,\n[float-sm-left] {\n    float: left !important;\n  }\n\n  .ion-float-sm-right,\n[float-sm-right] {\n    float: right !important;\n  }\n\n  .ion-float-sm-start,\n[float-sm-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-sm-start, :host-context([dir=rtl]) .ion-float-sm-start, [dir=rtl] [float-sm-start], :host-context([dir=rtl]) [float-sm-start] {\n    float: right !important;\n  }\n\n  .ion-float-sm-end,\n[float-sm-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-sm-end, :host-context([dir=rtl]) .ion-float-sm-end, [dir=rtl] [float-sm-end], :host-context([dir=rtl]) [float-sm-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-float-md-left,\n[float-md-left] {\n    float: left !important;\n  }\n\n  .ion-float-md-right,\n[float-md-right] {\n    float: right !important;\n  }\n\n  .ion-float-md-start,\n[float-md-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-md-start, :host-context([dir=rtl]) .ion-float-md-start, [dir=rtl] [float-md-start], :host-context([dir=rtl]) [float-md-start] {\n    float: right !important;\n  }\n\n  .ion-float-md-end,\n[float-md-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-md-end, :host-context([dir=rtl]) .ion-float-md-end, [dir=rtl] [float-md-end], :host-context([dir=rtl]) [float-md-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-float-lg-left,\n[float-lg-left] {\n    float: left !important;\n  }\n\n  .ion-float-lg-right,\n[float-lg-right] {\n    float: right !important;\n  }\n\n  .ion-float-lg-start,\n[float-lg-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-lg-start, :host-context([dir=rtl]) .ion-float-lg-start, [dir=rtl] [float-lg-start], :host-context([dir=rtl]) [float-lg-start] {\n    float: right !important;\n  }\n\n  .ion-float-lg-end,\n[float-lg-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-lg-end, :host-context([dir=rtl]) .ion-float-lg-end, [dir=rtl] [float-lg-end], :host-context([dir=rtl]) [float-lg-end] {\n    float: left !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-float-xl-left,\n[float-xl-left] {\n    float: left !important;\n  }\n\n  .ion-float-xl-right,\n[float-xl-right] {\n    float: right !important;\n  }\n\n  .ion-float-xl-start,\n[float-xl-start] {\n    float: left !important;\n  }\n  [dir=rtl] .ion-float-xl-start, :host-context([dir=rtl]) .ion-float-xl-start, [dir=rtl] [float-xl-start], :host-context([dir=rtl]) [float-xl-start] {\n    float: right !important;\n  }\n\n  .ion-float-xl-end,\n[float-xl-end] {\n    float: right !important;\n  }\n  [dir=rtl] .ion-float-xl-end, :host-context([dir=rtl]) .ion-float-xl-end, [dir=rtl] [float-xl-end], :host-context([dir=rtl]) [float-xl-end] {\n    float: left !important;\n  }\n}\n\n.ion-text-center,\n[text-center] {\n  text-align: center !important;\n}\n\n.ion-text-justify,\n[text-justify] {\n  text-align: justify !important;\n}\n\n.ion-text-start,\n[text-start] {\n  text-align: start !important;\n}\n\n.ion-text-end,\n[text-end] {\n  text-align: end !important;\n}\n\n.ion-text-left,\n[text-left] {\n  text-align: left !important;\n}\n\n.ion-text-right,\n[text-right] {\n  text-align: right !important;\n}\n\n.ion-text-nowrap,\n[text-nowrap] {\n  white-space: nowrap !important;\n}\n\n.ion-text-wrap,\n[text-wrap] {\n  white-space: normal !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-center,\n[text-sm-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-sm-justify,\n[text-sm-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-sm-start,\n[text-sm-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-sm-end,\n[text-sm-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-sm-left,\n[text-sm-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-sm-right,\n[text-sm-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-sm-nowrap,\n[text-sm-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-sm-wrap,\n[text-sm-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-center,\n[text-md-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-md-justify,\n[text-md-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-md-start,\n[text-md-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-md-end,\n[text-md-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-md-left,\n[text-md-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-md-right,\n[text-md-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-md-nowrap,\n[text-md-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-md-wrap,\n[text-md-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-center,\n[text-lg-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-lg-justify,\n[text-lg-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-lg-start,\n[text-lg-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-lg-end,\n[text-lg-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-lg-left,\n[text-lg-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-lg-right,\n[text-lg-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-lg-nowrap,\n[text-lg-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-lg-wrap,\n[text-lg-wrap] {\n    white-space: normal !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-center,\n[text-xl-center] {\n    text-align: center !important;\n  }\n\n  .ion-text-xl-justify,\n[text-xl-justify] {\n    text-align: justify !important;\n  }\n\n  .ion-text-xl-start,\n[text-xl-start] {\n    text-align: start !important;\n  }\n\n  .ion-text-xl-end,\n[text-xl-end] {\n    text-align: end !important;\n  }\n\n  .ion-text-xl-left,\n[text-xl-left] {\n    text-align: left !important;\n  }\n\n  .ion-text-xl-right,\n[text-xl-right] {\n    text-align: right !important;\n  }\n\n  .ion-text-xl-nowrap,\n[text-xl-nowrap] {\n    white-space: nowrap !important;\n  }\n\n  .ion-text-xl-wrap,\n[text-xl-wrap] {\n    white-space: normal !important;\n  }\n}\n\n.ion-text-uppercase,\n[text-uppercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: uppercase !important;\n}\n\n.ion-text-lowercase,\n[text-lowercase] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: lowercase !important;\n}\n\n.ion-text-capitalize,\n[text-capitalize] {\n  /* stylelint-disable-next-line declaration-no-important */\n  text-transform: capitalize !important;\n}\n\n@media (min-width: 576px) {\n  .ion-text-sm-uppercase,\n[text-sm-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-sm-lowercase,\n[text-sm-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-sm-capitalize,\n[text-sm-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 768px) {\n  .ion-text-md-uppercase,\n[text-md-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-md-lowercase,\n[text-md-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-md-capitalize,\n[text-md-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 992px) {\n  .ion-text-lg-uppercase,\n[text-lg-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-lg-lowercase,\n[text-lg-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-lg-capitalize,\n[text-lg-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n@media (min-width: 1200px) {\n  .ion-text-xl-uppercase,\n[text-xl-uppercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: uppercase !important;\n  }\n\n  .ion-text-xl-lowercase,\n[text-xl-lowercase] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: lowercase !important;\n  }\n\n  .ion-text-xl-capitalize,\n[text-xl-capitalize] {\n    /* stylelint-disable-next-line declaration-no-important */\n    text-transform: capitalize !important;\n  }\n}\n\n.ion-align-self-start,\n[align-self-start] {\n  align-self: flex-start !important;\n}\n\n.ion-align-self-end,\n[align-self-end] {\n  align-self: flex-end !important;\n}\n\n.ion-align-self-center,\n[align-self-center] {\n  align-self: center !important;\n}\n\n.ion-align-self-stretch,\n[align-self-stretch] {\n  align-self: stretch !important;\n}\n\n.ion-align-self-baseline,\n[align-self-baseline] {\n  align-self: baseline !important;\n}\n\n.ion-align-self-auto,\n[align-self-auto] {\n  align-self: auto !important;\n}\n\n.ion-wrap,\n[wrap] {\n  flex-wrap: wrap !important;\n}\n\n.ion-nowrap,\n[nowrap] {\n  flex-wrap: nowrap !important;\n}\n\n.ion-wrap-reverse,\n[wrap-reverse] {\n  flex-wrap: wrap-reverse !important;\n}\n\n.ion-justify-content-start,\n[justify-content-start] {\n  -webkit-box-pack: start !important;\n          justify-content: flex-start !important;\n}\n\n.ion-justify-content-center,\n[justify-content-center] {\n  -webkit-box-pack: center !important;\n          justify-content: center !important;\n}\n\n.ion-justify-content-end,\n[justify-content-end] {\n  -webkit-box-pack: end !important;\n          justify-content: flex-end !important;\n}\n\n.ion-justify-content-around,\n[justify-content-around] {\n  justify-content: space-around !important;\n}\n\n.ion-justify-content-between,\n[justify-content-between] {\n  -webkit-box-pack: justify !important;\n          justify-content: space-between !important;\n}\n\n.ion-justify-content-evenly,\n[justify-content-evenly] {\n  -webkit-box-pack: space-evenly !important;\n          justify-content: space-evenly !important;\n}\n\n.ion-align-items-start,\n[align-items-start] {\n  -webkit-box-align: start !important;\n          align-items: flex-start !important;\n}\n\n.ion-align-items-center,\n[align-items-center] {\n  -webkit-box-align: center !important;\n          align-items: center !important;\n}\n\n.ion-align-items-end,\n[align-items-end] {\n  -webkit-box-align: end !important;\n          align-items: flex-end !important;\n}\n\n.ion-align-items-stretch,\n[align-items-stretch] {\n  -webkit-box-align: stretch !important;\n          align-items: stretch !important;\n}\n\n.ion-align-items-baseline,\n[align-items-baseline] {\n  -webkit-box-align: baseline !important;\n          align-items: baseline !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2NvcmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvY29yZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL3RoZW1lcy9pb25pYy5taXhpbnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvdGhlbWVzL2lvbmljLmdsb2JhbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUuaW9zLnZhcnMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY29tcG9uZW50cy9tZW51L21lbnUubWQudmFycy5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3Mvbm9ybWFsaXplLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL25vcm1hbGl6ZS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9zdHJ1Y3R1cmUuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3Mvc3RydWN0dXJlLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL3R5cG9ncmFwaHkuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdHlwb2dyYXBoeS5jc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvc3JjL2Nzcy9wYWRkaW5nLnNjc3MiLCJub2RlX21vZHVsZXMvQGlvbmljL2FuZ3VsYXIvY3NzL3BhZGRpbmcuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvZmxvYXQtZWxlbWVudHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxvYXQtZWxlbWVudHMuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC1hbGlnbm1lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvdGV4dC1hbGlnbm1lbnQuY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL3NyYy9jc3MvdGV4dC10cmFuc2Zvcm1hdGlvbi5zY3NzIiwibm9kZV9tb2R1bGVzL0Bpb25pYy9hbmd1bGFyL2Nzcy90ZXh0LXRyYW5zZm9ybWF0aW9uLmNzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9zcmMvY3NzL2ZsZXgtdXRpbHMuc2NzcyIsIm5vZGVfbW9kdWxlcy9AaW9uaWMvYW5ndWxhci9jc3MvZmxleC11dGlscy5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSw2RkFBQTtBQ1BGOztBRFNBO0VBQ0UsMERBQUE7QUNORjs7QURTQTtFQUNFLDBDQUFBO0FDTkY7O0FEU0E7RUFDRSx1Q0FBQTtBQ05GOztBRFNBO0VBQ0UsZ0JBQUE7QUNORjs7QURxQ0U7RUFUQSw4REFBQTtFQUNBLDJFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUN4QkY7O0FENEJFO0VBVEEsZ0VBQUE7RUFDQSw2RUFBQTtFQUNBLDBFQUFBO0VBQ0EsMkZBQUE7RUFDQSx1RUFBQTtFQUNBLHFFQUFBO0FDZkY7O0FEbUJFO0VBVEEsK0RBQUE7RUFDQSw0RUFBQTtFQUNBLHlFQUFBO0VBQ0EsMEZBQUE7RUFDQSxzRUFBQTtFQUNBLG9FQUFBO0FDTkY7O0FEVUU7RUFUQSw4REFBQTtFQUNBLDBFQUFBO0VBQ0Esd0VBQUE7RUFDQSx5RkFBQTtFQUNBLHFFQUFBO0VBQ0EsbUVBQUE7QUNHRjs7QURDRTtFQVRBLDhEQUFBO0VBQ0EsMEVBQUE7RUFDQSx3RUFBQTtFQUNBLHlGQUFBO0VBQ0EscUVBQUE7RUFDQSxtRUFBQTtBQ1lGOztBRFJFO0VBVEEsNkRBQUE7RUFDQSx5RUFBQTtFQUNBLHVFQUFBO0VBQ0Esd0ZBQUE7RUFDQSxvRUFBQTtFQUNBLGtFQUFBO0FDcUJGOztBRGpCRTtFQVRBLDREQUFBO0VBQ0EsMEVBQUE7RUFDQSxzRUFBQTtFQUNBLGlGQUFBO0VBQ0EsbUVBQUE7RUFDQSxpRUFBQTtBQzhCRjs7QUQxQkU7RUFUQSw2REFBQTtFQUNBLDJFQUFBO0VBQ0EsdUVBQUE7RUFDQSx3RkFBQTtFQUNBLG9FQUFBO0VBQ0Esa0VBQUE7QUN1Q0Y7O0FEbkNFO0VBVEEsMkRBQUE7RUFDQSxzRUFBQTtFQUNBLHFFQUFBO0VBQ0Esc0ZBQUE7RUFDQSxrRUFBQTtFQUNBLGdFQUFBO0FDZ0RGOztBRG5DQTtFRTZOTSxPRjVOdUI7RUU2TnZCLFFGN05pQjtFRXNQckIsTUZ0UGtCO0VFdVBsQixTRnZQd0I7RUFFeEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFFQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBRUEsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFVHekIrQjtBRitEakM7O0FEbkNBOzs7Ozs7Ozs7Ozs7Ozs7RUFlRSx5REFBQTtFQUNBLHdCQUFBO0FDc0NGOztBRG5DQTtFQUNFLFVBQUE7QUNzQ0Y7O0FEaENBO0VBQ0UsNkJBQUE7QUNtQ0Y7O0FEaENBO0VBQ0U7SUFDRSxpREFBQTtFQ21DRjtBQUNGOztBRC9CQTtFQUNFO0lBQ0Usa0RBQUE7SUFDQSx3REFBQTtJQUNBLG9EQUFBO0lBQ0Esc0RBQUE7RUNpQ0Y7QUFDRjs7QUQ5QkE7RUFDRTtJQUNFLDZDQUFBO0lBQ0EsbURBQUE7SUFDQSwrQ0FBQTtJQUNBLGlEQUFBO0VDZ0NGO0FBQ0Y7O0FEekJBO0VFaVZNLHlDQUFBO1VBQUEsaUNBQUE7QURyVE47O0FEeEJBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0VBSUEsb0JBQUE7QUN3QkY7O0FEckJBO0VBQ0UsMkNJM0krQjtBSG1LakM7O0FEckJBO0VBQ0UsMENJNUkrQjtBSG9LakM7O0FEakJBO0VBQ0UsOEVLMUo4QjtBSjhLaEM7O0FEakJBO0VBQ0UsOEVLOUo4QjtBSmtMaEM7O0FLcExBOzs7O0VBSUUsd0JBQUE7QUNORjs7QURXQTtFQUNFLGFBQUE7RUFFQSxTQUFBO0FDVEY7O0FEaUJBOztFQUVFLGlCQUFBO0FDZEY7O0FEc0JBO0VBQ0UsZUFBQTtFQUVBLFNBQUE7QUNwQkY7O0FEd0JBO0VBQ0UsZ0JBQUE7QUNyQkY7O0FENkJBO0VBQ0UsZ0JBQUE7QUMxQkY7O0FENkJBO0VBQ0UsV0FBQTtFQUVBLGVBQUE7RUFFQSx1QkFBQTtBQzVCRjs7QURnQ0E7RUFDRSxjQUFBO0FDN0JGOztBRGlDQTs7OztFQUlFLGlDQUFBO0VBQ0EsY0FBQTtBQzlCRjs7QUQ4Q0E7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0FDM0NGOztBRDhDQTtFQUNFLGNBQUE7RUFFQSxZQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7QUM3Q0Y7O0FEZ0RBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FENENBO0VBQ0UsaUJBQUE7QUM3Q0Y7O0FEZ0RBOzs7O0VBSUUsU0FBQTtFQUVBLGFBQUE7RUFDQSxjQUFBO0FDOUNGOztBRHNEQTs7O0VBR0UsZUFBQTtFQUVBLDBCQUFBO0FDcERGOztBRHdEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBa0JFLDBCQUFBO0FDckRGOztBRHdEQTs7RUFFRSxvQkFBQTtBQ3JERjs7QUR3REE7RUFDRSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBRUEsMEJBQUE7QUN0REY7O0FEeURBO0VBQ0UsZUFBQTtBQ3RERjs7QUQwREE7OztFQUdFLGVBQUE7QUN2REY7O0FEMkRBOztFQUVFLFVBQUE7RUFFQSxTQUFBO0FDekRGOztBRCtEQTs7RUFFRSxVQUFBO0VBRUEsc0JBQUE7QUM3REY7O0FEbUVBOztFQUVFLFlBQUE7QUNoRUY7O0FEc0VBOztFQUVFLHdCQUFBO0FDbkVGOztBRDJFQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7QUN4RUY7O0FEMkVBOztFQUVFLFVBQUE7QUN4RUY7O0FDeEpBO0VBQ0Usc0JBQUE7RUFFQSw2Q0FBQTtFQUNBLHdDQUFBO0VBQ0EsMkJBQUE7QUNURjs7QURZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBRUEsOEJBQUE7S0FBQSwyQkFBQTtNQUFBLDBCQUFBO1VBQUEsc0JBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFQUNFLGFBQUE7QUNWRjs7QURhQTtFTlNFLGtDQUFBO0VBQ0EsbUNBQUE7RUErSkUsY012S2M7RU53S2QsZU14S2M7RU40TWhCLGFNNU1nQjtFTjZNaEIsZ0JNN01nQjtFTnVLZCxlTXRLZTtFTnVLZixnQk12S2U7RU4yTWpCLGNNM01pQjtFTjRNakIsaUJNNU1pQjtFQUVqQixlQUFBO0VBRUEsV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQ0FBQTtFQUVBLGdCQUFBO0VBRUEsMEJBQUE7RUFFQSx1QkFBQTtFQUVBLHlCQUFBO0VBRUEscUJBQUE7RUFFQSwyQkFBQTtFQUVBLDhCQUFBO0tBQUEsMkJBQUE7TUFBQSwwQkFBQTtVQUFBLHNCQUFBO0FDYkY7O0FDZEE7RUFDRSxtQ0FBQTtBQzlCRjs7QURpQ0E7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0FDOUJGOztBRGlDQTs7Ozs7O0VSc01FLGdCUWhNZ0I7RVJpTWhCLG1CUWpNNEI7RUFFNUIsZ0JBeEM2QjtFQTBDN0IsZ0JBdkM2QjtBQ1EvQjs7QURrQ0E7RVJ5TEUsZ0JReExnQjtFQUVoQixlQTFDNkI7QUNTL0I7O0FEb0NBO0VSbUxFLGdCUWxMZ0I7RUFFaEIsZUE3QzZCO0FDVS9COztBRHNDQTtFQUNFLGVBOUM2QjtBQ1UvQjs7QUR1Q0E7RUFDRSxlQS9DNkI7QUNXL0I7O0FEdUNBO0VBQ0UsZUFoRDZCO0FDWS9COztBRHVDQTtFQUNFLGVBakQ2QjtBQ2EvQjs7QUR1Q0E7RUFDRSxjQUFBO0FDcENGOztBRHVDQTs7RUFFRSxrQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0VBRUEsd0JBQUE7QUN2Q0Y7O0FEMENBO0VBQ0UsV0FBQTtBQ3ZDRjs7QUQwQ0E7RUFDRSxlQUFBO0FDdkNGOztBQzlDQTs7RUFFRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFVm9MRSxlVWxMZTtFVm1MZixnQlVuTGU7RVZ1TmpCLGNVdk5pQjtFVndOakIsaUJVeE5pQjtBQ2JuQjs7QURnQkE7O0VBRUUseUNBQUE7RUFDQSx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RVY4S0Usc0NVbk1NO0VWb01OLHVDVXBNTTtFVm9PUixxQ1VwT1E7RVZxT1Isd0NVck9RO0FDWVY7O0FYMkxNO0VBQ0U7O0lBRUksbUJBQUE7SUFHQSxvQkFBQTtJQUdGLCtDVWhOQTtJVmlOQSw4Q1VqTkE7SVZrTkEsNkNVbE5BO0lWbU5BLDRDVW5OQTtFQ3NCUjtBQUNGOztBREdBOztFQUVFLHVDQUFBO0VWd01BLHFDVXBPUTtBQzZCVjs7QURJQTs7RUFFRSx5Q0FBQTtFVmdLRSxzQ1VuTU07QUNrQ1Y7O0FYcUtNO0VBQ0U7O0lBRUksbUJBQUE7SUFNRiwrQ1VoTkE7SVZpTkEsOENVak5BO0VDeUNSO0FBQ0Y7O0FERkE7O0VBRUUsdUNBQUE7RVYwSkUsdUNVcE1NO0FDZ0RWOztBWHVKTTtFQUNFOztJQUtJLG9CQUFBO0lBS0YsNkNVbE5BO0lWbU5BLDRDVW5OQTtFQ3VEUjtBQUNGOztBRFRBOztFQUVFLDBDQUFBO0VWb0xBLHdDVXJPUTtBQzhEVjs7QURSQTs7RUFFRSx1Q0FBQTtFQUNBLDBDQUFBO0VWMktBLHFDVXBPUTtFVnFPUix3Q1VyT1E7QUNxRVY7O0FEUEE7O0VBRUUseUNBQUE7RUFDQSx1Q0FBQTtFVmtJRSxzQ1VuTU07RVZvTU4sdUNVcE1NO0FDNEVWOztBWDJITTtFQUNFOztJQUVJLG1CQUFBO0lBR0Esb0JBQUE7SUFHRiwrQ1VoTkE7SVZpTkEsOENVak5BO0lWa05BLDZDVWxOQTtJVm1OQSw0Q1VuTkE7RUNzRlI7QUFDRjs7QURiQTs7RUFFRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RVZnSEUsY1U5R2M7RVYrR2QsZVUvR2M7RVZtSmhCLGFVbkpnQjtFVm9KaEIsZ0JVcEpnQjtBQ2tCbEI7O0FEZkE7O0VBRUUsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RVYwR0Usb0NVbE1LO0VWbU1MLHFDVW5NSztFVm1PUCxtQ1VuT087RVZvT1Asc0NVcE9PO0FDOEdUOztBWHdGTTtFQUNFOztJQUVJLGtCQUFBO0lBR0EsbUJBQUE7SUFHRiw2Q1UvTUQ7SVZnTkMsNENVaE5EO0lWaU5DLDJDVWpORDtJVmtOQywwQ1VsTkQ7RUN3SFA7QUFDRjs7QUQ1QkE7O0VBRUUscUNBQUE7RVZvSUEsbUNVbk9PO0FDK0hUOztBRDNCQTs7RUFFRSx1Q0FBQTtFVjRGRSxvQ1VsTUs7QUNvSVQ7O0FYa0VNO0VBQ0U7O0lBRUksa0JBQUE7SUFNRiw2Q1UvTUQ7SVZnTkMsNENVaE5EO0VDMklQO0FBQ0Y7O0FEakNBOztFQUVFLHFDQUFBO0VWc0ZFLHFDVW5NSztBQ2tKVDs7QVhvRE07RUFDRTs7SUFLSSxtQkFBQTtJQUtGLDJDVWpORDtJVmtOQywwQ1VsTkQ7RUN5SlA7QUFDRjs7QUR4Q0E7O0VBRUUsd0NBQUE7RVZnSEEsc0NVcE9PO0FDZ0tUOztBRHZDQTs7RUFFRSxxQ0FBQTtFQUNBLHdDQUFBO0VWdUdBLG1DVW5PTztFVm9PUCxzQ1VwT087QUN1S1Q7O0FEdENBOztFQUVFLHVDQUFBO0VBQ0EscUNBQUE7RVY4REUsb0NVbE1LO0VWbU1MLHFDVW5NSztBQzhLVDs7QVh3Qk07RUFDRTs7SUFFSSxrQkFBQTtJQUdBLG1CQUFBO0lBR0YsNkNVL01EO0lWZ05DLDRDVWhORDtJVmlOQywyQ1VqTkQ7SVZrTkMsMENVbE5EO0VDd0xQO0FBQ0Y7O0FDdExJOztFWmdYRSxzQkFBQTtBYTNYTjs7QURnQkk7O0VaMldFLHVCQUFBO0FhdFhOOztBRGdCSTs7RVp3VkUsc0JBQUE7QWFuV047O0FiZ0pXO0VBc05MLHVCQUFBO0FhbldOOztBRGFJOztFWjBWRSx1QkFBQTtBYWxXTjs7QWJ3SVc7RUE2Tkwsc0JBQUE7QWFsV047O0Fib0VJO0VZOUVBOztJWmdYRSxzQkFBQTtFYWhXSjs7RURYRTs7SVoyV0UsdUJBQUE7RWEzVko7O0VEWEU7O0lad1ZFLHNCQUFBO0VheFVKO0VicUhTO0lBc05MLHVCQUFBO0VheFVKOztFRGRFOztJWjBWRSx1QkFBQTtFYXZVSjtFYjZHUztJQTZOTCxzQkFBQTtFYXZVSjtBQUNGOztBYndDSTtFWTlFQTs7SVpnWEUsc0JBQUE7RWFyVUo7O0VEdENFOztJWjJXRSx1QkFBQTtFYWhVSjs7RUR0Q0U7O0lad1ZFLHNCQUFBO0VhN1NKO0ViMEZTO0lBc05MLHVCQUFBO0VhN1NKOztFRHpDRTs7SVowVkUsdUJBQUE7RWE1U0o7RWJrRlM7SUE2Tkwsc0JBQUE7RWE1U0o7QUFDRjs7QWJhSTtFWTlFQTs7SVpnWEUsc0JBQUE7RWExU0o7O0VEakVFOztJWjJXRSx1QkFBQTtFYXJTSjs7RURqRUU7O0lad1ZFLHNCQUFBO0VhbFJKO0ViK0RTO0lBc05MLHVCQUFBO0VhbFJKOztFRHBFRTs7SVowVkUsdUJBQUE7RWFqUko7RWJ1RFM7SUE2Tkwsc0JBQUE7RWFqUko7QUFDRjs7QWJkSTtFWTlFQTs7SVpnWEUsc0JBQUE7RWEvUUo7O0VENUZFOztJWjJXRSx1QkFBQTtFYTFRSjs7RUQ1RkU7O0lad1ZFLHNCQUFBO0VhdlBKO0Vib0NTO0lBc05MLHVCQUFBO0VhdlBKOztFRC9GRTs7SVowVkUsdUJBQUE7RWF0UEo7RWI0QlM7SUE2Tkwsc0JBQUE7RWF0UEo7QUFDRjs7QUN2SEk7O0VBRUUsNkJBQUE7QUNiTjs7QURnQkk7O0VBRUUsOEJBQUE7QUNiTjs7QURnQkk7O0VBRUUsNEJBQUE7QUNiTjs7QURnQkk7O0VBRUUsMEJBQUE7QUNiTjs7QURnQkk7O0VBRUUsMkJBQUE7QUNiTjs7QURnQkk7O0VBRUUsNEJBQUE7QUNiTjs7QURnQkk7O0VBRUUsOEJBQUE7QUNiTjs7QURnQkk7O0VBRUUsOEJBQUE7QUNiTjs7QWZzREk7RWM5RUE7O0lBRUUsNkJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDhCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw0QkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsMEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDJCQUFBO0VDNEJKOztFRHpCRTs7SUFFRSw0QkFBQTtFQzRCSjs7RUR6QkU7O0lBRUUsOEJBQUE7RUM0Qko7O0VEekJFOztJQUVFLDhCQUFBO0VDNEJKO0FBQ0Y7O0FmWUk7RWM5RUE7O0lBRUUsNkJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDhCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw0QkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsMEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDJCQUFBO0VDcUVKOztFRGxFRTs7SUFFRSw0QkFBQTtFQ3FFSjs7RURsRUU7O0lBRUUsOEJBQUE7RUNxRUo7O0VEbEVFOztJQUVFLDhCQUFBO0VDcUVKO0FBQ0Y7O0FmN0JJO0VjOUVBOztJQUVFLDZCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw4QkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsNEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDBCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSwyQkFBQTtFQzhHSjs7RUQzR0U7O0lBRUUsNEJBQUE7RUM4R0o7O0VEM0dFOztJQUVFLDhCQUFBO0VDOEdKOztFRDNHRTs7SUFFRSw4QkFBQTtFQzhHSjtBQUNGOztBZnRFSTtFYzlFQTs7SUFFRSw2QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsOEJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDRCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSwwQkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsMkJBQUE7RUN1Sko7O0VEcEpFOztJQUVFLDRCQUFBO0VDdUpKOztFRHBKRTs7SUFFRSw4QkFBQTtFQ3VKSjs7RURwSkU7O0lBRUUsOEJBQUE7RUN1Sko7QUFDRjs7QUM3TEk7O0VBRUUseURBQUE7RUFDQSxvQ0FBQTtBQ2JOOztBRGdCSTs7RUFFRSx5REFBQTtFQUNBLG9DQUFBO0FDYk47O0FEZ0JJOztFQUVFLHlEQUFBO0VBQ0EscUNBQUE7QUNiTjs7QWpCNEVJO0VnQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDTUo7O0VESEU7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQ01KOztFREhFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUNNSjtBQUNGOztBakJ3REk7RWdCOUVBOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUN5Qko7O0VEdEJFOztJQUVFLHlEQUFBO0lBQ0Esb0NBQUE7RUN5Qko7O0VEdEJFOztJQUVFLHlEQUFBO0lBQ0EscUNBQUE7RUN5Qko7QUFDRjs7QWpCcUNJO0VnQjlFQTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDNENKOztFRHpDRTs7SUFFRSx5REFBQTtJQUNBLG9DQUFBO0VDNENKOztFRHpDRTs7SUFFRSx5REFBQTtJQUNBLHFDQUFBO0VDNENKO0FBQ0Y7O0FqQmtCSTtFZ0I5RUE7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQytESjs7RUQ1REU7O0lBRUUseURBQUE7SUFDQSxvQ0FBQTtFQytESjs7RUQ1REU7O0lBRUUseURBQUE7SUFDQSxxQ0FBQTtFQytESjtBQUNGOztBQ3JGQTs7RUFFRSxpQ0FBQTtBQ1BGOztBRFVBOztFQUVFLCtCQUFBO0FDUEY7O0FEVUE7O0VBRUUsNkJBQUE7QUNQRjs7QURVQTs7RUFFRSw4QkFBQTtBQ1BGOztBRFVBOztFQUVFLCtCQUFBO0FDUEY7O0FEVUE7O0VBRUUsMkJBQUE7QUNQRjs7QURjQTs7RUFFRSwwQkFBQTtBQ1hGOztBRGNBOztFQUVFLDRCQUFBO0FDWEY7O0FEY0E7O0VBRUUsa0NBQUE7QUNYRjs7QURrQkE7O0VBRUUsa0NBQUE7VUFBQSxzQ0FBQTtBQ2ZGOztBRGtCQTs7RUFFRSxtQ0FBQTtVQUFBLGtDQUFBO0FDZkY7O0FEa0JBOztFQUVFLGdDQUFBO1VBQUEsb0NBQUE7QUNmRjs7QURrQkE7O0VBRUUsd0NBQUE7QUNmRjs7QURrQkE7O0VBRUUsb0NBQUE7VUFBQSx5Q0FBQTtBQ2ZGOztBRGtCQTs7RUFFRSx5Q0FBQTtVQUFBLHdDQUFBO0FDZkY7O0FEc0JBOztFQUVFLG1DQUFBO1VBQUEsa0NBQUE7QUNuQkY7O0FEc0JBOztFQUVFLG9DQUFBO1VBQUEsOEJBQUE7QUNuQkY7O0FEc0JBOztFQUVFLGlDQUFBO1VBQUEsZ0NBQUE7QUNuQkY7O0FEc0JBOztFQUVFLHFDQUFBO1VBQUEsK0JBQUE7QUNuQkY7O0FEc0JBOztFQUVFLHNDQUFBO1VBQUEsZ0NBQUE7QUNuQkYiLCJmaWxlIjoic3JjL2dsb2JhbC5zY3NzIn0= */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/theme/variables.scss ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/** Ionic CSS Variables **/\n:root {\n  /* Settings Fonts Size And Icon Size\r\n=======================================================\r\n=======================================================*/\n  --fallback-color: red;\n  --h1-font-size: 20px;\n  --h2-font-size: 18px;\n  --h3-font-size: 16px;\n  --h4-font-size: 15px;\n  --h5-font-size: 14px;\n  --h6-font-size: 12px;\n  --text-font-size: 14px;\n  /* Settings Fonts Size Icon\r\n=======================================================\r\n=======================================================*/\n  --icon-size-small: 20px;\n  --icon--size-medium: 32px;\n  --icon-size-large: 60px;\n  /* Settings Font Span\r\n=======================================================\r\n=======================================================*/\n  --span-size-small: 12px;\n  --span-size-medium: 24px;\n  --span-size-large: 30px; }\n/* SETTINGS TOOLBAR\r\n=======================================================\r\n=======================================================*/\n.header-md:after,\n.footer-md:before {\n  background-image: none !important; }\n/* INCLUDE FONTS\r\n=======================================================\r\n=======================================================*/\n@font-face {\n  font-family: 'Cairo Regular';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo Regular\"), url('Cairo-Regular.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: 'Cairo ExtraLight';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo ExtraLight\"), url('Cairo-ExtraLight.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: 'Cairo Light';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo Light\"), url('Cairo-Light.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: 'Cairo SemiBold';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo SemiBold\"), url('Cairo-SemiBold.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: 'Cairo Bold';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo Bold\"), url('Cairo-Bold.ttf') format(\"truetype\"); }\n@font-face {\n  font-family: 'Cairo Black';\n  font-style: normal;\n  font-weight: normal;\n  src: local(\"Cairo Black\"), url('Cairo-Black.ttf') format(\"truetype\"); }\n/* SETTINGS RTL STYLE\r\n=======================================================\r\n=======================================================*/\nhtml[dir=rtl] {\n  /* Settings Home page */\n  /* Settings Single page*/ }\nhtml[dir=rtl] page-home [background-size] [category],\n  html[dir=rtl] page-home [background-size] [wizard-title],\n  html[dir=rtl] page-home [background-size] ion-chip {\n    right: 16px;\n    left: auto; }\nhtml[dir=rtl] page-home [background-size] [bookmark] {\n    right: auto !important;\n    left: 0; }\nhtml[dir=rtl] page-home news-item-home [category] {\n    right: 8px;\n    left: auto !important; }\n* {\n  font-family: 'Cairo Regular';\n  letter-spacing: 0; }\n/* SETTINGS FONT SIZE\r\n=======================================================\r\n=======================================================*/\n[text-size-xl] {\n  font-size: var(--h1-font-size, 20px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-size-lg] {\n  font-size: var(--h2-font-size, 18px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-size-md] {\n  font-size: var(--h3-font-size, 16px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-size-xs] {\n  font-size: var(--h4-font-size, 14px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-size-sm] {\n  font-size: var(--h5-font-size, 15px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-size-p] {\n  font-size: var(--text-font-size, 14px) !important;\n  color: var(--alebaa-light, #09292e); }\n[text-nowrap] {\n  text-overflow: ellipsis;\n  overflow: hidden; }\npage-home .swiper-pagination.swiper-pagination-bullets {\n  bottom: 5px !important; }\npage-home .swiper-pagination.swiper-pagination-bullets .swiper-pagination-bullet-active {\n    --bullet-background: var(--alebaa-light, #09292e) !important;\n    background: var(--bullet-background); }\n/* SETTINGS BUTTON\r\n=======================================================\r\n=======================================================*/\n[default-button] {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--alebaa-light, #09292e);\n  --background-focused: var(--alebaa-danger, #0c896c);\n  --background-hover: var(--alebaa-danger, #0c896c);\n  --color: var(--alebaa-primary, #ffffff);\n  --ripple-color: transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  min-height: 45px;\n  text-transform: inherit; }\n[checkbox] {\n  --background-checked: var(--alebaa-danger, #0c896c);\n  --border-color-checked: var(--alebaa-danger, #0c896c); }\n/* SETTINGS CATEGORY\r\n=======================================================\r\n=======================================================*/\n[category] {\n  position: absolute;\n  top: 16px;\n  z-index: 999;\n  left: 16px;\n  border-radius: 4px;\n  background: var(--alebaa-danger, #0c896c);\n  padding: 5px;\n  font-size: 10px;\n  color: var(--alebaa-category, #fff); }\n/* SETTINGS COLOR BACKGROUND OUR APP\r\n=======================================================\r\n=======================================================*/\nion-content {\n  --background: var(--alebaa-backgroundColor, #ffffff); }\nion-list {\n  padding-top: 0 !important; }\nion-item {\n  --background: var(--alebaa-backgroundColor, #ffffff); }\nion-toolbar {\n  --background: var(--alebaa-toobarBackground, #ffffff);\n  --color: var(--alebaa-toobarButton, #AAB2B7); }\nion-toolbar ion-title {\n    --color: var(--alebaa-light, #09292e);\n    font-size: 16px; }\n/* SETTINGS CHIP\r\n=======================================================\r\n=======================================================*/\nion-chip {\n  --background: transparent;\n  margin: 0;\n  padding-top: 0;\n  -webkit-padding-start: 4px;\n  padding-inline-start: 4px;\n  -webkit-padding-end: 0px;\n          padding-inline-end: 0px; }\nion-chip .ripple-effect {\n    display: none !important; }\nion-chip ion-icon {\n    color: var(--alebaa-colorIcon, #CCCBDA); }\nion-chip ion-label {\n    color: var(--alebaa-colorIconText, #7F7E96) !important; }\n/* SETTINGS SEGMENT\r\n=======================================================\r\n=======================================================*/\nion-segment-button {\n  --background: var(--alebaa-toobarBackground, #ffffff);\n  --background-checked: var(--alebaa-toobarBackground, #ffffff);\n  --background-activated: var(--alebaa-toobarBackground, #ffffff);\n  --color: var(--alebaa-light, #09292e);\n  --color-checked: var(--alebaa-light, #09292e); }\n/* SETTINGS COLOR AND SIZE ICON\r\n=======================================================\r\n=======================================================*/\n[icon-small] {\n  color: var(--alebaa-colorIcon, #CCCBDA);\n  font-size: var(--icon-size-small, 20px); }\n/* Image\r\n=======================================================\r\n=======================================================*/\nimg {\n  -o-object-fit: cover;\n     object-fit: cover; }\n/* Settings bookmark\r\n=======================================================\r\n=======================================================*/\n[bookMark] ion-icon.active {\n  color: var(--alebaa-danger, #0c896c) !important; }\n/* Default Overview Ionic Section\r\n=======================================================\r\n=======================================================*/\n[background-size] {\n  background-size: cover !important;\n  background-position: center !important;\n  background-repeat: no-repeat !important; }\n[border-radius] {\n  border-radius: 4px; }\n[font-bold] {\n  font-weight: bold !important; }\n[no-box-shadow] {\n  box-shadow: none !important; }\n[box-shadow] {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15) !important;\n  z-index: 999; }\n[transparent] {\n  --background: transparent; }\n[clearfix] {\n  display: block;\n  clear: both; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9FOlxcSW5mb1xcUHJvamVjdHNcXEFsLUViYWFcXEFwcFxcYWxlYmFhLnR2L3NyY1xcdGhlbWVcXHZhcmlhYmxlcy5zY3NzIiwic3JjL3RoZW1lL3ZhcmlhYmxlcy5zY3NzIiwic3JjL3RoZW1lL0U6XFxJbmZvXFxQcm9qZWN0c1xcQWwtRWJhYVxcQXBwXFxhbGViYWEudHYvc3JjXFx0aGVtZVxcZm9udC5zY3NzIiwic3JjL3RoZW1lL0U6XFxJbmZvXFxQcm9qZWN0c1xcQWwtRWJhYVxcQXBwXFxhbGViYWEudHYvc3JjXFx0aGVtZVxccnRsLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsMEJBQUE7QUFDQTtFQUVBOzt3RENGd0Q7RURLdEQscUJBQWlCO0VBQ2pCLG9CQUFlO0VBQ2Ysb0JBQWU7RUFDZixvQkFBZTtFQUNmLG9CQUFlO0VBQ2Ysb0JBQWU7RUFDZixvQkFBZTtFQUNmLHNCQUFpQjtFQUVuQjs7d0RDSHdEO0VET3RELHVCQUFrQjtFQUNsQix5QkFBb0I7RUFDcEIsdUJBQWtCO0VBRXBCOzt3RENMd0Q7RURTdEQsdUJBQWtCO0VBQ2xCLHdCQUFtQjtFQUNuQix1QkFBa0IsRUFBQTtBQUlwQjs7d0RDUndEO0FEV3hEOztFQUVFLGlDQUFpQyxFQUFBO0FBR25DOzt3RENUd0Q7QUNuQ3hEO0VBQ0ksNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0VBQTZGLEVBQUE7QUFJN0Y7RUFDQSwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQiw4RUFBbUcsRUFBQTtBQUluRztFQUNBLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9FQUF5RixFQUFBO0FBSXpGO0VBQ0EsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEVBQStGLEVBQUE7QUFJL0Y7RUFDQSx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixrRUFBdUYsRUFBQTtBQUl2RjtFQUNBLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9FQUF5RixFQUFBO0FDNUM3Rjs7d0RGMEV3RDtBRXRFeEQ7RUFDRSx1QkFBQTtFQXNCQSx3QkFBQSxFQUF5QjtBQXZCM0I7OztJQU9RLFdBQVc7SUFDWCxVQUFVLEVBQUE7QUFSbEI7SUFZUSxzQkFBc0I7SUFDdEIsT0FBTyxFQUFBO0FBYmY7SUFrQlEsVUFBVTtJQUNWLHFCQUFxQixFQUFBO0FINEI3QjtFQUNFLDRCQUE0QjtFQUM1QixpQkFBaUIsRUFBQTtBQUduQjs7d0RDd0N3RDtBQUN4RDtFRHJDRSwrQ0FBK0M7RUFDL0MsbUNBQW1DLEVBQUE7QUN3Q3JDO0VEcENFLCtDQUErQztFQUMvQyxtQ0FBbUMsRUFBQTtBQ3VDckM7RURuQ0UsK0NBQStDO0VBQy9DLG1DQUFtQyxFQUFBO0FDc0NyQztFRGxDRSwrQ0FBK0M7RUFDL0MsbUNBQW1DLEVBQUE7QUNxQ3JDO0VEakNFLCtDQUErQztFQUMvQyxtQ0FBbUMsRUFBQTtBQ29DckM7RURoQ0UsaURBQWlEO0VBQ2pELG1DQUFtQyxFQUFBO0FDbUNyQztFRC9CRSx1QkFBdUI7RUFDdkIsZ0JBQWdCLEVBQUE7QUFHbEI7RUFFSSxzQkFBc0IsRUFBQTtBQUYxQjtJQUtNLDREQUFvQjtJQUNwQixvQ0FBb0MsRUFBQTtBQU8xQzs7d0RDMEJ3RDtBQUN4RDtFRHZCRSxtQkFBYztFQUNkLHNCQUFpQjtFQUNqQiwwQ0FBYTtFQUNiLG1EQUFxQjtFQUNyQixpREFBbUI7RUFDbkIsdUNBQVE7RUFDUiwyQkFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBO0FDMEJ6QjtFRHRCRSxtREFBcUI7RUFDbkIscURBQXVCLEVBQUE7QUFJM0I7O3dEQ3VCd0Q7QUFDeEQ7RURwQkUsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxZQUFZO0VBQ1osVUFBVTtFQUNWLGtCQUFrQjtFQUNsQix5Q0FBeUM7RUFDekMsWUFBWTtFQUNaLGVBQWU7RUFDZixtQ0FBbUMsRUFBQTtBQUdyQzs7d0RDc0J3RDtBRG5CeEQ7RUFDRSxvREFBYSxFQUFBO0FBR2Y7RUFDRSx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLG9EQUFhLEVBQUE7QUFHZjtFQUNFLHFEQUFhO0VBQ2IsNENBQVEsRUFBQTtBQUZWO0lBS0kscUNBQVE7SUFDUixlQUFlLEVBQUE7QUFLbkI7O3dEQ2V3RDtBRFp4RDtFQUNFLHlCQUFhO0VBQ2IsU0FBUztFQUNULGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQU56QjtJQVNJLHdCQUF3QixFQUFBO0FBVDVCO0lBYUksdUNBQXVDLEVBQUE7QUFiM0M7SUFnQkksc0RBQXNELEVBQUE7QUFJMUQ7O3dEQ1N3RDtBRE54RDtFQUNFLHFEQUFhO0VBQ2IsNkRBQXFCO0VBQ3JCLCtEQUF1QjtFQUN2QixxQ0FBUTtFQUNSLDZDQUFnQixFQUFBO0FBR2xCOzt3RENRd0Q7QUFDeEQ7RURMRSx1Q0FBdUM7RUFDdkMsdUNBQXVDLEVBQUE7QUFHekM7O3dEQ093RDtBREh4RDtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUIsRUFBQTtBQUduQjs7d0RDS3dEO0FBQ3hEO0VEQU0sK0NBQStDLEVBQUE7QUFLckQ7O3dEQ0F3RDtBQUN4RDtFREdFLGlDQUFpQztFQUNqQyxzQ0FBc0M7RUFDdEMsdUNBQXVDLEVBQUE7QUNBekM7RURJRSxrQkFBa0IsRUFBQTtBQ0RwQjtFREtFLDRCQUE0QixFQUFBO0FDRjlCO0VET0UsMkJBQTJCLEVBQUE7QUNKN0I7RURRRSxrREFBa0Q7RUFDbEQsWUFBWSxFQUFBO0FDTGQ7RURTRSx5QkFBYSxFQUFBO0FDTmY7RURVRSxjQUFjO0VBQ2QsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy90aGVtZS92YXJpYWJsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIElvbmljIFZhcmlhYmxlcyBhbmQgVGhlbWluZy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTpcclxuLy8gaHR0cDovL2lvbmljZnJhbWV3b3JrLmNvbS9kb2NzL3RoZW1pbmcvXHJcblxyXG4vKiogSW9uaWMgQ1NTIFZhcmlhYmxlcyAqKi9cclxuOnJvb3Qge1xyXG5cclxuLyogU2V0dGluZ3MgRm9udHMgU2l6ZSBBbmQgSWNvbiBTaXplXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbiAgLS1mYWxsYmFjay1jb2xvcjogcmVkO1xyXG4gIC0taDEtZm9udC1zaXplOiAyMHB4O1xyXG4gIC0taDItZm9udC1zaXplOiAxOHB4O1xyXG4gIC0taDMtZm9udC1zaXplOiAxNnB4O1xyXG4gIC0taDQtZm9udC1zaXplOiAxNXB4O1xyXG4gIC0taDUtZm9udC1zaXplOiAxNHB4O1xyXG4gIC0taDYtZm9udC1zaXplOiAxMnB4O1xyXG4gIC0tdGV4dC1mb250LXNpemU6IDE0cHg7XHJcblxyXG4vKiBTZXR0aW5ncyBGb250cyBTaXplIEljb25cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuXHJcbiAgLS1pY29uLXNpemUtc21hbGw6IDIwcHg7XHJcbiAgLS1pY29uLS1zaXplLW1lZGl1bTogMzJweDtcclxuICAtLWljb24tc2l6ZS1sYXJnZTogNjBweDtcclxuXHJcbi8qIFNldHRpbmdzIEZvbnQgU3BhblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuICAtLXNwYW4tc2l6ZS1zbWFsbDogMTJweDtcclxuICAtLXNwYW4tc2l6ZS1tZWRpdW06IDI0cHg7XHJcbiAgLS1zcGFuLXNpemUtbGFyZ2U6IDMwcHg7XHJcblxyXG59XHJcblxyXG4vKiBTRVRUSU5HUyBUT09MQkFSXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbi5oZWFkZXItbWQ6YWZ0ZXIsXHJcbi5mb290ZXItbWQ6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIElOQ0xVREUgRk9OVFNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuQGltcG9ydCBcImZvbnRlbGxvXCI7XHJcbkBpbXBvcnQgXCJmb250XCI7XHJcbkBpbXBvcnQgXCJydGxcIjtcclxuXHJcbioge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ2Fpcm8gUmVndWxhcic7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbn1cclxuXHJcbi8qIFNFVFRJTkdTIEZPTlQgU0laRVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5bdGV4dC1zaXplLXhsXSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1oMS1mb250LXNpemUsIDIwcHgpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XHJcbn1cclxuXHJcblt0ZXh0LXNpemUtbGddIHtcclxuICBmb250LXNpemU6IHZhcigtLWgyLWZvbnQtc2l6ZSwgMThweCkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcclxufVxyXG5cclxuW3RleHQtc2l6ZS1tZF0ge1xyXG4gIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplLCAxNnB4KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpO1xyXG59XHJcblxyXG5bdGV4dC1zaXplLXhzXSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1oNC1mb250LXNpemUsIDE0cHgpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XHJcbn1cclxuXHJcblt0ZXh0LXNpemUtc21dIHtcclxuICBmb250LXNpemU6IHZhcigtLWg1LWZvbnQtc2l6ZSwgMTVweCkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcclxufVxyXG5cclxuW3RleHQtc2l6ZS1wXSB7XHJcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWZvbnQtc2l6ZSwgMTRweCkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcclxufVxyXG5cclxuW3RleHQtbm93cmFwXSB7XHJcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxucGFnZS1ob21lIHtcclxuICAuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XHJcbiAgICBib3R0b206IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgICAgLS1idWxsZXQtYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKSAhaW1wb3J0YW50O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idWxsZXQtYmFja2dyb3VuZCk7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qIFNFVFRJTkdTIEJVVFRPTlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5bZGVmYXVsdC1idXR0b25dIHtcclxuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpO1xyXG4gIC0tYmFja2dyb3VuZC1mb2N1c2VkOiB2YXIoLS1hbGViYWEtZGFuZ2VyLCAjMGM4OTZjKTtcclxuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpO1xyXG4gIC0tY29sb3I6IHZhcigtLWFsZWJhYS1wcmltYXJ5LCAjZmZmZmZmKTtcclxuICAtLXJpcHBsZS1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWluLWhlaWdodDogNDVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcclxufVxyXG5cclxuW2NoZWNrYm94XSB7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpO1xyXG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogdmFyKC0tYWxlYmFhLWRhbmdlciwgIzBjODk2Yyk7XHJcbn1cclxuXHJcblxyXG4vKiBTRVRUSU5HUyBDQVRFR09SWVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5bY2F0ZWdvcnldIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxNnB4O1xyXG4gIHotaW5kZXg6IDk5OTtcclxuICBsZWZ0OiAxNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtZGFuZ2VyLCAjMGM4OTZjKTtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1hbGViYWEtY2F0ZWdvcnksICNmZmYpO1xyXG59XHJcblxyXG4vKiBTRVRUSU5HUyBDT0xPUiBCQUNLR1JPVU5EIE9VUiBBUFBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLWJhY2tncm91bmRDb2xvciwgI2ZmZmZmZik7XHJcbn1cclxuXHJcbmlvbi1saXN0IHtcclxuICBwYWRkaW5nLXRvcDogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtYmFja2dyb3VuZENvbG9yLCAjZmZmZmZmKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpO1xyXG4gIC0tY29sb3I6IHZhcigtLWFsZWJhYS10b29iYXJCdXR0b24sICNBQUIyQjcpO1xyXG5cclxuICBpb24tdGl0bGUge1xyXG4gICAgLS1jb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vKiBTRVRUSU5HUyBDSElQXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmlvbi1jaGlwIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nLXRvcDogMDtcclxuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDRweDtcclxuICBwYWRkaW5nLWlubGluZS1zdGFydDogNHB4O1xyXG4gIHBhZGRpbmctaW5saW5lLWVuZDogMHB4O1xyXG5cclxuICAucmlwcGxlLWVmZmVjdCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWxlYmFhLWNvbG9ySWNvbiwgI0NDQ0JEQSk7XHJcbiAgfVxyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWxlYmFhLWNvbG9ySWNvblRleHQsICM3RjdFOTYpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKiBTRVRUSU5HUyBTRUdNRU5UXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXHJcbmlvbi1zZWdtZW50LWJ1dHRvbiB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtdG9vYmFyQmFja2dyb3VuZCwgI2ZmZmZmZik7XHJcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWFsZWJhYS10b29iYXJCYWNrZ3JvdW5kLCAjZmZmZmZmKTtcclxuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1hbGViYWEtdG9vYmFyQmFja2dyb3VuZCwgI2ZmZmZmZik7XHJcbiAgLS1jb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcclxuICAtLWNvbG9yLWNoZWNrZWQ6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XHJcbn1cclxuXHJcbi8qIFNFVFRJTkdTIENPTE9SIEFORCBTSVpFIElDT05cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuW2ljb24tc21hbGxdIHtcclxuICBjb2xvcjogdmFyKC0tYWxlYmFhLWNvbG9ySWNvbiwgI0NDQ0JEQSk7XHJcbiAgZm9udC1zaXplOiB2YXIoLS1pY29uLXNpemUtc21hbGwsIDIwcHgpO1xyXG59XHJcblxyXG4vKiBJbWFnZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLyogU2V0dGluZ3MgYm9va21hcmtcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cclxuW2Jvb2tNYXJrXSB7XHJcbiAgaW9uLWljb24ge1xyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYWxlYmFhLWRhbmdlciwgIzBjODk2YykgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIERlZmF1bHQgT3ZlcnZpZXcgSW9uaWMgU2VjdGlvblxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5bYmFja2dyb3VuZC1zaXplXSB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuW2JvcmRlci1yYWRpdXNdIHtcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbltmb250LWJvbGRdIHtcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuW25vLWJveC1zaGFkb3ddIHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbltib3gtc2hhZG93XSB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG5bdHJhbnNwYXJlbnRde1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbltjbGVhcmZpeF0ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbiIsIi8qKiBJb25pYyBDU1MgVmFyaWFibGVzICoqL1xuOnJvb3Qge1xuICAvKiBTZXR0aW5ncyBGb250cyBTaXplIEFuZCBJY29uIFNpemVcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgLS1mYWxsYmFjay1jb2xvcjogcmVkO1xuICAtLWgxLWZvbnQtc2l6ZTogMjBweDtcbiAgLS1oMi1mb250LXNpemU6IDE4cHg7XG4gIC0taDMtZm9udC1zaXplOiAxNnB4O1xuICAtLWg0LWZvbnQtc2l6ZTogMTVweDtcbiAgLS1oNS1mb250LXNpemU6IDE0cHg7XG4gIC0taDYtZm9udC1zaXplOiAxMnB4O1xuICAtLXRleHQtZm9udC1zaXplOiAxNHB4O1xuICAvKiBTZXR0aW5ncyBGb250cyBTaXplIEljb25cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgLS1pY29uLXNpemUtc21hbGw6IDIwcHg7XG4gIC0taWNvbi0tc2l6ZS1tZWRpdW06IDMycHg7XG4gIC0taWNvbi1zaXplLWxhcmdlOiA2MHB4O1xuICAvKiBTZXR0aW5ncyBGb250IFNwYW5cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbiAgLS1zcGFuLXNpemUtc21hbGw6IDEycHg7XG4gIC0tc3Bhbi1zaXplLW1lZGl1bTogMjRweDtcbiAgLS1zcGFuLXNpemUtbGFyZ2U6IDMwcHg7IH1cblxuLyogU0VUVElOR1MgVE9PTEJBUlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmhlYWRlci1tZDphZnRlcixcbi5mb290ZXItbWQ6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZSAhaW1wb3J0YW50OyB9XG5cbi8qIElOQ0xVREUgRk9OVFNcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NhaXJvIFJlZ3VsYXInO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogbG9jYWwoXCJDYWlybyBSZWd1bGFyXCIpLCB1cmwoXCIuLi9hc3NldHMvZm9udC9DYWlyby9DYWlyby1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDYWlybyBFeHRyYUxpZ2h0JztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiQ2Fpcm8gRXh0cmFMaWdodFwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tRXh0cmFMaWdodC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ2Fpcm8gTGlnaHQnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogbG9jYWwoXCJDYWlybyBMaWdodFwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tTGlnaHQudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NhaXJvIFNlbWlCb2xkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiQ2Fpcm8gU2VtaUJvbGRcIiksIHVybChcIi4uL2Fzc2V0cy9mb250L0NhaXJvL0NhaXJvLVNlbWlCb2xkLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKTsgfVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDYWlybyBCb2xkJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBzcmM6IGxvY2FsKFwiQ2Fpcm8gQm9sZFwiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tQm9sZC50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIik7IH1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ2Fpcm8gQmxhY2snO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHNyYzogbG9jYWwoXCJDYWlybyBCbGFja1wiKSwgdXJsKFwiLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tQmxhY2sudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpOyB9XG5cbi8qIFNFVFRJTkdTIFJUTCBTVFlMRVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuaHRtbFtkaXI9cnRsXSB7XG4gIC8qIFNldHRpbmdzIEhvbWUgcGFnZSAqL1xuICAvKiBTZXR0aW5ncyBTaW5nbGUgcGFnZSovIH1cbiAgaHRtbFtkaXI9cnRsXSBwYWdlLWhvbWUgW2JhY2tncm91bmQtc2l6ZV0gW2NhdGVnb3J5XSxcbiAgaHRtbFtkaXI9cnRsXSBwYWdlLWhvbWUgW2JhY2tncm91bmQtc2l6ZV0gW3dpemFyZC10aXRsZV0sXG4gIGh0bWxbZGlyPXJ0bF0gcGFnZS1ob21lIFtiYWNrZ3JvdW5kLXNpemVdIGlvbi1jaGlwIHtcbiAgICByaWdodDogMTZweDtcbiAgICBsZWZ0OiBhdXRvOyB9XG4gIGh0bWxbZGlyPXJ0bF0gcGFnZS1ob21lIFtiYWNrZ3JvdW5kLXNpemVdIFtib29rbWFya10ge1xuICAgIHJpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMDsgfVxuICBodG1sW2Rpcj1ydGxdIHBhZ2UtaG9tZSBuZXdzLWl0ZW0taG9tZSBbY2F0ZWdvcnldIHtcbiAgICByaWdodDogOHB4O1xuICAgIGxlZnQ6IGF1dG8gIWltcG9ydGFudDsgfVxuXG4qIHtcbiAgZm9udC1mYW1pbHk6ICdDYWlybyBSZWd1bGFyJztcbiAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cblxuLyogU0VUVElOR1MgRk9OVCBTSVpFXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5bdGV4dC1zaXplLXhsXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDEtZm9udC1zaXplLCAyMHB4KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG5bdGV4dC1zaXplLWxnXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDItZm9udC1zaXplLCAxOHB4KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG5bdGV4dC1zaXplLW1kXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDMtZm9udC1zaXplLCAxNnB4KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG5bdGV4dC1zaXplLXhzXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDQtZm9udC1zaXplLCAxNHB4KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG5bdGV4dC1zaXplLXNtXSB7XG4gIGZvbnQtc2l6ZTogdmFyKC0taDUtZm9udC1zaXplLCAxNXB4KSAhaW1wb3J0YW50O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG5bdGV4dC1zaXplLXBdIHtcbiAgZm9udC1zaXplOiB2YXIoLS10ZXh0LWZvbnQtc2l6ZSwgMTRweCkgIWltcG9ydGFudDtcbiAgY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7IH1cblxuW3RleHQtbm93cmFwXSB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbnBhZ2UtaG9tZSAuc3dpcGVyLXBhZ2luYXRpb24uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cyB7XG4gIGJvdHRvbTogNXB4ICFpbXBvcnRhbnQ7IH1cbiAgcGFnZS1ob21lIC5zd2lwZXItcGFnaW5hdGlvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtbGlnaHQsICMwOTI5MmUpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnVsbGV0LWJhY2tncm91bmQpOyB9XG5cbi8qIFNFVFRJTkdTIEJVVFRPTlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuW2RlZmF1bHQtYnV0dG9uXSB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcbiAgLS1iYWNrZ3JvdW5kLWZvY3VzZWQ6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpO1xuICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpO1xuICAtLWNvbG9yOiB2YXIoLS1hbGViYWEtcHJpbWFyeSwgI2ZmZmZmZik7XG4gIC0tcmlwcGxlLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtaW4taGVpZ2h0OiA0NXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDsgfVxuXG5bY2hlY2tib3hdIHtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpO1xuICAtLWJvcmRlci1jb2xvci1jaGVja2VkOiB2YXIoLS1hbGViYWEtZGFuZ2VyLCAjMGM4OTZjKTsgfVxuXG4vKiBTRVRUSU5HUyBDQVRFR09SWVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuW2NhdGVnb3J5XSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICB6LWluZGV4OiA5OTk7XG4gIGxlZnQ6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLWRhbmdlciwgIzBjODk2Yyk7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWNhdGVnb3J5LCAjZmZmKTsgfVxuXG4vKiBTRVRUSU5HUyBDT0xPUiBCQUNLR1JPVU5EIE9VUiBBUFBcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtYmFja2dyb3VuZENvbG9yLCAjZmZmZmZmKTsgfVxuXG5pb24tbGlzdCB7XG4gIHBhZGRpbmctdG9wOiAwICFpbXBvcnRhbnQ7IH1cblxuaW9uLWl0ZW0ge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWFsZWJhYS1iYWNrZ3JvdW5kQ29sb3IsICNmZmZmZmYpOyB9XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1hbGViYWEtdG9vYmFyQmFja2dyb3VuZCwgI2ZmZmZmZik7XG4gIC0tY29sb3I6IHZhcigtLWFsZWJhYS10b29iYXJCdXR0b24sICNBQUIyQjcpOyB9XG4gIGlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gICAgLS1jb2xvcjogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTtcbiAgICBmb250LXNpemU6IDE2cHg7IH1cblxuLyogU0VUVElOR1MgQ0hJUFxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuaW9uLWNoaXAge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xuICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IDRweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDRweDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHg7IH1cbiAgaW9uLWNoaXAgLnJpcHBsZS1lZmZlY3Qge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICBpb24tY2hpcCBpb24taWNvbiB7XG4gICAgY29sb3I6IHZhcigtLWFsZWJhYS1jb2xvckljb24sICNDQ0NCREEpOyB9XG4gIGlvbi1jaGlwIGlvbi1sYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLWFsZWJhYS1jb2xvckljb25UZXh0LCAjN0Y3RTk2KSAhaW1wb3J0YW50OyB9XG5cbi8qIFNFVFRJTkdTIFNFR01FTlRcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbmlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpO1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogdmFyKC0tYWxlYmFhLXRvb2JhckJhY2tncm91bmQsICNmZmZmZmYpO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiB2YXIoLS1hbGViYWEtdG9vYmFyQmFja2dyb3VuZCwgI2ZmZmZmZik7XG4gIC0tY29sb3I6IHZhcigtLWFsZWJhYS1saWdodCwgIzA5MjkyZSk7XG4gIC0tY29sb3ItY2hlY2tlZDogdmFyKC0tYWxlYmFhLWxpZ2h0LCAjMDkyOTJlKTsgfVxuXG4vKiBTRVRUSU5HUyBDT0xPUiBBTkQgU0laRSBJQ09OXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5baWNvbi1zbWFsbF0ge1xuICBjb2xvcjogdmFyKC0tYWxlYmFhLWNvbG9ySWNvbiwgI0NDQ0JEQSk7XG4gIGZvbnQtc2l6ZTogdmFyKC0taWNvbi1zaXplLXNtYWxsLCAyMHB4KTsgfVxuXG4vKiBJbWFnZVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuaW1nIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7IH1cblxuLyogU2V0dGluZ3MgYm9va21hcmtcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbltib29rTWFya10gaW9uLWljb24uYWN0aXZlIHtcbiAgY29sb3I6IHZhcigtLWFsZWJhYS1kYW5nZXIsICMwYzg5NmMpICFpbXBvcnRhbnQ7IH1cblxuLyogRGVmYXVsdCBPdmVydmlldyBJb25pYyBTZWN0aW9uXHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5bYmFja2dyb3VuZC1zaXplXSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQgIWltcG9ydGFudDsgfVxuXG5bYm9yZGVyLXJhZGl1c10ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cblxuW2ZvbnQtYm9sZF0ge1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50OyB9XG5cbltuby1ib3gtc2hhZG93XSB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDsgfVxuXG5bYm94LXNoYWRvd10ge1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSkgIWltcG9ydGFudDtcbiAgei1pbmRleDogOTk5OyB9XG5cblt0cmFuc3BhcmVudF0ge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG5cbltjbGVhcmZpeF0ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY2xlYXI6IGJvdGg7IH1cbiIsIkBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybyBSZWd1bGFyJztcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBzcmM6IGxvY2FsKCdDYWlybyBSZWd1bGFyJyksIHVybCgnLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvIEV4dHJhTGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogbG9jYWwoJ0NhaXJvIEV4dHJhTGlnaHQnKSwgdXJsKCcuLi9hc3NldHMvZm9udC9DYWlyby9DYWlyby1FeHRyYUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8gTGlnaHQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogbG9jYWwoJ0NhaXJvIExpZ2h0JyksIHVybCgnLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tTGlnaHQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIEBmb250LWZhY2Uge1xyXG4gICAgZm9udC1mYW1pbHk6ICdDYWlybyBTZW1pQm9sZCc7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgc3JjOiBsb2NhbCgnQ2Fpcm8gU2VtaUJvbGQnKSwgdXJsKCcuLi9hc3NldHMvZm9udC9DYWlyby9DYWlyby1TZW1pQm9sZC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ0NhaXJvIEJvbGQnO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogbG9jYWwoJ0NhaXJvIEJvbGQnKSwgdXJsKCcuLi9hc3NldHMvZm9udC9DYWlyby9DYWlyby1Cb2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBAZm9udC1mYWNlIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8gQmxhY2snO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIHNyYzogbG9jYWwoJ0NhaXJvIEJsYWNrJyksIHVybCgnLi4vYXNzZXRzL2ZvbnQvQ2Fpcm8vQ2Fpcm8tQmxhY2sudHRmJykgZm9ybWF0KCd0cnVldHlwZScpO1xyXG4gICAgfSIsIi8qIFNFVFRJTkdTIFJUTCBTVFlMRVxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG5cclxuaHRtbFtkaXI9cnRsXSB7XHJcbiAgLyogU2V0dGluZ3MgSG9tZSBwYWdlICovXHJcbiAgcGFnZS1ob21lIHtcclxuICAgIFtiYWNrZ3JvdW5kLXNpemVdIHtcclxuICAgICAgW2NhdGVnb3J5XSxcclxuICAgICAgW3dpemFyZC10aXRsZV0sXHJcbiAgICAgIGlvbi1jaGlwIHtcclxuICAgICAgICByaWdodDogMTZweDtcclxuICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBbYm9va21hcmtdIHtcclxuICAgICAgICByaWdodDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIG5ld3MtaXRlbS1ob21lIHtcclxuICAgICAgW2NhdGVnb3J5XSB7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICBsZWZ0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLyogU2V0dGluZ3MgU2luZ2xlIHBhZ2UqL1xyXG4gIHNpbmdsZS1wYWdlIHtcclxuXHJcbiAgfVxyXG59XHJcbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./global.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/global.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/theme/variables.scss":
/*!**********************************!*\
  !*** ./src/theme/variables.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../../node_modules/postcss-loader/src??embedded!../../node_modules/sass-loader/lib/loader.js??ref--14-3!./variables.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/theme/variables.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!**********************************************************!*\
  !*** multi ./src/theme/variables.scss ./src/global.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\Info\Projects\Al-Ebaa\App\alebaa.tv\src\theme\variables.scss */"./src/theme/variables.scss");
module.exports = __webpack_require__(/*! E:\Info\Projects\Al-Ebaa\App\alebaa.tv\src\global.scss */"./src/global.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map