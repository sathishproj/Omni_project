import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-surgical-packages',
  templateUrl: './fixed-surgical-packages.component.html',
  styleUrls: ['./fixed-surgical-packages.component.css']
})
export class FixedSurgicalPackagesComponent {
  locations: string[] = ['All Packages', 'Kothapet', 'Kukatpally', 'Nampally', 'Vizag', 'Kurnool'];
  selected: string = 'All Packages';
  surgeryPackages = Array(9).fill({
    name: 'Knee Replacement Surgery',
    price: '1,49,000/-',
    img: 'assets/images/knee-thumb.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...'
  });



  selectLocation(location: string) {
  }
}
