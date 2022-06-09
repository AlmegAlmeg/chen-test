import { Component, OnInit } from '@angular/core';
import Product from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private productService: ProductService) {}
  allProducts: Product[] = []
  filteredArr: Product[] = []
  isNotFound: boolean = false

  async ngOnInit() {
    this.allProducts = await this.productService.getAllProducts()
    this.filteredArr = this.allProducts
  }

  handleFilter(e: any){
    const text = e.target.value
    this.filteredArr = this.allProducts.filter((item) => item.title.toLowerCase().includes(text))
    if(this.filteredArr.length == 0) this.isNotFound = true
    console.log(this.isNotFound)
  }
}
