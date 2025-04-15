import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = [
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Kukatpally Inaugurates Station Naming Rights',
      description: 'Omni Hospitals, a leading multi-specialty provider, held a grand ceremony for station naming rights.',
      date: 'January 20, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Introduces AI-Based Spine Diagnosis System',
      description: 'Apollo Hospitals leverages AI to offer faster, more accurate spinal assessments.',
      date: 'February 10, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospital Opens Robotic Surgery Wing',
      description: 'A leap in medical innovation with the launch of advanced robotic spine surgeries.',
      date: 'March 5, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Launch Free Spine Health Camp',
      description: 'Free checkups, consultations, and awareness for spine-related issues.',
      date: 'March 18, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospital Reports 500 Successful Spine Surgeries',
      description: 'Celebrating a milestone in complex spine surgery success rates.',
      date: 'April 1, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Launch Spine Injury Rehabilitation Program',
      description: 'New intensive rehab program for trauma and injury recovery.',
      date: 'April 5, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Collaborate With International Spine Experts',
      description: 'Global expertise comes to India with spine health collaborations.',
      date: 'April 10, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Offers Discounts on Spine Surgery Packages',
      description: 'Affordable care for spinal health with limited-time offers.',
      date: 'April 12, 2025',
      link: ''
    },
    {
      image: 'assets/images/blogs_header.jpg',
      title: 'Omni Hospitals Hosts Annual Spine Care Conference',
      description: 'An interactive platform for experts to discuss innovations in spinal treatments.',
      date: 'April 15, 2025',
      link: ''
    }
  ];

  constructor(    private router: Router){

  }

  goToBlogDetails(blog_name:any) {
    this.router.navigate(['/blogs-details'], {
      queryParams: {
        blog_name:blog_name
      }
    });
  }

}
