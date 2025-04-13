import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-technologies-details',
  templateUrl: './technologies-details.component.html',
  styleUrls: ['./technologies-details.component.css']
})
export class TechnologiesDetailsComponent {


  technologies = [
    { id: 1, name: 'MRI (Magnetic Resonance Imaging)', description: 'What is Lorem Ipsum?  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).', img: 'https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21202.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 2, name: 'CT Scan (Computed Tomography Scan)', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.", img: 'https://img.freepik.com/free-photo/doctors-nurses-discussing-digital-tablet_107420-84814.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 3, name: 'X-Ray Machine', description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", img: 'https://img.freepik.com/free-photo/medical-team-examining-x-ray-report_107420-84798.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 4, name: 'Ultrasound (Sonography)', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 5, name: 'ECG (Electrocardiogram)', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 6, name: 'EEG (Electroencephalogram)', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 7, name: 'PET Scan (Positron Emission Tomography)', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 8, name: 'Dialysis Machine', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 9, name: 'Ventilator', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    { id: 10, name: 'Endoscopy System', description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/doctors-shaking-hands-with-each-other_107420-84801.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid' },
    ];
  locations = [
    { id: 'kukkatpally', name: 'Kukkatpally' },
    { id: 'Nampally', name: 'UDAI OMNI - Nampally' },
    { id: 'kothapet', name: 'Kothapet' },
    { id: 'vizag', name: 'Vizag' },
    { id: 'Giggles-vizag', name: 'Giggles Vizag' },
    { id: 'kurnool', name: 'Kurnool' }
  ];
  selected_tech:number = 0;
  selectedLocation = this.locations[0];
  selected_tech_id = 0


constructor( private activated_routes: ActivatedRoute){
  this.activatedRoutesData()
}

activatedRoutesData() {
  this.activated_routes.queryParams.subscribe(params => {
    console.log(params, 'params...');
    this.selected_tech_id = Number(params['selected_Id']);
    // this.selected_tech = params['selected_tech']
  });
}

get filteredTechnologies() {
  return this.technologies.filter(tech => tech.id === this.selected_tech_id);
}
getDepartmentName(): string {
  const technology = this.technologies.find(tech => tech.id === this.selected_tech_id);
  return technology ? technology.name : 'N/A';
}

}
