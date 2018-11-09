import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})

export class GlobalService {
    URL_SERVER = '';

    constructor(private _http: HttpClient) { }


    get(url: string) {
        const options = {
            headers : new HttpHeaders({
                'Content-Type' : 'application/json'
                // 'token' : localStorage.getItem('token')

            })
        };
        return  this._http.get( this.URL_SERVER + url, options )
        .pipe(map(res => res) );

    }

}

