import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
	selector: 'video-toolbar',
	templateUrl: '../assets/partials/toolbar.html',
	styleUrls: ['../assets/css/toolbar.css']
})

export class ToolbarComponent {	
	constructor(public videoService:VideoService) {}
}