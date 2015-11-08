var display_service_1 = require('./display-service');
describe('DisplayService', function () {
    it('true is true', function () {
        expect(true).toEqual(true);
    });
    it('has 1+1=2', function () {
        var result = 1 + 1;
        expect(result).toEqual(2);
    });
    it('should calculate 5*2=10', function () {
        var disp = new display_service_1.DisplayService();
        var result = parseFloat(disp.calculate('5', '×', '2'));
        expect(result).toEqual(10);
    });
});

//# sourceMappingURL=display-service.spec.js.map
