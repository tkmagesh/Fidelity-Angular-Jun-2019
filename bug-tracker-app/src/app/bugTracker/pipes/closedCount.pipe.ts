import { Pipe, PipeTransform } from '@angular/core';
import { Bug } from '../models/Bug';

@Pipe({
	name: 'closedCount'
})
export class ClosedCountPipe implements PipeTransform {
	transform(list: Bug[], ): number {
		console.log('closedCount.transform triggered');
		return list.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
	}
}