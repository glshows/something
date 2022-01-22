import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LandingComponent } from './landing/landing.component';
import { OurPeopleComponent } from './our-people/our-people.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  { path: '',redirectTo: 'home', pathMatch: 'full'  },
  { path: 'home', component: LandingComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'ourPeople', component: OurPeopleComponent },
  { path: 'aboutUs', component: AboutUsComponent },

  { path: '**', component: PagenotfoundComponent },  // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
