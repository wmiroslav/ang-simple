import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

// fake API
// hardcoded data
@Injectable()
export class ApiService {

    dummyProducts = {
        pagination: {
            total: 355,
            page: 1,
            countSize: 6,
        },
        data: [
            {
                id: 1123,
                name: 'C3',
                fullname: '',
                date: 'Jan, 2016',
                allocation: '300t',
                nomination: '290t',
                actual: '280t',
                company: 'GASCO',
                port: 'Ruwais',
                status: 'Loading',
                color: '#ba9ac9'
            },
            {
                id: 1124,
                name: 'C3',
                fullname: '',
                date: 'Jan, 2016',
                allocation: '280t',
                nomination: '280t',
                actual: '285t',
                company: 'AD GAS',
                port: 'Shab',
                status: 'Waiting',
                color: '#ba9ac9'
            },
            {
                id: 1125,
                name: 'C4',
                fullname: '',
                date: 'Feb, 2016',
                allocation: '350t',
                nomination: '340t',
                actual: '330t',
                company: 'GASCO',
                port: 'Ruwais',
                status: 'Finished',
                color: '#466f83'
            },
            {
                id: 1126,
                name: 'C5',
                fullname: '',
                date: 'Feb, 2016',
                allocation: '300t',
                nomination: '290t',
                actual: '280t',
                company: 'GASCO',
                port: 'Ruwais',
                status: 'Waiting',
                color: '#6888af'
            },
            {
                id: 1127,
                name: 'L',
                fullname: 'LPG',
                date: 'Jan, 2016',
                allocation: '500t',
                nomination: '500t',
                actual: '',
                company: 'GASCO',
                port: 'Ruwais',
                status: 'Draft',
                color: '#dbbc79'
            },
            {
                id: 1128,
                name: 'S',
                fullname: 'Sulphur',
                date: 'Jan, 2016',
                allocation: '40t',
                nomination: '390t',
                actual: '380t',
                company: 'GASCO',
                port: 'Ruwais',
                status: 'Loading',
                color: '#7e706f'
            }
        ]
    };


    getProducts(filteredBy: string) {
        return Observable.of(this.dummyProducts);
    }

}
