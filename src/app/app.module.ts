import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared';

import { AppRoutingModule, routedComponents } from './app-routing.module';

import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { BookService } from './services';

import {
  BookPreviewComponent, BookPreviewListComponent, BookSearchComponent,

} from './components';

@NgModule({
  declarations: [
    AppComponent,
    routedComponents,
    BookPreviewComponent,
    BookPreviewListComponent,
    BookSearchComponent,
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BookService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
