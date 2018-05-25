import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: String): any {
        if (!items || !filter) {
            return items;
        }
        filter = filter.toLocaleLowerCase();
        return items.filter(item => {
            return item.name.toLocaleLowerCase().indexOf(filter) !== -1
                || item.company.toLocaleLowerCase().indexOf(filter) !== -1;
        });
    }
}
