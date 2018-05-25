import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ApiService } from '../../services/api-service';
import { Subscription } from 'rxjs/Subscription';


// enum STATUS {
// }


@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit, OnDestroy {

  productSubscribtion: Subscription;
  productTypes: any[];
  products: any[];
  filteredBy = 'Allocation'; // todo
  pagination;



  constructor(private api: ApiService) { }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
    this.productSubscribtion.unsubscribe();
  }


  getProducts() {
    this.productSubscribtion = this.api.getProducts(this.filteredBy).subscribe((response) => {
      this.products = response.data;
      this.pagination = response.pagination;
      this.setProductTypes();
    }, (error) => {
      console.log(error);
    });
  }

  setProductTypes() {
    this.productTypes = [];
    for (let i = 0, iLen = this.products.length; i < iLen; i++) {
      let isInArray = false;
      for (let j = 0, jLen = this.productTypes.length; j < jLen; j++) {
        if (this.products[i].name === this.productTypes[j].name) {
          isInArray = true;
          this.productTypes[j].count++;
          break;
        }
      }
      if (!isInArray) {
        const productType = {
          name: this.products[i].name,
          fullname: this.products[i].fullname,
          color: this.products[i].color,
          count: 1
        };
        this.productTypes.push(productType);
      }
    }
  }

}
