import { Component } from '@angular/core';

@Component({
  selector: 'app-book-an-appointment',
  templateUrl: './book-an-appointment.component.html',
  styleUrls: ['./book-an-appointment.component.css']
})
export class BookAnAppointmentComponent {
  locations = ['Kothapet', 'Kukkatpally', 'Vizag'];
  departmentsByLocation: { [key: string]: string[] } = {
    'Kothapet': ['Cardiology', 'Neurology', 'Pediatrics'],
    'Kukkatpally': ['Orthopedics', 'Dermatology'],
    'Vizag': ['ENT', 'General Surgery']
  };

  selectedLocation: string = '';
  filteredDepartments: string[] = [];

  onLocationChange() {
    this.filteredDepartments = this.departmentsByLocation[this.selectedLocation] || [];
  }
}
