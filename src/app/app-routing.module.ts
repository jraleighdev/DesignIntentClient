import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'account', loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule)},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module')
      .then(mod => mod.DashboardModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
