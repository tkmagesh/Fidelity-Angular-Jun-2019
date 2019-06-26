import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from './services/bugOperartions.service';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';

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
		this.bugOperations
			.getAll()
			.subscribe(bugs => this.bugs = bugs);
	}

	onNewBugCreated(newBug : Bug){
		this.bugs = [...this.bugs, newBug];
	}	

	onBugNameClick(bugToToggle : Bug){
		this.bugOperations
			.toggle(bugToToggle)
			.subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug ===bugToToggle ? toggledBug : bug));
	}

	onRemoveClosedClick(){
		let allObservables = this.bugs
			.filter(bug => bug.isClosed)
			.map(closedBug => this.bugOperations.remove(closedBug));
		console.log(allObservables);
		forkJoin(allObservables)
			.subscribe(() => this.loadBugs());
	}


}