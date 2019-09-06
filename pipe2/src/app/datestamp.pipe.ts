import { Pipe, PipeTransform } from '@angular/core';

@Pipe( {
    name: 'datestamp'
})
export class DateStamp implements PipeTransform {

    transform(info: any): string {
        let date: Date = new Date();  
        return `${info} - ${date}`;
    }

}
