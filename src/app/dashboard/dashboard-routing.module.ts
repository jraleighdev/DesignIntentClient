import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {FileCabinetComponent} from './file-cabinet/file-cabinet.component';

const routes: Routes = [
  {path: 'file', component: FileCabinetComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardRoutingModule { }
