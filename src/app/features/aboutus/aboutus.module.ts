import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsRoutingModule } from 'src/app/features/aboutus/aboutus.routing';
import { AboutusComponent } from 'src/app/features/aboutus/aboutus.component';
import { AppCommonModule } from 'src/app//app.common.module';
import { ButtonModule, ToastModule, TooltipModule, TreeModule } from 'primeng';


import { NodeService } from './nodeservice';

@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    TreeModule,
    ToastModule,
    ButtonModule,
    TooltipModule,
    AppCommonModule
  ],
  declarations: [AboutusComponent],
  providers: [NodeService]
})
export class AboutUsModule { }