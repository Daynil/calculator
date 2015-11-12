import {Component, View, CORE_DIRECTIVES, bootstrap} from 'angular2/angular2';
import {DisplayService} from './display-service';
import {HistoryItem} from './history-item';

// Annotation section
@Component({
  selector: 'calc-app',
  viewBindings: [DisplayService]
})
@View({
  templateUrl: '../html/calc-app.html',
  styleUrls: ['../css/calc-app.css'],
  directives: [CORE_DIRECTIVES, HistoryItem]
})
// Component controller
class CalculatorApp {
	historyitems: any[];
	
  constructor(public displayService: DisplayService) {
	  this.historyitems = displayService.history;
  } 
  
  numberTyped(number: number) {
	  this.displayService.updateLastPressed(number.toString());
	  this.displayService.appendResult(number);
  }
  
  operationTyped(operation: string) {
	  this.displayService.updateLastPressed(operation);
	  this.displayService.addOperation(operation);
  }
  
  negate() {
	  this.displayService.updateLastPressed("0"); // Makes sure operation duplication works properly
	  var currentResult = parseFloat(this.displayService.displayResult);
	  if (currentResult > 0) {
		  this.displayService.displayResult = "-" + this.displayService.displayResult;  
	  } else if (currentResult < 0) {
		  this.displayService.displayResult = this.displayService.displayResult.slice(1, this.displayService.displayResult.length);
	  }
  }
  
  point() {
	  this.displayService.updateLastPressed("0");
	  if (!this.displayService.displayResult.match(/[^-]\D/)) {
		  if (this.displayService.displayResult === "0") {
			  this.displayService.appendResult("0.");
		  } else {
			  this.displayService.appendResult("."); 
		  }
	  }
  }
  
  historySelected(item) {
	  this.displayService.historySelected(item);
  }
  
  cleared() {
	  this.displayService.clearAll();
  }
  
  clearedEntry() {
	  var entryLength = this.displayService.displayResult.length;
	  for (var i = 0; i < entryLength; i++) {
		  this.displayService.delete();
	  }
  }
  
  delete() {
	  this.displayService.delete();
  }
  
  equals() {
	  this.displayService.equals();
  }
  
  clearHistory() {
	  this.displayService.clearHistory();
  }
  
}

bootstrap(CalculatorApp)
	.then(
		success => console.log(success),
		error => console.log(error)
	);