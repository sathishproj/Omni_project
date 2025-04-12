import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-our-specialities-details',
  templateUrl: './our-specialities-details.component.html',
  styleUrls: ['./our-specialities-details.component.css']
})
export class OurSpecialitiesDetailsComponent {
  departments = [
    { id: 1, name: 'Cardiology', description: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', img: 'https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 2, name: 'ENT', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img: 'https://img.freepik.com/free-photo/doctors-nurses-discussing-digital-tablet_107420-84814.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 3, name: 'General Medicine', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", img: 'https://img.freepik.com/free-photo/medical-team-examining-x-ray-report_107420-84798.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 4, name: 'General Surgery', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 5, name: 'Gastroenterology', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 6, name: 'Neurology', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 7, name: 'Nephrology & Urology', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 8, name: 'Obstetrics & Gynaecology', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 9, name: 'Paediatrics', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 10, name: 'Pulmonology', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 11, name: 'Psychiatry', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 12, name: 'Osthopaedics & Sports Medicine ', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 13, name: 'Vascular Surgery', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' }
  ];
  locations = [
    { id: 'kukkatpally', name: 'Kukkatpally' },
    { id: 'Nampally', name: 'UDAI OMNI - Nampally' },
    { id: 'kothapet', name: 'Kothapet' },
    { id: 'vizag', name: 'Vizag' },
    { id: 'Giggles-vizag', name: 'Giggles Vizag' },
    { id: 'kurnool', name: 'Kurnool' }
  ];
  departmentName: string = '';
  doctors = [
    // Cardiology
    { name: 'Dr Pramod Kumar Rao', designation: 'Sr. Consultant - Cardiology', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
    { name: 'Dr Anjali Mehra', designation: 'Consultant - Cardiology', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' },
    { name: 'Dr Ravi Sharma', designation: 'Sr. Consultant - Cardiology', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Sunita Reddy', designation: 'Cardiologist', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'kurnool' },
    { name: 'Dr Rajeev Menon', designation: 'Sr. Consultant - Cardiology', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'Giggles-vizag' },
    { name: 'Dr Ayesha Khan', designation: 'Cardiologist', department: 'Cardiology', image: 'assets/images/cardiology_doctor.png', location: 'kothapet' },
  
    // ENT
    { name: 'Dr Sandeep Roy', designation: 'ENT Surgeon', department: 'ENT', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
    { name: 'Dr Pooja Iyer', designation: 'Consultant - ENT', department: 'ENT', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Nishant Rao', designation: 'Sr. ENT Specialist', department: 'ENT', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' },
  
    // General Medicine
    { name: 'Dr Veena Desai', designation: 'General Physician', department: 'General Medicine', image: 'assets/images/cardiology_doctor.png', location: 'kothapet' },
    { name: 'Dr Mahesh Rathi', designation: 'Sr. Consultant - General Medicine', department: 'General Medicine', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Lakshmi Rao', designation: 'Consultant - General Medicine', department: 'General Medicine', image: 'assets/images/cardiology_doctor.png', location: 'kurnool' },
  
    // General Surgery
    { name: 'Dr Amit Bhargava', designation: 'General Surgeon', department: 'General Surgery', image: 'assets/images/cardiology_doctor.png', location: 'Giggles-vizag' },
    { name: 'Dr Neelima Sharma', designation: 'Sr. Consultant - General Surgery', department: 'General Surgery', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' },
  
    // Gastroenterology
    { name: 'Dr Farhan Qureshi', designation: 'Gastroenterologist', department: 'Gastroenterology', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
    { name: 'Dr Sheetal Agarwal', designation: 'Sr. Consultant - Gastroenterology', department: 'Gastroenterology', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
  
    // Neurology
    { name: 'Dr Kavitha Menon', designation: 'Neurologist', department: 'Neurology', image: 'assets/images/cardiology_doctor.png', location: 'kothapet' },
    { name: 'Dr Ramesh Chandra', designation: 'Sr. Consultant - Neurology', department: 'Neurology', image: 'assets/images/cardiology_doctor.png', location: 'kurnool' },
  
    // Nephrology & Urology
    { name: 'Dr Sanjay Naik', designation: 'Urologist', department: 'Nephrology & Urology', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
    { name: 'Dr Aruna Patil', designation: 'Nephrologist', department: 'Nephrology & Urology', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' },
  
    // Obstetrics & Gynaecology
    { name: 'Dr Swathi Rao', designation: 'Gynaecologist', department: 'Obstetrics & Gynaecology', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Meera Shah', designation: 'Consultant - Obstetrics', department: 'Obstetrics & Gynaecology', image: 'assets/images/cardiology_doctor.png', location: 'Giggles-vizag' },
  
    // Paediatrics
    { name: 'Dr Rekha Iyer', designation: 'Child Specialist', department: 'Paediatrics', image: 'assets/images/cardiology_doctor.png', location: 'kothapet' },
    { name: 'Dr Joseph Mathew', designation: 'Sr. Consultant - Paediatrics', department: 'Paediatrics', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
  
    // Pulmonology
    { name: 'Dr Niharika Das', designation: 'Pulmonologist', department: 'Pulmonology', image: 'assets/images/cardiology_doctor.png', location: 'kurnool' },
    { name: 'Dr Vijay Singh', designation: 'Consultant - Pulmonology', department: 'Pulmonology', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' },
  
    // Psychiatry
    { name: 'Dr Shruti Kaur', designation: 'Psychiatrist', department: 'Psychiatry', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Rohit Das', designation: 'Sr. Consultant - Psychiatry', department: 'Psychiatry', image: 'assets/images/cardiology_doctor.png', location: 'kothapet' },
  
    // Orthopaedics & Sports Medicine
    { name: 'Dr Ashok Verma', designation: 'Orthopaedic Surgeon', department: 'Osthopaedics & Sports Medicine', image: 'assets/images/cardiology_doctor.png', location: 'kukkatpally' },
    { name: 'Dr Sneha Menon', designation: 'Consultant - Sports Medicine', department: 'Osthopaedics & Sports Medicine', image: 'assets/images/cardiology_doctor.png', location: 'Giggles-vizag' },
  
    // Vascular Surgery
    { name: 'Dr Mohit Chawla', designation: 'Vascular Surgeon', department: 'Vascular Surgery', image: 'assets/images/cardiology_doctor.png', location: 'vizag' },
    { name: 'Dr Nisha Rao', designation: 'Consultant - Vascular Surgery', department: 'Vascular Surgery', image: 'assets/images/cardiology_doctor.png', location: 'Nampally' }
  ];
  

  searchName = '';
  selectedLocation = '';
  selected_dep:number = 0;
  filteredDoctors = [...this.doctors];
  // selectedLocation = this.locations[0];
constructor(    private activated_routes: ActivatedRoute,
){
  this.activatedRoutesData();
}

ngOnInit(){
  window.scrollTo(0, 0)
}
  // onLocationChange(event: any) {
  //   const selectedId = event.target.value;
  //   this.selectedLocation = this.locations.find(loc => loc.id === selectedId) || this.locations[0];
  // }
  get filteredDepartments() {
    return this.departments.filter(dep => dep.id === this.selected_dep);
  }
  getDepartmentName(): string {
    const department = this.departments.find(dep => dep.id === this.selected_dep);
    return department ? department.name : 'N/A';
  }
  activatedRoutesData() {
    this.activated_routes.queryParams.subscribe(params => {
      console.log(params, 'params...');
      this.selected_dep = Number(params['selected_Id']) || 0;
      this.departmentName = params['depertment'] || '';
      console.log(this.departmentName,'departmentName...');
      
      this.filterDoctors();  // call filter immediately
    });
  }
  
  filterDoctors(): void {
    const name = this.searchName.trim().toLowerCase();
    const location = this.selectedLocation;
    const department = this.departmentName.trim().toLowerCase();
  
    let tempDoctors = [...this.doctors];
  
    // First: Filter by department if available
    if (department) {
      tempDoctors = tempDoctors.filter(doctor =>
        doctor.department.toLowerCase() === department
      );
    }
  
    // Then: Filter by name and location
    this.filteredDoctors = tempDoctors.filter(doctor => {
      const matchName = !name || doctor.name.toLowerCase().includes(name);
      const matchLocation = !location || doctor.location === location;
      return matchName && matchLocation;
    });
  }
  
}