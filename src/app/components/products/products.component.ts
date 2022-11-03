import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.productsService.GetAllProducts()
    .subscribe({
      next:(products)=>{
        this.products=products;
        console.log(products);
      },
      error:(response)=>
      {
        console.log(response);
      }
    })
  }

}
