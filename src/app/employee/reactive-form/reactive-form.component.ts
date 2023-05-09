import { Component } from '@angular/core';
import {FormGroup, FormControl,  Validators} from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';


@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {

  validPattern: any = "^[a-zA-Z0-9]*$";
  LoginForm = new FormGroup({
    
    name: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(25), Validators.pattern(this.validPattern)]),

    lastName: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(25), Validators.pattern(this.validPattern)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    department:new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    
    phone: new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(150)]),

    password: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(25)]),

    status: new FormControl('', [Validators.required]),
    
  })
  allUser: any;


  constructor( private commonservice: ApiService){}

  

  LoginUser(){

    console.warn(this.LoginForm.value)
    this.commonservice.createEmployee(this.LoginForm.value).subscribe(() =>{
      // this.getLatestEmployee()
      console.warn(" user has been added")
    })
  }
 

   get nameValidator(){
    return this.LoginForm.get('name');
  }

  get lastNameValidator(){
    return this.LoginForm.get('lastName');
  }
  get emailValidator(){
    return this.LoginForm.get('email')
  }

  get departmentValidator(){
    return this.LoginForm.get('department')
  }


  get addressValidator(){
    return this.LoginForm.get('address')
  }

  get phoneValidator(){
    return this.LoginForm.get('phone')
  }

  get descriptionValidator(){
    return this.LoginForm.get('description')
  }
  get passwordValidator(){
    return this.LoginForm.get('password')
  }

  get statusValidator(){
    return this.LoginForm.get('status')
  }
  
  // constructor( private commonservice: ApiService){}

  addEmployee(){
    console.log("It is working")
    
  }



  }
