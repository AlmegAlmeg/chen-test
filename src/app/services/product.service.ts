import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  url: string = 'http://localhost:3000/products'
  products: any[] = []

  async getAllProducts(){
    const res = await fetch(this.url)
    const data = res.json()
    return data
  }
}
