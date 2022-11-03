import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Products } from 'src/app/models/Products.model';
import { Cart } from 'src/app/models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  id:any;
  cart:any;
  product :Cart = {
    productName : '',
    category : '',
    cartId: 2,
    img: '',
    quantity: 0,
    price: 0
  };
  cartr!: Cart ;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
this.cartservice.GetAllCartItems()
.subscribe(
  {
    next : (carts) =>{
      this.cart=carts;
      console.log(carts);
    },
    error:(response)=>
    {
      console.log(response);
    }
  }
)

AddToCart()
{
this.cartservice.AddCart(this.cartr.cartId).subscribe(
  {
    next : (id)=>
    {
      this.id=id;
      console.log(id);
    },
    error:(response)=>{
      console.log(response);
    }
  }
)}
  };
  
}

function AddToCart() {
  throw new Error('Function not implemented.');
}

