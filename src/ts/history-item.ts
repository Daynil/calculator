import {Component, View, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'history-item',
  inputs: ['operationchain', 'result']
})
@View({
  template: `
	<div class="history-item">
		<div class="item-operation">{{ operationchain }}</div>
		<div class="item-result">{{ result }}</div>
	</div>
  `,
  styles: [`
	  .item-operation {
		  font-size: 20px;
		  color: hsl(208, 20%, 80%);
	  }
	  .history-item {
		  padding-right: 20px;
		  padding-left: 20px;
		  margin-top: 15px;
		  margin-bottom: 15px;
	  }
	  .history-item:hover {
		  background-color: hsl(77,2%,33%);
		  cursor: pointer;
	  }
  `]
})
export class HistoryItem {
	operationchain: string;
	result: number;
}