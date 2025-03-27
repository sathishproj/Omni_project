import { Component, Renderer2 } from '@angular/core';
import { HealthPackageService } from '../health-package.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent {
  packages: any[] = [];
  appointmentForm!: FormGroup;
  modalInstance: any;
  selectedPackageId: any;
  selectedPackage: any; // Store the selected package
  packageDetails = [
    { id: 1, name: "Complete blood picture with ESR" },
    { id: 2, name: "Blood grouping & RH typing" },
    { id: 3, name: "Fasting blood sugar (FBS)" },
    { id: 4, name: "Post lunch blood sugar (PLBS)" },
    { id: 5, name: "Serum urea, Serum creatinine" },
    { id: 6, name: "Serum calcium, Serum uric acid" },
    { id: 7, name: "Lipid profile, Liver function test (LFT)" },
    { id: 8, name: "Thyroid Stimulating hormone (TSH)" },
    { id: 9, name: "Prostate specific antigen (PSA) for male" },
    { id: 10, name: "HBSAG, HIV, HCV, Pap smear (for female)" },
    { id: 11, name: "X-ray chest" },
    { id: 12, name: "Ultrasound scan whole abdomen" },
    { id: 13, name: "CT scan brain (plain)" },
    { id: 14, name: "Complete urine examination (CUE)" },
    { id: 15, name: "Stool routine analysis" },
    { id: 16, name: "ECG" },
    { id: 17, name: "2D ECHO" },
    { id: 18, name: "Treadmill test (Stress test)" },
    { id: 19, name: "Pulmonary function test (PFT)" },
    { id: 20, name: "Clinical examination" },
    { id: 21, name: "Consultation by Gen.Physician" },
    { id: 22, name: "Dietician consultation" }
  ];
  constructor(
    private renderer: Renderer2,
    private health_packages: HealthPackageService,
    private activated_routes: ActivatedRoute,
    private fb:FormBuilder
  ) {
    this.activatedRoutesData();
    this.valiDations()
  }
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'white');
    this.getPackageDetails()
  }

  ngOnDestroy() {
    this.renderer.setStyle(document.body, 'background-color', 'rgb(234, 232, 232)');
  }
  activatedRoutesData() {
    this.activated_routes.queryParams.subscribe(params => {
      console.log(params, 'params...');
      this.selectedPackageId = Number(params['selected_Id']); // Convert to number

      if (this.selectedPackageId) {
        this.selectedPackage = this.packages.find(pkg => pkg.id === this.selectedPackageId);
      }
    });
  }
  getPackageDetails() {
    this.health_packages.getPackages().subscribe(data => {
      console.log(data, 'data...');
      this.packages = data;
    });
  }
  selectPackage(): any {
    // this.selectedPackageId = this.packages.find(pkg => pkg.id === id);
    return this.packages.find(pkg => pkg.id === this.selectedPackageId);

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
    this.appointmentForm.patchValue({ packageType: this.capitalizeText(package_type) });
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
      console.log(this.appointmentForm.value,'values..');
      this.modalInstance.hide();
      setTimeout(() => {
        this.appointmentForm.reset();
      }, 300);
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }
  capitalizeText(text: string): string {
    return text
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
}