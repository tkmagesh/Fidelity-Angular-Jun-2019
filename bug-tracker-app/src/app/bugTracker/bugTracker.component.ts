import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperartions.service';

@Component({
	selector : 'app-bug-tracker',
	templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
	bugs : Bug[] = [];

	/*bugOperations : BugOperationsService;

	constructor(_bugOperations : BugOperationsService){
		this.bugOperations = _bugOperations;
	}*/

	sortBugBy : string = 'name';
	sortBugDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push({name : 'Server communication failure', isClosed : true});
		this.bugs.push({name : 'Application not responding', isClosed : false});
		this.bugs.push({name : 'User actions not recognised', isClosed : false});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : true});
	}

	onAddNewClick(newBugName : string){
		let newBug = this.bugOperations.createNew(newBugName);
		this.bugs.push(newBug);
	}

	onBugNameClick(bug : Bug){
		this.bugOperations.toggle(bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}

	getClosedCount(){
		return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}