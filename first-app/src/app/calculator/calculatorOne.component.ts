import { Component } from '@angular/core';

@Component({
	selector : 'app-calculator-1',
	templateUrl : 'calculatorOne.component.html',
	styleUrls : ['calculatorOne.component.css']
})
export class CalculatorOneComponent{
	n1 : number = 0;
	n2 : number = 0;
	result : number = 0;

	onAddClick(){
		this.result = this.n1 + this.n2;
	}

	onSubtractClick(){
		this.result = this.n1 - this.n2;
	}
	onMultiplyClick(){
		this.result = this.n1 * this.n2;
	}
	onDivideClick(){
		this.result = this.n1 / this.n2;
	}
}