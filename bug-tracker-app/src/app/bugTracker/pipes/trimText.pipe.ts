import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name : 'trimText'
})
export class TrimTextPipe implements PipeTransform{
	transform(data : string, maxLength : number = 30){
		return data.length <= maxLength ? data : data.substr(0,maxLength) + '...';
	}
}