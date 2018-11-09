import { Injectable } from '@angular/core';
import { GlobalService } from './global.services';


@Injectable({
    providedIn: 'root'
})

export class UserServices {

    constructor(private _global: GlobalService) {

    }

    allUsers() {
        return [
            {'name': 'juan', 'type': 'admin'}, {'name': 'ramon', 'type': 'admin'},
             {'name': 'juana', 'type': 'empleado'}, {'name': 'marcela', 'type': 'empleado'},
              {'name': 'gonzalo', 'type': 'empleado'}, {'name': 'maria', 'type': 'empleado'}
        ];
    }

}
