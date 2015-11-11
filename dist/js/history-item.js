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
var HistoryItem = (function () {
    function HistoryItem() {
    }
    HistoryItem = __decorate([
        angular2_1.Component({
            selector: 'history-item',
            inputs: ['operationchain', 'result']
        }),
        angular2_1.View({
            template: "\n\t<div class=\"history-item\">\n\t\t<div class=\"item-operation\">{{ operationchain }}</div>\n\t\t<div class=\"item-result\">{{ result }}</div>\n\t</div>\n  ",
            styles: ["\n\t  .item-operation {\n\t\t  font-size: 20px;\n\t\t  color: hsl(208, 20%, 80%);\n\t  }\n\t  .history-item {\n\t\t  padding-right: 20px;\n\t\t  padding-left: 20px;\n\t\t  margin-top: 15px;\n\t\t  margin-bottom: 15px;\n\t  }\n\t  .history-item:hover {\n\t\t  background-color: hsl(77,2%,33%);\n\t  }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], HistoryItem);
    return HistoryItem;
})();
exports.HistoryItem = HistoryItem;

//# sourceMappingURL=history-item.js.map
