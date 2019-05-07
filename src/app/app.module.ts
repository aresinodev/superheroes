import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImagesListComponent } from './components/images-list/images-list.component';
import { SuperheroePaintComponent } from './components/superheroe-paint/superheroe-paint.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesListComponent,
    SuperheroePaintComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
