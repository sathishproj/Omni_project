import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurDoctorsComponent } from './our-doctors/our-doctors.component';
import { HomeComponent } from './home/home.component';
import { SecondOpinionComponent } from './second-opinion/second-opinion.component';
import { OurVisionMissionComponent } from './our-vision-mission/our-vision-mission.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'our-doctors', component: OurDoctorsComponent },
  { path: 'second-opinion', component: SecondOpinionComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'our-vision-mission', component: OurVisionMissionComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
