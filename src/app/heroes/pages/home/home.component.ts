import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';
import { Auth } from '../../../auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
  .container{margin:10px;}
  `
  ]
})
export class HomeComponent {
 // auth!:Auth;
 
 get auth(){
   return this.authservice.auth;
 }
 
 constructor(private router:Router,private authservice:AuthService) { }
logout(){
  this.router.navigate(['./auth'])
}
}
