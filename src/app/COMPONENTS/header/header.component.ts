import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `

    <nav id="navScript" class="navbar navbar-expand-lg navbar-light show">
      <div class="container-xl">
        <div class="logo">
          <a class="navbar-brand" href="#"><strong>INSERT YOUR NAME</strong></a>
        </div>
        <div class="toggle_button">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse bg-white" id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto mt-2 mt-lg-0">
            <a class="nav-link" aria-current="page" routerLink="/home">Home</a>
            <a class="nav-link" routerLink="/about">About</a>
            <a class="nav-link" routerLink="/work">Work</a>
            <a class="nav-link" routerLink="/contact">Contact Us</a>
          </div>
          <div class="social_icons d-lg-none my-3 d-flex justify-content-start">
            <div class="mail_icon ms-auto me-3 mb-1">
              <a routerLink="/contact">
                <img class="px-2" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZS8+PGcgaWQ9Im1haWwiPjxwYXRoIGQ9Ik0yOSw2SDNMMi45Miw2YS43OC43OCwwLDAsMC0uMjEsMGwtLjE3LjA3YS42NS42NSwwLDAsMC0uMTUuMS42Ny42NywwLDAsMC0uMTUuMTRsLS4wNi4wNmEuMzYuMzYsMCwwLDAsMCwuMDksMS4wOCwxLjA4LDAsMCwwLS4wOC4xOUExLjI5LDEuMjksMCwwLDAsMiw2LjlTMiw3LDIsN1YyNWExLDEsMCwwLDAsMSwxSDI5YTEsMSwwLDAsMCwxLTFWN0ExLDEsMCwwLDAsMjksNlpNMTYsMTQuODEsNi4yLDhIMjcuMDlaTTQsMjRWOC45MWwxMS40Myw3LjkxLDAsMGExLjUxLDEuNTEsMCwwLDAsLjE4LjA5bC4wOCwwQTEuMDksMS4wOSwwLDAsMCwxNiwxN2gwYTEsMSwwLDAsMCwuNDEtLjFsLjA3LDAsMCwwTDI4LDkuNzlWMjRaIi8+PC9nPjwvc3ZnPg==" alt="linkedin" width="50px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>

  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.target']) // for window scroll events
  scroll(e: { scrollingElement: { scrollTop: any; }; }) {
    let y = window.scrollY;
    let myID = document.getElementById("navScript") as HTMLElement;
    if (y >= 5) {
      myID.className = "navbar navbar-expand-lg navbar-light hide"
    } else {
      myID.className = "navbar navbar-expand-lg navbar-light show"
    }
  }

}
