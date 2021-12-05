import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
public api = 'https://sp-api-test-v1.herokuapp.com/api'
  constructor(
    private http: HttpClient
  ) { }

  getProducts() {
   return this.http.get(this.api + '/products')
  }

  createProduct(products: any) {
    return this.http.post(this.api + '/products', products)
  }
}


