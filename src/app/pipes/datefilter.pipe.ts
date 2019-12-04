import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datefilter'
})
export class DatefilterPipe implements PipeTransform {


   transform(items: any[], field1:string,field2:string, fromDate: any,toDate:any): any[] {
    if(!items) return [];
    if(!fromDate || !toDate) return items;

    let startDate= new Date(fromDate.year,fromDate.month-1,fromDate.day).setHours(0,0,0,0);
    let endDate= new Date(toDate.year,toDate.month-1,toDate.day).setHours(0,0,0,0);
    let filetrdata=[];
     items.filter( str => {
           if( startDate<=str[field2] && str[field2]<=endDate){
            filetrdata.push(str);
           }
        });
        return filetrdata;
   }
}
