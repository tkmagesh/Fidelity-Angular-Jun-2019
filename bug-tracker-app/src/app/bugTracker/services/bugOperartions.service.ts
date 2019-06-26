import { Bug } from '../models/Bug';

export class BugOperationsService{
	createNew(newBugName : string) : Bug{
		let newBug : Bug = {
			name : newBugName,
			isClosed : false
		};
		return newBug;
	}

	toggle(bugToToggle : Bug) : Bug {
		let toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed};
		return toggledBug;
	}
}