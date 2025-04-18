import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fixed-surgical-packages',
  templateUrl: './fixed-surgical-packages.component.html',
  styleUrls: ['./fixed-surgical-packages.component.css']
})
export class FixedSurgicalPackagesComponent {
  locations: string[] = ['All Packages', 'Kothapet', 'Kukatpally', 'Nampally', 'Vizag', 'Kurnool'];
  selected: string = 'All Packages';
  surgicalPackages: { [key: string]: any[] } = {};
  packages: any[] = [];

  fixed_surgical_paclages = [
    {
      id:1,
      name: 'Knee Replacement Surgery',
      price: '1,49,000/-',
      img: 'assets/images/knee-thumb.jpg',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...'
    },

  ]

  surgeryPackages = Array(9).fill({
    name: 'Knee Replacement Surgery',
    price: '1,49,000/-',
    img: 'assets/images/knee-thumb.jpg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio...'
  });

constructor(private http: HttpClient) {}
ngOnInit(): void {
  this.getFixedSurgicalJsonData();
}

getFixedSurgicalJsonData(){
  this.http.get('assets/json_data_files/fixed_surgical_packages.json').subscribe((res: any) => {
    console.log(res,'res...');
    this.surgicalPackages = res;
    this.updatePackages();
  });
}
updatePackages(): void {
  if (this.selected === 'All Packages') {
    this.packages = Object.values(this.surgicalPackages).flat();
    console.log(this.packages,'packages..');
    
  } else {
    this.packages = this.surgicalPackages[this.selected] || [];
  }
}
  selectLocation(location: string) {
    this.selected = location
    this.updatePackages();    
  }
}
