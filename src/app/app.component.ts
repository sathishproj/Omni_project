import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Omni_project';
  activeIndex = 0

  specialities = [
    {
      id: 1, spe_name: 'Our Specialities'
    },
    {
      id: 2, spe_name: 'Key Surgeries',
    },
    {
      id: 3, spe_name: 'Technologies',
    }
  ]

  our_specialities = [
    {id: 1, dep_name: 'Cardiology', img:'assets/our_specialities/Cardio.svg'},{id: 2, dep_name: 'ENT', img:'assets/our_specialities/ENT.svg'},{id: 3, dep_name: 'General Medicine', img:'assets/our_specialities/general_medicine.svg'},{id: 4, dep_name: 'General Surgery', img:'assets/our_specialities/General_Surgery.svg'},{id: 5, dep_name: 'Gastroenterology', img:'assets/our_specialities/Gastro.svg'},{id: 6, dep_name: 'Neurology', img:'assets/our_specialities/brain.svg'},
    {
      id: 7, dep_name: 'Nephrology', img:'assets/our_specialities/Nephrology_Urology.svg'},{id: 8, dep_name: 'Gynaecology', img:'assets/our_specialities/Gynaecology.svg'},{id: 9, dep_name: 'Paediatrics', img:'assets/our_specialities/Paediatrics.svg'},{id: 10, dep_name: 'Pulmonology', img:'assets/our_specialities/Pulmonology.svg'},{id: 11, dep_name: 'Psychiatry', img:'assets/our_specialities/Psychiatry.svg'},{  id: 12, dep_name: 'Orthopaedics', img:'assets/our_specialities/Orthopedic.svg'},
    {
      id: 13, dep_name: 'Vascular Surgery', img:'assets/our_specialities/Vascular_Surgery.svg'
    }
  ]
  ourSpecialities(index: any) {
    console.log(index, 'index');

    this.activeIndex = index;

  }
}
