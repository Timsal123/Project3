import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
//import { RegistrationComponent } from './registration/registration.component';
//import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LogoutComponent } from './logout/logout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { DebugComponent } from './debug/debug.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
const routes: Routes = [ 
  { path: 'expenses', component: ExpenseEntryListComponent }, 
  { path: 'expenses/detail/:id', component: ExpenseEntryComponent }, 
  { path: '', redirectTo: 'expenses', pathMatch: 'full' }]; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    //RegistrationComponent,
    //ForgotPasswordComponent,
    LogoutComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent,
    DebugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    RouterModule.forRoot(routes),
    MatButtonModule,
    MatIconModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
