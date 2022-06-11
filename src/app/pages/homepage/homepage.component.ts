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

  selectOption = [
    { value: 'cheap', text: 'From cheap to expansive' },
    { value: 'expansive', text: 'From expansive to cheap' },
  ]

  async ngOnInit() {
    this.allProducts = await this.productService.getAllProducts()
    this.filteredArr = this.allProducts
  }

  handleFilter(e: any){
    this.isNotFound = false
    const text = e.target.value
    this.filteredArr = this.allProducts.filter((item) => item.title.toLowerCase().includes(text))
    if(this.filteredArr.length == 0) this.isNotFound = true
  }

  handleOrderBy(e: any){
    const chosenOption:string = e.target.value
    switch (chosenOption){
      case this.selectOption[0].value:
        return this.filteredArr = this.filteredArr.sort((a,b)=> a.price - b.price)
      case this.selectOption[1].value:
        this.filteredArr = this.filteredArr.sort((a,b)=> a.price - b.price)
        return this.filteredArr.reverse()
      case this.selectOption[2].value:
      default:
        return this.filteredArr
    }
  }
}
