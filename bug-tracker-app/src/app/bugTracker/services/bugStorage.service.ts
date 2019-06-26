import { Injectable } from '@angular/core';
import * as uuid from 'uuid/v4'
import { Bug } from '../models/Bug'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BugStorageService{
	
	/*private storage = window.localStorage;


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
	}*/

	private serviceEndPoint = 'http://localhost:3000/bugs';

	constructor(private http : HttpClient){

	}
	getAll() : Observable<Bug[]> {
		return this.http
			.get<Bug[]>(this.serviceEndPoint);
	}

	save(bugData : Bug) : Observable<Bug>{
		if (bugData.id === 0){
			return this.http
				.post<Bug>(this.serviceEndPoint, bugData);
		} else {
			return this.http
				.put<Bug>(`${this.serviceEndPoint}/${bugData.id}`, bugData)
		}
	}

	remove(bugData : Bug) : Observable<any>{
		return this.http
				.delete<Bug>(`${this.serviceEndPoint}/${bugData.id}`)
	}
}