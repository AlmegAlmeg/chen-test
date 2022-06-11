import { Component, Input, OnInit } from '@angular/core';
import Product from 'src/app/model/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements OnInit {

  constructor(private cartService: CartService) {

  }
  @Input() currentProduct: Product | undefined

  ngOnInit(): void {
  }

  updateProduct(state: boolean):void{
    this.cartService.updateCart(this.currentProduct!, state)
  }
}
