import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from './../../../../classes/User';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;

  @Output() response: EventEmitter<any>;
  @Input() user: User;
  @Input() operation: string;

  constructor() {

    this.form = new FormGroup({
      'name' : new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÑñáéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙ \s]{1,50}$')]),
      'password' : new FormControl('', [Validators.required]),
      'role' : new FormControl('', [Validators.required]),
    });

    this.response = new EventEmitter();

  }

  newUser() {
    const body = this.form.value;

    const nwUser: User = new User(body.name, body.role);
    this.response.emit(nwUser);
  }

  ngOnInit() {

    if (this.user) {
      this.form.get('nombre').setValue(this.user.name);
      this.form.get('documento').setValue(this.user.role);
    }

  }

}
