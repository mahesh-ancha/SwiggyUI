import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginAuth: AuthService) { }

  ngOnInit(): void {
  }
  loginform = new FormGroup({
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(12)
    ])
  });

  isUserValid : boolean=false;
  displayMsg : string ='';

  loginSubmitted()
  {
      this.loginAuth.loginUser([
        this.loginform.value.email!,
        this.loginform.value.password!
      ]
        ).subscribe((res) =>{
            if(res=='Success')
            {
              this.isUserValid=false;
             this.displayMsg= "Login Unsuccessful";
            }
            else{
              this.isUserValid=true;
              this.displayMsg= "Login Successful";
            }
          });
  }

get  Email() : FormControl
{
  return this.loginform.get("email") as FormControl;
}
get Password() : FormControl
{
  return this.loginform.get("password") as FormControl;
}

}