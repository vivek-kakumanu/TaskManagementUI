import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityfilter'
})
export class PriorityfilterPipe implements PipeTransform {

  transform(items: any[], field:string, fromPriority: any,toPriority:any): any[] {
     
    if(!items) return [];
    if(!fromPriority || !toPriority) return items;

    let filetrdata=[];
     items.filter( str => {
           if(fromPriority<=str[field] && str[field]<=toPriority){
            filetrdata.push(str);
           }
        });
        return filetrdata;
   }
}
