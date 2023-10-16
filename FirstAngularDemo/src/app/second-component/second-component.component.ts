import { Component } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
    prodarr: Product[]=[
      {
        "productId":1,
        "productName":"Television",
        "productPrice": 380
      },
      {
        "productId":2,
        "productName":"Bar Soap",
        "productPrice": 20
      },
      {
        "productId":3,
        "productName":"Lawn Chair",
        "productPrice": 80
      },
      {
        "productId":4,
        "productName":"Dresser",
        "productPrice": 120
      },
      {
        "productId":5,
        "productName":"Brake Pads",
        "productPrice": 350
      }
    ]
}
