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
var display_service_1 = require('./display-service');
var history_item_1 = require('./history-item');
// Annotation section
var CalculatorApp = (function () {
    function CalculatorApp(displayService) {
        this.displayService = displayService;
        this.historyitems = displayService.history;
    }
    CalculatorApp.prototype.numberTyped = function (number) {
        this.displayService.updateLastPressed(number.toString());
        this.displayService.appendResult(number);
    };
    CalculatorApp.prototype.operationTyped = function (operation) {
        this.displayService.updateLastPressed(operation);
        this.displayService.addOperation(operation);
    };
    CalculatorApp.prototype.negate = function () {
        this.displayService.updateLastPressed("0"); // Makes sure operation duplication works properly
        var currentResult = parseFloat(this.displayService.displayResult);
        if (currentResult > 0) {
            this.displayService.displayResult = "-" + this.displayService.displayResult;
        }
        else if (currentResult < 0) {
            this.displayService.displayResult = this.displayService.displayResult.slice(1, this.displayService.displayResult.length);
        }
    };
    CalculatorApp.prototype.point = function () {
        this.displayService.updateLastPressed("0");
        if (!this.displayService.displayResult.match(/[^-]\D/)) {
            if (this.displayService.displayResult === "0") {
                this.displayService.appendResult("0.");
            }
            else {
                this.displayService.appendResult(".");
            }
        }
    };
    CalculatorApp.prototype.historySelected = function (item) {
        this.displayService.historySelected(item);
    };
    CalculatorApp.prototype.cleared = function () {
        this.displayService.clearAll();
    };
    CalculatorApp.prototype.clearedEntry = function () {
        var entryLength = this.displayService.displayResult.length;
        for (var i = 0; i < entryLength; i++) {
            this.displayService.delete();
        }
    };
    CalculatorApp.prototype.delete = function () {
        this.displayService.delete();
    };
    CalculatorApp.prototype.equals = function () {
        this.displayService.equals();
    };
    CalculatorApp.prototype.clearHistory = function () {
        this.displayService.clearHistory();
    };
    CalculatorApp = __decorate([
        angular2_1.Component({
            selector: 'calc-app',
            viewBindings: [display_service_1.DisplayService]
        }),
        angular2_1.View({
            templateUrl: '../html/calc-app.html',
            styleUrls: ['../css/calc-app.css'],
            directives: [angular2_1.CORE_DIRECTIVES, history_item_1.HistoryItem]
        }), 
        __metadata('design:paramtypes', [display_service_1.DisplayService])
    ], CalculatorApp);
    return CalculatorApp;
})();
angular2_1.bootstrap(CalculatorApp)
    .then(function (success) { return console.log(success); }, function (error) { return console.log(error); });

//# sourceMappingURL=calc-app.js.map
