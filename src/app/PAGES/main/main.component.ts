import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template:
    `
      <div class="turn">Please rotate your device!</div>
      <div class="parentContainer">
        <div *ngIf="onDisplay === 'loading'" class="loading_content">
          <div class="loadingScreen"></div>
        </div>

        <app-home *ngIf="onDisplay === 'main'"></app-home>
        <app-services *ngIf="onDisplay === 'services'"></app-services>
        <app-about *ngIf="onDisplay === 'about'"></app-about>
        <app-showreel *ngIf="onDisplay === 'showreel'"></app-showreel>
        <app-contacts *ngIf="onDisplay === 'contacts'"></app-contacts>

        <div class="nav">
          <div class="container">
            <ul>
              <li id="main"
                  class="menuListItem"
                  [ngClass]="{active: onDisplay === 'main'}"
                  (click)="menuClick('main')">MAIN
              </li>
              <li id="services"
                  class="menuListItem"
                  [ngClass]="{active: onDisplay === 'services'}"
                  (click)="menuClick('services')">SERVICES
              </li>
              <li id="about"
                  class="menuListItem"
                  [ngClass]="{active: onDisplay === 'about'}"
                  (click)="menuClick('about')">ABOUT
              </li>
              <li id="showreel"
                  class="menuListItem"
                  [ngClass]="{active: onDisplay === 'showreel'}"
                  (click)="menuClick('showreel')">SHOWREEL
              </li>
              <li id="contacts"
                  class="menuListItem"
                  [ngClass]="{active: onDisplay === 'contacts'}"
                  (click)="menuClick('contacts')">CONTACTS
              </li>
            </ul>
          </div>
        </div>
      </div>
    `,
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  onDisplay: any;
  constructor() { }

  ngOnInit(): void {
    // Calculate 1vh value in pixels
    // based on window inner height
    let vh = window.innerHeight * 0.01;

  // Set the CSS variable to the root element
  // Which is equal to 1vh
    document.documentElement.style.setProperty('--vh', vh + 'px');
    this.onDisplay = 'about';
  }

  menuClick(menuItem: string) {
    // this.onDisplay = 'loading';
    // setTimeout(() => {
    //   this.onDisplay = menuItem;
    // }, 1000);
    this.onDisplay = menuItem;
  }
}
