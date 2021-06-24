import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MacuraLibModule} from "../../../macura-lib/src/lib/macura-lib.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MacuraLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
