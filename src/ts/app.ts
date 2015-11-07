import {Component, View, bootstrap} from 'angular2/angular2';
import {DisplayService} from './display-service';

// Annotation section
@Component({
  selector: 'calc-app',
  viewBindings: [DisplayService]
})
@View({
  templateUrl: '../html/calc-app.html',
  styleUrls: ['../css/styles.css']
})
// Component controller
class CalculatorApp {
	
  constructor(public displayService: DisplayService) {
	  
  }
  
  numberTyped(number: number) {
	  this.displayService.appendResult(number);
  }
  
  operationTyped(operation: string) {
	  this.displayService.addOperation(operation);
  }
  
  cleared() {
	  this.displayService.clearAll();
  }
  
  delete() {
	  this.displayService.delete();
  }
  
}

bootstrap(CalculatorApp)
	.then(
		success => console.log(success),
		error => console.log(error)
	);