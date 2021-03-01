//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';


//const routes: Routes = [];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
//export class AppRoutingModule { }
/**import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.page').then( m => m.HomePage)},
  {
    path: 'login',
    loadChildren: () => import('./login/login.component').then( m => m.LoginComponent)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.component').then( m => m.RegistrationComponent)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.component').then( m => m.ForgotPasswordComponent)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }**/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
//import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

import { ExpenseGuard } from './expense.guard';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'logout', component: LogoutComponent },
   //{ path: 'expenses', component: ExpenseEntryListComponent, canActivate: [ExpenseGuard]},
   //{ path: 'expenses/detail/:id', component: ExpenseEntryComponent, canActivate: [ExpenseGuard]},
   { path: '', redirectTo: 'expenses', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }