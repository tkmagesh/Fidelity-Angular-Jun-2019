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
		this.loadBugs();
	}

	private loadBugs(){
		this.bugs = this.bugOperations.getAll();
	}

	onNewBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}	

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug ===bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs
			.filter(bug => bug.isClosed)
			.forEach(closedBug => this.bugOperations.remove(closedBug));
		this.loadBugs();
	}


}