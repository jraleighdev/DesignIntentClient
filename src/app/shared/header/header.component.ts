import { DashboardService } from './../../dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';
import {AccountService} from '../../account/account.service';
import {Observable} from 'rxjs';
import {User} from '../../account/models/user';
import {Router, RouterModule} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser$: Observable<User>;


  constructor(private account: AccountService, private router: Router, private dashBoard: DashboardService) { }

  ngOnInit(): void {
    this.currentUser$ = this.account.currentUser$;
  }

  signOut() {
    this.account.logout();
    this.router.navigateByUrl('/');
  }

  showNav() {
    this.dashBoard.showNav();
  }

}
