import { Component, OnInit } from '@angular/core';
import { ProgressComponent } from './progress.component';
import { ToolbarComponent } from './toolbar.component';
import { OptionsComponent } from './options.component';
import { VideoService } from './video.service';

@Component({
  selector: 'app-root',
  templateUrl: '../assets/partials/videoplayer.html',
  styleUrls: ['../assets/css/videoplayer.css'],
  providers: [
  	VideoService
  ]
})

export class AppComponent implements OnInit {
  
  constructor(public videoService:VideoService) {}

	ngOnInit() {
		this.videoService.appSetup('videoDisplay');
		this.videoService.gatherJSON();
	}
}
