var HistoryItem = (function () {
    function HistoryItem(opChain, result) {
        this.operationChain = opChain.join(" ") + " =";
        this.result = result;
    }
    return HistoryItem;
})();
var DisplayService = (function () {
    function DisplayService() {
        this.displayResult = "0";
        this.maxResult = 16;
        this.displayOperation = "";
        this.maxOperation = 41;
        this.operationChain = [];
        this.currentResult = 0;
        this.newResult = false;
        this.lastPressed = [];
        this.history = [];
    }
    DisplayService.prototype.appendResult = function (num) {
        if (this.displayResult === "0")
            this.displayResult = "";
        if (!this.newResult) {
            if (this.displayResult.length < this.maxResult)
                this.displayResult += num;
        }
        else {
            if (num.toString().length < this.maxResult) {
                this.displayResult = num + '';
            }
            else {
                num = parseFloat(num.toPrecision(this.maxResult - 1));
                if (num.toString().length > this.maxResult) {
                    this.displayResult = num.toExponential(this.maxResult - 6);
                }
                else {
                    this.displayResult = num + '';
                }
            }
            this.newResult = false;
        }
    };
    DisplayService.prototype.addOperation = function (operation) {
        // If we've just pressed an operation previously, switch to new operation
        if (!(isNaN(this.getLastPressed())) || this.operationChain.length === 0) {
            this.operationChain.push(this.displayResult);
            this.displayOperation += this.displayResult + operation;
            if (this.operationChain.length > 1) {
                var result = this.perform(this.operationChain);
                this.newResult = true;
                this.appendResult(result);
            }
            this.operationChain.push(operation);
            this.newResult = true;
        }
        else {
            this.operationChain.pop();
            this.operationChain.push(operation);
            this.displayOperation = this.displayOperation.slice(0, this.displayOperation.length - 1) + operation;
        }
    };
    DisplayService.prototype.perform = function (operationChain) {
        var resultBuffer = '';
        for (var i = 0; i < operationChain.length - 1; i += 2) {
            var operand1 = '';
            if (!resultBuffer) {
                operand1 = operationChain[i];
            }
            else {
                operand1 = resultBuffer;
            }
            var operator = operationChain[i + 1];
            var operand2 = operationChain[i + 2];
            resultBuffer = this.calculate(operand1, operator, operand2);
        }
        return parseFloat(resultBuffer);
    };
    DisplayService.prototype.calculate = function (operand1, operator, operand2) {
        var num1 = parseFloat(operand1);
        var num2 = parseFloat(operand2);
        var result = 0;
        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "×":
                result = num1 * num2;
                break;
            case "÷":
                result = num1 / num2;
                break;
            default:
                break;
        }
        return result.toString();
    };
    DisplayService.prototype.updateLastPressed = function (item) {
        this.lastPressed.push(item);
        if (this.lastPressed.length > 2)
            this.lastPressed.shift();
    };
    DisplayService.prototype.getLastPressed = function () {
        return parseFloat(this.lastPressed[0]);
    };
    DisplayService.prototype.equals = function () {
        var result = 0;
        if (this.operationChain.length === 0)
            return;
        if (this.operationChain.length % 2 === 0) {
            this.operationChain.push(this.displayResult);
            result = this.perform(this.operationChain);
        }
        else {
        }
        var operations = this.operationChain;
        this.clearAll();
        this.newResult = true;
        this.appendResult(result);
        this.newResult = true;
        // Add to history
        var historyItem = new HistoryItem(operations, result);
        this.history.push(historyItem);
    };
    DisplayService.prototype.clearAll = function () {
        this.displayOperation = "";
        this.displayResult = "0";
        this.currentResult = 0;
        this.operationChain = [];
        this.lastPressed = [];
        this.newResult = false;
    };
    DisplayService.prototype.clearHistory = function () {
        this.history = [];
    };
    DisplayService.prototype.delete = function () {
        if (this.displayResult) {
            this.displayResult = this.displayResult.slice(0, this.displayResult.length - 1);
        }
        if (!this.displayResult)
            this.displayResult = "0";
    };
    return DisplayService;
})();
exports.DisplayService = DisplayService;

//# sourceMappingURL=display-service.js.map
