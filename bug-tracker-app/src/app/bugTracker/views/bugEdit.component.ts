import { Component, EventEmitter, Output } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugOperationsService } from '../services/bugOperartions.service';

@Component({
	selector : 'app-bug-edit',
	template : `
		<section class="edit">
			<label for="">Bug Name :</label>
			<input type="text" (keyup)="newBugName = $event.target.value" [value]="newBugName">
			<span> [ {{newBugName.length}} ] </span>
			<input type="button" value="Add New" (click)="onAddNewClick()">
		</section>
	`
})
export class BugEditComponent{
	
	newBugName = '';

	@Output()
	bugCreated : EventEmitter<Bug> = new EventEmitter<Bug>();

	constructor(private bugOperations : BugOperationsService){

	}

	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.newBugName = '';
		this.bugCreated.emit(newBug);
		
	}
}
