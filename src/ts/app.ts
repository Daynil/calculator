import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'calc-app'
})
@View({
  templateUrl: '../html/calc-app.html',
  styleUrls: ['../css/styles.css']
})
// Component controller
class CalculatorApp {
  name: string;
  constructor() {
    this.name = 'Alice';
  } 
}

bootstrap(CalculatorApp)
	.then(
		success => console.log(success),
		error => console.log(error)
	);