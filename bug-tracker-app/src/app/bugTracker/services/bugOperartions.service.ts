import { Injectable } from '@angular/core';
import { Bug } from '../models/Bug';
import { BugStorageService } from './bugStorage.service';

@Injectable()
export class BugOperationsService{

	constructor(private bugStorage : BugStorageService){

	}
	createNew(newBugName : string) : Bug{
		let newBug : Bug = {
			id : '',
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return this.bugStorage.save(newBug);
	}

	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return this.bugStorage.save(toggledBug);
	}

	getAll(){
		return this.bugStorage.getAll();
	}

	remove(bug : Bug){
		this.bugStorage.remove(bug);
	}
}