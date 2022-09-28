import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { MadridComponent } from './components/madrid/madrid.component';
import { UsersComponent } from './components/users/users.component';
import { CatalanaComponent } from './components/catalana/catalana.component';
import { ValencianaComponent } from './components/valenciana/valenciana.component';

const routes: Routes = [
    {
        path: '',
        component: MadridComponent
    },
    {
        path: 'catalana',
        component: CatalanaComponent
    },
    {
        path: 'valenciana',
        component: ValencianaComponent
    },
    {
        path: 'madrid',
        component: MadridComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FederationsRoutingModule { }
