import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './PAGES/main/main.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ServicesComponent } from './COMPONENTS/services/services.component';
import { ShowreelComponent } from './COMPONENTS/showreel/showreel.component';
import { ContactsComponent } from './COMPONENTS/contacts/contacts.component';
import { ReferenceComponent } from './PAGES/reference/reference.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ShowreelComponent,
    ContactsComponent,
    ReferenceComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
