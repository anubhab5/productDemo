import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'productApp';

  productListParent : Array<Product> =[
    {
      name: 'Dell Laptop',
      price: 40000,
      quantity: 3
    },
    {
      name: 'Mobile Phone',
      price: 10000,
      quantity: 2,
      manufacturer: 'Apple'
    },
    {
      name: 'TV',
      price: 40000,
      quantity: 1
    }
  ];
}
