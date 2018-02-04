import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class VideoService {

	public videoElement:any;
	public currentPath:string = "";
	public currentTitle:string = "loading...";
	public currentTime:number = 0;
	public totalTime:number = 0;
	public calculatedWidth:number;
	public calculatedScrubY:number;
	public isMuted:boolean = false;
	public isPlaying:boolean = false;
	public isDragging:boolean = false;
	public showDetails:boolean = false;
	public currentDesc:string = "Pew Pew";
	public playlist:any = [];

	constructor(private http:HttpClient) {}

	appSetup(id:string) {
		this.videoElement = <HTMLVideoElement> document.getElementById(id);
		this.videoElement.addEventListener("loadedmetadata", this.updateDate);
		this.videoElement.addEventListener("timeupdate", this.updateTime);
		window.setInterval(this.timerFired,50);
	}

	gatherJSON = () => {
		this.http.get('../assets/data/playlist.json')
		.subscribe(
			data => {				
				this.playlist = data;
				this.selectedVideo(0);
			});
	};

	selectedVideo = (i:number) => {
		this.currentTitle = this.playlist[i]['title'];
		this.currentDesc = this.playlist[i]['description'];
		this.videoElement.src = this.playlist[i]['path'];		
		this.videoElement.pause();
		this.isPlaying = false;
	};

	muteVideo() {
		if (this.videoElement.volume == 0) {
			this.videoElement.volume = 1;
			this.isMuted = false;
		} else {
			this.videoElement.volume = 0;
			this.isMuted = true;
		}
	}

	playVideo() {
		if (this.videoElement.paused) {
			this.videoElement.play();
			this.isPlaying = true;
		} else {
			this.videoElement.pause();
			this.isPlaying = false;
		}
	}

	seekVideo(e:any) {
		let width = document.getElementById('progressMeterFull').offsetWidth;
		let duration = this.videoElement.duration;
		let seconds = Math.round(e.pageX / width * duration);
		
		this.videoElement.currentTime = seconds;
	};

	dragStart = function(e:any) {
		this.isDragging = true;
	};

	dragMove = function(e:any) {
		if (this.isDragging) {
			this.calculatedWidth = e.x;
		}
	};

	dragStop = function(e:any) {
		if (this.isDragging) {
			this.isDragging = false;
			this.seekVideo(e);
		}
	};

	updateDate = (e:any) => {
		this.totalTime = this.videoElement.duration;
	};

	updateTime = (e:any) => {
		this.currentTime = this.videoElement.currentTime;
	};

	timerFired = () => {
		if (!this.isDragging && this.isPlaying) {
			this.calculatedScrubY = this.videoElement.offsetHeight;
			var time = this.videoElement.currentTime;
			var duration = this.videoElement.duration;
			this.calculatedWidth = (time / duration * this.videoElement.offsetWidth);

			if (time == duration) {
				this.isPlaying = false;
				this.videoElement.pause();
			}
		}
	};

	details() {
		if (this.showDetails == false) {
			this.showDetails = true;
		} else {
			this.showDetails = false;
		}
	}

	fullscreen() {
		if (this.videoElement.requestFullscreen) {
			this.videoElement.requestFullscreen();	
		} else if (this.videoElement.mozRequestFullscreen) {
			this.videoElement.mozRequestFullscreen();	
		} else if (this.videoElement.webkitRequestFullscreen) {
			this.videoElement.webkitRequestFullscreen();	
		} else if (this.videoElement.msRequestFullscreen) {
			this.videoElement.msRequestFullscreen();	
		}
	};
}