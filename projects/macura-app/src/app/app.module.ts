import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MacuraLibModule } from "../../../macura-lib/src/lib/macura-lib.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        /*Macura libs*/
        MacuraLibModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
