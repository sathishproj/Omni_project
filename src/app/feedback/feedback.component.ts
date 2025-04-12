import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackForm: FormGroup;
  submitted = false;
  otpSent = false;
  otpDigits = ['', '', '', '', '', ''];
  filteredDepartments: string[] = [];
  departmentMap: { [key: string]: string[] } = {
    'Kothapet': ['Cardiology', 'Neurology'],
    'Kukkatpally': ['Oncology'],
    'Udai - Nampally': ['Cardiology', 'Oncology'],
    'OMNI - Vizag': ['Neurology'],
    'Giggles Vizag': ['Cardiology', 'Neurology', 'Oncology']
  };
  constructor(private fb: FormBuilder) {
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      department: [''],
      location: ['', Validators.required],
      feedback: [''],
      phone: ['', [
        Validators.required,
        Validators.pattern(/^[6-9][0-9]{9}$/)
      ]],
      otp: ['']
    });
  }

  filterDepartments() {
    const location = this.feedbackForm.controls['location'].value;
    this.filteredDepartments = this.departmentMap[location] || [];
    this.feedbackForm.controls['department'].setValue('');
  }

  getOtp() {
    this.submitted = true;
    if (this.feedbackForm.controls['phone'].valid) {
      this.otpSent = true;
      alert('OTP sent to your phone');
    }
  }

  onSubmit() {
    this.submitted = true;
    if (this.feedbackForm.valid) {
      alert('Form submitted successfully!');
      console.log(this.feedbackForm.value);
    }
  }
}
