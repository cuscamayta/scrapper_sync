import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PointAttentionComponent } from './components/point-attention/point-attention.component';

const routes: Routes = [
    {
        path: '',
        component: PointAttentionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PointsAttentionRoutingModule { }
