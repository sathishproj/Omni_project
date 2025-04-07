import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { HomeComponent } from './home/home.component';
import { SecondOpinionComponent } from './second-opinion/second-opinion.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HealthCheckupComponent } from './health-checkup/health-checkup.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { OurSpecialitiesComponent } from './our-specialities/our-specialities.component';
import { OurSpecialitiesDetailsComponent } from './our-specialities-details/our-specialities-details.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { NewsMediaComponent } from './news-media/news-media.component';
import { BlogsComponent } from './blogs/blogs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-doctors', component: OurDoctorsComponent },
  { path: 'second-opinion', component: SecondOpinionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'health-checkup', component: HealthCheckupComponent },
  { path: 'package-details', component: PackageDetailsComponent },
  { path: 'our-specialities', component: OurSpecialitiesComponent },
  { path: 'our-specialities-details', component: OurSpecialitiesDetailsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'news-media', component: NewsMediaComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
