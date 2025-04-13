import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-media-details',
  templateUrl: './news-media-details.component.html',
  styleUrls: ['./news-media-details.component.css']
})
export class NewsMediaDetailsComponent {
  getting_media_object: any = null;

  constructor(private activated_routes: ActivatedRoute) {
    this.activatedRoutesData();
  }
  
  activatedRoutesData() {
    this.activated_routes.queryParams.subscribe(params => {
      try {
        this.getting_media_object = JSON.parse(params['selected_obj']);
        console.log(this.getting_media_object, 'parsed media object');
      } catch (error) {
        console.error('Error parsing selected_obj', error);
        this.getting_media_object = null;
      }
    });
  }
}
