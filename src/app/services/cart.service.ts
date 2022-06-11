import { Injectable } from '@angular/core';
import CartItem from '../model/cart-item';
import Product from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartArr: CartItem[] = []

  updateCart(prod: Product, isAdding: boolean = true): void {
    const index = this.cartArr.findIndex(item => item.productId === prod.id)
    const item: CartItem = { productId: prod.id, quantity: 1 }
    if(index === -1) {
      if(!isAdding) return
      this.cartArr.push(item)
    }
    else{
      if(isAdding) {
        this.cartArr[index].quantity++
        return
      }
      this.cartArr[index].quantity--
      if(this.cartArr[index].quantity === 0) this.cartArr.splice(index, 1)
    }
  }
}
