import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/model/product';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor() {

  }
  @Input() currentProduct: Product | undefined

  ngOnInit(): void {
  }

}
