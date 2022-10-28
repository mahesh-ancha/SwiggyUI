import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   repeatpass : string = 'none';
  constructor() { }

  ngOnInit(): void {
  }
  registerform = new FormGroup({
    firstname :new  FormControl("",[
      Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z].*")
    ]),
    lastname : new FormControl("",[      Validators.required, Validators.minLength(4), Validators.pattern("[a-zA-Z].*")
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
      console.log("submitted");
      this.repeatpass ='none';
    }
    else{
      this.repeatpass = 'inline';
    }
    console.log(this.registerform);
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
