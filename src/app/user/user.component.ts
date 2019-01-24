import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: []
})
export class UserComponent implements OnInit {

  user:any
  constructor() { 
    this.user = JSON.parse(localStorage.getItem('users'));
  }

  ngOnInit() {
  }

}
