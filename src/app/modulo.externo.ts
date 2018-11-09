import { NgModule } from '@angular/core';

// MATERIAL

// PrimeNG
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';


@NgModule({

    imports: [MessagesModule, MessageModule],
    exports: [MessagesModule, MessageModule]

})

export class ModuloExterno {}

