export class DisplayService {
	displayResult: string = "0";
	maxResult: number = 16;
	displayOperation: string = "";
	maxOperation: number = 41;
	operationChain: any[] = [];
	currentResult: number = 0;
	
	appendResult(num: number) {
		if (this.displayResult === "0") this.displayResult = "";
		if (this.displayResult.length < this.maxResult) this.displayResult += num;
	}
	
	addOperation(operation: string) {
		this.displayOperation += this.displayResult + operation;
		this.operationChain.push(this.displayResult);
		this.operationChain.push(operation);
	}
	
	calculate() {
		
	}
	
	clearAll() {
		this.displayOperation = "";
		this.displayResult = "0";
		this.currentResult = 0;
		this.operationChain = [];
	}
	
	delete() {
		if (this.displayResult) {
			this.displayResult = this.displayResult.slice(0, this.displayResult.length-1);
		}
	}
	
}