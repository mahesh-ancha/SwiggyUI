import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/app/models/Products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : any;
  cart : any;
  idd:any;

  constructor(private productsService : ProductsService,private cartService : CartService) { }

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
    });

  }
  AddToCart(id : number)
  {
this.productsService.AddCart(id)
    .subscribe({
      next:(cart) => {
        this.cart = cart;
        console.log(cart);
        console.log(id);
      },
      error:(respons) => {
        console.log(id);
        console.log(respons);
      }
    })

  
  }
}


