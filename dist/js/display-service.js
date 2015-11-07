var DisplayService = (function () {
    function DisplayService() {
        this.displayResult = "0";
        this.maxResult = 16;
        this.displayOperation = "";
        this.maxOperation = 41;
        this.operationChain = [];
        this.currentResult = 0;
    }
    DisplayService.prototype.appendResult = function (num) {
        if (this.displayResult === "0")
            this.displayResult = "";
        if (this.displayResult.length < this.maxResult)
            this.displayResult += num;
    };
    DisplayService.prototype.addOperation = function (operation) {
        this.displayOperation += this.displayResult + operation;
        this.operationChain.push(this.displayResult);
        this.operationChain.push(operation);
    };
    DisplayService.prototype.calculate = function () {
    };
    DisplayService.prototype.clearAll = function () {
        this.displayOperation = "";
        this.displayResult = "0";
        this.currentResult = 0;
        this.operationChain = [];
    };
    DisplayService.prototype.delete = function () {
        if (this.displayResult) {
            this.displayResult = this.displayResult.slice(0, this.displayResult.length - 1);
        }
    };
    return DisplayService;
})();
exports.DisplayService = DisplayService;

//# sourceMappingURL=display-service.js.map
