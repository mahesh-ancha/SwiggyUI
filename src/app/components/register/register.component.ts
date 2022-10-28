import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   repeatpass : string = 'none';
   displayMsg : string = '';
   isAccountCreated : boolean =false;
  constructor( private authservice : AuthService) { }

  ngOnInit(): void {
  }
  registerform = new FormGroup({
    firstname :new  FormControl("",[
      Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z].*")
    ]),
    lastname : new FormControl("",[Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z].*")
  ]),
    email : new FormControl("",[Validators.required, Validators.email]),
    mobilenumber : new FormControl("",[
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern("[0-9]*")
    ]),
    gender : new FormControl("",[Validators.required]),
    pwd : new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(12)
    ]),
    rpwd : new FormControl("")
  })

  registerSubmitted()
  {
    if(this.Password.value == this.Rpassword.value)
    {
      console.log(this.registerform.valid);
      this.repeatpass ='none';
      this.authservice.registerUser([
        this.registerform.value.firstname!,
        this.registerform.value.lastname!,
        this.registerform.value.email!,
        this.registerform.value.mobilenumber!,
        this.registerform.value.gender!,
        this.registerform.value.pwd!
      ]).subscribe((res) =>{
        if(res== "Success"){
          this.displayMsg = "Account created successfully";
          this.isAccountCreated= true;
        }
        else if(res == "Already Exist")
        {
          this.displayMsg = "account already created, try with another mail";
          this.isAccountCreated =false
        }
        else{
          this.displayMsg= "something went wrong";
          this.isAccountCreated = false;
        }
      }
        )
    }
    else{
      this.repeatpass = 'inline';
    }
    //console.log(this.registerform.get("firstname"));
  }

  get FirstName() : FormControl {
    return this.registerform.get("firstname") as FormControl
  }
  get LastName() : FormControl {
    return this.registerform.get("lastname") as FormControl
  }
  get Email() : FormControl {
    return this.registerform.get("email") as FormControl
  }
  get Gender() : FormControl {
    return this.registerform.get("gender") as FormControl
  }
  get MobileNumber() : FormControl {
    return this.registerform.get("mobilenumber") as FormControl
  }
  get Password() : FormControl {
    return this.registerform.get("pwd") as FormControl
  }
  get Rpassword() : FormControl {
    return this.registerform.get("rpwd") as FormControl
  }

}
