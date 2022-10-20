import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <div class="custom_container">
    <div class="video_container">
      <div class="video-wrapper">
        <video id="video" playsinline autoplay [muted]="'muted'" loop poster="">
          <source src="" type="video/webm">
          Your browser does not support the video tag.
        </video>
        <div class="overlay"></div>
      </div>
    </div>

    <div class="footer_container">
      <div *ngIf="rec" class="container_rec" (click)="playPause()">
        <span id="recCircle"></span>
        <h6>REC</h6>
      </div>
      <div *ngIf="!rec" class="container_stby" (click)="playPause()">
        <span id="stbyCircle"></span>
        <h6>STBY</h6>
      </div>
      <div class="otherParameters">
        <div class="smallerContainer">FPS</div>
        <div class="biggerContainer"><span>24.000</span></div>
      </div>
      <div class="otherParameters">
        <div class="smallerContainer">PROD</div>
        <div class="biggerContainer"><span>&plusmn;100%</span></div>
      </div>
      <div class="otherParameters">
        <div class="smallerContainer">BRIGTNESS</div>
        <div class="biggerContainer"><span>50</span></div>
      </div>
      <div class="otherParameters">
        <div class="smallerContainer">WB</div>
        <div class="biggerContainer"><span>5600K +0.0</span></div>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  rec: boolean = true;
  @ViewChild('video') myVideo: ElementRef | undefined;
  @Input() play: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }


  playPause() {
    const myVideo: any = document.getElementById("video");
    if (myVideo.paused) {
      this.rec = true;
      myVideo.play();
    }
    else {
      this.rec = false;
      myVideo.pause();
    }
  }
}
