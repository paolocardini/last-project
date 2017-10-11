webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li {\n  list-style: none;\n}\n\n\n nav{\n   height: 80px;\n   background-color: rgba(101, 47, 79, 0.93);\n   background: url('https://epicattorneymarketing.com/wp-content/uploads/2015/10/zoom-mic-music-wallpaper-desktop-background-music-picture-music-wallpaper-1.jpg');\n   background-size: cover;\n\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n<nav>\n  <div class=\"nav-wrapper\">\n    <a [routerLink]=\"['/']\" class=\"brand-logo\">HOME</a>\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a *ngIf='user' [routerLink]=\"['/user']\">USER-PROFILE</a></li>\n      <li><a *ngIf='!user' [routerLink]=\"['/login']\">LOGIN</a></li>\n      <li><a *ngIf='!user' [routerLink]=\"['/signup']\">SIGNUP</a></li>\n      <li><a *ngIf='user' (click)=\"auth.logout().subscribe()\" [routerLink]=\"['/home']\"> LOGOUT </a></li>\n    </ul>\n  </div>\n</nav> -->\n\n\n<nav>\n  <div class=\" nav-wrapper text-lighten-4\">\n    <a [routerLink]=\"['/']\" class=\"brand-logo\"><img id =\"logo\"src=\"\" alt=\"\">HOME</a>\n    <a href=\"#\" materialize=\"button-collapse\" data-activates=\"mobile-demo\" class=\"button-collapse\"><i class=\"material-icons\">menu</i></a>\n    <ul *ngIf=\"!user\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/login']\"><i class=\"material-icons left\">perm_identity</i>Log-In</a></li>\n      <li><a [routerLink]=\"['/signup']\"><i class=\"material-icons left\">input</i>Sign-Up</a></li>\n    </ul>\n    <ul *ngIf=\"user\" class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/user']\"><i class=\"material-icons left\">perm_identity</i>MY-PAGE</a></li>\n      <li><a (click)=\"auth.logout().subscribe()\" [routerLink]=\"['/home']\"><i class=\"material-icons left\">exit_to_app</i>Logout</a></li>\n    </ul>\n    <ul class=\"side-nav\" id=\"mobile-demo\">\n      <ul *ngIf=\"!user\">\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li><a [routerLink]=\"['/login']\"><i class=\"material-icons left\">perm_identity</i>Log-In</a></li>\n        <li><a [routerLink]=\"['/signup']\"><i class=\"material-icons left\">input</i>Sign-Up</a></li>\n      </ul>\n      <ul *ngIf=\"user\">\n        <li><a [routerLink]=\"['/']\">Home</a></li>\n        <li><a [routerLink]=\"['/']\"><i class=\"material-icons left\">perm_identity</i>{{ user.username }} </a></li>\n        <li><a (click)=\"auth.logout().subscribe()\" [routerLink]=\"['/home']\"><i class=\"material-icons left\">exit_to_app</i>Logout</a></li>\n      </ul>\n    </ul>\n  </div>\n</nav>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.title = 'band-pocket';
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    AppComponent.prototype.ngOnInit = function () {
        $(".button-collapse").sideNav();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_list_profile_list_component__ = __webpack_require__("../../../../../src/app/profile-list/profile-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__create_profile_create_profile_component__ = __webpack_require__("../../../../../src/app/create-profile/create-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_instrument_service__ = __webpack_require__("../../../../../src/app/services/instrument.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__routes__ = __webpack_require__("../../../../../src/app/routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__message_musicians_message_musicians_component__ = __webpack_require__("../../../../../src/app/message-musicians/message-musicians.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Packages

// My components






// Services






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__loginform_loginform_component__["a" /* LoginformComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__userprofile_userprofile_component__["a" /* UserprofileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__signupform_signupform_component__["a" /* SignupformComponent */],
            __WEBPACK_IMPORTED_MODULE_12__create_profile_create_profile_component__["a" /* CreateInstrumentProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_11__profile_list_profile_list_component__["a" /* ProfileListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__message_musicians_message_musicians_component__["a" /* MessageMusiciansComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_17__routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyDPLpdo62Gii7eEBdUk8qXmA2x6YVN0bNI'
            })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_16__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */],
            __WEBPACK_IMPORTED_MODULE_15__services_instrument_service__["a" /* InstrumentService */],
            __WEBPACK_IMPORTED_MODULE_14__services_user_service__["a" /* UserService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_0__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/create-profile/create-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".addForm {\n\n  width: 700px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-profile/create-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"addForm\">\n  <h2> Add Instrument Profile </h2>\n  <label>EXPERIENCE</label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.experience\" name=\"experience\" />\n  <br>\n  <label>DESCRIPTION</label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.description\" name=\"description\" />\n  <br>\n  <label>STYLE</label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.style\" name=\"style\" />\n  <br>\n  <label>INSTRUMENT</label>\n  <input type=\"text\" [(ngModel)]=\"formInfo.instrument\" name=\"instrument\" />\n  <!-- <form action=\"#\">\n    <div class=\"file-field input-field\">\n      <div class=\"btn\">\n        <span>PHOTO</span>\n        <input type=\"file\" multiple>\n        <i class=\"material-icons right\">add_a_photo</i>\n      </div>\n      <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\n      </div>\n    </div>\n  </form>\n  <form action=\"#\">\n    <div class=\"file-field input-field\">\n      <div class=\"btn\">\n        <span>AUDIO</span>\n        <input type=\"file\" multiple>\n        <i class=\"material-icons right\">audiotrack</i>\n      </div>\n      <div class=\"file-path-wrapper\">\n        <input class=\"file-path validate\" type=\"text\" placeholder=\"Upload one or more files\">\n      </div>\n    </div>\n  </form> -->\n  <button (click)=\"createInstrumentProfile()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">CREATE-INSTRUMENT-PROFILE\n    <i class=\"material-icons right\">send</i>\n  </button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/create-profile/create-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__ = __webpack_require__("../../../../../src/app/services/instrument.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateInstrumentProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateInstrumentProfileComponent = (function () {
    function CreateInstrumentProfileComponent(http, router, inst) {
        this.http = http;
        this.router = router;
        this.inst = inst;
        this.formInfo = {
            experience: "",
            description: "",
            style: "",
            instrument: ""
        };
    }
    CreateInstrumentProfileComponent.prototype.ngOnInit = function () {
    };
    CreateInstrumentProfileComponent.prototype.createInstrumentProfile = function () {
        var _this = this;
        var _a = this.formInfo, experience = _a.experience, description = _a.description, style = _a.style, instrument = _a.instrument;
        if (experience != "" && description != "" && style != "" && instrument != "") {
            console.log("create instrument profile with " + experience + " " + description + " " + style + " " + instrument);
            this.inst.createInstrumentProfile(experience, description, style, instrument)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/user']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return CreateInstrumentProfileComponent;
}());
CreateInstrumentProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-create-profile',
        template: __webpack_require__("../../../../../src/app/create-profile/create-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-profile/create-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__["a" /* InstrumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__["a" /* InstrumentService */]) === "function" && _c || Object])
], CreateInstrumentProfileComponent);

var _a, _b, _c;
//# sourceMappingURL=create-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title{\n  background-color: green;\n  text-align: center;\n}\n\n\n\n{\n  background-color: rgba(204, 160, 15, 0.94);\n  height: 150px;\n  width: 2000px;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<div class=\"\">\n    <div class=\"logo\"></div>\n</div>\n\n\n<div class=\"parallax-container\">\n  <div class=\"parallax\"><img src=\"http://warp.la/wp-content/uploads/2017/02/music-wallpaper-16.jpg\" heigth=\"500px\"></div>\n</div>\n<div class=\"section white\" id = \"container\">\n  <div class=\"row container\">\n    <h2 class=\"header\">MY-BAND-POCKET</h2>\n    <p class=\"grey-text text-darken-3 lighten-3\">My Band Pocket is the only one application tha allows you to keep in touch with every musician in the world!</p>\n  </div>\n</div>\n<div class=\"parallax-container\">\n  <div class=\"parallax\"><img src=\"https://cdn.allwallpaper.in/wallpapers/1680x1050/14165/audio-jack-1680x1050-wallpaper.jpg\" heigth=\"500px\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.parallax').parallax();
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n@font-face {\n  font-family: \"Material-Design-Icons\";\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.woff2\") format(\"woff2\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.woff\") format(\"woff\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.ttf\") format(\"truetype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.svg#Material-Design-Icons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n\n  [class^=\"mdi-\"], [class*=\" mdi-\"] {\n    font-family: \"Material-Design-Icons\";\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    text-rendering: auto;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n\n\n\n\n\n\n\n\n\n\n\n.mdi-action-perm-identity:before {\ncontent: \"\\E650\"; }\n\n.mdi-communication-vpn-key:before {\ncontent: \"\\E6FA\"; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col s12 m12 l6\">\n  <div class=\"card-panel\">\n    <h4 class=\"header2\">Login</h4>\n\n    <div class=\"row\">\n\n      <form class=\"col s12 right-alert\">\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <i class=\"mdi-action-perm-identity prefix\"></i>\n            <input id=\"first_input2\" class=\"validate\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\">\n            <label for=\"first_input2\" data-error=\"Please enter username.\" data-success=\"Perfect!\">Username</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <i class=\"mdi-communication-vpn-key prefix\"></i>\n            <input id=\"password2\" type=\"password\" class=\"validate\" [(ngModel)]=\"formInfo.password\" name=\"password\">\n            <label for=\"password2\">Password</label>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"input-field col s12\">\n            <button (click)=\"login()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n                                 <i class=\"material-icons right\">send</i>\n                               </button>\n          </div>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/loginform/loginform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginformComponent = (function () {
    function LoginformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            username: "",
            password: ""
        };
    }
    LoginformComponent.prototype.ngOnInit = function () {
    };
    LoginformComponent.prototype.login = function () {
        var _this = this;
        var _a = this.formInfo, username = _a.username, password = _a.password;
        if (username != "" && password != "") {
            console.log("Login with " + username + " " + password);
            this.auth.login(username, password)
                .map(function (user) { return console.log(user); })
                .subscribe(function (user) { return _this.router.navigate(['/user']); });
        }
        else {
            console.log("You must set a username and a password");
        }
    };
    return LoginformComponent;
}());
LoginformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-loginform',
        template: __webpack_require__("../../../../../src/app/loginform/loginform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/loginform/loginform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginformComponent);

var _a, _b;
//# sourceMappingURL=loginform.component.js.map

/***/ }),

/***/ "../../../../../src/app/message-musicians/message-musicians.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-musicians/message-musicians.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  message-musicians works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/message-musicians/message-musicians.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageMusiciansComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageMusiciansComponent = (function () {
    function MessageMusiciansComponent() {
    }
    MessageMusiciansComponent.prototype.ngOnInit = function () {
    };
    return MessageMusiciansComponent;
}());
MessageMusiciansComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-message-musicians',
        template: __webpack_require__("../../../../../src/app/message-musicians/message-musicians.component.html"),
        styles: [__webpack_require__("../../../../../src/app/message-musicians/message-musicians.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MessageMusiciansComponent);

//# sourceMappingURL=message-musicians.component.js.map

/***/ }),

/***/ "../../../../../src/app/profile-list/profile-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile-user {\n  margin: 30px;\n}\n\n\n.profile-music {\n  margin: 20px;\n  height: 200px;\n  width: 300px;\n  border: 4px solid green;\n  border-radius: 5%;\n  box-shadow: 10px 10px 5px black;\n\n\n}\n\nagm-map {\n  width: 100px;\n}\n\n.map-container{\n\n  height: 200px;\n  width: 200px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile-list/profile-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col s12 m6\">\n    <div class=\"card blue-grey darken-1\">\n      <div class=\"card-content white-text\">\n\n        <div *ngFor='let profile of userProfileList' class=\"profile-user\">\n          <span class=\"card-title\">{{ profile.username }}</span>\n          <div *ngFor=\"let instrument of profile.profile\">\n            <p>I PLAY : {{instrument.instrument}}</p>\n            <p>STYLE OF MUSIC : {{instrument.style}}</p>\n            <p>MY EXPERIENCE : {{instrument.experience}}</p>\n            <p>I'M SEARCHING FOR : {{instrument.description}}</p>\n\n          </div>\n\n          <div class=\"card-action\">\n\n            <button [routerLink]=\"['/user']\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">SEND A\n                <i class=\"material-icons right\">message</i>\n              </button>\n          </div>\n        </div>\n\n\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/profile-list/profile-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__ = __webpack_require__("../../../../../src/app/services/instrument.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileListComponent = (function () {
    function ProfileListComponent(instrumentService, auth, userService) {
        var _this = this;
        this.instrumentService = instrumentService;
        this.auth = auth;
        this.userService = userService;
        // this.user = this.auth.getUser();
        // this.auth.getLoginEventEmitter().subscribe( user =>{
        //   console.log(user)
        //   this.user=user
        // })
        this.userService.getUserProfiles().subscribe(function (userList) {
            console.log("" + userList);
            _this.userProfileList = userList;
        }),
            function (err) { console.log("" + err); };
    }
    ProfileListComponent.prototype.ngOnInit = function () { };
    return ProfileListComponent;
}());
ProfileListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-profile-list',
        template: __webpack_require__("../../../../../src/app/profile-list/profile-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile-list/profile-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__["a" /* InstrumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_instrument_service__["a" /* InstrumentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], ProfileListComponent);

var _a, _b, _c;
//# sourceMappingURL=profile-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__ = __webpack_require__("../../../../../src/app/userprofile/userprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__ = __webpack_require__("../../../../../src/app/loginform/loginform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__ = __webpack_require__("../../../../../src/app/signupform/signupform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_profile_create_profile_component__ = __webpack_require__("../../../../../src/app/create-profile/create-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_list_profile_list_component__ = __webpack_require__("../../../../../src/app/profile-list/profile-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_isLoggedIn_canactivate_service__ = __webpack_require__("../../../../../src/app/services/isLoggedIn.canactivate.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_1__userprofile_userprofile_component__["a" /* UserprofileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_isLoggedIn_canactivate_service__["a" /* IsLoggedInService */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_component__["a" /* LoginformComponent */], },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_component__["a" /* SignupformComponent */], },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4__create_profile_create_profile_component__["a" /* CreateInstrumentProfileComponent */], },
    { path: 'show-instrument-profile', component: __WEBPACK_IMPORTED_MODULE_5__profile_list_profile_list_component__["a" /* ProfileListComponent */], },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=routes.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL + "/auth";
var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.options = { withCredentials: true };
        this.isLoggedIn().subscribe();
    }
    AuthService.prototype.getLoginEventEmitter = function () {
        return this.userLoginEvent;
    };
    AuthService.prototype.getUser = function () {
        return this.user;
    };
    AuthService.prototype.emitUserLoginEvent = function (user) {
        this.user = user;
        this.userLoginEvent.emit(user);
        return user;
    };
    AuthService.prototype.handleError = function (e) {
        console.log("AUTH ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    AuthService.prototype.signup = function (firstname, lastname, age, email, address, city, country, username, password, lat, lng) {
        var _this = this;
        console.log("entrooo" + lat);
        return this.http.post(BASEURL + "/signup", { firstname: firstname, lastname: lastname, age: age, email: email, address: address, city: city, country: country, username: username, password: password, lat: lat, lng: lng }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        return this.http.post(BASEURL + "/login", { username: username, password: password }, this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(BASEURL + "/logout", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(null); })
            .catch(this.handleError);
    };
    AuthService.prototype.isLoggedIn = function () {
        var _this = this;
        return this.http.get(BASEURL + "/loggedin", this.options)
            .map(function (res) { return res.json(); })
            .map(function (user) { return _this.emitUserLoginEvent(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.getLocation = function (address) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + address);
        //  .map(res => res.json())
        //  .catch(this.handleError);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/instrument.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InstrumentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InstrumentService = (function () {
    function InstrumentService(http) {
        this.http = http;
        this.BASEURL = __WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].BASEURL;
        this.options = { withCredentials: true };
    }
    InstrumentService.prototype.handleError = function (e) {
        console.log("CREATE ERROR");
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(e.json().message);
    };
    InstrumentService.prototype.createInstrumentProfile = function (experience, description, style, instrument) {
        console.log("FORM STYLE: " + style);
        return this.http.post(this.BASEURL + "/instrument-profile/new", { experience: experience, description: description, instrument: instrument, style: style }, this.options)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    return InstrumentService;
}());
InstrumentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], InstrumentService);

var _a;
//# sourceMappingURL=instrument.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/isLoggedIn.canactivate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsLoggedInService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var timeout = function (nS) { return new Promise(function (resolve) { return setTimeout(resolve, nS * 1000); }); };
var IsLoggedInService = (function () {
    function IsLoggedInService(auth) {
        this.auth = auth;
    }
    IsLoggedInService.prototype.canActivate = function () {
        console.log("Checking can activate");
        //return timeout(5).then(() => true);
        //return this.auth.isLoggedIn().map(user => true)
        return this.auth.getUser() ? true : false;
        //return false;
    };
    return IsLoggedInService;
}());
IsLoggedInService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsLoggedInService);

var _a;
//# sourceMappingURL=isLoggedIn.canactivate.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BASEURL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL + "/auth";
var BASE_URL = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].BASEURL;
var UserService = (function () {
    function UserService(http, router) {
        this.http = http;
        this.router = router;
        this.userLoginEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* EventEmitter */]();
        this.options = { withCredentials: true };
    }
    UserService.prototype.getUserProfiles = function () {
        return this.http.get(BASE_URL + "/user/instrument-profile")
            .map(function (res) {
            return res.json();
        });
    };
    UserService.prototype.showUsersProfiles = function () {
        return this.http.get(BASE_URL + "/user/users-profiles")
            .map(function (res) {
            return res.json();
        });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n.mdi-action-verified-user:before  {\n  content: \"\\E68E\";\n}\n\n.mdi-action-account-circle:before {\n  content: \"\\E606\"; }\n\n\n.mdi-communication-email:before {\n  content: \"\\E6E3\"; }\n\n  .mdi-communication-vpn-key:before {\n  content: \"\\E6FA\"; }\n\n\n.mdi-action-room:before {\n  content: \"\\E65D\"; }\n\n  .mdi-action-home:before {\n  content: \"\\E636\"; }\n\n  .mdi-action-perm-identity:before {\n  content: \"\\E650\"; }\n\n@font-face {\n  font-family: \"Material-Design-Icons\";\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.eot?#iefix\") format(\"embedded-opentype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.woff2\") format(\"woff2\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.woff\") format(\"woff\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.ttf\") format(\"truetype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/materialize/0.96.1/font/material-design-icons/Material-Design-Icons.svg#Material-Design-Icons\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n[class^=\"mdi-\"], [class*=\" mdi-\"] {\n  font-family: \"Material-Design-Icons\";\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  text-rendering: auto;\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-background\">\n\n\n  <div class=\"col s12 m12 l6\">\n    <div class=\"card-panel\">\n      <h4 class=\"header2\">SignUp</h4>\n\n      <div class=\"row\">\n\n        <form class=\"col s12 right-alert\">\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-account-circle prefix\"></i>\n              <input id=\"first_input2\" class=\"validate\" type=\"text\" [(ngModel)]=\"formInfo.firstname\" name=\"firstname\">\n              <label for=\"first_input2\" data-error=\"Please enter first name.\" data-success=\"Perfect!\">First Name</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-account-circle prefix\"></i>\n              <input id=\"first_input2\" class=\"validate\" type=\"text\" [(ngModel)]=\"formInfo.lastname\" name=\"lastname\">\n              <label for=\"first_input2\" data-error=\"Please enter last name.\" data-success=\"Perfect!\">Last Name</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-verified-user prefix\"></i>\n              <input id=\"age_input2\" type=\"number\" class=\"validate\" [(ngModel)]=\"formInfo.age\" name=\"age\">\n              <label for=\"age_input2\" data-error=\"Please enter your age.\" data-success=\"Perfect\">Age</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-communication-email prefix\"></i>\n              <input id=\"email_input2\" type=\"email\" class=\"validate\" [(ngModel)]=\"formInfo.email\" name=\"email\">\n              <label for=\"email_input2\" class=\"\" data-error=\"Please enter valid email.\" data-success=\"Perfect!\">Email</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-room prefix\"></i>\n              <input id=\"address_input2\" type=\"text\" class=\"validate\" [(ngModel)]=\"formInfo.address\" name=\"address\">\n              <label for=\"address_input2\" class=\"\" data-error=\"Please enter valid address.\" data-success=\"Perfect!\">Address</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-home prefix\"></i>\n              <input id=\"city_input2\" type=\"text\" class=\"validate\" [(ngModel)]=\"formInfo.city\" name=\"city\">\n              <label for=\"city_input2\" class=\"\" data-error=\"Please enter valid city.\" data-success=\"Perfect!\">City</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-home prefix\"></i>\n              <input id=\"country_input2\" type=\"text\" class=\"validate\" [(ngModel)]=\"formInfo.country\" name=\"country\">\n              <label for=\"country_input2\" class=\"\" data-error=\"Please enter valid country.\" data-success=\"Perfect!\">Country</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-action-perm-identity prefix\"></i>\n              <input id=\"first_input2\" class=\"validate\" type=\"text\" [(ngModel)]=\"formInfo.username\" name=\"username\">\n              <label for=\"first_input2\" data-error=\"Please enter username.\" data-success=\"Perfect!\">Username</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <i class=\"mdi-communication-vpn-key prefix\"></i>\n              <input id=\"password2\" type=\"password\" class=\"validate\" [(ngModel)]=\"formInfo.password\" name=\"password\">\n              <label for=\"password2\">Password</label>\n            </div>\n          </div>\n\n          <div class=\"row\">\n            <div class=\"input-field col s12\">\n              <button (click)=\"signup()\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">Submit\n                                   <i class=\"material-icons right\">send</i>\n                                 </button>\n            </div>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signupform/signupform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupformComponent = (function () {
    function SignupformComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.formInfo = {
            firstname: "",
            lastname: "",
            age: "",
            email: "",
            address: "",
            city: "",
            country: "",
            username: "",
            password: "",
            lat: "",
            lng: ""
        };
    }
    SignupformComponent.prototype.ngOnInit = function () {
    };
    SignupformComponent.prototype.signup = function () {
        var _this = this;
        var _a = this.formInfo, firstname = _a.firstname, lastname = _a.lastname, age = _a.age, email = _a.email, address = _a.address, city = _a.city, country = _a.country, username = _a.username, password = _a.password;
        var place = address + ',' + city + ',' + country;
        this.auth.getLocation(place)
            .subscribe(function (res) {
            console.log(res);
            var lat = res.json().results[0].geometry.location.lat;
            var lng = res.json().results[0].geometry.location.lng;
            console.log(_this.formInfo.lat);
            if (firstname != "" && lastname != "" && age != "" && email != "" && address != "" && city != "" && country != "") {
                console.log("Signup with " + firstname + " " + lastname + " " + age + " " + email + " " + address + " " + city + " " + country + " " + username + " " + password + " " + lat + " " + lng);
                _this.auth.signup(firstname, lastname, age, email, address, city, country, username, password, lat, lng)
                    .map(function (user) { return console.log(user); })
                    .subscribe(function (user) { return _this.router.navigate(['/home']); });
            }
            else {
                console.log("You must set a username and a password");
            }
        });
    };
    return SignupformComponent;
}());
SignupformComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-signupform',
        template: __webpack_require__("../../../../../src/app/signupform/signupform.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signupform/signupform.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SignupformComponent);

var _a, _b;
//# sourceMappingURL=signupform.component.js.map

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "agm-map {\n  height: 400px;\n  width: 400px;\n\n}\n\n.container{\n  width: 400px;\n  height: 400px;\n  float: right;\n  display: inline-block;\n}\n\n.card{\n  width: 600px;\n  display: inline-block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!user\">\n  <h2>NO USER LOGGED IN</h2>\n</div>\n<div class=\"card\">\n  <div class=\"card-image waves-effect waves-block waves-light\">\n    <img class=\"activator\" src=\"http://www.kissfm.es/wp-content/uploads/2017/01/bowie.jpg\">\n  </div>\n  <div class=\"card-content\">\n    <span class=\"card-title activator grey-text text-darken-4\">USERNAME : {{ user.username }}<i class=\"material-icons right\">more_vert</i></span>\n    <p><a href=\"https://www.facebook.com/davidbowie/\">my-web-page</a></p>\n  </div>\n  <div class=\"card-reveal\">\n    <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">reply</i></span>\n    <div>\n      <ul>\n        <li>{{user.lastname}}</li>\n        <li>{{user.firstname}}</li>\n        <li>{{user.age}}</li>\n        <li>{{user.address}}</li>\n        <li>{{user.city}}</li>\n        <li>{{user.email}}</li>\n      </ul>\n\n      <button [routerLink]=\"['/create']\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">ADD-INSTRUMENT-PROFILE\n          <i class=\"material-icons right\"></i>\n        </button>\n      </div>\n    </div>\n  </div>\n\n\n\n<div class=\"container\">\n  <div class=\"map-container\">\n    <agm-map [zoom]=\"zoom\" [latitude]=\"user.lat\" [longitude]=\"user.lng\">\n      <agm-marker [latitude]=\"user.lat\" [longitude]=\"user.lng\"></agm-marker>\n    </agm-map>\n\n  </div>\n\n\n  <button [routerLink]=\"['/show-instrument-profile']\" class=\"btn waves-effect waves-light\" type=\"submit\" name=\"action\">SHOW-USERS-PROFILE\n        <i class=\"material-icons right\"></i>\n      </button>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/userprofile/userprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileComponent = (function () {
    function UserprofileComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.zoom = 15;
        this.lat = 51.678418;
        this.lng = 7.809007;
        this.user = this.auth.getUser();
        this.auth.getLoginEventEmitter()
            .subscribe(function (user) { return _this.user = user; });
    }
    UserprofileComponent.prototype.ngOnInit = function () {
    };
    return UserprofileComponent;
}());
UserprofileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-userprofile',
        template: __webpack_require__("../../../../../src/app/userprofile/userprofile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/userprofile/userprofile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserprofileComponent);

var _a;
//# sourceMappingURL=userprofile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    BASEURL: 'http://localhost:3000'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map