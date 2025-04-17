import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  activeSection = 'aboutOmni'; // Default
  showModal = false;
  selectedLeader: any = null;
  sections = [
    // { id: 'visionMission', name: 'Vision & Mission' },
    { id: 'aboutOmni', name: 'About OMNI Hospitals' },
    { id: 'ourChairman', name: 'Our Chairman' },
    { id: 'boardMembers', name: 'Board Members' },
    { id: 'leadershipTeam', name: 'Leadership Team' },
  ];

  boardMembers = [
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' },
    { name: 'Dr M Goutham Reddy', image: 'assets/images/passport-size-photo-sample.png', label:'Medical Director' }
  ];

  leadershipTeam = [
    { name: 'DR DURGESH', title: 'CEO', image: 'assets/images/leadership.png' },
    { name: 'MR ANKIT', title: 'CFO', image: 'assets/images/leadership.png' },
    { name: 'DR DURGESH', title: 'CEO', image: 'assets/images/leadership.png' },
    { name: 'MR ANKIT', title: 'CFO', image: 'assets/images/leadership.png' }
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

  openProfileModal(leader: any) {
    this.selectedLeader = leader;
    console.log(this.selectedLeader,'selectedLeader...');
    
    this.showModal = true;
    document.body.classList.add('modal-open');
  }
  
  closeModal() {
    this.showModal = false;
    this.selectedLeader = null;
    document.body.classList.remove('modal-open');
  }

}


