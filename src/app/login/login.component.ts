import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromAuth from '../store'
import { getCurrentError } from '../store';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  error$: Observable<any>;
  constructor(private store: Store<fromAuth.AuthActions>, private builder: FormBuilder) {

    this.loginForm = this.builder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.error$ = this.store.select(getCurrentError);
  }

  submit(): void {
    this.store.dispatch(new fromAuth.AuthLogin(this.loginForm.value))
  }

}
