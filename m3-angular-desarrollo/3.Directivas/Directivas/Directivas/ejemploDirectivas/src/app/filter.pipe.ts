import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], buscarText: string): any[] {
    if(!items){
       return [];
      }
    if(!buscarText){
      return items;
    }
    buscarText = buscarText.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(buscarText));
  }

}
