import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FeaturesComponent } from './features/features.component';
import { OurservicesComponent } from './ourservices/ourservices.component';
import { OurpricingComponent } from './ourpricing/ourpricing.component';
import { OurtestimonialsComponent } from './ourtestimonials/ourtestimonials.component';
import { ScrollpageComponent } from './scrollpage/scrollpage.component';
import { ContacComponent } from './contac/contac.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    FooterComponent,
    HeaderComponent,
    FeaturesComponent,
    OurservicesComponent,
    OurpricingComponent,
    OurtestimonialsComponent,
    ScrollpageComponent,
    ContacComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
