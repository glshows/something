import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {


  ngOnInit(): void {
    let promoLandingpage_video = <HTMLVideoElement> document.getElementById('promoLandingpage_video');
    promoLandingpage_video.play();  
  }
}
