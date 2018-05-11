import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
