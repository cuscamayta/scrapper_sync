import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointAttentionComponent } from './components/point-attention/point-attention.component';
import { PointsAttentionRoutingModule } from './points-attention-routing.module';



@NgModule({
  declarations: [PointAttentionComponent],
  imports: [
    CommonModule,
    PointsAttentionRoutingModule
  ]
})
export class PointsAttentionModule { }
