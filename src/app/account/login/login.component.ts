import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private account: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(6)])
    });
  }

  onSubmit() {
    this.account.login(this.loginForm.value).subscribe(() => {
      this.router.navigateByUrl('/dashboard/file');
    }, error => {
      console.log(error);
    });
  }

}
