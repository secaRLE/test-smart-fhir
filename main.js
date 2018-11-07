(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./patient-info/patient-info.component */ "./src/app/patient-info/patient-info.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: 'start',
        component: _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_2__["PatientInfoComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf=\"!displaySignInButton\">\n\n  <div style=\"margin-left: 30px;\">\n    <h1 *ngIf=\"patient\">Welcome {{ patient }}!</h1>\n  </div>\n\n  <div style=\"width: 40%; float: left; padding-left: 30px;\">\n    <h2>Here is some data for you:</h2>\n\n    <p>Prescriptions:</p>\n    <ul>\n      <li *ngFor=\"let order of orders\">{{order}}</li>\n    </ul>\n\n    <p>Conditions:</p>\n    <ul>\n      <li *ngFor=\"let condition of conditions\">{{condition}}</li>\n    </ul>\n\n    <div style=\"padding: 10px; border-top: 1px solid gray; max-width: 90%;\">\n      <h3>Create new measurement data</h3>\n      <form #measurementForm=\"ngForm\" (ngSubmit)=\"createObservation()\">\n        <input name=\"weight\" type=\"number\" placeholder=\"Weight\" [(ngModel)]=\"measurement.weight\"><br><br>\n        <input name=\"height\" type=\"number\" placeholder=\"Height\" [(ngModel)]=\"measurement.height\"><br><br>\n        <button type=\"submit\">New measurements</button>\n      </form>\n    </div>\n\n    <div *ngIf=\"observations\">\n      <h2 style=\"display: inline-block; padding-right: 30px;\">All measurements ({{observations.length}})</h2>\n      <button style=\"display: inline-block;\" (click)=\"getObservation()\">Update</button>\n      <ul>\n        <li *ngFor=\"let obs of observations\" style=\"margin-bottom: 5px\">\n          <span *ngIf=\"!obs.code; else observation\">Is being deleted...</span>\n          <ng-template #observation>\n            {{obs?.code?.text}}: {{obs?.valueQuantity?.value}} {{obs?.valueQuantity?.unit}}\n            <button (click)=\"deleteObservation(obs)\" style=\"margin-left: 5px\">Delete</button>\n          </ng-template>\n          <br><span style=\"font-size: 12px\">(resourceId: {{obs?.id}})</span>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div style=\"width: 60%; float: right; padding-right: 30px;\">\n    <p-chart type=\"line\" [data]=\"visualizationData\"></p-chart>\n  </div>\n</div>\n\n<div *ngIf=\"displaySignInButton\">\n  <p>You are not yet authorized, please sign in</p>\n  <button (click)=\"authorize()\">Sign in</button>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_fhir_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/fhir.service */ "./src/app/services/fhir.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(auth, fhir, _zone) {
        this.auth = auth;
        this.fhir = fhir;
        this._zone = _zone;
        this.title = 'Test SMART on FHIR';
        this.orders = [];
        this.conditions = [];
        this.measurement = { weight: null, height: null };
        this.initialize({
            'client_id': 'dc54d8f3-a83f-4ffd-974c-2ddf98806a98',
            'scope': 'patient/Patient.read patient/Observation.read launch online_access openid profile'
        });
    }
    // Save config to local storage on init
    AppComponent.prototype.initialize = function (settings) {
        var params = new URLSearchParams(location.search);
        localStorage.appConfig = JSON.stringify({
            client_id: settings.client_id,
            scope: settings.scope + ' launch',
            launch_id: params.get('launch'),
            api_server_uri: params.get('iss')
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        // check if token already exists
        var token = localStorage.getItem('token');
        if (!token) {
            var params = new URLSearchParams(location.search);
            var code = params.get('code'); // code is sent when the EHR authorization server redirects the browser to the app’s redirect_uri
            if (!code) {
                this.displaySignInButton = true;
            }
            else {
                // @ts-ignore
                FHIR.oauth2.ready(this.onAuthReady, this.onAuthError);
            }
        }
        else {
            this.getPatientInfo();
        }
    };
    AppComponent.prototype.onAuthReady = function (smart) {
        console.log('FHIR Auth ready, saving the token...', smart);
        localStorage.token = JSON.stringify(smart.tokenResponse);
        // refresh the app
        location.href = location.href;
    };
    AppComponent.prototype.onAuthError = function (error) {
        console.error('FHIR Auth error', error);
    };
    AppComponent.prototype.authorize = function () {
        var config = JSON.parse(localStorage.appConfig);
        // @ts-ignore
        FHIR.oauth2.authorize({
            'client': {
                'client_id': config.client_id,
                'scope': config.scope,
                'launch': config.launch_id
            },
            'server': config.api_server_uri
        });
    };
    AppComponent.prototype.getPatientInfo = function () {
        var _this_1 = this;
        // TODO: Handle scope issues over observables
        var _this = this;
        // @ts-ignore
        FHIR.oauth2.ready(function (smart) {
            _this._zone.run(function () {
                // Get the patient from EMR
                smart.patient.read().then(function (smartPatient) {
                    return _this._zone.run(function () {
                        _this.patient = smartPatient.name[0].family + ' ' + smartPatient.name[0].given.join(' ');
                    });
                });
            });
            // @ts-ignore
            /*FHIR.oauth2.ready(smart => {
              const patientPromise = smart.patient.read().then(smartPatient => smartPatient);
              patientPromise.then(smartPatient => {
                return _this._zone.run(() => {
                  _this.patient = smartPatient.name[0].family + ' ' + smartPatient.name[0].given.join(' ');
                  console.log('_this.patient', _this.patient);
                });
              });*/
            // Get patient's ilnesses
            smart.patient.api.search({ type: 'Condition' })
                .done(function (conditions) {
                _this._zone.run(function () {
                    for (var _i = 0, _a = conditions.data.entry; _i < _a.length; _i++) {
                        var condition = _a[_i];
                        _this.conditions.push(condition.resource.code.text);
                    }
                });
            });
            // Get patient's prescriptions
            smart.patient.api.search({ type: 'MedicationOrder' })
                .done(function (orders) {
                _this._zone.run(function () {
                    for (var _i = 0, _a = orders.data.entry; _i < _a.length; _i++) {
                        var order = _a[_i];
                        _this.orders.push(order.resource.medicationCodeableConcept.text);
                    }
                });
            });
            _this_1.getObservation();
        });
    };
    AppComponent.prototype.getObservation = function () {
        var _this_1 = this;
        var _this = this;
        // @ts-ignore
        FHIR.oauth2.ready(function (smart) {
            // Get patient observations by their codes
            smart.patient.api.fetchAll({
                type: 'Observation',
                query: {
                    code: {
                        $or: ['http://loinc.org|8302-2', 'http://loinc.org|29463-7'] // codes for height and weigh
                    }
                }
            }).then(function (resp) {
                _this._zone.run(function () {
                    console.log(resp);
                    var sorted = resp.sort(function (a, b) { return new Date(a.effectiveDateTime).getTime() - new Date(b.effectiveDateTime).getTime(); });
                    _this_1.observations = sorted;
                    _this.drawVisualization(resp);
                });
            });
        });
    };
    AppComponent.prototype.drawVisualization = function (data) {
        // TODO: not good, use observables
        var _this = this;
        _this.visualizationData = {};
        _this.visualizationData.datasets = [];
        // Labels
        _this.visualizationData.labels = [];
        var _loop_1 = function (date) {
            var d = new Date(date.effectiveDateTime);
            var dateString = d.toDateString();
            if (!this_1.visualizationData.labels.find(function (v) { return v === dateString; })) {
                _this.visualizationData.labels.push(dateString);
            }
        };
        var this_1 = this;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var date = data_1[_i];
            _loop_1(date);
        }
        // Get weight and height
        var weightDataset = this.getWeight(data);
        var heightDataset = this.getHeight(data);
        _this.visualizationData.datasets.push(weightDataset);
        _this.visualizationData.datasets.push(heightDataset);
        // calculate BMI
        var bmiDataset = this.calculateBmi(_this.visualizationData.datasets);
        _this.visualizationData.datasets.push(bmiDataset);
    };
    AppComponent.prototype.getWeight = function (data) {
        var weight = data.filter(function (val) {
            var condition = val.code ? (val.code.text === 'Body Weight') : false; // after deleting code.text is empty for some reason
            return condition;
        });
        var weightData = [];
        for (var _i = 0, weight_1 = weight; _i < weight_1.length; _i++) {
            var val = weight_1[_i];
            weightData.push(val.valueQuantity.value);
        }
        return {
            label: 'Body Weight',
            data: weightData,
            fill: false,
            borderColor: '#4bc0c0'
        };
    };
    AppComponent.prototype.getHeight = function (data) {
        var height = data.filter(function (val) {
            var condition = val.code ? (val.code.text === 'Body Height') : false;
            return condition;
        });
        var heightData = [];
        for (var _i = 0, height_1 = height; _i < height_1.length; _i++) {
            var val = height_1[_i];
            heightData.push(val.valueQuantity.value);
        }
        return {
            label: 'Body Height',
            data: heightData,
            fill: false,
            borderColor: '#565656'
        };
    };
    AppComponent.prototype.calculateBmi = function (data) {
        var bmiData = [];
        for (var index in data[0].data) {
            var bmi = data[0].data[index] / (data[1].data[index] * data[1].data[index] / 10000);
            bmiData.push(bmi);
        }
        return {
            label: 'BMI',
            data: bmiData,
            fill: false,
            borderColor: '#FFD800'
        };
    };
    AppComponent.prototype.createObservation = function () {
        var _this_1 = this;
        // @ts-ignore
        FHIR.oauth2.ready(function (smart) {
            var date = (new Date()).toISOString();
            var resourceHeight = {
                'resourceType': 'Observation',
                'status': 'final',
                'category': {
                    'coding': [{
                            'system': 'http://hl7.org/fhir/observation-category',
                            'code': 'vital-signs'
                        }]
                },
                'code': {
                    'coding': [{
                            'system': 'http://loinc.org',
                            'code': '8302-2',
                            'display': 'Body Height'
                        }],
                    'text': 'Body Height'
                },
                'subject': {
                    'reference': 'Patient/' + smart.patient.id
                },
                'effectiveDateTime': date,
                'issued': date,
                'valueQuantity': {
                    'value': _this_1.measurement.height,
                    'unit': 'cm',
                    'system': 'http://unitsofmeasure.org/',
                    'code': 'cm'
                }
            };
            var resourceWeight = {
                'resourceType': 'Observation',
                'status': 'final',
                'category': {
                    'coding': [
                        {
                            'system': 'http://hl7.org/fhir/observation-category',
                            'code': 'vital-signs'
                        }
                    ]
                },
                'code': {
                    'coding': [
                        {
                            'system': 'http://loinc.org',
                            'code': '29463-7',
                            'display': 'Body Weight'
                        }
                    ],
                    'text': 'Body Weight'
                },
                'subject': {
                    'reference': 'Patient/' + smart.patient.id
                },
                'effectiveDateTime': date,
                'issued': date,
                'valueQuantity': {
                    'value': _this_1.measurement.weight,
                    'unit': 'kg',
                    'system': 'http://unitsofmeasure.org/',
                    'code': 'kg'
                }
            };
            smart.api.create({ resource: resourceHeight }).then(function (resp) {
                console.log(resp);
            }).then(function () {
                smart.api.create({ resource: resourceWeight }).then(function (res) {
                    console.log(res);
                });
            });
        });
    };
    AppComponent.prototype.deleteObservation = function (obs) {
        var _this = this;
        console.log(obs);
        var obj = {
            resource: {
                resourceType: 'Observation',
                id: obs.id
            }
        };
        // @ts-ignore
        FHIR.oauth2.ready(function (smart) {
            smart.api.delete(obj).then(function (resp) {
                _this._zone.run(function () {
                    var filtered = _this.observations.filter(function (res) { return res.id !== obs.id; });
                    console.log(filtered);
                    _this.observations = filtered;
                    console.log(_this.observations);
                });
            }, function (err) { return console.log(err); });
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
        // TODO: split to services and components
        ,
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_fhir_service__WEBPACK_IMPORTED_MODULE_2__["FhirService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-info/patient-info.component */ "./src/app/patient-info/patient-info.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/chart */ "./node_modules/primeng/chart.js");
/* harmony import */ var primeng_chart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_chart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _patient_info_patient_info_component__WEBPACK_IMPORTED_MODULE_4__["PatientInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                primeng_chart__WEBPACK_IMPORTED_MODULE_6__["ChartModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/patient-info/patient-info.component.html":
/*!**********************************************************!*\
  !*** ./src/app/patient-info/patient-info.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  patient-info works!\n</p>\n"

/***/ }),

/***/ "./src/app/patient-info/patient-info.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/patient-info/patient-info.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnQtaW5mby9wYXRpZW50LWluZm8uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/patient-info/patient-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/patient-info/patient-info.component.ts ***!
  \********************************************************/
/*! exports provided: PatientInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientInfoComponent", function() { return PatientInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PatientInfoComponent = /** @class */ (function () {
    function PatientInfoComponent() {
    }
    PatientInfoComponent.prototype.ngOnInit = function () {
    };
    PatientInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-patient-info',
            template: __webpack_require__(/*! ./patient-info.component.html */ "./src/app/patient-info/patient-info.component.html"),
            styles: [__webpack_require__(/*! ./patient-info.component.scss */ "./src/app/patient-info/patient-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            var loggedIn = localStorage.getItem('token') ? true : false;
            this.loggedIn.next(loggedIn);
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/fhir.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/fhir.service.ts ***!
  \******************************************/
/*! exports provided: FhirService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FhirService", function() { return FhirService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as fh from 'fhir-js-client';
var FhirService = /** @class */ (function () {
    function FhirService() {
        this.smartClient = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.smartClient$ = this.smartClient.asObservable();
        //console.log(this._smartClient);
    }
    FhirService.prototype.authorizeClient = function (config) {
        // @ts-ignore
        FHIR.oauth2.authorize(config);
    };
    FhirService.prototype.completeAuthentication = function () {
        //console.log('completeAuthentication');
        // @ts-ignore
        return FHIR.oauth2.ready(this.onReady, this.onError);
    };
    // @ts-ignore
    FhirService.prototype.onReady = function (smartClient) {
        this._smartClient = smartClient;
        localStorage.setItem('token', smartClient.tokenResponse.access_token);
        this.smartClient.next(smartClient);
        if (smartClient.hasOwnProperty('patient')) {
            alert('patient');
        }
        else {
            alert('no patient');
        }
    };
    FhirService.prototype.onError = function (err) {
        localStorage.removeItem('token');
        this.smartClient.next(null);
    };
    FhirService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], FhirService);
    return FhirService;
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

module.exports = __webpack_require__(/*! C:\Workspace\SMART on FHIR\fhir\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map