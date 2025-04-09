import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {

  @Input() videoUrl: string = '';
  @Input() thumbnailUrlId: string = '';
  @Input() videoPlayed: boolean = false;
  @Output() videoPlayedChange: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
  }
  playVideo(): void {
    this.videoPlayed = true;
    this.videoPlayedChange.emit(this.videoPlayed);
  }
}
