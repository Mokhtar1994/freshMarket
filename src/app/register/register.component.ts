import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  isLoading:boolean = false 

  constructor(private _authService:AuthService, private _router:Router){}


  signOutForm:FormGroup = new FormGroup({
    name : new FormControl("",[Validators.required,Validators.minLength(3)]),
    email : new FormControl("",[Validators.required,Validators.email]),
    password : new FormControl("",[Validators.required , Validators.pattern(/^[A-Za-z].{6,8}/gi)]),
    rePassword : new FormControl("",[Validators.required]),
    phone : new FormControl("",[Validators.required , Validators.pattern(/^(01)([0-9]{9})/)])
  })


  submit(){
    this.isLoading = true ;
    this._authService.register(this.signOutForm.value).subscribe({
      next:(res:any)=>{
        // console.log(this.signOutForm);
        console.log(res);
        this._router.navigate(["/SignIn"])
        this.isLoading = false ;
      },
      error:(e)=>{
        console.log(e.error)
        this.isLoading = false ;
      }
    })
  }


}
