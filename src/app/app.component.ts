import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Omni_project';
  activeIndex = 0
  showMore: boolean = false;
  startIndex = 0;
  specialities = [
    {
      id: 1, spe_name: 'Our Specialities'
    },
    {
      id: 2, spe_name: 'Key Surgeries',
    },
    {
      id: 3, spe_name: 'Technologies',
    }
  ]

  our_specialities = [
    {id: 1, dep_name: 'Cardiology', img:'assets/our_specialities/Cardio_blue.svg'},{id: 2, dep_name: 'ENT', img:'assets/our_specialities/ENT_blue.svg'},{id: 3, dep_name: 'General Medicine', img:'assets/our_specialities/Internal_medic_blue.svg'},{id: 4, dep_name: 'General Surgery', img:'assets/our_specialities/General_Surgery_blue.svg'},{id: 5, dep_name: 'Gastroenterology', img:'assets/our_specialities/Gastro_blue.svg'},{id: 6, dep_name: 'Neurology', img:'assets/our_specialities/brain_blue.svg'},
    {
      id: 7, dep_name: 'Nephrology', img:'assets/our_specialities/Nephrology_Urology_blue.svg'},{id: 8, dep_name: 'Gynaecology', img:'assets/our_specialities/Gynaecology_blue.svg'},{id: 9, dep_name: 'Paediatrics', img:'assets/our_specialities/Paediatrics_blue.svg'},{id: 10, dep_name: 'Pulmonology', img:'assets/our_specialities/Pulmonology_blue.svg'},{id: 11, dep_name: 'Psychiatry', img:'assets/our_specialities/Psychiatry_blue.svg'},{  id: 12, dep_name: 'Orthopaedics', img:'assets/our_specialities/Orthopedic_blue.svg'},
    {
      id: 13, dep_name: 'Vascular Surgery', img:'assets/our_specialities/Vascular-Surgery_blue.svg'
    }
  ]
  counters = [
    { id: 1, img:'hospitals.svg', label: 'Hospitals', target: 6, value: 0 },
    { id: 2, img:'beds.svg', label: 'Beds', target: 750, value: 0 },
    { id: 3, img:'doctors.svg', label: 'Doctors', target: 450, value: 0 },
    { id: 4, img:'parmacy.svg', label: 'Pharmacy', target: 150, value: 0 }
  ]; 
  news_cards = [
    { title: "News 1", text: "Testing the card 1" },
    { title: "New 2", text: "Testing the card 2" },
    { title: "New 3", text: "Testing the card 3" },
    { title: "New 4", text: "Testing the card 4" },
    { title: "New 5", text: "Testing the card 5" },
    { title: "New 6", text: "Testing the card 6" },
    { title: "New 7", text: "Testing the card 7" },
    { title: "New 8", text: "Testing the card 8" },
    { title: "New 9", text: "Testing the card 9" }
  ];

  
  testimonials = [
    { content: 'Testimonial 1' },
    { content: 'Testimonial 2' },
    { content: 'Testimonial 3' }
  ];

  blogs = [
    { img: 'https://via.placeholder.com/300', content: 'Blog 1' },
    { img: 'https://via.placeholder.com/300', content: 'Blog 2' },
    { img: 'https://via.placeholder.com/300', content: 'Blog 3' }
  ];

  constructor() {}

  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    this.observeCounters();
  }

  toggleReadMore(): void {
    this.showMore = !this.showMore;
  }
  ourSpecialities(index: any) {
    console.log(index, 'index');

    this.activeIndex = index;

  }

  animateCounter(element: HTMLElement, target: number) {
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 20);

    function updateCounter() {
      start += step;
      if (start >= target) {
        element.innerText = target.toString() + '+';
      } else {
        element.innerText = Math.ceil(start).toString() + '+';
        requestAnimationFrame(updateCounter);
      }
    }
    updateCounter();
  }

  observeCounters(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          const target = parseInt(element.getAttribute('data-target') || '0', 10);
          this.animateCounter(element, target);
          observer.unobserve(element);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('.counter').forEach(counter => observer.observe(counter));
  }

  slideCards(direction: number) {
    this.startIndex = (this.startIndex + direction + this.news_cards.length) % this.news_cards.length;
  }

  getVisibleCards() {
    return [
      this.news_cards[this.startIndex % this.news_cards.length],
      this.news_cards[(this.startIndex + 1) % this.news_cards.length],
      this.news_cards[(this.startIndex + 2) % this.news_cards.length]
    ];
  }

}
