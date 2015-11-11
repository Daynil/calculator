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
	  .history-item {padding-top: 10px;}
	  .item-operation{
		  height: 45px;
		  font-size: 20px;
		  color: hsl(208, 20%, 80%);
	  }
  `]
})
export class HistoryItem {
	operationchain: string;
	result: number;
}