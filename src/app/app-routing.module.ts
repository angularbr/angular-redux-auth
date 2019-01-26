import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './tokeninterceptor';
import { fakeBackendProvider } from './mock/http.mock.interceptor';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppRouterGuard } from "./auth/routerGuard.service";
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,children:[
      {
        path: 'user',
        component: UserComponent,
        canActivate: [AppRouterGuard]
      },
    ]
  },

  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [HttpClientModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AppRouterGuard,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },

    // mocking backend http-server
    fakeBackendProvider
  ],
})
export class AppRoutingModule { }
