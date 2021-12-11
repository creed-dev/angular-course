import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesIndexComponent} from "./pages/directives/directives-index.component";
import {IndexComponent} from "./pages/index/index.component";

const routes: Routes = [
  { path: 'directives', component: DirectivesIndexComponent },
  { path: '', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
