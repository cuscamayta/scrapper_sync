import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementsComponent } from './components/requirements/requirements.component';
import { RequirementsRoutingModule } from './requirements-routing.module';



@NgModule({
  declarations: [RequirementsComponent],
  imports: [
    CommonModule,
    RequirementsRoutingModule
  ]
})
export class RequirementsModule { }
