import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./PAGES/main/main.component";
import {ReferenceComponent} from "./PAGES/reference/reference.component";

const routes: Routes = [
  // {path: '**', component: MainComponent},
  {path: '', component: ReferenceComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
