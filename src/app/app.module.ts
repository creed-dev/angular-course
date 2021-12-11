import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { PostFormComponent } from './pages/index/post-form/post-form.component';
import { PostComponent } from './pages/index/post/post.component';
import { DirectivesIndexComponent } from './pages/directives/directives-index.component';
import { IndexComponent } from './pages/index/index.component';
import { StyleDirective } from './directives/style.directive';

@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent,
    PostComponent,
    DirectivesIndexComponent,
    IndexComponent,
    StyleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
