import {DisplayService} from './display-service'

describe('DisplayService', () => {
	it('true is true', () => {
		expect(true).toEqual(true);
	});
	
	it('has 1+1=2', () => {
		var result = 1+1;
		expect(result).toEqual(2);
	});
	
	it('should calculate 5*2=10', () => {
		var disp = new DisplayService();
		var result = parseFloat(disp.calculate('5', '×', '2'));
		expect(result).toEqual(10);
	})
});