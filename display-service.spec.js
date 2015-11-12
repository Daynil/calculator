var display_service_1 = require('./display-service');
describe('DisplayService', function () {
    var disp = new display_service_1.DisplayService();
    it('should calculate 5*2=10', function () {
        var result = parseFloat(disp.calculate('5', '×', '2'));
        expect(result).toEqual(10);
    });
    it('should calculate 5+2=7', function () {
        var result = parseFloat(disp.calculate('5', '+', '2'));
        expect(result).toEqual(7);
    });
    it('should calculate 10/2=5', function () {
        var result = parseFloat(disp.calculate('10', '÷', '2'));
        expect(result).toEqual(5);
    });
    it('should calculate 5-2=3', function () {
        var result = parseFloat(disp.calculate('5', '-', '2'));
        expect(result).toEqual(3);
    });
    it('should give correct result with an operation chain', function () {
        var opChain = ['12', '+', '50', '-', '23', '×', '55', '÷', '14'];
        var actual = parseFloat(disp.perform(opChain).toFixed(5));
        var expected = 153.21429;
        expect(actual).toEqual(expected);
    });
});

//# sourceMappingURL=display-service.spec.js.map
