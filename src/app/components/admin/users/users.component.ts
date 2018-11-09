import { Component, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Message } from 'primeng/components/common/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  // MODAL
  altaClienteModal: BsModalRef;

  // MENSAJES
  msgsOk: Message[];
  msgsEr: Message[];

  @Output() altacambios: EventEmitter<any>;

  constructor(private _modalService: BsModalService) {
    this.altacambios = new EventEmitter();
   }

   abrirModal(template: TemplateRef<any>) {

    this.msgsEr = [];
    this.msgsOk = [];

    this.altaClienteModal = this._modalService.show(template, { ignoreBackdropClick: true });

  }

  private mostrarMensaje( severity: string, summary: string, detail: string, msj: string ) {
    if (msj === 'ok') {
      this.msgsOk = [];
      this.msgsOk.push({ severity, summary, detail });

    } else {
      this.msgsEr = [];
      this.msgsEr.push({ severity, summary, detail });
    }
  }


}
