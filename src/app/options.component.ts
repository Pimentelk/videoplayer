import { Component } from '@angular/core';
import { VideoService } from './video.service';

@Component({
	selector: 'video-options',
	templateUrl: '../assets/partials/options.html',
	styleUrls: ['../assets/css/options.css']
})

export class OptionsComponent {	
	constructor(public videoService:VideoService) {}
}