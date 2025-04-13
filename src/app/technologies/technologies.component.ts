import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent {

  technologies = [
    {
      id:1,
      title: 'MRI (Magnetic Resonance Imaging)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:2,
      title: 'CT Scan (Computed Tomography Scan)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:3,
      title: 'X-Ray Machine',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:4,
      title: 'Ultrasound (Sonography)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:5,
      title: 'ECG (Electrocardiogram)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:6,
      title: 'EEG (Electroencephalogram)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:7,
      title: 'PET Scan (Positron Emission Tomography)',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:8,
      title: 'Dialysis Machine',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:9,
      title: 'Ventilator',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:10,
      title: 'Endoscopy System',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    }
  ];

constructor(private router: Router){

}

  onClickTechnologies(id:number, technology:string){
    this.router.navigate(['/technologies-details'], {
      queryParams: {
        selected_Id: id,
        selected_tech:technology
      }
    });
  }

}
