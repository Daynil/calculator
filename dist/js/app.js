var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
// Annotation section
var CalculatorApp = (function () {
    function CalculatorApp() {
        this.name = 'Alice';
    }
    CalculatorApp = __decorate([
        angular2_1.Component({
            selector: 'calc-app'
        }),
        angular2_1.View({
            templateUrl: '../html/calc-app.html',
            styleUrls: ['../css/styles.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CalculatorApp);
    return CalculatorApp;
})();
angular2_1.bootstrap(CalculatorApp)
    .then(function (success) { return console.log(success); }, function (error) { return console.log(error); });

//# sourceMappingURL=app.js.map
