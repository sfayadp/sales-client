import { Component, OnInit } from '@angular/core';
import { ProductDTO } from 'src/app/models/productDTO';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  productList: ProductDTO = [];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.GetProducts().subscribe( (data) => {
      console.log(data);
      this.productList = data;
    });
  }

}
