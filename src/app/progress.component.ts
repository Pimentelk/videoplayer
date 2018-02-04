import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
	selector: 'video-progress',
	templateUrl: '../assets/partials/progress.html',
	styleUrls: ['../assets/css/progress.css']
})

export class ProgressComponent {
	
	constructor(public videoService:VideoService) {}
}