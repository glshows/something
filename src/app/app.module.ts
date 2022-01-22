import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingComponent } from './landing/landing.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { FooterComponent } from './footer/footer.component';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutUsComponent,
    ContactUsComponent,
    LandingComponent,
    PagenotfoundComponent,
    OurPeopleComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'sdds'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
