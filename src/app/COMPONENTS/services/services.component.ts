import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  template: `
    <div class="custom_container">
      <div class="container_main">
        <ul *ngFor="let item of mainCategoriesList"
            [ngClass]="{menu_active: selectedMain.id === item.id}"
            (click)="selectMenu(item)">
          <li><span>{{item.name}}</span></li>
        </ul>
      </div>

      <div class="container_sub">
        <div class="container_sub_header">
          <span>{{selectedMain.name}}</span>
        </div>
        <div class="container_sub_services">
          <ul *ngFor="let item of subCategories">
            <li>
              <span id="mainLi">{{item.title}}</span>
              <ul *ngFor="let subItem of item.sub"
                  id="mainUl">
                <li id="subLi">{{subItem}}</li></ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  mainCategoriesList: any = [
    {id: 1, name: 'PRE'},
    {id: 2, name: 'PROD'},
    {id: 3, name: 'POST'}
  ];
  subCategoriesPre: any = [
    {id: 1, name: 'PRE'},
    {id: 2, name: 'PRE'},
    {id: 3, name: 'PRE'},
    {id: 4, name: 'PRE'},
    {id: 5, name: 'PRE'},
    {id: 6, name: 'PRE'}
  ];
  subCategoriesPreCopy: any = [
    {title: 'Idea', sub: ['Briefing', 'Brainstorming', 'Idea development', 'workshops']},
    {title: 'Creative brief', sub: ['Treatment', 'Art-direction', 'Pre-visualisation', 'Script & storyboard']},
    {title: 'Planning', sub: ['Budget', 'Schedule', 'Logistics']},
    {title: 'Equipment & Team', sub: ['Technical solution', 'Booking crew']},
    {title: 'Locations & Casting', sub: ['Location scouting', 'Permits', 'Talent casting']},
  ];
  subCategoriesProd: any = [
    {id: 1, name: 'PROD'},
    {id: 2, name: 'PROD'},
    {id: 3, name: 'PROD'},
    {id: 4, name: 'PROD'},
    {id: 5, name: 'PROD'},
    {id: 6, name: 'PROD'}
  ];
  subCategoriesPost: any = [
    {id: 1, name: 'POST'},
    {id: 2, name: 'POST'},
    {id: 3, name: 'POST'},
    {id: 4, name: 'POST'},
    {id: 5, name: 'POST'},
    {id: 6, name: 'POST'}
  ]
  selectedMain: any = this.mainCategoriesList[0];
  selectedSub: any = this.subCategoriesPre[0];

  subCategories: any = this.subCategoriesPreCopy;
  constructor() { }

  ngOnInit(): void {
  }

  selectMenu(selected: any) {
    this.selectedMain = selected;
    if (selected.id === 1) {
      this.subCategories = this.subCategoriesPre;
      this.selectedSub = this.subCategories[0];
    } else if (selected.id === 2) {
      this.subCategories = this.subCategoriesProd;
      this.selectedSub = this.subCategories[0];
    } else {
      this.subCategories = this.subCategoriesPost;
      this.selectedSub = this.subCategories[0];
    }
  }

  selectSubMenu(selectedSub: any) {
    this.selectedSub = selectedSub;
  }

}
