import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from 'primeng/components/common/api';
import { LoginService } from 'src/app/services/login.services';
import { User } from '../../classes/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  msgs: Message[] = [];

  constructor(private router: Router, private _login: LoginService) {

    if (this._login.isLogin === 1) {
      this.router.navigate(['/']);
    }

    this.formLogin = new FormGroup({
      'usuario': new FormControl('', [Validators.required]),
      'contrasena': new FormControl('', [Validators.required])
    });

  }

  showError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Usuario o contraseña incorrectos' });
  }

  login() {

    this._login.login(this.formLogin.value.usuario, this.formLogin.value.contrasena)
      .subscribe((data: any) => {

        console.log(data);

        this._login.isLogin = 1;

        this._login.user = new User('test', 'MOZO');

        localStorage.setItem('token', data.token);

        this.router.navigate(['/']);


      }, (err) => {
        this.showError();

      });

  }
  ngOnInit() {
  }

}
