import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  activeSection = 'aboutOmni'; // Default

  sections = [
    // { id: 'visionMission', name: 'Vision & Mission' },
    { id: 'aboutOmni', name: 'About OMNI Hospitals' },
    { id: 'ourChairman', name: 'Our Chairman' },
    { id: 'boardMembers', name: 'Board Members' },
    { id: 'leadershipTeam', name: 'Leadership Team' },
  ];

  boardMembers = [
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png' }
  ];

  leadershipTeam = [
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/images/leadership.png' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/images/leadership.png' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/images/leadership.png' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/images/leadership.png' }
  ];
  constructor(private router:Router) {

  }
  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
  }

  goToDetails(){
    this.router.navigate(['/board-members'], {
      queryParams: {
      }
    });
  }
}
