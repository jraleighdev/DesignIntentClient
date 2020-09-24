import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileCabinetComponent } from './file-cabinet/file-cabinet.component';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {AppMaterialModule} from '../shared-modules/app-material.module';
import {SharedModule} from '../shared-modules/shared.module';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { FileSelectionComponent } from './file-selection/file-selection.component';
import { FileBillComponent } from './file-bill/file-bill.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';


@NgModule({
  declarations: [FileCabinetComponent, FileSelectionComponent, FileBillComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule,
    SharedModule,
    GridModule,
    TabModule,
  ],
})
export class DashboardModule { }
