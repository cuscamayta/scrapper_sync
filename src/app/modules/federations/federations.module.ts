import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { UsersComponent } from './components/users/users.component';
import { MadridComponent } from './components/madrid/madrid.component';
import { FederationsRoutingModule } from './federations-routing.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';
import { NgxBootstrapSwitchModule } from 'ngx-bootstrap-switch';
import { OrderListModule } from 'primeng/orderlist';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DialogModule } from "primeng/dialog";
import { CatalanaComponent } from './components/catalana/catalana.component';
import { FederationService } from './services/federation.service';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { TreeModule } from 'primeng/tree';
import { TreeNode } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipModule } from 'primeng/tooltip';
import { TreeTableModule } from 'primeng/treetable';
import { FileService } from './services/fileService';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [ProfilesComponent, UsersComponent, UsersComponent, MadridComponent, CatalanaComponent],
  providers: [FederationService, MessageService, FileService],
  imports: [
    CommonModule,
    FederationsRoutingModule,
    DataTablesModule,
    FormsModule,
    OrderListModule,
    PanelMenuModule,
    DialogModule,
    ButtonModule,
    ToastModule,
    TreeModule,
    NgbModule,
    TooltipModule,
    TreeTableModule,
    AccordionModule,
    NgxBootstrapSwitchModule.forRoot()
  ]
})
export class FederationsModule { }
