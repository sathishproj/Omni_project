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
import { TechnologiesDetailsComponent } from './technologies-details/technologies-details.component';
import { OurBranchesComponent } from './our-branches/our-branches.component';
import { CareersComponent } from './careers/careers.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { NewsMediaDetailsComponent } from './news-media-details/news-media-details.component';
import { BookAnAppointmentComponent } from './book-an-appointment/book-an-appointment.component';
// import { FixedSurgicalPackagesComponent } from './fixed-surgical-packages/fixed-surgical-packages.component';
import { BoardMembersComponent } from './board-members/board-members.component';

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
  { path: 'technologies-details', component: TechnologiesDetailsComponent },
  { path: 'our-branches', component: OurBranchesComponent },
  { path: 'carres', component: CareersComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'blogs-details', component: BlogDetailsComponent },
  { path: 'news-media-details', component: NewsMediaDetailsComponent },
  { path: 'book-an-appointment', component: BookAnAppointmentComponent },
  // { path: 'fixed-surgical-packages', component: FixedSurgicalPackagesComponent },
  { path: 'board-members', component: BoardMembersComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
