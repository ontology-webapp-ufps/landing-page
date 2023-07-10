import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { RedirectGuard } from './core/services/route.service';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'auth',
    canActivate: [RedirectGuard],
    component: RedirectGuard,
    data: {
      externalUrl: environment.login_url
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
