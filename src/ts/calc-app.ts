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
  
  cleared() {
	  this.displayService.clearAll();
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