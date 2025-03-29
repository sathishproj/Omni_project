import { Component } from '@angular/core';

@Component({
  selector: 'app-our-specialities',
  templateUrl: './our-specialities.component.html',
  styleUrls: ['./our-specialities.component.css']
})
export class OurSpecialitiesComponent {
  specialties = [
    { name: 'Cardiology', icon: 'assets/our_specialities/cardio.svg' },
    { name: 'ENT', icon: 'assets/our_specialities/ENT.svg' },
    { name: 'General Medicine', icon: 'assets/our_specialities/general_medicine.svg' },
    { name: 'General Surgery', icon: 'assets/our_specialities/General_Surgery.svg' },
    { name: 'Gastroenterology', icon: 'assets/our_specialities/Gastro.svg' },
    { name: 'Neurology', icon: 'assets/our_specialities/brain.svg' },
    { name: 'Nephrology & Urology', icon: 'assets/our_specialities/Nephrology_Urology.svg' },
    { name: 'Obstetrics & Gynaecology', icon: 'assets/our_specialities/Gynaecology.svg' },
    { name: 'Paediatrics', icon: 'assets/our_specialities/Paediatrics.svg' },
    { name: 'Pulmonology', icon: 'assets/our_specialities/Pulmonology.svg' },
    { name: 'Psychiatry', icon: 'assets/our_specialities/Psychiatry.svg' },
    { name: 'Osteopaedics & Sports Medicine', icon: 'assets/our_specialities/Orthopedic.svg' },
    { name: 'Vascular Surgery', icon: 'assets/our_specialities/Vascular_Surgery.svg' }
  ];
}
