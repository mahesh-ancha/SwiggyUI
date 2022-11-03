import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from '../models/cart.model';
import { Products } from '../models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  items : Products[] =[];
  cart2:any;

  baseUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this.baseUrl+'api/products')
  }
 
 /*AddCart(id :Products) 
  {
    return this.http.post(this.baseUrl+'api/cart/'+id,id,{responseType : "text"});
  }

*/

  

}
