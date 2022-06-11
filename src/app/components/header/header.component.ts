import { Component, OnInit } from '@angular/core';
import CartItem from 'src/app/model/cart-item';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private cartService: CartService) { }

  cartArr: CartItem[] = this.cartService.cartArr

  ngOnInit(): void {
  }

}
