import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technologies-details',
  templateUrl: './technologies-details.component.html',
  styleUrls: ['./technologies-details.component.css']
})
export class TechnologiesDetailsComponent {


  locations = [
    { id: 'kukkatpally', name: 'Kukkatpally' },
    { id: 'kothapet', name: 'Kothapet' },
    { id: 'vizag', name: 'Vizag' },
    { id: 'kurnool', name: 'Kurnool' }
  ];
  selected_dep:number = 0;
  selectedLocation = this.locations[0];


constructor( private activated_routes: ActivatedRoute){

}

activatedRoutesData() {
  this.activated_routes.queryParams.subscribe(params => {
    console.log(params, 'params...');
    this.selected_dep = Number(params['selected_Id']);
    console.log(this.selected_dep, 'selected_dep after conversion');
  });
}
}
