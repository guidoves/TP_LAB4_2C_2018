import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ModuloExterno } from './modulo.externo';
import { AppRoutingModule } from './app.routes';

import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/admin/users/users.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { StatisticsComponent } from './components/admin/statistics/statistics.component';
import { FormComponent } from './components/admin/users/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UsersComponent,
    OrdersComponent,
    StatisticsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    ModuloExterno,
    ModalModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
