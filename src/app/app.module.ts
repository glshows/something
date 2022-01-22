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
import { ProductBioDegradebleComponent } from './product-bio-degradeble/product-bio-degradeble.component';
import { ProductRecycleFabricComponent } from './product-recycle-fabric/product-recycle-fabric.component';
import { ProductCharacteristicComponent } from './product-characteristic/product-characteristic.component';
import { ProductJacquardWovenComponent } from './product-jacquard-woven/product-jacquard-woven.component';
import { FaqComponent } from './faq/faq.component';
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
    FooterComponent,
    ProductBioDegradebleComponent,
    ProductRecycleFabricComponent,
    ProductCharacteristicComponent,
    ProductJacquardWovenComponent,
    FaqComponent
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
