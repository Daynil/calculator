class HistoryItem {
	operationChain: string;
	result: number;
	
	constructor(opChain: string[], result: number) {
		this.operationChain = opChain.join(" ") + " =";
		this.result = result;
	}
}

export class DisplayService {
	displayResult: string = "0";
	maxResult: number = 16;
	displayOperation: string = "";
	maxOperation: number = 41;
	operationChain: any[] = [];
	currentResult: number = 0;
	newResult: boolean = false;
	lastPressed: string[] = [];
	history: HistoryItem[] = [];
	
	appendResult(num: number) {
		if (this.displayResult === "0") this.displayResult = "";
		if (!this.newResult) {
			if (this.displayResult.length < this.maxResult) this.displayResult += num;
		} else {
			if (num.toString().length < this.maxResult) {
				this.displayResult = num + '';	
			} else {
				num = parseFloat(num.toPrecision(this.maxResult-1));
				if (num.toString().length > this.maxResult) {
					this.displayResult = num.toExponential(this.maxResult-6);
				} else {
					this.displayResult = num + '';
				}
			}
			this.newResult = false;
		}
	}
	
	addOperation(operation: string) {
		// If we've just pressed an operation previously, switch to new operation
		if ( !( isNaN(this.getLastPressed()) ) || this.operationChain.length === 0 ) {
			this.operationChain.push(this.displayResult);
			this.displayOperation += this.displayResult + operation;
			if (this.operationChain.length > 1) {
				let result = this.perform(this.operationChain);
				this.newResult = true;
				this.appendResult(result);
			}
			this.operationChain.push(operation);
			this.newResult = true;
		} else {
			this.operationChain.pop();
			this.operationChain.push(operation);
			this.displayOperation = this.displayOperation.slice(0, this.displayOperation.length-1) + operation;
		}
	}
	
	perform(operationChain): number {
		let resultBuffer: string = '';
		for (let i = 0; i < operationChain.length-1; i+=2) {
			let operand1 = '';
			if (!resultBuffer) {
				operand1 = operationChain[i];
			} else {
				operand1 = resultBuffer;
			}
			let operator = operationChain[i+1];
			let operand2 = operationChain[i+2];
			resultBuffer = this.calculate(operand1, operator, operand2);
		}
		return parseFloat(resultBuffer);
	}
	
	calculate(operand1: string, operator: string, operand2: string): string {
		let num1 = parseFloat(operand1);
		let num2 = parseFloat(operand2);
		let result = 0;
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
				break
			default:
				break;
		}
		return result.toString();
	}
	
	updateLastPressed(item: string) {
		this.lastPressed.push(item);
		if (this.lastPressed.length > 2) this.lastPressed.shift();
	}
	
	getLastPressed() {
		return parseFloat(this.lastPressed[0]);
	}
	
	equals() {
		let result = 0;
		if (this.operationChain.length === 0) return;
		if (this.operationChain.length % 2 === 0) {
			this.operationChain.push(this.displayResult);
			result = this.perform(this.operationChain);
		} else { 
			
		}
		let operations = this.operationChain;
		this.clearAll();
		this.newResult = true;
		this.appendResult(result);
		this.newResult = true;
		// Add to history
		var historyItem = new HistoryItem(operations, result);
		this.history.push(historyItem);
	}
	
	clearAll() {
		this.displayOperation = "";
		this.displayResult = "0";
		this.currentResult = 0;
		this.operationChain = [];
		this.lastPressed = [];
		this.newResult = false;
	}
	
	clearHistory() {
		this.history = [];
	}
	
	delete() {
		if (this.displayResult) {
			this.displayResult = this.displayResult.slice(0, this.displayResult.length-1);
		}
		if (!this.displayResult) this.displayResult = "0";
	}
	
}