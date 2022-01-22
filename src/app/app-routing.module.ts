import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FaqComponent } from './faq/faq.component';
import { LandingComponent } from './landing/landing.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductBioDegradebleComponent } from './product-bio-degradeble/product-bio-degradeble.component';
import { ProductCharacteristicComponent } from './product-characteristic/product-characteristic.component';
import { ProductJacquardWovenComponent } from './product-jacquard-woven/product-jacquard-woven.component';
import { ProductRecycleFabricComponent } from './product-recycle-fabric/product-recycle-fabric.component';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: LandingComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'ourPeople', component: OurPeopleComponent },
  { path: 'aboutUs', component: AboutUsComponent },
  { path: 'biodegradable_Plant_Based_Fabric', component: ProductBioDegradebleComponent },
  { path: 'recycled_Fabric', component: ProductRecycleFabricComponent },
  { path: 'characteristic_Fabric', component: ProductCharacteristicComponent },
  { path: 'jacquard_Woven_Fabric', component: ProductJacquardWovenComponent },
  { path: 'faq', component: FaqComponent },

  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
