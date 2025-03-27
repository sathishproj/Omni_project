import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent {
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
  constructor(private renderer: Renderer2) {}
  ngOnInit() {
    this.renderer.setStyle(document.body, 'background-color', 'white');
  }

  ngOnDestroy() {
    this.renderer.setStyle(document.body, 'background-color', 'rgb(234, 232, 232)');
  }
}
