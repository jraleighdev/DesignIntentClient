import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import {FormsModule } from '@angular/forms';
import {AppMaterialModule} from './shared-modules/app-material.module';
import {SharedModule} from './shared-modules/shared.module';
import {AccountService} from './account/account.service';
import {DashboardService} from './dashboard/dashboard.service';
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-angular-grids';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    SharedModule
  ],
  providers: [
    AccountService,
    DashboardService,
    PageService,
                SortService,
                FilterService,
                GroupService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
