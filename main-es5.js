(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>gioi-thieu works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/gop-y/gop-y.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Common_Page/gop-y/gop-y.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>gop-y works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/hoi-dap/hoi-dap.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Common_Page/hoi-dap/hoi-dap.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>hoi-dap works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/lien-he/lien-he.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Common_Page/lien-he/lien-he.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>lien-he works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/danh-muc/danh-muc.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Home_Exam/danh-muc/danh-muc.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"id_ul\">\n  <li style=\"text-align:center\">\n    <a href=\"exam\">\n      <strong>Danh mục</strong>\n    </a>\n  </li>\n  <li\n    *ngFor=\"let subject of subjects\"\n    [class.selected]=\"subject === selectedSubject\">\n    <a href=\"exam/{{ subject.Id }}\" onclick=\"return TimeStart(new Date().getTime())\">{{ subject.Name }} </a>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/exam-detail/exam-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Home_Exam/exam-detail/exam-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"Exam\">\n  <div id=\"ExamLeft\">\n    <h3 style=\"border-bottom: 1px solid gray\" id=\"nQ\">\n      Câu hỏi số {{ curentPage + 1 }}\n    </h3>\n    <p id=\"Quiz\">{{ Question }}</p>\n    <h3 style=\"border-bottom: 1px solid gray\">Trả lời</h3>\n    <form id=\"Ans\">\n      <div *ngFor=\"let answer of Answers\">\n        <input type=\"radio\" name=\"answer\" value=\"{{ answer.Id }}\" />\n        {{ answer.Text }}\n      </div>\n    </form>\n    <ng-template [ngIf]=\"curentPage != 0\" [ngIfElse]=\"disLeft\">\n      <input (click)=\"navQuiz(curentPage - 1)\" type=\"button\" value=\"Trước\" />\n    </ng-template>\n    <ng-template #disLeft>\n      <input disable=\"disable\" type=\"button\" value=\"Trước\" />\n    </ng-template>\n    <ng-template [ngIf]=\"curentPage != Quizs.length - 1\" [ngIfElse]=\"disRight\">\n      <input (click)=\"navQuiz(curentPage + 1)\" type=\"button\" value=\"Sau\" />\n    </ng-template>\n    <ng-template #disRight>\n      <input disable=\"disable\" type=\"button\" value=\"Sau\" /> </ng-template\n    ><br />\n    <div>\n      <input\n        type=\"button\"\n        id=\"button\"\n        (click)=\"myFunction()\"\n        type=\"button\"\n        value=\"Nộp bài\"\n      />\n    </div>\n  </div>\n  <div id=\"ExamRight\">\n    <h2>\n      {{ subject.Name }}\n    </h2>\n    <!-- Display the countdown timer in an element -->\n<p id=\"demo\">Timer: 00:00</p>\n    \n    <div>\n      <input\n        *ngFor=\"let item of Quizs; let i = index\"\n        (click)=\"navQuiz(i)\"\n        style=\"color: #000;border: 1px solid red; width:70px; height: 30px; background-color: green; margin: 5px; padding: 5px; float: left;\"\n        value=\"Câu {{ i + 1 }}\"\n        type=\"button\"\n      />\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/exam/exam.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Home_Exam/exam/exam.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"id_ul\">\n  <li\n    *ngFor=\"let subject of subjects | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize\"\n    [class.selected]=\"subject === selectedSubject\">\n    <div class=\"card\">\n      <img src=\"../../../../assets/images/logos/{{ subject.Logo }}\" alt=\"\" style=\"width:100%\" />\n      <h5>{{ subject.Name }}</h5>\n      <p><a href=\"exam/{{ subject.Id }}\" onclick=\"return TimeStart(new Date().getTime())\">Quiz</a></p>\n    </div>\n  </li>\n</ul>\n<div id=\"pagination\">\n<ngb-pagination\n  [(page)]=\"page\"\n  [pageSize]=\"pageSize\"\n  [collectionSize]=\"subjects.length\"></ngb-pagination>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/change-inf/change-inf.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Manager_User/change-inf/change-inf.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>change-inf works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/change-password/change-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Manager_User/change-password/change-password.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>change-password works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/forgot-password/forgot-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Manager_User/forgot-password/forgot-password.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>forgot-password works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Manager_User/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>login works!</p>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/signup/signup.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/View/Manager_User/signup/signup.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>signup works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\n  <img src=\"../assets/images/banner.png\" alt=\"\" width=\"100%\" />\n</header>\n<nav>\n  <ul>\n    <li class=\"lileft\">\n      <a href=\"Home\">Trang chủ</a>\n    </li>\n    <li class=\"lileft\">\n      <a href=\"gioithieu\">Giới thiệu</a>\n    </li>\n    <li class=\"lileft\">\n      <a href=\"lienhe\">Liên hệ</a>\n    </li>\n    <li class=\"lileft\">\n      <a href=\"gopy\">Góp ý</a>\n    </li>\n    <li class=\"lileft\">\n      <a href=\"hoidap\">Hỏi đáp</a>\n    </li>\n    <li class=\"dropdown\">\n      <button class=\"dropbtn\">Tài khoản</button>\n      <div id=\"myDropdown\" class=\"dropdown-content\">\n        <a href=\"dangky\">Đăng ký</a>\n        <a href=\"dangnhap\">Đăng nhập</a>\n        <a href=\"quenmatkhau\" style=\"border-bottom: solid 1px gray\">Quên mật khẩu</a>\n        <a href=\"dangxuat\">Đăng xuất</a>\n        <a href=\"doimatkhau\">Đổi mật khẩu </a>\n        <a href=\"capnhap\">Cập nhật tài khoản</a>\n      </div>\n    </li>\n  </ul>\n</nav>\n<article>\n  <aside id=\"aside\">\n    <app-danh-muc></app-danh-muc>\n  </aside>\n  <section id=\"section\">\n    <router-outlet></router-outlet>\n  </section>\n</article>\n<footer></footer>"

/***/ }),

/***/ "./src/app/Service/quiz.service.ts":
/*!*****************************************!*\
  !*** ./src/app/Service/quiz.service.ts ***!
  \*****************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getJSON = function (id) {
        return this.http.get("../../assets/db/Quizs/" + id + ".js");
    };
    QuizService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/Service/subject.service.ts":
/*!********************************************!*\
  !*** ./src/app/Service/subject.service.ts ***!
  \********************************************/
/*! exports provided: SubjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectService", function() { return SubjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SubjectService = /** @class */ (function () {
    function SubjectService(http) {
        this.http = http;
        this.getJSON().subscribe(function (data) {
            console.log(data);
        });
    }
    SubjectService.prototype.getJSON = function () {
        return this.http.get("../../assets/db/Subjects.js");
    };
    SubjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    SubjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], SubjectService);
    return SubjectService;
}());



/***/ }),

/***/ "./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvQ29tbW9uX1BhZ2UvZ2lvaS10aGlldS9naW9pLXRoaWV1LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.ts ***!
  \*********************************************************************/
/*! exports provided: GioiThieuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GioiThieuComponent", function() { return GioiThieuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GioiThieuComponent = /** @class */ (function () {
    function GioiThieuComponent() {
    }
    GioiThieuComponent.prototype.ngOnInit = function () {
    };
    GioiThieuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gioi-thieu',
            template: __webpack_require__(/*! raw-loader!./gioi-thieu.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.html"),
            styles: [__webpack_require__(/*! ./gioi-thieu.component.css */ "./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.css")]
        })
    ], GioiThieuComponent);
    return GioiThieuComponent;
}());



/***/ }),

/***/ "./src/app/View/Common_Page/gop-y/gop-y.component.css":
/*!************************************************************!*\
  !*** ./src/app/View/Common_Page/gop-y/gop-y.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvQ29tbW9uX1BhZ2UvZ29wLXkvZ29wLXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/View/Common_Page/gop-y/gop-y.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/View/Common_Page/gop-y/gop-y.component.ts ***!
  \***********************************************************/
/*! exports provided: GopYComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GopYComponent", function() { return GopYComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GopYComponent = /** @class */ (function () {
    function GopYComponent() {
    }
    GopYComponent.prototype.ngOnInit = function () {
    };
    GopYComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gop-y',
            template: __webpack_require__(/*! raw-loader!./gop-y.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/gop-y/gop-y.component.html"),
            styles: [__webpack_require__(/*! ./gop-y.component.css */ "./src/app/View/Common_Page/gop-y/gop-y.component.css")]
        })
    ], GopYComponent);
    return GopYComponent;
}());



/***/ }),

/***/ "./src/app/View/Common_Page/hoi-dap/hoi-dap.component.css":
/*!****************************************************************!*\
  !*** ./src/app/View/Common_Page/hoi-dap/hoi-dap.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvQ29tbW9uX1BhZ2UvaG9pLWRhcC9ob2ktZGFwLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/View/Common_Page/hoi-dap/hoi-dap.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/View/Common_Page/hoi-dap/hoi-dap.component.ts ***!
  \***************************************************************/
/*! exports provided: HoiDapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoiDapComponent", function() { return HoiDapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HoiDapComponent = /** @class */ (function () {
    function HoiDapComponent() {
    }
    HoiDapComponent.prototype.ngOnInit = function () {
    };
    HoiDapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hoi-dap',
            template: __webpack_require__(/*! raw-loader!./hoi-dap.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/hoi-dap/hoi-dap.component.html"),
            styles: [__webpack_require__(/*! ./hoi-dap.component.css */ "./src/app/View/Common_Page/hoi-dap/hoi-dap.component.css")]
        })
    ], HoiDapComponent);
    return HoiDapComponent;
}());



/***/ }),

/***/ "./src/app/View/Common_Page/lien-he/lien-he.component.css":
/*!****************************************************************!*\
  !*** ./src/app/View/Common_Page/lien-he/lien-he.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvQ29tbW9uX1BhZ2UvbGllbi1oZS9saWVuLWhlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/View/Common_Page/lien-he/lien-he.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/View/Common_Page/lien-he/lien-he.component.ts ***!
  \***************************************************************/
/*! exports provided: LienHeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LienHeComponent", function() { return LienHeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LienHeComponent = /** @class */ (function () {
    function LienHeComponent() {
    }
    LienHeComponent.prototype.ngOnInit = function () {
    };
    LienHeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lien-he',
            template: __webpack_require__(/*! raw-loader!./lien-he.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Common_Page/lien-he/lien-he.component.html"),
            styles: [__webpack_require__(/*! ./lien-he.component.css */ "./src/app/View/Common_Page/lien-he/lien-he.component.css")]
        })
    ], LienHeComponent);
    return LienHeComponent;
}());



/***/ }),

/***/ "./src/app/View/Home_Exam/danh-muc/danh-muc.component.css":
/*!****************************************************************!*\
  !*** ./src/app/View/Home_Exam/danh-muc/danh-muc.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  #id_ul {\n    list-style-type: none;\n    margin: 0;\n    padding: 1em;\n    background-color: #f1f1f1;\n  }\n  \n  #id_li a {\n    display: block;\n    color: #000;\n    text-decoration: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlldy9Ib21lX0V4YW0vZGFuaC1tdWMvZGFuaC1tdWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiRUFBRTtJQUNFLHFCQUFxQjtJQUNyQixTQUFTO0lBQ1QsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvVmlldy9Ib21lX0V4YW0vZGFuaC1tdWMvZGFuaC1tdWMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgI2lkX3VsIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICB9XG4gIFxuICAjaWRfbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/View/Home_Exam/danh-muc/danh-muc.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/View/Home_Exam/danh-muc/danh-muc.component.ts ***!
  \***************************************************************/
/*! exports provided: DanhMucComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DanhMucComponent", function() { return DanhMucComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Service/subject.service */ "./src/app/Service/subject.service.ts");



var DanhMucComponent = /** @class */ (function () {
    function DanhMucComponent(subjectService) {
        this.subjectService = subjectService;
    }
    DanhMucComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getJSON().subscribe(function (data) {
            _this.subjects = data;
            console.log(data);
        });
    };
    DanhMucComponent.prototype.onSelect = function (subject) {
        this.selectedSubject = subject;
    };
    DanhMucComponent.ctorParameters = function () { return [
        { type: _Service_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }
    ]; };
    DanhMucComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-danh-muc',
            template: __webpack_require__(/*! raw-loader!./danh-muc.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/danh-muc/danh-muc.component.html"),
            styles: [__webpack_require__(/*! ./danh-muc.component.css */ "./src/app/View/Home_Exam/danh-muc/danh-muc.component.css")]
        })
    ], DanhMucComponent);
    return DanhMucComponent;
}());



/***/ }),

/***/ "./src/app/View/Home_Exam/exam-detail/exam-detail.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/View/Home_Exam/exam-detail/exam-detail.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#Exam{\n    clear: both;\n    display: block;\n}\n\n#ExamLeft{\n    float: left;\n    width: 70%;\n    display: table-cell;\n}\n\n#ExamRigh{\n    width: 30%;\n    display: table-cell;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlldy9Ib21lX0V4YW0vZXhhbS1kZXRhaWwvZXhhbS1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvVmlldy9Ib21lX0V4YW0vZXhhbS1kZXRhaWwvZXhhbS1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNFeGFte1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jRXhhbUxlZnR7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuXG4jRXhhbVJpZ2h7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/View/Home_Exam/exam-detail/exam-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/View/Home_Exam/exam-detail/exam-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExamDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamDetailComponent", function() { return ExamDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Service_quiz_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../Service/quiz.service */ "./src/app/Service/quiz.service.ts");
/* harmony import */ var _Service_subject_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../Service/subject.service */ "./src/app/Service/subject.service.ts");






var ExamDetailComponent = /** @class */ (function () {
    function ExamDetailComponent(route, quizService, location, subjectService) {
        this.route = route;
        this.quizService = quizService;
        this.location = location;
        this.subjectService = subjectService;
        this.curentPage = 0;
        this.PAns = {};
    }
    ExamDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getQuiz();
        this.Timer = new Date();
        this.subjectService.getJSON().subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                if (data[i].Id == _this.curentQuizId) {
                    _this.subject = data[i];
                    break;
                }
            }
            console.log(_this.subject);
        });
    };
    ExamDetailComponent.prototype.getQuiz = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get("id");
        this.curentQuizId = id;
        this.quizService.getJSON(id.toString()).subscribe(function (quizs) {
            _this.Quizs = quizs;
            _this.curentQuiz = _this.Quizs[_this.curentPage];
            _this.Question = _this.curentQuiz.Text;
            _this.Answers = _this.curentQuiz.Answers;
        });
    };
    ExamDetailComponent.prototype.myFunction = function () { };
    ExamDetailComponent.prototype.navQuiz = function (i) {
        var cQ = document.getElementById("Quiz");
        var Az = document.getElementById("Ans");
        var nQ = document.getElementById("nQ");
        var Opt = Az.children;
        for (var k = 0; k < Opt.length; k++) {
            var para = Opt[k].children[0];
            if (para.checked) {
                var key = this.curentQuiz.Id.toString();
                var value = para.value.toString();
                this.PAns[key] = value;
            }
        }
        this.curentPage = i;
        this.curentQuiz = this.Quizs[i];
        this.Answers = this.curentQuiz.Answers;
        var ans = Array.of(this.Answers);
        var res = document.createElement("form");
        res.id = "Ans";
        for (var k = 0; k < ans.length; k++) {
            var div = document.createElement("div");
            var para = new HTMLInputElement();
            var key = this.curentQuiz.Id.toString();
            para.type = "radio";
            para.value = ans[k]['Id'];
            if (this.PAns[key] != undefined)
                para.checked = (this.PAns[key].toString() == ans[k]['Id'].toString());
            console.log(this.PAns);
            if (para.checked)
                console.log(ans[k]['Text']);
            div.appendChild(para);
            div.textContent = ans[k]['Text'];
            res.appendChild(div);
        }
        cQ.innerHTML = this.curentQuiz.Text;
        nQ.innerHTML = "Câu hỏi số " + (i + 1);
        Az = res;
    };
    ExamDetailComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _Service_quiz_service__WEBPACK_IMPORTED_MODULE_4__["QuizService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
        { type: _Service_subject_service__WEBPACK_IMPORTED_MODULE_5__["SubjectService"] }
    ]; };
    ExamDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-exam-detail",
            template: __webpack_require__(/*! raw-loader!./exam-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/exam-detail/exam-detail.component.html"),
            styles: [__webpack_require__(/*! ./exam-detail.component.css */ "./src/app/View/Home_Exam/exam-detail/exam-detail.component.css")]
        })
    ], ExamDetailComponent);
    return ExamDetailComponent;
}());



/***/ }),

/***/ "./src/app/View/Home_Exam/exam/exam.component.css":
/*!********************************************************!*\
  !*** ./src/app/View/Home_Exam/exam/exam.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "li {\n    list-style: none;\n    float: left;\n    width: 200px;\n    height: 300px;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n    margin: 1em;\n    padding: 1em;\n}\n.card {\n    text-align: center;\n    font-family: arial;\n  }\n.card a {\n    border: none;\n    outline: 0;\n    padding: 12px;\n    color: white;\n    background-color: #000;\n    text-align: center;\n    cursor: pointer;\n    width: 100%;\n    font-size: 15px;\n  }\n.card a:hover {\n    opacity: 0.7;\n  }\n#pagination{\n      clear: both;\n      text-align: center;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVmlldy9Ib21lX0V4YW0vZXhhbS9leGFtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7RUFDZDtBQUVBO01BQ0ksV0FBVztNQUNYLGtCQUFrQjtFQUN0QiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvSG9tZV9FeGFtL2V4YW0vZXhhbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGkge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIG1hcmdpbjogMWVtO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cbi5jYXJkIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICB9XG4gIFxuICAuY2FyZCBhIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogMDtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICB9XG4gIFxuICAuY2FyZCBhOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjc7XG4gIH1cblxuICAjcGFnaW5hdGlvbntcbiAgICAgIGNsZWFyOiBib3RoO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/View/Home_Exam/exam/exam.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/View/Home_Exam/exam/exam.component.ts ***!
  \*******************************************************/
/*! exports provided: ExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamComponent", function() { return ExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_subject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Service/subject.service */ "./src/app/Service/subject.service.ts");



var ExamComponent = /** @class */ (function () {
    function ExamComponent(subjectService) {
        this.subjectService = subjectService;
        this.page = 1;
        this.pageSize = 5;
    }
    ExamComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subjectService.getJSON().subscribe(function (data) {
            _this.subjects = data;
            console.log(data);
        });
    };
    ExamComponent.prototype.onSelect = function (subject) {
        this.selectedSubject = subject;
    };
    ExamComponent.ctorParameters = function () { return [
        { type: _Service_subject_service__WEBPACK_IMPORTED_MODULE_2__["SubjectService"] }
    ]; };
    ExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exam',
            template: __webpack_require__(/*! raw-loader!./exam.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Home_Exam/exam/exam.component.html"),
            styles: [__webpack_require__(/*! ./exam.component.css */ "./src/app/View/Home_Exam/exam/exam.component.css")]
        })
    ], ExamComponent);
    return ExamComponent;
}());



/***/ }),

/***/ "./src/app/View/Manager_User/change-inf/change-inf.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/View/Manager_User/change-inf/change-inf.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvTWFuYWdlcl9Vc2VyL2NoYW5nZS1pbmYvY2hhbmdlLWluZi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/View/Manager_User/change-inf/change-inf.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/View/Manager_User/change-inf/change-inf.component.ts ***!
  \**********************************************************************/
/*! exports provided: ChangeInfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeInfComponent", function() { return ChangeInfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangeInfComponent = /** @class */ (function () {
    function ChangeInfComponent() {
    }
    ChangeInfComponent.prototype.ngOnInit = function () {
    };
    ChangeInfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-inf',
            template: __webpack_require__(/*! raw-loader!./change-inf.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/change-inf/change-inf.component.html"),
            styles: [__webpack_require__(/*! ./change-inf.component.css */ "./src/app/View/Manager_User/change-inf/change-inf.component.css")]
        })
    ], ChangeInfComponent);
    return ChangeInfComponent;
}());



/***/ }),

/***/ "./src/app/View/Manager_User/change-password/change-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/View/Manager_User/change-password/change-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvTWFuYWdlcl9Vc2VyL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/View/Manager_User/change-password/change-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/View/Manager_User/change-password/change-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/View/Manager_User/change-password/change-password.component.css")]
        })
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/View/Manager_User/forgot-password/forgot-password.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/View/Manager_User/forgot-password/forgot-password.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvTWFuYWdlcl9Vc2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/View/Manager_User/forgot-password/forgot-password.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/View/Manager_User/forgot-password/forgot-password.component.ts ***!
  \********************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/View/Manager_User/forgot-password/forgot-password.component.css")]
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/View/Manager_User/login/login.component.css":
/*!*************************************************************!*\
  !*** ./src/app/View/Manager_User/login/login.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvTWFuYWdlcl9Vc2VyL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/View/Manager_User/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/View/Manager_User/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/View/Manager_User/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/View/Manager_User/signup/signup.component.css":
/*!***************************************************************!*\
  !*** ./src/app/View/Manager_User/signup/signup.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL1ZpZXcvTWFuYWdlcl9Vc2VyL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/View/Manager_User/signup/signup.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/View/Manager_User/signup/signup.component.ts ***!
  \**************************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/index.js!./src/app/View/Manager_User/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/View/Manager_User/signup/signup.component.css")]
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _View_Manager_User_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./View/Manager_User/login/login.component */ "./src/app/View/Manager_User/login/login.component.ts");
/* harmony import */ var _View_Common_Page_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./View/Common_Page/gioi-thieu/gioi-thieu.component */ "./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _View_Common_Page_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./View/Common_Page/lien-he/lien-he.component */ "./src/app/View/Common_Page/lien-he/lien-he.component.ts");
/* harmony import */ var _View_Common_Page_gop_y_gop_y_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View/Common_Page/gop-y/gop-y.component */ "./src/app/View/Common_Page/gop-y/gop-y.component.ts");
/* harmony import */ var _View_Common_Page_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./View/Common_Page/hoi-dap/hoi-dap.component */ "./src/app/View/Common_Page/hoi-dap/hoi-dap.component.ts");
/* harmony import */ var _View_Home_Exam_exam_exam_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./View/Home_Exam/exam/exam.component */ "./src/app/View/Home_Exam/exam/exam.component.ts");
/* harmony import */ var _View_Home_Exam_exam_detail_exam_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./View/Home_Exam/exam-detail/exam-detail.component */ "./src/app/View/Home_Exam/exam-detail/exam-detail.component.ts");










var routes = [
    { path: 'login', component: _View_Manager_User_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'gioithieu', component: _View_Common_Page_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_4__["GioiThieuComponent"] },
    { path: 'lienhe', component: _View_Common_Page_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_5__["LienHeComponent"] },
    { path: 'gopy', component: _View_Common_Page_gop_y_gop_y_component__WEBPACK_IMPORTED_MODULE_6__["GopYComponent"] },
    { path: 'hoidap', component: _View_Common_Page_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_7__["HoiDapComponent"] },
    { path: 'exam', component: _View_Home_Exam_exam_exam_component__WEBPACK_IMPORTED_MODULE_8__["ExamComponent"] },
    { path: 'exam/:id', component: _View_Home_Exam_exam_detail_exam_detail_component__WEBPACK_IMPORTED_MODULE_9__["ExamDetailComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  /* Dropdown Button */\n.dropbtn {\n  background-color: rgb(42, 120, 139);\n  color: white;\n  padding: 10px;\n  font-size: 16px;\n  border: none;\n}\n/* The container <div> - needed to position the dropdown content */\n.dropdown {\n  position: relative;\n  display: inline-block;\n  float: right;\n  margin-right: 5%;\n}\n/* Dropdown Content (Hidden by Default) */\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n/* Links inside the dropdown */\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n/* Change color of dropdown links on hover */\n.dropdown-content a:hover {background-color: #ddd;}\n/* Show the dropdown menu on hover */\n.dropdown:hover .dropdown-content {display: block;}\n/* Change the background color of the dropdown button when the dropdown content is shown */\n.dropdown:hover .dropbtn {background-color: #223c92;}\n.show {display: block;}\nul {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    background-color: white;\n  }\n.lileft {\n    float: left;\n  }\n.lileft a {\n    display: block;\n    color:black;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n  }\n.lileft a:hover {\n    background-color :#ddd;\n  }\n/* Change the link color on hover */\narticle{\n  clear: both;\n  display: block;\n}\n#aside{\n  clear: both;\n  float: left;\n  width: 25%;\n  display: table-cell;\n}\n#section{\n  clear: both;\n  width: 65%;\n  display: table-cell;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFLG9CQUFvQjtBQUN0QjtFQUNFLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQSx5Q0FBeUM7QUFDekM7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsNENBQTRDO0VBQzVDLFVBQVU7QUFDWjtBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQSw0Q0FBNEM7QUFDNUMsMkJBQTJCLHNCQUFzQixDQUFDO0FBRWxELG9DQUFvQztBQUNwQyxtQ0FBbUMsY0FBYyxDQUFDO0FBRWxELDBGQUEwRjtBQUMxRiwwQkFBMEIseUJBQXlCLENBQUM7QUFFbEQsT0FBTyxjQUFjLENBQUM7QUFFdEI7SUFDRSxxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7RUFDekI7QUFFQTtJQUNFLFdBQVc7RUFDYjtBQUVBO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QjtBQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBRUEsbUNBQW1DO0FBRXJDO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAvKiBEcm9wZG93biBCdXR0b24gKi9cbi5kcm9wYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCAxMjAsIDEzOSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cbi5kcm9wZG93biB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNSU7XG59XG5cbi8qIERyb3Bkb3duIENvbnRlbnQgKEhpZGRlbiBieSBEZWZhdWx0KSAqLyBcbi5kcm9wZG93bi1jb250ZW50IHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xuICBtaW4td2lkdGg6IDE2MHB4O1xuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgei1pbmRleDogMTtcbn1cblxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xuLmRyb3Bkb3duLWNvbnRlbnQgYSB7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cbi5kcm9wZG93bi1jb250ZW50IGE6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxuXG4vKiBTaG93IHRoZSBkcm9wZG93biBtZW51IG9uIGhvdmVyICovXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge2Rpc3BsYXk6IGJsb2NrO31cblxuLyogQ2hhbmdlIHRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBkcm9wZG93biBidXR0b24gd2hlbiB0aGUgZHJvcGRvd24gY29udGVudCBpcyBzaG93biAqL1xuLmRyb3Bkb3duOmhvdmVyIC5kcm9wYnRuIHtiYWNrZ3JvdW5kLWNvbG9yOiAjMjIzYzkyO31cbiAgXG4gIC5zaG93IHtkaXNwbGF5OiBibG9jazt9XG5cbiAgdWwge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmxpbGVmdCB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gIH1cbiAgXG4gIC5saWxlZnQgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6YmxhY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5saWxlZnQgYTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvciA6I2RkZDtcbiAgfVxuXG4gIC8qIENoYW5nZSB0aGUgbGluayBjb2xvciBvbiBob3ZlciAqL1xuIFxuYXJ0aWNsZXtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4jYXNpZGV7XG4gIGNsZWFyOiBib3RoO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDI1JTtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbn1cblxuI3NlY3Rpb257XG4gIGNsZWFyOiBib3RoO1xuICB3aWR0aDogNjUlO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Online-Training';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _View_Manager_User_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./View/Manager_User/login/login.component */ "./src/app/View/Manager_User/login/login.component.ts");
/* harmony import */ var _View_Manager_User_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./View/Manager_User/signup/signup.component */ "./src/app/View/Manager_User/signup/signup.component.ts");
/* harmony import */ var _View_Manager_User_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./View/Manager_User/forgot-password/forgot-password.component */ "./src/app/View/Manager_User/forgot-password/forgot-password.component.ts");
/* harmony import */ var _View_Manager_User_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./View/Manager_User/change-password/change-password.component */ "./src/app/View/Manager_User/change-password/change-password.component.ts");
/* harmony import */ var _View_Manager_User_change_inf_change_inf_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./View/Manager_User/change-inf/change-inf.component */ "./src/app/View/Manager_User/change-inf/change-inf.component.ts");
/* harmony import */ var _View_Common_Page_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./View/Common_Page/gioi-thieu/gioi-thieu.component */ "./src/app/View/Common_Page/gioi-thieu/gioi-thieu.component.ts");
/* harmony import */ var _View_Common_Page_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./View/Common_Page/lien-he/lien-he.component */ "./src/app/View/Common_Page/lien-he/lien-he.component.ts");
/* harmony import */ var _View_Common_Page_gop_y_gop_y_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./View/Common_Page/gop-y/gop-y.component */ "./src/app/View/Common_Page/gop-y/gop-y.component.ts");
/* harmony import */ var _View_Common_Page_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./View/Common_Page/hoi-dap/hoi-dap.component */ "./src/app/View/Common_Page/hoi-dap/hoi-dap.component.ts");
/* harmony import */ var _View_Home_Exam_danh_muc_danh_muc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./View/Home_Exam/danh-muc/danh-muc.component */ "./src/app/View/Home_Exam/danh-muc/danh-muc.component.ts");
/* harmony import */ var _View_Home_Exam_exam_exam_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./View/Home_Exam/exam/exam.component */ "./src/app/View/Home_Exam/exam/exam.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _View_Home_Exam_exam_detail_exam_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./View/Home_Exam/exam-detail/exam-detail.component */ "./src/app/View/Home_Exam/exam-detail/exam-detail.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _View_Manager_User_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _View_Manager_User_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"],
                _View_Manager_User_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                _View_Manager_User_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
                _View_Manager_User_change_inf_change_inf_component__WEBPACK_IMPORTED_MODULE_9__["ChangeInfComponent"],
                _View_Common_Page_gioi_thieu_gioi_thieu_component__WEBPACK_IMPORTED_MODULE_10__["GioiThieuComponent"],
                _View_Common_Page_lien_he_lien_he_component__WEBPACK_IMPORTED_MODULE_11__["LienHeComponent"],
                _View_Common_Page_gop_y_gop_y_component__WEBPACK_IMPORTED_MODULE_12__["GopYComponent"],
                _View_Common_Page_hoi_dap_hoi_dap_component__WEBPACK_IMPORTED_MODULE_13__["HoiDapComponent"],
                _View_Home_Exam_danh_muc_danh_muc_component__WEBPACK_IMPORTED_MODULE_14__["DanhMucComponent"],
                _View_Home_Exam_exam_exam_component__WEBPACK_IMPORTED_MODULE_15__["ExamComponent"],
                _View_Home_Exam_exam_detail_exam_detail_component__WEBPACK_IMPORTED_MODULE_18__["ExamDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/chinhcong/Intake-09/FrontEnd/Bootstrap_AngularJS_Assignment/Online-Training/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map