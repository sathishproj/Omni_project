import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SecondOpinionComponent } from './second-opinion/second-opinion.component';
import { OurVisionMissionComponent } from './our-vision-mission/our-vision-mission.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    HeaderComponent,
    OurDoctorsComponent,
    HomeComponent,
    FooterComponent,
    SecondOpinionComponent,
    OurVisionMissionComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CarouselModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
