import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {AccountRoutingModule} from './account-routing.module';
import {AppMaterialModule} from '../shared-modules/app-material.module';
import {SharedModule} from '../shared-modules/shared.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    AppMaterialModule,
    SharedModule
  ], providers: [
  ]
})
export class AccountModule { }
