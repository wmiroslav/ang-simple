import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit {

  @Input() product;

  constructor() { }

  ngOnInit() {
  }

}
