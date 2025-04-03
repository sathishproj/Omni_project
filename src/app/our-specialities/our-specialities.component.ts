import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-our-specialities',
  templateUrl: './our-specialities.component.html',
  styleUrls: ['./our-specialities.component.css']
})
export class OurSpecialitiesComponent {
  specialties = [
    {id:1, name: 'Cardiology', icon: 'assets/our_specialities/cardio.svg', blue_icon:'assets/our_specialities/Cardio_blue.svg' },
    {id:2, name: 'ENT', icon: 'assets/our_specialities/ENT.svg', blue_icon:'assets/our_specialities/ENT_blue.svg' },
    {id:3, name: 'General Medicine', icon: 'assets/our_specialities/general_medicine.svg',blue_icon:'assets/our_specialities/Internal_medic_blue.svg' },
    {id:4, name: 'General Surgery', icon: 'assets/our_specialities/General_Surgery.svg',blue_icon:'assets/our_specialities/General_Surgery_blue.svg' },
    {id:5, name: 'Gastroenterology', icon: 'assets/our_specialities/Gastro.svg',blue_icon:'assets/our_specialities/Gastro_blue.svg' },
    {id:6, name: 'Neurology', icon: 'assets/our_specialities/brain.svg',blue_icon:'assets/our_specialities/brain_blue.svg' },
    {id:7, name: 'Nephrology & Urology', icon: 'assets/our_specialities/Nephrology_Urology.svg',blue_icon:'assets/our_specialities/Nephrology_Urology_blue.svg' },
    {id:8, name: 'Obstetrics & Gynaecology', icon: 'assets/our_specialities/Gynaecology.svg',blue_icon:'assets/our_specialities/Gynaecology_blue.svg' },
    {id:9, name: 'Paediatrics', icon: 'assets/our_specialities/Paediatrics.svg',blue_icon:'assets/our_specialities/Paediatrics_blue.svg' },
    {id:10, name: 'Pulmonology', icon: 'assets/our_specialities/Pulmonology.svg',blue_icon:'assets/our_specialities/Pulmonology_blue.svg' },
    {id:11, name: 'Psychiatry', icon: 'assets/our_specialities/Psychiatry.svg',blue_icon:'assets/our_specialities/Psychiatry_blue.svg' },
    {id:12, name: 'Osteopaedics & Sports Medicine', icon: 'assets/our_specialities/Orthopedic.svg',blue_icon:'assets/our_specialities/Orthopedic_blue.svg' },
    {id:13, name: 'Vascular Surgery', icon: 'assets/our_specialities/Vascular_Surgery.svg',blue_icon:'assets/our_specialities/Vascular-Surgery_blue.svg' }
  ];
  constructor(private router:Router) {

  }

  goToDetails(id:number) {
    this.router.navigate(['/our-specialities-details'], {
      queryParams: {
        selected_Id: id,
      }
    });
  }
}
