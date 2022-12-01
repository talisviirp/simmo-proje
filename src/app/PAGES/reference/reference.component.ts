import {Component, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-reference',
  template: `
  <div *ngIf="!modalOpen" class="container-fluid">

    <!-- header -->

<!--    <app-header></app-header>-->

    <!-- sidebar test -->

    <div id="nav" class="container-fluid">
      <span (click)="scrollTop()">home</span>
      <span (click)="scroll(services)">services</span>
      <span (click)="scroll(about)">about</span>
<!--      <span (click)="scroll(showreel)">showreel</span>-->
      <span (click)="scroll(contacts)">contacts</span>
    </div>

      <!-- promo clip -->

    <div class="container-fluid video_container">
      <div class="video-wrapper">
        <div class="overlay"></div>
        <div class="overlay2"></div>
        <div #overlay id="overlayScroll" [class.bg]="bgScroll"></div>
        <img src="../../../assets/giphy.gif" class="overlay3">

        <section>
          <a (click)="modalOpen = true"
             class="playBtn"></a>
        </section>
      </div>
    </div>

    <!-- SERVICES -->

    <div #services id="services" class="container d-flex">
      <div class="container py-5">
        <h1>SERVICES</h1>

        <div id="services_container"
             class="container">
            <div class="container services">
              <div class="titleText_container">
                <h3>🎬 Eelproduktsioon</h3>
                <p>&nbsp;Eelproduktsiooni etapis paneme paika eesmärgi ja strateegia, mõtleme idee, loome kontseptsiooni ning koostame teostusplaani. </p>
              </div>
              <div class="tags_container">
                <p class="tags">Brainstorming // Idea developing workshops // Pre-visualisation #Location scouting</p>
              </div>
            </div>
            <div id="boarded_edges" class="container services">
              <div class="titleText_container">
                <h3>🎥 Produktsioon</h3>
                <p>&nbsp;Produktsiooni etapis asume ideed teostama. Võttepäeval peab kõik töötama nagu kellavärk - meie hoolitseme selle eest, et produktsioon sujuks. Läbimõeldud ja efektiivne võttepäev tagab eesmärgipärase lõpptulemuse.</p>
              </div>

              <div class="tags_container ">
                <p class="tags">Directing // Full scale production // Execution & Logistics management // Procurement of crew & external vendors</p>
              </div>
            </div>

            <div class="container services">
              <div class="titleText_container">
                <h3>🖥️ Järelproduktsioon</h3>
                <p>&nbsp;Järelproduktsiooni etapis alustame tööd võttepäeval toodetud materjaliga. Montaaži, helindamise, värvitöötluse ning graafika abil sünnib selles etapis  lõpptulemus.
                </p>
                <!-- <p> After finishing the edit we give it last touches with colour grading, sound design and VFX.</p> -->
              </div>

              <div class="tags_container">
                <p class="tags">Editing // Color grading // Sound design // VFX</p>
              </div>
            </div>
        </div>
      </div>
    </div>

    <!-- about -->

    <div #about id="about" class="container">
      <div class="container py-5">
        <h1>ABOUT</h1>

        <div id="about_container"
             class="container d-flex flex-xxl-row flex-sm-column">
          <div id="about_img"
               class="container mx-auto">
            <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/STS-87_crew_1.jpg/1200px-STS-87_crew_1.jpg" class="rounded float-start" alt="..."></div> -->
            <img src="../../../assets/tv%20(1).svg" class="rounded float-start"  alt="">
            <div id="about_text"
                 class="container">
              <p>Oleme kolm loomingulist Eesti filmitegijat, kelle kireks on liikuvate piltide abil ideid ellu viia. Meie tiimil on põhjalikud ja pikaajalised teadmised Eesti filmi- ja teletööstusest. Olles ka aktiivsed sotsiaalmeedia kasutajad, teame, kuidas hoida teie ettevõtte sotsiaalmeedia video- ja pildimaterjal asjakohasena.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- contacts -->

    <div #contacts id="contacts" class="container">
      <div class="container py-5">
        <h1>CONTACTS</h1>

        <div id="contacts_container"
             class="container flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-center align-items-center">

          <div class="card mx-auto" style="width: 18rem;">
            <img src="../../assets/_DSC4905.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>ALEX TERVINSKY</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>test@mail.com</p>
              <p>58505555</p>
            </div>
          </div>

          <div class="card mx-auto" style="width: 18rem;">
            <img src="../../assets/_DSC4909.jpg"
                 class="card-img-top" alt="...">
            <div class="card-body">
              <h4>SIMMO SASKA</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>test@mail.com</p>
              <p>58505555</p>
            </div>
          </div>

          <div class="card mx-auto" style="width: 18rem;">
            <img src="../../assets/_DSC4930.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h4>TOOMAS TATAR</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <p>test@mail.com</p>
              <p>58505555</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- footer -->

    <footer id="footer" class="container">
            <!--      logo-->
<!--      <div id="footer_logo" class="container">-->
<!--        <img src="../../../assets/LOGO-HOW-BZZAR.svg" alt="">-->
<!--      </div>-->

            <!-- aadress     -->
      <div id="address" class="container">
        <h1>Marati 5,</h1>
        <h1>11713 Tallinn</h1>
      </div>
            <!-- kontaktid     -->
      <div id="footer_contacts" class="container">
        <span><strong>TELEFON: </strong>+372 58316922</span>
        <span><strong>EMAIL: </strong>test@test.ee</span>
        <br>
        <a href="http://www.instagram.com">INSTAGRAM</a>
        <a href="http://www.facebook.com">FACEBOOK</a>
        <a href="http://www.vimeo.com">VIMEO</a>
      </div>
    </footer>

  </div>

    <!-- Video Modal -->

  <div *ngIf="modalOpen"
       class="container-fluid modal">
    <div class="btn_container">
      <span id="exitButton" (click)="test()">X</span>
    </div>
    <iframe id="video" title="vimeo-player" src="https://player.vimeo.com/video/755876584?h=ca792f1001" frameborder="0" allowfullscreen></iframe><!--        <iframe id="video"-->
  </div>
  `,
  styleUrls: ['./reference.component.scss']
})
export class ReferenceComponent implements OnInit {
  modalOpen = false;
  bgScroll = false;

  @ViewChild('overlay') overlay: any;
  constructor() { }


  ngOnInit(): void {
  }

  test() {
    this.modalOpen = false;
    console.log('click')
  }

  @HostListener('document: scroll')
  onScroll() {
    const scrollAmount = document.documentElement.scrollTop / 1000;
    if (scrollAmount === 0) {
      this.overlay.nativeElement.style.opacity = 0;
    }
    if (scrollAmount > 0 && !(scrollAmount > 1)) {
      this.overlay.nativeElement.style.opacity = `${scrollAmount}`;
    }
  }

  scrollTop() {
    window.scroll({top: 0});
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView();
  }
}
