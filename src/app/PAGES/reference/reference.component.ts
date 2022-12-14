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
        <span (click)="scroll(contacts)">contacts</span>
      </div>

      <!-- promo clip -->

      <div class="container-fluid video_container">
        <div class="video-wrapper">
          <div class="overlay2"></div>
          <div #overlay id="overlayScroll" [class.bg]="bgScroll"></div>

          <div class="container gif-container ">
            <div class="row-img">
              <div class="col">
                <img src="../../../assets/banner.gif">
              </div>
            </div>
            <div class="row-img">
              <div class="col">
                <img src="../../../assets/banner4.gif">
              </div>
            </div>
            <div class="row-img">
              <div class="col">
                <img src="../../../assets/banner3.gif">
              </div>
            </div>
          </div>

          <section id="banner-play-button">
            <a (click)="modalOpen = true"
               class="playBtn"></a>
          </section>
        </div>
      </div>
        <section class="container-fluid banner">
          <div id="welcome_banner" class="container">
            <p> <strong>HowBizzar</strong> loob kvaliteetset visuaalset sisu, keskendudes video, foto, animatsiooni ja graafilisele disainile.</p>
            <p>Leiame <strong>teie</strong> ettevōtte edukaks turundamiseks tabavad ja nüüdisaegsed visuaalsed lahendused, arvestades kaasaegseid trende ja standardeid.</p>
          </div>
        </section>

      <!-- SERVICES -->

      <div #services id="services" class="container d-flex">
        <div class="container py-5">
          <h1>TEENUSED</h1>

          <div id="services_container"
               class="container">
            <div class="container services">
              <div class="titleText_container">
                <h3>🎬 Eelproduktsioon</h3>
                <p>&nbsp;Eelproduktsiooni etapis paneme paika eesmärgi ja strateegia, mõtleme idee, loome kontseptsiooni
                  ning koostame teostusplaani. </p>
              </div>
              <div class="tags_container">
                <p class="tags">Ideede genereerimine // Eel-visualiseerimine // Lokatsioonide kinnitamine</p>
              </div>
            </div>
            <div id="boarded_edges" class="container services">
              <div class="titleText_container">
                <h3>🎥 Produktsioon</h3>
                <p>&nbsp;Produktsiooni etapis asume ideed teostama. Võttepäeval peab kõik töötama nagu kellavärk - meie
                  hoolitseme selle eest, et produktsioon sujuks. Läbimõeldud ja efektiivne võttepäev tagab
                  eesmärgipärase lõpptulemuse.</p>
              </div>

              <div class="tags_container ">
                <p class="tags">Lavastamine // Võttepäeva läbiviimine // Meeskonna logistika // Catering</p>
              </div>
            </div>

            <div class="container services">
              <div class="titleText_container">
                <h3>🖥️ Järelproduktsioon</h3>
                <p>&nbsp;Järelproduktsiooni etapis alustame tööd võttepäeval toodetud materjaliga. Montaaži,
                  helindamise, värvitöötluse ning graafika abil sünnib selles etapis lõpptulemus.
                </p>
              </div>

              <div class="tags_container">
                <p class="tags">Montaaž // Värvimääramine // Helindus // Visuaalsed effektid</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- about -->

      <div #about id="about" class="container">
        <div class="container py-5">
          <h1>MEIST</h1>

          <div id="about_container"
               class="container d-flex flex-xxl-row flex-sm-column">
            <div id="about_img"
                 class="container mx-auto">
              <!-- <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/STS-87_crew_1.jpg/1200px-STS-87_crew_1.jpg" class="rounded float-start" alt="..."></div> -->
              <img src="../../../assets/crew.gif" class="rounded float-start" alt="">
              <div id="about_text"
                   class="container">
                <p>Oleme kolm loomingulist Eesti filmitegijat, kelle kireks on liikuvate piltide abil ideid ellu viia.
                  Meie tiimil on põhjalikud ja pikaajalised teadmised Eesti filmi- ja teletööstusest. Olles ka aktiivsed
                  sotsiaalmeedia kasutajad, teame, kuidas hoida teie ettevõtte sotsiaalmeedia video- ja pildimaterjal
                  asjakohasena.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- contacts -->

      <div #contacts id="contacts" class="container">
        <div class="container py-5">
          <h1>KONTAKTID</h1>

          <div id="contacts_container"
               class="container flex-sm-column flex-md-row flex-lg-row flex-xl-row flex-xxl-row justify-content-center align-items-center align-items-stretch">

            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../assets/_DSC4905.jpg" class="card-img-top" alt="ALEX TERVINSKY">
              <div class="card-body">
                <div>
                  <h4>ALEX TERVINSKY</h4>
                  <p class="card-text">Režissöör, Operaator, Värvimääraja</p>
                </div>
                <div class="to-bottom">
                  <a href="mailto:alextervinski@howbizzar.com">alextervinski@howbizzar.com</a>
                  <br>
                  <a href="tel:+3725538883">3725538883</a>
                </div>
              </div>
            </div>

            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../assets/_DSC4909.jpg"
                   class="card-img-top" alt="SIMMO SASKA">
              <div class="card-body">
                <div>
                  <h4>SIMMO SASKA</h4>
                  <p class="card-text">Loovjuht, Produtsent, Režissöör</p>
                </div>
                <div class="to-bottom">
                  <a href="mailto:simmosaska@howbizzar.com">simmosaska@howbizzar.com</a>
                  <br>
                  <a href="tel:+37258316922">37258316922</a>
                </div>
              </div>
            </div>

            <div class="card mx-auto" style="width: 18rem;">
              <img src="../../assets/_DSC4930.jpg" class="card-img-top" alt="TOOMAS TATAR">
              <div class="card-body">
                <div>
                  <h4>TOOMAS TATAR</h4>
                  <p class="card-text">Operaator, Montaaž, Strateeg</p>
                </div>
                <div class="to-bottom">
                  <a href="mailto:toomastatar@howbizzar.com">toomastatar@howbizzar.com</a>
                  <br>
                  <a href="tel:+37253235452">37253235452</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- footer -->

      <footer class="container">
        <div id="footer" class="footer_top_container">
          <!-- aadress     -->
          <div id="address" class="container">
            <h1>Marati 5,</h1>
            <h1>11713 Tallinn</h1>
          </div>

          <div id="footer_logo" class="">
            <img src="../../../assets/logooo.png" alt="">
          </div>

          <!-- kontaktid     -->
          <div id="footer_contacts" class="container">
            <div class="footer_content_container">
              <h6>📞
                <a href="tel:+37258316922">37258316922</a></h6>
              <h6>📬
                <a href="mailto:Info@howbizzar.com">Info@howbizzar.com</a></h6>
            </div>
          </div>
        </div>
        <div class="footer_bottom_container container">
          <div id="address_small">
            <h1>Marati 5, 11713 Tallinn</h1>
          </div>
        </div>
      </footer>
    </div>

    <!-- Video Modal -->

    <div *ngIf="modalOpen"
         class="container-fluid modal">
      <div class="btn_container">
        <span id="exitButton" (click)="test()">X</span>
      </div>
      <iframe id="video" title="vimeo-player" src="https://player.vimeo.com/video/755876584?h=ca792f1001"
              frameborder="0" allowfullscreen></iframe><!--        <iframe id="video"-->
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
