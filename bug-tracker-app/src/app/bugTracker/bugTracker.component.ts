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

	newBugName = '';

	sortBugBy : string = 'name';
	sortBugDesc : boolean = false;

	constructor(private bugOperations : BugOperationsService){
		this.bugs.push({name : 'Server communication failure', isClosed : true});
		this.bugs.push({name : 'Application not responding', isClosed : false});
		this.bugs.push({name : 'User actions not recognised', isClosed : false});
		this.bugs.push({name : 'Data integrity checks failed', isClosed : true});
	}

	onAddNewClick(){
		let newBug = this.bugOperations.createNew(this.newBugName);
		this.bugs = [...this.bugs, newBug];
		this.newBugName = '';
	}

	onBugNameClick(bugToToggle : Bug){
		let toggledBug = this.bugOperations.toggle(bugToToggle);
		this.bugs = this.bugs.map(bug => bug ===bugToToggle ? toggledBug : bug);
	}

	onRemoveClosedClick(){
		this.bugs = this.bugs.filter(bug => !bug.isClosed);
	}


}