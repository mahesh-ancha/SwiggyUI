import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Products } from '../models/Products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl:string=environment.baseApiUrl;
  constructor(private http:HttpClient) { }
  GetAllProducts():Observable<Products[]>{
    return this.http.get<Products[]>('https://localhost:44367/api/Products')
  }

  

}
