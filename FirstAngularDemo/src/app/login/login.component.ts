import { Component } from '@angular/core';
import { Login } from '../Model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginobj:Login = new Login();
loginValidation(){
  if(this.loginobj.password == null && this.loginobj.username == null){
    console.log("Please enter username or password");
  }
}

}
