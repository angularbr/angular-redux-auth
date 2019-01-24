import { Component } from '@angular/core';
import { User } from './contracts/user';

@Component({
  selector: 'body',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-redux-auth';
  constructor() {
    //fake user
    if (!localStorage.getItem('users')) {
      const user = JSON.stringify(<User>{ email: 'test@mail', password: '123', id: 1 })
      localStorage.setItem('users', user);
    }
  }
}
