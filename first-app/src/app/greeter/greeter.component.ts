import { Component } from '@angular/core';

@Component({
	selector : 'app-greeter',
	templateUrl : 'greeter.component.html',
	styleUrls : ['greeter.component.css']
})
export class GreeterComponent{
	public greetMessage : string = '[A Dummy Greet Message]';

	onGreetClick(userName : string){
		this.greetMessage = `Hi ${userName}, Have a nice day!`;
	}
}