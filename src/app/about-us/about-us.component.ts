import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  activeSection = 'visionMission'; // Default

  sections = [
    { id: 'visionMission', name: 'Vision & Mission' },
    { id: 'aboutOmni', name: 'About OMNI Hospitals' },
    { id: 'boardMembers', name: 'Board Members' },
    { id: 'ourChairman', name: 'Our Chairman' },
    { id: 'leadershipTeam', name: 'Leadership Team' },
    { id: 'aboutIncor', name: 'About INCOR' },
    { id: 'beyondBusiness', name: 'Beyond Business' }
  ];

  boardMembers = [
    { name: 'Dr M Goutham Reddy', image: 'assets/member1.jpg' },
    { name: 'Dr M Goutham Reddy', image: 'assets/member2.jpg' },
    { name: 'Dr M Goutham Reddy', image: 'assets/member3.jpg' },
    { name: 'Dr M Goutham Reddy', image: 'assets/member4.jpg' },
    { name: 'Dr M Goutham Reddy', image: 'assets/member5.jpg' },
    { name: 'Dr M Goutham Reddy', image: 'assets/member6.jpg' }
  ];

  leadershipTeam = [
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/leader1.jpg' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/leader2.jpg' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/leader3.jpg' },
    { name: 'Dr M Goutham Reddy', title: 'Medical Director', image: 'assets/leader4.jpg' }
  ];

  setActiveSection(sectionId: string) {
    this.activeSection = sectionId;
  }
}
