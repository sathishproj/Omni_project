import { Component } from '@angular/core';

@Component({
  selector: 'app-our-branches',
  templateUrl: './our-branches.component.html',
  styleUrls: ['./our-branches.component.css']
})
export class OurBranchesComponent {
  selectedDepartment: string | null = null;

  departments: string[] = [
    'Cardiology', 'ENT', 'General Medicine',
    'Nephrology', 'Urology', 'Dermatology'
  ];

  doctors = [
    {
      name: 'Dr R Naga Sudha Ashok',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'General Medicine'
    },
    {
      name: 'Doctor one',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'Cardiology'
    },
    {
      name: 'Doctor two',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'ENT'
    },
    {
      name: 'Doctor three',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'Nephrology'
    },
    {
      name: 'Doctor four',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'Urology'
    },
    {
      name: 'Doctor five',
      experience: '18+ Years',
      timings: '9am to 4pm',
      location: 'Kukatpally',
      image: 'assets/our_doctors/doctor_naga_sudha_ashok.png',
      specialization: 'Surgical Gastroenterologist',
      department: 'Dermatology'
    },
  ];

  setSelected(dept: string) {
    this.selectedDepartment = dept;
  }

  filteredDoctors() {
    return this.selectedDepartment
      ? this.doctors.filter(d => d.department === this.selectedDepartment)
      : this.doctors;
  }
  
}
