import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { InformationComponent } from './components/information/information.component';
import { RedirectGuard } from './core/services/route.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OurTeamComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    RedirectGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
