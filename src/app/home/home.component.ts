import { Component, ViewChild, ElementRef, Renderer2, HostListener, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
register();
declare var $: any;
// declare var Swiper: any;

import 'owl.carousel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('owlCarousel', { static: false }) owlCarousel!: ElementRef;
  @ViewChild('patientowlCarousel', { static: false }) patientowlCarousel!: ElementRef;
  @ViewChild('newsMediaCarousel', { static: false }) newsMediaCarousel!: ElementRef;
  @ViewChild('blogCarousel', { static: false }) blogCarousel!: ElementRef;
  @ViewChild('swiperContainer', { static: false }) swiperContainer!: ElementRef;


  videoPlayed: boolean = false;
  sanitizedVideoUrl!: SafeResourceUrl;
  
  private swiperInitialized = false;
  activeCard = 0;
  title = 'Omni_project';
  activeIndex = 0;
  direction_icon: boolean = false;
  depertment_icon: boolean = false;
  showMore: boolean = false;
  showmoreactive_one: boolean = false;
  startIndex = 0;
  currentIndex = 0;
  currentNewsIndex = 0;
  currentBlogIndex = 0;
  totalItems: number = 0;
  prevBtn!: HTMLElement | null;
  nextBtn!: HTMLElement | null;
  carousel!: HTMLElement | null;
  slidesPerView = 3;
  breakpointsJson = JSON.stringify({
    0: { slidesPerView: 1.1 },     // small devices
    480: { slidesPerView: 1.5 },   // mobile landscape
    768: { slidesPerView: 2 },     // tablets
    1024: { slidesPerView: 3 }     // desktop
  });
  
  canSlidePrev = false;
  canSlideNext = true;
  swiperInstance: any;
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
    { id: 1, dep_name: 'Cardiology', img_blue: 'assets/our_specialities/Cardio_blue.svg', img: "assets/our_specialities/Cardio_gray.svg" }, { id: 2, dep_name: 'ENT', img_blue: 'assets/our_specialities/ENT_blue.svg', img: "assets/our_specialities/ENT.svg" }, { id: 3, dep_name: 'General Medicine', img_blue: 'assets/our_specialities/Internal_medic_blue.svg', img: "assets/our_specialities/general_medicine.svg" }, { id: 4, dep_name: 'General Surgery', img_blue: 'assets/our_specialities/General_Surgery_blue.svg', img: "assets/our_specialities/General_Surgery.svg" }, { id: 5, dep_name: 'Gastroenterology', img_blue: 'assets/our_specialities/Gastro_blue.svg', img: "assets/our_specialities/Gastro.svg" }, { id: 6, dep_name: 'Neurology', img_blue: 'assets/our_specialities/brain_blue.svg', img: "assets/our_specialities/brain.svg" },
    {
      id: 7, dep_name: 'Nephrology', img_blue: 'assets/our_specialities/Nephrology_Urology_blue.svg', img: "assets/our_specialities/Nephrology_Urology.svg"
    }, { id: 8, dep_name: 'Gynaecology', img_blue: 'assets/our_specialities/Gynaecology_blue.svg', img: "assets/our_specialities/Gynaecology.svg" }, { id: 9, dep_name: 'Paediatrics', img_blue: 'assets/our_specialities/Paediatrics_blue.svg', img: "assets/our_specialities/Paediatrics.svg" }, { id: 10, dep_name: 'Pulmonology', img_blue: 'assets/our_specialities/Pulmonology_blue.svg', img: "assets/our_specialities/Pulmonology.svg" }, { id: 11, dep_name: 'Psychiatry', img_blue: 'assets/our_specialities/Psychiatry_blue.svg', img: "assets/our_specialities/Psychiatry.svg" }, { id: 12, dep_name: 'Orthopaedics', img_blue: 'assets/our_specialities/Orthopedic_blue.svg', img: "assets/our_specialities/Orthopedic.svg" },
    {
      id: 13, dep_name: 'Vascular Surgery', img_blue: 'assets/our_specialities/Vascular-Surgery_blue.svg', img: "assets/our_specialities/Vascular_Surgery.svg"
    }
  ]
  selectedIndex: number = 0;
  counters = [
    { id: 1, img: 'why_choose_hospitals.svg', label: 'Hospitals', target: 6, value: 0 },
    { id: 2, img: 'hospital_beds.svg', label: 'Beds', target: 750, value: 0 },
    { id: 3, img: 'why_choose_doctors.svg', label: 'Doctors', target: 450, value: 0 },
    { id: 4, img: 'pharmacy.svg', label: 'Pharmacy', target: 10, value: 0 }
  ];
  newsMedia = [
    {image:'assets/images/news_media/news.png',title:"Omni Hospitals Kukatpally Inaugurates Station Naming Rights with Grand Ceremony",location:'Hyderabad, 7/01/2025– Omni Hospitals, a leading multi-specialty healthcare provider, proudly inaugurated the station naming rights...',posted_date:'January 20, 2025'},
    {image:'assets/images/news_media/news.png',title:"Omni Hospitals Kukatpally Inaugurates Station Naming Rights with Grand Ceremony",location:'Hyderabad, 7/01/2025– Omni Hospitals, a leading multi-specialty healthcare provider, proudly inaugurated the station naming rights...',posted_date:'January 20, 2025'},
    {image:'assets/images/news_media/news.png',title:"Omni Hospitals Kukatpally Inaugurates Station Naming Rights with Grand Ceremony",location:'Hyderabad, 7/01/2025– Omni Hospitals, a leading multi-specialty healthcare provider, proudly inaugurated the station naming rights...',posted_date:'January 20, 2025'},
    {image:'assets/images/news_media/news.png',title:"Omni Hospitals Kukatpally Inaugurates Station Naming Rights with Grand Ceremony",location:'Hyderabad, 7/01/2025– Omni Hospitals, a leading multi-specialty healthcare provider, proudly inaugurated the station naming rights...',posted_date:'January 20, 2025'},
    {image:'assets/images/news_media/news.png',title:"Omni Hospitals Kukatpally Inaugurates Station Naming Rights with Grand Ceremony",location:'Hyderabad, 7/01/2025– Omni Hospitals, a leading multi-specialty healthcare provider, proudly inaugurated the station naming rights...',posted_date:'January 20, 2025'},
     ];
  technologies = [
    { id: 1, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Hospitals' },
    { id: 2, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Beds' },
    { id: 3, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Doctors' },
    { id: 4, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Pharmacy' },
    { id: 5, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Pharmacy' },
    { id: 6, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Pharmacy' },
    { id: 7, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Pharmacy' },
    { id: 8, img: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__', label: 'Pharmacy' },
  ];

  userTestimonials = [
    {
      name: 'Vikshitha V',
      location: 'Hyderabad',
      image: 'https://s3-alpha-sig.figma.com/img/a845/ffd0/453273b291cf22ee3a3b6fb91e97e833?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9wY7S26nCnlQ3XSaOR0ROr3NCtKQUWs4s-~FUuE8y0pGEFtsamsz0fGf6K3YbyDNQjuKFpYLxQUGDjgVocU7qGOhryaWDgK~AcJPQfDAsCzMvD2A17ChufdAyPuNP7Oc7IHMdbem2ANu8bRAtWRJkbhqVhM4042CPehFXF9khsEEQb4UmwP27qi5G4AHfYDLUEKcbFjuQ76YsmjYuDeUawePKQTky6zm6tF7kWIpTlKRYyfwoiEv0MzB8dEkkyAdxBIUl9oiYtUqKJPUlS3hiGQi8ZWUb8gRqbsJ0ycmOlf2FCBrcXa9BXK2ioOyjIUZ9kJ03zYXWGwcPQL4X1EgQ__',
      text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy Text Ever Since The 1500s...'
    },
    {
      name: 'Anil Kumar',
      location: 'Bangalore',
      image: 'https://s3-alpha-sig.figma.com/img/a845/ffd0/453273b291cf22ee3a3b6fb91e97e833?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9wY7S26nCnlQ3XSaOR0ROr3NCtKQUWs4s-~FUuE8y0pGEFtsamsz0fGf6K3YbyDNQjuKFpYLxQUGDjgVocU7qGOhryaWDgK~AcJPQfDAsCzMvD2A17ChufdAyPuNP7Oc7IHMdbem2ANu8bRAtWRJkbhqVhM4042CPehFXF9khsEEQb4UmwP27qi5G4AHfYDLUEKcbFjuQ76YsmjYuDeUawePKQTky6zm6tF7kWIpTlKRYyfwoiEv0MzB8dEkkyAdxBIUl9oiYtUqKJPUlS3hiGQi8ZWUb8gRqbsJ0ycmOlf2FCBrcXa9BXK2ioOyjIUZ9kJ03zYXWGwcPQL4X1EgQ__',
      text: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. It Has Survived Not Only Five Centuries, But Also The Leap Into Electronic Typesetting...'
    },
    {
      name: 'Sneha Reddy',
      location: 'Chennai',
      image: 'https://s3-alpha-sig.figma.com/img/a845/ffd0/453273b291cf22ee3a3b6fb91e97e833?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=a9wY7S26nCnlQ3XSaOR0ROr3NCtKQUWs4s-~FUuE8y0pGEFtsamsz0fGf6K3YbyDNQjuKFpYLxQUGDjgVocU7qGOhryaWDgK~AcJPQfDAsCzMvD2A17ChufdAyPuNP7Oc7IHMdbem2ANu8bRAtWRJkbhqVhM4042CPehFXF9khsEEQb4UmwP27qi5G4AHfYDLUEKcbFjuQ76YsmjYuDeUawePKQTky6zm6tF7kWIpTlKRYyfwoiEv0MzB8dEkkyAdxBIUl9oiYtUqKJPUlS3hiGQi8ZWUb8gRqbsJ0ycmOlf2FCBrcXa9BXK2ioOyjIUZ9kJ03zYXWGwcPQL4X1EgQ__',
      text: 'Contrary To Popular Belief, Lorem Ipsum Is Not Simply Random Text. It Has Roots In A Piece Of Classical Latin Literature From 45 BC...'
    }
  ];
  

  totalNewsSlides = this.newsMedia.length;
  hoveredCard = '';

  testimonials = [
    {
      name: "Mr. S. A. Jeelan",
      profession: "Healthcare Provider",
      text: "Hyderabad, 7/01/2025 – Omni Hospitals, A Leading Multi-Specialty Healthcare Provider, Proudly Inaugurated The Station Naming Rights...",
      date: "January 20, 2025",
      videoPlayed: false,
      thumbnailUrl:'F6PTu29AhUE',
      videoUrl:"https://youtu.be/F6PTu29AhUE?si=3zt7ke9vCpQbV-BB"
    },
    {
      name: "Anand Doe",
      profession: "Software Engineer",
      text: "This platform helped me a lot in my career growth. The services provided are top-notch...",
      date: "March 10, 2025",
      videoPlayed: false,
      thumbnailUrl:'5mGb2WtElQc',
      videoUrl:"https://youtu.be/5mGb2WtElQc?si=MTgUM8LR5sX31bfn"
    },
    {
      name: "Murali Doe",
      profession: "Software Engineer",
      text: "This platform helped me a lot in my career growth. The services provided are top-notch...",
      date: "March 10, 2025",
      videoPlayed: false,
      thumbnailUrl:'UjQpbG_qnnw',
      videoUrl:"https://www.youtube.com/embed/UjQpbG_qnnw?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&si=T9ethVDyz4_WxnYL"
    },
    {
      name: "Anil Doe",
      profession: "Software Engineer",
      text: "This platform helped me a lot in my career growth. The services provided are top-notch...",
      date: "March 10, 2025",
      videoPlayed: false,
      thumbnailUrl:'w6uX9jamcwQ',
      videoUrl:"https://www.youtube.com/embed/w6uX9jamcwQ?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&si=h-9ae17vDrjSGg5f"
    }
  ];

  blogs = [
    {
      image: "assets/images/blogs_header.jpg",
      title: "Omni Hospitals Kukatpally Inaugurates Station Naming Rights",
      description: "Hyderabad, 7/01/2025 - Omni Hospitals, A Leading Multi-Specialty Healthcare Provider...",
      date: "January 20, 2025",
      link: "#"
    },
    {
      image: "assets/images/blogs_header.jpg",
      title: "Another Blog Title Here",
      description: "Short description of the blog goes here...",
      date: "February 10, 2025",
      link: "#"
    },
    {
      image: "assets/images/blogs_header.jpg",
      title: "Another Blog Title Here",
      description: "Short description of the blog goes here...",
      date: "February 10, 2025",
      link: "#"
    }
  ];

  totalBlogSlides = this.blogs.length;
  groupedTestimonials: any[][] = [];
  totalSlides = this.testimonials.length;

  omni_mail_id = 'info@omnihospitals.in'

  depertments = [
    {
      id: 1, d_name: 'What is Lorem Ipsum?', d_description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    },
    {
      id: 2, d_name: 'What is Lorem Ipsum?', d_description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    },
    {
      id: 3, d_name: 'What is Lorem Ipsum?', d_description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    },
    {
      id: 4, d_name: 'What is Lorem Ipsum?', d_description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.", img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    },
    {
      id: 5, d_name: 'What is Lorem Ipsum?', d_description: ' OMNI hospitals was established with an intention of being a comprehensive & cost-effective chain of hospitals that provides super-specialty services with warmth and care. Omni hospitals is owned by the healthcare division of Incor group.', img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    },
    {
      id: 6, d_name: 'What is Lorem Ipsum?', d_description: ' OMNI hospitals was established with an intention of being a comprehensive & cost-effective chain of hospitals that provides super-specialty services with warmth and care. Omni hospitals is owned by the healthcare division of Incor group.', img: 'https://img.freepik.com/free-photo/men-with-protection-masks-visiting-hospital-clinic-checking-appointment-respecting-social-distance-waiting-room-global-pandemic_482257-2002.jpg?ga=GA1.1.900482830.1739181171&semt=ais_hybrid'
    }
  ]

  owlInstance: any; // Store reference globally

  locations_details = [
    {
      id: 1, location_name: 'Kothapet', img: 'omni_kothapet.png'
    },
    {
      id: 2, location_name: 'Kukatpally', img: 'omni_kukatpally.png'
    },
    {
      id: 3, location_name: 'UDAI OMNI - Nampally', img: 'udai_omni.png'
    },
    {
      id: 4, location_name: 'Vizag', img: 'omni_vizag.png'
    },
    {
      id: 5, location_name: 'Giggles Vizag', img: 'giggles_vizag_building.png'
    },
    {
      id: 6, location_name: 'Kurnool', img: 'kurnool_location.png'
    }
  ]

  images = [
    { src: 'assets/owl1.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl2.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl3.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl4.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl4.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl4.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl4.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
    { src: 'assets/owl4.jpg', title: 'MRI', description: 'Lorem Ipsum is simply dummy text of the printing industry.' },
  ];

  slides = [
    {
      img: 'assets/mri1.jpg',
      title: 'MRI',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy...',
    },
    {
      img: 'assets/mri2.jpg',
      title: 'MRI',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy...',
    },
    {
      img: 'assets/mri3.jpg',
      title: 'MRI',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy...',
    },
    {
      img: 'assets/mri4.jpg',
      title: 'MRI',
      desc: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry’s Standard Dummy...',
    },
  ];
  index = 0;
  constructor(private sanitizer: DomSanitizer,private router: Router, private renderer: Renderer2, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home') {
          this.renderer.setStyle(document.body, 'background-color', 'rgb(234, 232, 232)');
        } else {
          this.renderer.setStyle(document.body, 'background-color', 'white'); // Reset for other routes
        }
      }
    });
    this.updateSlidesPerView();
    window.addEventListener('resize', this.updateSlidesPerView.bind(this));
    register(); // Important for touch support in Web Components
  }

  ngAfterViewInit() {
    this.observeCounters();
    this.blogsSlide();
    this.news();
    this.owl();
    this.testowl();
    setTimeout(() => {
      this.initSwiper();
    }, 100);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeIndex']) {
      if (this.activeIndex === 2 && !this.swiperInitialized) {
        setTimeout(() => {
          this.initSwiper(true); // only reset once
          this.swiperInitialized = true;
        }, 200);
      } else {
        this.swiperInitialized = false;
      }
    }
  }
  ngAfterViewChecked() {
    if (this.activeIndex === 2 && this.swiperContainer?.nativeElement?.swiper) {
      const swiper = this.swiperContainer.nativeElement.swiper;
      this.updateArrowStates(swiper);
    }
  }

  toggleReadMore(): void {
    this.showMore = !this.showMore;
  }
  ReadMore() {
    this.showmoreactive_one = !this.showmoreactive_one
  }
  ourSpecialities(index: any) {
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


  updateCarousel(direction: 'next' | 'prev') {
    if (direction === 'prev' && this.index > 0) {
      this.index--;
    } else if (direction === 'next' && this.index < this.depertments.length - 1) {
      this.index++;
    }
  }

  getTransform() {
    return `translateX(-${this.index * 100}%)`;
  }


  ourDoctorsDetails() {
    this.router.navigate(['/our-doctors']).then(success => {
      if (success) {
        console.log('Navigation to OurDoctorsComponent successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }
  locationToggle(num: number) {
    if (num == 1) {
      this.direction_icon = !this.direction_icon
    }
    else {
      this.depertment_icon = !this.depertment_icon
    }
  }
  healthCheckup() {
    this.router.navigate(['/health-checkup']).then(success => {
      if (success) {
        console.log('Navigation to Health Checkup successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }


  openSecondOpinion() {
    this.router.navigate(['/second-opinion']).then(success => {
      if (success) {
        console.log('Navigation to Second Opinion successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }
  chunkArray(arr: any[], size: number) {
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
  }
  goToSlide(index: number) {
    this.currentIndex = index;
    $(this.owlCarousel.nativeElement).trigger('to.owl.carousel', [index, 300]);
  }
  goToNewsSlide(index: number) {
    this.currentNewsIndex = index;
    $(this.newsMediaCarousel.nativeElement).trigger('to.owl.carousel', [index, 300]);
  }
  goToBlogSlide(index: number) {
    this.currentBlogIndex = index;
    $(this.blogCarousel.nativeElement).trigger('to.owl.carousel', [index, 300]);
  }

  prev() {
    $('#owl-demo').trigger('prev.owl.carousel');
  }

  next() {
    $('#owl-demo').trigger('next.owl.carousel');
  }

  updateNavButtons() {
    const carousel = $('#owl-demo');
    $('#prevBtn').toggle(!carousel.find('.owl-item:first').hasClass('active'));
    $('#nextBtn').toggle(!carousel.find('.owl-item:last').hasClass('active'));
  }
  updateSlidesPerView(): void {
    const screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      this.slidesPerView = 1; // Mobile view
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      this.slidesPerView = 2; // Tablet view
    } else {
      this.slidesPerView = 3; // Desktop view
    }
  }


  goToDetails(id: number) {
    this.router.navigate(['/our-specialities-details'], {
      queryParams: {
        selected_Id: id,
      }
    });
  }

  onClickTechno() {
    this.router.navigate(['/technologies']).then(success => {
      if (success) {
        console.log('Navigation to technologies successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }

  onNewsCLick() {
    this.router.navigate(['/news-media']).then(success => {
      if (success) {
        console.log('Navigation to technologies successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }
  goToBlogs() {
    this.router.navigate(['/blogs']).then(success => {
      if (success) {
        console.log('Navigation to technologies successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }

  initSwiper(reset: boolean = false) {
    const swiperEl: any = this.swiperContainer?.nativeElement;
    if (swiperEl && swiperEl.swiper) {
      const swiper = swiperEl.swiper;

      if (reset) swiper.slideTo(0, 0); // reset to first slide if needed

      this.updateArrowStates(swiper);

      swiper.update(); // force refresh
    }
  }

  swiperPrev() {
    const swiper = this.swiperContainer.nativeElement.swiper;
    swiper.slidePrev();
    this.updateArrowStates(swiper);
  }

  swiperNext() {
    const swiper = this.swiperContainer.nativeElement.swiper;
    swiper.slideNext();
    this.updateArrowStates(swiper);
  }

  updateArrowStates(swiper: any) {
    this.canSlidePrev = !swiper.isBeginning;
    this.canSlideNext = !swiper.isEnd;
    this.cdr.detectChanges(); // ensure Angular updates the UI
  }


  owl(): void {
    const owl = $(this.owlCarousel.nativeElement);
    this.owlInstance = owl.owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 1 }
      }
    });
  }
  

testowl(){
  const owl = $(this.patientowlCarousel.nativeElement); // ✅ Fix: Use `const`
  $(this.patientowlCarousel.nativeElement).owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: false, // Disable Owl default dots
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: { items: 1 },
      768: { items: 3 },
      992: { items: 3 }
    }
  });
}

  blogsSlide() {
    const blogs = $(this.blogCarousel.nativeElement);
    blogs.owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: false, // Custom dots
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });

    blogs.on('changed.owl.carousel', (event: any) => {
      let realIndex = event.item.index - event.relatedTarget._clones.length / 2;
      this.currentBlogIndex = (realIndex + this.totalBlogSlides) % this.totalBlogSlides;
    });
  }

  news() {
    const newsowl = $(this.newsMediaCarousel.nativeElement);
    newsowl.owlCarousel({
      loop: true,
      margin: 15,
      nav: false,
      dots: false, // Custom dots
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
        0: { items: 1 },
        768: { items: 2 },
        992: { items: 3 }
      }
    });

    // ✅ Update dot when auto-slide changes
    newsowl.on('changed.owl.carousel', (event: any) => {
      let realIndex = event.item.index - event.relatedTarget._clones.length / 2;
      this.currentNewsIndex = (realIndex + this.totalNewsSlides) % this.totalNewsSlides;
    });

  }

  onVideoPlay(index: number): void {
    this.owlInstance.trigger('stop.owl.autoplay');
  }

  onVideoPauseOrEnd(index: number): void {
    this.owlInstance.trigger('play.owl.autoplay', [3000]);
  }
  

  routeToLocation(location:string, selected_image:string){
    const modalElement = document.getElementById('locationModal');
  const modalInstance = bootstrap.Modal.getInstance(modalElement);
  if (modalInstance) {
    modalInstance.hide();
  }

  setTimeout(() => {
    this.router.navigate(['/our-branches'], {
      queryParams: {
        selected_location: location,
        selected_image:selected_image
      }
    });
  }, 300);
  }
  goToFixedSurgical(){
    this.router.navigate(['/fixed-surgical-packages']).then(success => {
      if (success) {
        console.log('Navigation to technologies successful');
      } else {
        console.log('Navigation failed');
      }
    }).catch(error => console.error('Navigation error:', error));
  }
}