import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from './global.services';
import { User } from '../classes/User';

@Injectable({
    providedIn: 'root'
})

export class LoginService {

    isLogin: number;

    user: User;

    constructor(private _router: Router, private _global: GlobalService) {
        this.isLogin = 1;

       // this.checkLogin();

    }

    login(user_name: String, password: String) {

        const body = {
            user_name,
            password
        };

        return this._global.post('login', body);

        /* const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this._http.post(this._global.URL_SERVER + 'login', body, options); */
    }

    logout() {

        localStorage.removeItem('token');

        this.user = null;

        this.isLogin = 0;
    }

    checkLogin() {

        if (localStorage.getItem('token')) {

            const body = {
                token: localStorage.getItem('token')
            };

            /* const options = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            }; */

            this._global.post('login/checktoken', body)
            .subscribe(( res: any) => {

                // this.user = new User()

                this.isLogin = 1;
            }, (err) => {
                this.isLogin = 0;
            });

            /* return this._http.post(this._global.URL_SERVER + 'login/checktoken', body, options)
                .subscribe((res: any) => {

                    this.usuario = new Usuario(res.usuario.id, res.usuario.user_name,
                        res.usuario.ppt, res.usuario.vaa, res.usuario.ans, res.usuario.ana,
                        res.usuario.ttt, res.usuario.pra);

                    this.isLogin = 1;

                }, (err) => {
                    this.isLogin = 0;


                }); */

        } else {
            this.isLogin = 0;
        }
    }

}