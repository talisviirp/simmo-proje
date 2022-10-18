import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
      <div class="innerContainer">
        <div class="threeColDiv">
          <div class="col col-upper">
            <div class="threeColDiv_col_upper">
                    <span class="col_upper_size">
                      FPS</span>
            </div>
            <div class="threeColDiv_col_main">
                    <span class="col_main_size">
                      <h4>23.976</h4></span>
            </div>
          </div>
          <div class="col col-upper">
            <div class="threeColDiv_col_upper">
                    <span class="col_upper_size">
                      TC
                    </span>
            </div>
            <div class="threeColDiv_col_main">
                    <span class="col_main_size">
                      <h4>20:14:33:--</h4>
                    </span>
            </div>
          </div>
          <div class="col col-upper">
            <div class="threeColDiv_col_upper">
              <span class="col_upper_size">SHUTTER</span>
            </div>
            <div class="threeColDiv_col_main">
              <span class="col_main_size"><h4>180.0&deg;</h4></span>
            </div>
          </div>
        </div>


        <div class="mainContent">
          <div class="mainContent_col">
            <div id="stbyContainer"
                 class="mainContent_col_upper">
              <span id="stbyCircle"></span>
              <h2>STBY</h2>
            </div>

            <div class="mainContent_col_lower">
              <span>WHO:</span>
              <span>WHAT:</span>
            </div>
          </div>
          <div class="mainContent_col">
            <div class="mainContent_col_middle">
              <h2>WHO</h2>
              <p>&nbsp;We are three creative filmmakers
                from Estonia with a passion to bring ideas into reality
                with the form of moving and still pictures.</p>
            </div>
          </div>
          <div class="mainContent_col">
            <div class="mainContent_col_end">

              <h2>WHAT</h2>
              <p>&nbsp;Our team has comprehensive knowledge about the Estonian film and tv industry,
                also as a active social media users we know what is trending to help keep your company videos and pictures up to date.</p>
            </div>
          </div>
        </div>

        <div class="threeColDiv threeColDiv_lower">
          <div class="col col-lower">
            <div class="threeColDiv_col_upper">
                    <span class="col_upper_size">
                      EI
                    </span>
            </div>
            <div class="threeColDiv_col_main">
              <span class="col_main_size"><h4>800</h4></span>
            </div>
          </div>
          <div class="col col-lower">
            <div class="threeColDiv_col_upper">
              <span class="col_upper_size">ND</span>
            </div>
            <div class="threeColDiv_col_main">
              <span class="col_main_size"><h4>0.6</h4></span>
            </div>
          </div>
          <div class="col col-lower">
            <div class="threeColDiv_col_upper">
              <span class="col_upper_size">WB</span>
            </div>
            <div class="threeColDiv_col_main">
              <span class="col_main_size"><h4>5600&#178;</h4></span>
            </div>
          </div>
        </div>
      </div>
  `,
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
