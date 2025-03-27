import { Component, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-health-checkup',
  templateUrl: './health-checkup.component.html',
  styleUrls: ['./health-checkup.component.css']
})
export class HealthCheckupComponent {
  discount:string = '';
  checkups = [
    {
      title: 'Whole Body Check-Up',
      oldPrice: 7666,
      newPrice: 1999,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      title: 'Heart Health Check-Up',
      oldPrice: 5999,
      newPrice: 2499,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      title: 'Diabetes Check-Up',
      oldPrice: 4999,
      newPrice: 1799,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      title: 'Diabetes Check-Up',
      oldPrice: 4999,
      newPrice: 1799,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      title: 'Diabetes Check-Up',
      oldPrice: 4999,
      newPrice: 1799,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    {
      title: 'Diabetes Check-Up',
      oldPrice: 4999,
      newPrice: 1799,
      image: 'assets/health_checkup/whole_body_checkup.svg'
    },
    
  ];
    constructor(private router: Router, private renderer: Renderer2) { }
    ngOnInit() {
      this.renderer.setStyle(document.body, 'background-color', 'white');
    }
  
    ngOnDestroy() {
      this.renderer.setStyle(document.body, 'background-color', 'rgb(234, 232, 232)');
    }
  getDiscount(oldPrice: number, newPrice: number): string {
    
    return ((1 - newPrice / oldPrice) * 100).toFixed(0) + '% Off';
    
  }
  viewPackageDetails(){
    this.router.navigate(['/package-details']).then(success => {
      if (success) {
        console.log('Navigation to Package Details successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }

}
