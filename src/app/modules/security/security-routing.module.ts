import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { PasswordComponent } from './components/password/password.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
    {
        path: '',
        component: ProfilesComponent
    },
    {
        path: 'profiles',
        component: ProfilesComponent
    },
    {
        path: 'password/change',
        component: PasswordComponent
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
export class SecurityRoutingModule { }
