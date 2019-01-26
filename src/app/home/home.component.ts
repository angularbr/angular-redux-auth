import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { isAuthentication } from '../store/selectors/auth.selectors';
import * as fromAuth from '../store/actions'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  hasStateToken$: Observable<any>;

  constructor(private store: Store<any>) {

    this.hasStateToken$ = store.select(isAuthentication);
   
  }

  ngOnInit() {

  }

  logout(): void {
    this.store.dispatch(new fromAuth.AuthLogout());
  }

}
