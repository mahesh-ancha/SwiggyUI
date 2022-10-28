import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
   baseurl = 'https://localhost:44367/api/';

registerUser(user:Array<String>) 
{
  return this.http.post(this.baseurl+'User/createUser',{
    FirstName : user[0],
    LastName : user[1],
    Email : user[2],
    MobileNumber : user[3],
    Gender : user[4],
    Password : user[5]
  },{responseType:'text'});
}
}