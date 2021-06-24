import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { MacuraLibModule } from "../../../macura-lib/src/lib/macura-lib.module";
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CostsComponent } from './containers/costs/costs.component';
import { CostsResolver } from './containers/costs/resolvers/costs.resolver';
import { CostsServices } from './containers/costs/services/costs.services';
import { ExpenseComponent } from './containers/expense/expense.component';
import { metaReducers, reducers } from './reducers';

@NgModule({
    declarations: [
        AppComponent,
        CostsComponent,
        ExpenseComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
        /*Macura libs*/
        MacuraLibModule,
    ],
    providers: [CostsServices, CostsResolver],
    bootstrap: [AppComponent]
})
export class AppModule {
}
