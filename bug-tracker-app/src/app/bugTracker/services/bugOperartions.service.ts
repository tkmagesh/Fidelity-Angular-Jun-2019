import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(newBugName : string) : Bug{
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		return newBug;
	}

	toggle(bug : Bug) : void {
		bug.isClosed = !bug.isClosed;
	}
}