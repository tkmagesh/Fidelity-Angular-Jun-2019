import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'sort',
	pure : true
})
export class SortPipe implements PipeTransform {

	private getComparerFor(attrName : string){
		return function(p1 : any, p2 : any) : number {
	        if (p1[attrName] < p2[attrName]) return -1;
	        if (p1[attrName] > p2[attrName]) return 1;
	        return 0;
	    }
	}

	private getDescendingComparer(comparer){
		return function(p1 : any, p2 : any) : number {
			return comparer(p1, p2) * -1
	    }
	}

	transform(list: any[], attrName : string, isDescending : boolean = false): any[] {
		console.log('sort.transform triggered');
		if (!list || !list.length || !attrName) return list;
		let comparer = this.getComparerFor(attrName);
		if (isDescending)
			comparer = this.getDescendingComparer(comparer);
		return list.sort(comparer);
	}
}