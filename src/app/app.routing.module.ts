import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/gaurds/auth.gaurd';
import { LayoutComponent } from 'src/app/shared/layout/layout.component';
import { ErrorComponent } from './shared/error/error.component';

const appRoutes: Routes = [
    {
        path: 'login',
        loadChildren: () => import('src/app/features/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        loadChildren: () => import('src/app/features/register-user/register-user.module').then(m => m.RegisterUserModule)
    },
    {
        path: 'main',
        component: LayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: () => import('src/app/features/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
        {
            path: 'departments',
            loadChildren: () => import('src/app/features/department/department.module').then(m => m.DepartmentModule)
        },
        {
            path: 'employees',
            loadChildren: () => import('src/app/features/employees/employees.module').then(m => m.EmployeesModule)
        },
        {
            path: 'categories',
            loadChildren: () => import('src/app/features/aboutus/aboutus.module').then(m => m.AboutUsModule)
        },
        {
            path: 'contactus',
            loadChildren: () => import('src/app/features/contactus/contactus.module').then(m => m.ContactUsModule)
        }]
    },
    {
        path: 'error',
        component: ErrorComponent,
        //loadChildren: () => import('src/app/shared/error/error.module').then(m => m.ErrorModule)
    },
    {
        path: '',
        redirectTo: 'main/categories',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }