import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PostFormComponent} from './pages/index/post-form/post-form.component';
import {PostComponent} from './pages/index/post/post.component';
import {DirectivesIndexComponent} from './pages/directives/directives-index.component';
import {IndexComponent} from './pages/index/index.component';
import {StyleDirective} from './directives/style.directive';
import {PipesComponent} from './pages/pipes/pipes.component';
import {MultByPipe} from './pipes/mult-by.pipe';
import {PostsFilterPipe} from './pipes/posts-filter.pipe';
import {ServicesComponent} from './pages/services/services.component';
import {FormsComponent} from './pages/forms/forms.component';
import {RxjsComponent} from './pages/rxjs/rxjs.component';
import {HttpClientComponent} from './pages/http-client/http-client.component';
import {HttpClientModule} from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgHttpLoaderModule} from "ng-http-loader";

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    DirectivesIndexComponent,
    IndexComponent,
    StyleDirective,
    PipesComponent,
    MultByPipe,
    PostsFilterPipe,
    ServicesComponent,
    FormsComponent,
    RxjsComponent,
    HttpClientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
