import { Component, Renderer2 } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.component.html',
  styleUrls: ['./health-checkup.component.css']
})
export class HealthCheckupComponent {
  discount: string = '';
  appointmentForm!: FormGroup;
  modalInstance: any;
  checkups = [
    {
      id: 1,
      title: 'Whole Body Check-Up',
      oldPrice: 20605,
      newPrice: 6000,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 2,
      title: 'EXECUTIVE HEALTH CHECK-UP ',
      oldPrice: 14555,
      newPrice: 3999,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 3,
      title: 'GIGGLES WELL WOMEN CHECK-UP ',
      oldPrice: 7755,
      newPrice: 2999,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 4,
      title: 'LUNG PULMONARY CHECK-UP ',
      oldPrice: 4890,
      newPrice: 1800,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 5,
      title: 'KIDNEY CHECK-UP',
      oldPrice: 6310,
      newPrice: 2500,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 6,
      title: 'DIABETIC HEALTH CHECK-UP ',
      oldPrice: 2845,
      newPrice: 999,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 7,
      title: 'GASTRO CHECK UP',
      oldPrice: 6315,
      newPrice: 2500,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 8,
      title: 'LIVER  CHECK UP',
      oldPrice: 7660,
      newPrice: 2500,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 9,
      title: 'UROLOGY  CHECK UP',
      oldPrice: 4095,
      newPrice: 1800,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      id: 10,
      title: 'GIGGLES PAEDIATRIC  HEALTH CHECK-UP ',
      oldPrice: 3000,
      newPrice: 1200,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    }
  ];
  constructor(private router: Router, private renderer: Renderer2, private fb: FormBuilder) {
    this.valiDations()
  }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnDestroy() {
    this.renderer.setStyle(document.body, 'background-color', 'rgb(234, 232, 232)');
  }
  getDiscount(oldPrice: number, newPrice: number): string {

    return ((1 - newPrice / oldPrice) * 100).toFixed(0) + '% Off';

  }
  viewPackageDetails(selected_index: number) {
    this.router.navigate(['/package-details'], {
      queryParams: {
        selected_Id: selected_index,
      }
    });
  }

  valiDations() {
    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      packageType: new FormControl('', Validators.required)

    });
  }

  bookAppointment(id: number, package_type: any) {
    this.appointmentForm.patchValue({ packageType: package_type });
    const modalElement = document.getElementById('appointmentModal');
    if (modalElement) {
      modalElement.removeAttribute('inert');
      this.modalInstance = (window as any).bootstrap.Modal.getOrCreateInstance(modalElement);
      this.modalInstance.show();
      setTimeout(() => {
        document.querySelector('.modal-backdrop')?.setAttribute('style', 'background-color: rgba(0, 0, 0, 0.8) !important;');
      }, 100);
    }
  }
  
  submitForm() {
    if (this.appointmentForm.valid) {
      alert('Appointment Booked Successfully!');
      this.modalInstance.hide();
      setTimeout(() => {
        this.appointmentForm.reset();
      }, 300);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
}
