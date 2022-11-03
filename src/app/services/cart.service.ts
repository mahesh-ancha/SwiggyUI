import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart.model';
import { Products } from '../models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart2:any;
  items : Products[] =[];
  cart : Cart ={
    productName: '',
    cartId: 0,
    img: '',
    category: '',
    quantity: 0,
    price: 0
  }

  baseUrl : string =environment.baseApiUrl;
  constructor( private http: HttpClient) { }

  GetAllCartItems() : Observable<Cart[]>
  {
    return this.http.get<Cart[]>(this.baseUrl+'api/cart')
  }
 /* AddCart(id : Cart["cartId"]) : Observable<Cart["cartId"]>
  {
    return this.http.post<Cart["cartId"]>(this.baseUrl+'api/cart',id);
  } */
  AddtoCart(product : Products)
{
  this.items.push(product);
}
GetItems()
{
  return this.items;
}
ClearItems()
{
  this.items=[];
  return this.items;
}
AddCart(id :Products)
  {
   return this.http.post(this.baseUrl+'api/cart/',id,{responseType : "text"});
    
  }
}
