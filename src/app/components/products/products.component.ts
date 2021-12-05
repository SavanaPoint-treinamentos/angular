import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ApiService } from '../../services/api.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
public contactForm!: FormGroup;
public products: any = [];
  constructor(
    private forB: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit(): void {
    this.contactForm = this.forB.group({
      name: ['', Validators.required],
      imageURL : ['', Validators.required],
      price : ['', Validators.required],
      description : ['', Validators.required]
    });

    this.getProducts();
  }
handlerForm() {
  
  const { name, imageURL, price, description } = this.contactForm.value;
  const products = {
    name, imageURL, price, description
  }
  this.api.createProduct(products).subscribe(datas => {
    console.log(datas)
    this.getProducts();

  })
}
  getProducts() {
    this.api.getProducts()
    .subscribe((datas): any => {
      this.products = datas
    })
  }
}
