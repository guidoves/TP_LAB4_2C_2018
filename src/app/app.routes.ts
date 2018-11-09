import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UsersComponent } from './components/admin/users/users.component';
import { OrdersComponent } from './components/admin/orders/orders.component';
import { StatisticsComponent } from './components/admin/statistics/statistics.component';

const ROUTES: Routes = [
    { path: 'admin', component: AdminComponent,
    children: [
        {path: 'users', component: UsersComponent },
        {path: 'orders', component: OrdersComponent },
        {path: 'statistics', component: StatisticsComponent }
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
