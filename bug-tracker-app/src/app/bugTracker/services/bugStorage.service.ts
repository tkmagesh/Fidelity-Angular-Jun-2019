import * as uuid from 'uuid/v4'
import { Bug } from '../models/Bug'

export class BugStorageService{
	
	private storage = window.localStorage;


	save(bug : Bug) : Bug {
		if (bug.id === ''){
			bug.id = uuid();
		}
		this.storage.setItem(bug.id, JSON.stringify(bug));
		return bug;
	}

	getAll() : Bug[] {
		let result = [];
		for(let index = 0, count = this.storage.length; index < count; index++){
			let key = this.storage.key(index),
				rawData = this.storage.getItem(key),
				bug = JSON.parse(rawData);
			result.push(bug);
		}
		return result;
	}
	remove(bug : Bug) : void {
		this.storage.removeItem(bug.id);
	}
}