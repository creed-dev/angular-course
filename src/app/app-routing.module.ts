import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DirectivesIndexComponent} from "./pages/directives/directives-index.component";
import {IndexComponent} from "./pages/index/index.component";
import {PipesComponent} from "./pages/pipes/pipes.component";
import {ServicesComponent} from "./pages/services/services.component";
import {FormsComponent} from "./pages/forms/forms.component";
import {RxjsComponent} from "./pages/rxjs/rxjs.component";
import {HttpClientComponent} from "./pages/http-client/http-client.component";
import {PostPageComponent} from "./pages/post-page/post-page.component";

const routes: Routes = [
  {path: 'directives', component: DirectivesIndexComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: 'http-client', component: HttpClientComponent},
  {path: 'post/:id', component: PostPageComponent},
  {path: '', component: IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
