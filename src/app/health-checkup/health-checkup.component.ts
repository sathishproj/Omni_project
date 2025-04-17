import { HttpClient } from '@angular/common/http';
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
  locations: string[] = ['All Packages', 'Kothapet', 'Kukatpally', 'Nampally', 'Vizag', 'Kurnool'];
  selected: string = 'All Packages';
  allPackages: any = {};
  displayedPackages: any[] = [];

  constructor(private router: Router, private renderer: Renderer2, private fb: FormBuilder, private http: HttpClient) {
    this.valiDations()
  }
  ngOnInit() {
    this.getHealthPackageDetails();
    this.getDoctorsDetails();
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

getHealthPackageDetails(){
  this.http.get<any>('assets/json_data_files/health_checkup.json').subscribe(data => {
    console.log(data,'data....');
    
    this.allPackages = data;
    this.locations = ['All Packages', ...Object.keys(data).filter(loc => loc !== 'All Packages')];
    this.displayAllPackages();
  });
}


getDoctorsDetails(){
  this.http.get<any>('assets/json_data_files/depertment_details.json').subscribe(res => {
    console.log(res,'ressss...');
    
  })
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

  selectLocation(location: string) {
    console.log(location,'location..');
    
    this.selected = location;
    if (location === 'All Packages') {
      this.displayAllPackages();
    } else {
      this.displayedPackages = this.allPackages[location] || [];
    }
  }
  displayAllPackages() {
    this.displayedPackages = Object.entries(this.allPackages)
      .filter(([key]) => key !== 'All Packages')
      .flatMap(([_, value]) => value);
  }
}
