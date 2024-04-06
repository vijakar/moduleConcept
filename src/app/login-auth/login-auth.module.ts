import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginAuthRoutingModule } from './login-auth-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginAuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  ]
})
export class LoginAuthModule { }
