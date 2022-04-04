import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../interfaces/auth.interface';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private router:Router,private authService:AuthService) { }
  user:Auth={
    email:'',
    usuario:'',
    contrasenia:''
  }
  login(){
    this.authService.login().subscribe(auth =>{
      if(auth.id){
        this.router.navigate(['./heroes'])
      }
    })
  }

}
