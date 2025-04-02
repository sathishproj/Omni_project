import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  direction_icon: boolean = false;
  depertment_icon: boolean = false;
  locations_details = [
    {
      id: 1, location_name: 'Kothapet', img: 'omni_kothapet.png'
    },
    {
      id: 2, location_name: 'Kukatpally', img: 'omni_kukatpally.png'
    },
    {
      id: 3, location_name: 'UDAI OMNI - Nampally', img: 'udai_omni.png'
    },
    {
      id: 4, location_name: 'Vizag', img: 'omni_vizag.png'
    },
    {
      id: 5, location_name: 'Giggles Vizag', img: 'giggles_vizag_building.png'
    },
    {
      id: 6, location_name: 'Kurnool', img: 'kurnool_location.png'
    }
  ]
  locationToggle(num:number){

  }
}
