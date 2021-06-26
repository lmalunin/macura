import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CostsComponent } from './components/costs.component/costs.component';
import { ExpenseComponent } from './components/expense.component/expense.component';
import { CostsResolver } from './resolvers';
import { CostsServices } from './services/costs.service';
import { ExchangeRateService } from './services/exchange-rate.service';
import * as fromVoyageCalculator from './store/reducers';

import { VoyageCalculatorRoutingModule } from './voyage-calculator-routing.module';

const COMPONENTS = [
    CostsComponent,
    ExpenseComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        HttpClientModule,
        VoyageCalculatorRoutingModule,
        StoreModule.forFeature(fromVoyageCalculator.voyageCalculatorFeatureKey, fromVoyageCalculator.reducers, { metaReducers: fromVoyageCalculator.metaReducers })
    ],
    providers: [CostsServices, ExchangeRateService, CostsResolver]
})
export class VoyageCalculatorModule {
}
