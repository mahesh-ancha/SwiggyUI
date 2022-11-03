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
  iddd: Products["productId"] =1;

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
  
  AddToCart(product :Products )
  {
this.cartService.AddCart(product)
    .subscribe({ 
       next: (res)=>{
        this.cart=res;
       
     
      },
      error:(respons) => {
        console.log(product);
        console.log(respons);
      }
    })

  
  } 

  addToCart(product : Products)
  {
    return this.cartService.AddtoCart(product);
    alert("Added to cart");
  }

}

function AddToCart(id: any) {
  throw new Error('Function not implemented.');
}

