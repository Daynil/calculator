import {DisplayService} from './display-service'

describe('DisplayService', () => {
	
	var disp = new DisplayService();
	
	it('should calculate 5*2=10', () => {
		var result = parseFloat(disp.calculate('5', '×', '2'));
		expect(result).toEqual(10);
	});
	
	it('should calculate 5+2=7', () => {
		var result = parseFloat(disp.calculate('5', '+', '2'));
		expect(result).toEqual(7);
	});
	
	it('should calculate 10/2=5', () => {
		var result = parseFloat(disp.calculate('10', '÷', '2'));
		expect(result).toEqual(5);
	});
	
	it('should calculate 5-2=3', () => {
		var result = parseFloat(disp.calculate('5', '-', '2'));
		expect(result).toEqual(3);
	});
	
	it('should give correct result with an operation chain', () => {
		var opChain = ['12', '+', '50', '-', '23', '×', '55', '÷', '14'];
		var actual = parseFloat(disp.perform(opChain).toFixed(5));
		var expected = 153.21429;
		expect(actual).toEqual(expected);
	});
});