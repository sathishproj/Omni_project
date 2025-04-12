import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent {
  currentTab: 'openings' | 'joiners' | 'apply' = 'openings';
  today = new Date();
  applyForm: FormGroup;
  selectedFile: File | null = null;

  careers = [
    { title: 'Compassionate Culture', image: 'careers_motivational.svg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { title: 'Career Growth', image: 'careers_motivational.svg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
    { title: 'Great Teamwork', image: 'careers_motivational.svg', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s," },
  ];

  jobList = [
    { title: 'IP Operations', location: 'Hyderabad', department: 'Operations', postedDate: '2025-04-01', lastDate: '2025-04-10' },
    { title: 'Billing Executive', location: 'Vijayawada', department: 'Billing', postedDate: '2025-04-01', lastDate: '2025-04-12' },
    { title: 'Pharmacist', location: 'Chennai', department: 'Pharmacy', postedDate: '2025-04-03', lastDate: '2025-04-08' },
    { title: 'Nursing Supervisor', location: 'Vizag', department: 'Nursing', postedDate: '2025-04-01', lastDate: '2025-04-20' },
    { title: 'Front Office Executive', location: 'Hyderabad', department: 'FO', postedDate: '2025-03-25', lastDate: '2025-04-05' },
    { title: 'Radiologist', location: 'Vijayawada', department: 'Radiology', postedDate: '2025-04-02', lastDate: '2025-04-18' },
    { title: 'HR Executive', location: 'Vizag', department: 'HR', postedDate: '2025-04-01', lastDate: '2025-04-11' },
    { title: 'Lab Technician', location: 'Hyderabad', department: 'Lab', postedDate: '2025-04-05', lastDate: '2025-04-09' },
    { title: 'Marketing Officer', location: 'Chennai', department: 'Marketing', postedDate: '2025-04-06', lastDate: '2025-04-30' },
    { title: 'Housekeeping Staff', location: 'Vizag', department: 'Housekeeping', postedDate: '2025-03-20', lastDate: '2025-04-01' },
  ];

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  switchTab(tab: 'openings' | 'joiners' | 'apply') {
    this.currentTab = tab;
  }

  isJobActive(job: any): boolean {
    return new Date(job.lastDate) >= this.today;
  }

  shareJob(job: any) {
    const shareData = {
      title: job.title,
      text: `${job.title} - ${job.location} in ${job.department}`,
      url: window.location.href
    };
    if (navigator.share) {
      navigator.share(shareData);
    } else {
      alert('Share not supported on this browser.');
    }
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.applyForm.valid) {
      const formData = new FormData();
      formData.append('firstName', this.applyForm.get('firstName')?.value);
      formData.append('lastName', this.applyForm.get('lastName')?.value);
      formData.append('phone', this.applyForm.get('phone')?.value);
      formData.append('email', this.applyForm.get('email')?.value);
      if (this.selectedFile) {
        formData.append('resume', this.selectedFile);
      }

      // Add submission logic here (e.g., HTTP POST to backend)
      alert('Form submitted successfully!');
      this.applyForm.reset();
    } else {
      this.applyForm.markAllAsTouched();
    }
  }
}
