import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DirectivesIndexComponent} from "./pages/directives/directives-index.component";
import {IndexComponent} from "./pages/index/index.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {ServicesComponent} from "./pages/services/services.component";
import {FormsComponent} from "./pages/forms/forms.component";

const routes: Routes = [
  { path: 'directives', component: DirectivesIndexComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'services', component: ServicesComponent },
  { path: '', component: IndexComponent },
  { path: 'forms', component: FormsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
