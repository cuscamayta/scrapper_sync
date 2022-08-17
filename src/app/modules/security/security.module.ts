import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { UsersComponent } from './components/users/users.component';
import { PasswordComponent } from './components/password/password.component';
import { SecurityRoutingModule } from './security-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapSwitchModule } from 'ngx-bootstrap-switch';
import {OrderListModule} from 'primeng/orderlist'; 
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from "primeng/dialog";
import { ButtonModule } from "primeng/button";



@NgModule({
  declarations: [ProfilesComponent, UsersComponent, UsersComponent, PasswordComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    DataTablesModule,
    FormsModule,
    OrderListModule,
    PanelMenuModule,
    DialogModule,
    ButtonModule,
    NgxBootstrapSwitchModule.forRoot()
  ]
})
export class SecurityModule { }
