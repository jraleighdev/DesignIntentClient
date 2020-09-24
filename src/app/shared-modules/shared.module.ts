import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from '../account/account.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ], exports: [
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
