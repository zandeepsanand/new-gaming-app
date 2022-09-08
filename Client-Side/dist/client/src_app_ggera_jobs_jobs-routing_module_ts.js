"use strict";
(self["webpackChunkclient"] = self["webpackChunkclient"] || []).push([["src_app_ggera_jobs_jobs-routing_module_ts"],{

/***/ 6106:
/*!***************************************************!*\
  !*** ./src/app/ggera/jobs/jobs-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobsRoutingModule": () => (/* binding */ JobsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _step1_step1_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./step1/step1.component */ 9156);
/* harmony import */ var _step2_step2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./step2/step2.component */ 5517);
/* harmony import */ var _step3_step3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./step3/step3.component */ 7860);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






const routes = [
    { path: "step-1", component: _step1_step1_component__WEBPACK_IMPORTED_MODULE_0__.Step1Component },
    { path: "step-2", component: _step2_step2_component__WEBPACK_IMPORTED_MODULE_1__.Step2Component },
    { path: "step-3", component: _step3_step3_component__WEBPACK_IMPORTED_MODULE_2__.Step3Component },
    { path: "", redirectTo: "step-1", pathMatch: "full" },
];
class JobsRoutingModule {
}
JobsRoutingModule.ɵfac = function JobsRoutingModule_Factory(t) { return new (t || JobsRoutingModule)(); };
JobsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: JobsRoutingModule });
JobsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](JobsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 9156:
/*!*****************************************************!*\
  !*** ./src/app/ggera/jobs/step1/step1.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Step1Component": () => (/* binding */ Step1Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Step1Component {
    constructor() { }
    ngOnInit() {
    }
}
Step1Component.ɵfac = function Step1Component_Factory(t) { return new (t || Step1Component)(); };
Step1Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step1Component, selectors: [["app-step1"]], decls: 8, vars: 0, consts: [[1, "stepper"], [1, "heading"], [1, "content"], [1, "drop-down"]], template: function Step1Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Please note that we do work with residence and citizens of Crime region, Cuba, Iran, North Korea, Syria, Eastern Ukraine and Transnistria ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Cuba ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".stepper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n}\n.stepper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: #ff7019;\n  font-size: 5rem;\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border: 1px solid #913c0d;\n  background-color: rgba(145, 60, 13, 0.4);\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBSUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBRFI7QUFKUTtFQUNJLGVBQUE7QUFNWiIsImZpbGUiOiJzdGVwMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBjb2xvcjogI2ZmNzAxOTtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MTNjMGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICM5MTNjMGQsICRhbHBoYTogMC40KTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ }),

/***/ 5517:
/*!*****************************************************!*\
  !*** ./src/app/ggera/jobs/step2/step2.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Step2Component": () => (/* binding */ Step2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Step2Component {
    constructor() { }
    ngOnInit() {
    }
}
Step2Component.ɵfac = function Step2Component_Factory(t) { return new (t || Step2Component)(); };
Step2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step2Component, selectors: [["app-step2"]], decls: 15, vars: 0, consts: [[1, "stepper"], [1, "heading"], [1, "content"]], template: function Step2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your Country");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "ul")(5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1. You can verify instantly via your gaming platform or manually with some additional details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "2. We will very that you are the account owner and check your tracker / API statistics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3. If your stats meet the requirement, you will automatically get access to the order dashboard and knowledge base");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Good Luck!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Select the game in which you have the highest KD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".stepper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n}\n.stepper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: #ff7019;\n  font-size: 5rem;\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border: 1px solid #913c0d;\n  background-color: rgba(145, 60, 13, 0.4);\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBRVI7QUFEUTtFQUNJLGVBQUE7QUFHWjtBQURRO0VBQ0ksZUFBQTtBQUdaIiwiZmlsZSI6InN0ZXAyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmhlYWRpbmcge1xyXG4gICAgICAgIGNvbG9yOiAjZmY3MDE5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzkxM2MwZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzkxM2MwZCwgJGFscGhhOiAwLjQpO1xyXG4gICAgICAgIHVsIGxpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 7860:
/*!*****************************************************!*\
  !*** ./src/app/ggera/jobs/step3/step3.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Step3Component": () => (/* binding */ Step3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class Step3Component {
    constructor() { }
    ngOnInit() {
    }
}
Step3Component.ɵfac = function Step3Component_Factory(t) { return new (t || Step3Component)(); };
Step3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Step3Component, selectors: [["app-step3"]], decls: 6, vars: 0, consts: [[1, "stepper"], [1, "heading"], [1, "content"]], template: function Step3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Thank You");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We are reviewing your request. It usually takes no more than 2 days. Once the decision is made you will receive the details via discord. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: [".stepper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: start;\n  flex-direction: column;\n}\n.stepper[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  color: #ff7019;\n  font-size: 5rem;\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 1rem 2rem;\n  border: 1px solid #913c0d;\n  background-color: rgba(145, 60, 13, 0.4);\n}\n.stepper[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0ZXAzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFFUjtBQUFJO0VBSUksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0FBRFI7QUFKUTtFQUNJLGVBQUE7QUFNWiIsImZpbGUiOiJzdGVwMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIC5oZWFkaW5nIHtcclxuICAgICAgICBjb2xvcjogI2ZmNzAxOTtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAycmVtO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5MTNjMGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICM5MTNjMGQsICRhbHBoYTogMC40KTtcclxuICAgIH1cclxufSJdfQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_ggera_jobs_jobs-routing_module_ts.js.map