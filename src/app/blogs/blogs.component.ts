import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent {
  blogs = [
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    },
    {
      title: 'blog',
      description: 'Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry\'s Standard Dummy...',
      image: 'https://s3-alpha-sig.figma.com/img/64ab/bc1d/6b4ff909436fd5c3321e99d779bb363a?Expires=1744588800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FR1iylyiw~34Poq3IsU7BfzrQLIxXC~Wky1IsfmykALnwKQwkVPwT8Ow4Nu6YTxvbltfGGSWUTb1RC8c6w0Bx7E6xsCYX7EEGyfwsFa-3SdGLxihY~9ZzGBxpV6IZei94Su4~DcLvfsqHWmwT5pihWc8FYvIqdbDWfPSmkHogLIdSP7mIEdUJZ6SmIPwM9O~TAWg5kipuTuuZfp6TEr520vjZe6pet0-wfeSCZ~AtdL8tK--VabAQKzlwvN9F9U95YOJmJQI7NMt55Or0jRr9BC2UStILQkzyK4zs-nFCwm6Xa~mLJbq-KnQKngFHNy8Gzt3uSTiiOE75FVf8cZvfg__'
    }
  ];
}
