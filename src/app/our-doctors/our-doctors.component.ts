import { Component } from '@angular/core';

@Component({
  selector: 'app-our-doctors',
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.css']
})
export class OurDoctorsComponent {

  doctor_details = [
    {
      id:1, doctor_name:'Naga Sudha Ashok', experience:'10+', specialist:'Surgical Gastroenterologist', doctor_profile:'doctor_naga_sudha_ashok.png', timing:'9am to 4pm', location:'kukkatpally', doctor_details:'M.S. (Gen. Surgery), DNB (Surgical Gastro), FMAS, Advanced Laparoscopic & Bariatric Surgeon, GI Oncology & Liver Transplant Surgeon'
    },
    {
      id:2, doctor_name:'Naga Sudha Ashok', experience:'8+', specialist:'Surgical Gastroenterologist', doctor_profile:'doctor_naga_sudha_ashok.png', timing:'9am to 4pm', location:'kukkatpally', doctor_details:'M.S. (Gen. Surgery), DNB (Surgical Gastro), FMAS, Advanced Laparoscopic & Bariatric Surgeon, GI Oncology & Liver Transplant Surgeon'
    },
    {
      id:3, doctor_name:'Naga Sudha Ashok', experience:'14+', specialist:'Surgical Gastroenterologist', doctor_profile:'doctor_naga_sudha_ashok.png', timing:'9am to 4pm', location:'kukkatpally', doctor_details:'M.S. (Gen. Surgery), DNB (Surgical Gastro), FMAS, Advanced Laparoscopic & Bariatric Surgeon, GI Oncology & Liver Transplant Surgeon'
    },
    {
      id:4, doctor_name:'Naga Sudha Ashok', experience:'16+', specialist:'Surgical Gastroenterologist', doctor_profile:'doctor_naga_sudha_ashok.png', timing:'9am to 4pm', location:'kukkatpally', doctor_details:'M.S. (Gen. Surgery), DNB (Surgical Gastro), FMAS, Advanced Laparoscopic & Bariatric Surgeon, GI Oncology & Liver Transplant Surgeon'
    },
    {
      id:5, doctor_name:'Naga Sudha Ashok', experience:'12+', specialist:'Surgical Gastroenterologist', doctor_profile:'doctor_naga_sudha_ashok.png', timing:'9am to 4pm', location:'kukkatpally', doctor_details:'M.S. (Gen. Surgery), DNB (Surgical Gastro), FMAS, Advanced Laparoscopic & Bariatric Surgeon, GI Oncology & Liver Transplant Surgeon'
    },
  ]

}
