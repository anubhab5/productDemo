import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

 @Input() productListChild: Array<Product> = [];

  constructor() { }

  ngOnInit(): void {
    // alert('In Product Component');
    console.log(this.productListChild);
  }

}
