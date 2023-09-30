import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoged:boolean = false 

  constructor(private _authService:AuthService ,private _router:Router){
    _authService.userData.subscribe((res)=>{
      if(res !== null){
        console.log(res)
        this.isLoged = true
      }else{
        this.isLoged = false 
      }
    })
  }

  logout(){
    localStorage.removeItem("EcommerceUserToken");
    this._router.navigate(["/SignIn"]);
    this.isLoged = false;

  }
  

}
