import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
  }
lWithGoogle(){
  const { email, password } = this.user;
  this.authService.loginWithGoogle(email,password).then(res => {
    console.log('Se registro', res)
  })
}
}
