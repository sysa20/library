import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchText: string): unknown {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();
    console.log("items:", items);
    console.log("searchText", searchText);
    return items.filter(item => {
      console.log("item:", item);
      return item.toLocaleLowerCase().includes(searchText);
    });
  }

}
