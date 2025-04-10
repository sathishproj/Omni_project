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
      title: 'Technology one',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:2,
      title: 'Technology two',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:3,
      title: 'Technology three',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:4,
      title: 'Technology four',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:5,
      title: 'Technology five',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      id:6,
      title: 'Technology six',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    }
  ];

constructor(private router: Router){

}

  onClickTechnologies(id:number){
    this.router.navigate(['/our-specialities-details'], {
      queryParams: {
        selected_Id: id,
      }
    });
  }

}
