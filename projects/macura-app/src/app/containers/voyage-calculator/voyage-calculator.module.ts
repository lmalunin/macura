import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MacuraLibModule } from 'macura-lib';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { CostsComponent } from './components/costs.component/costs.component';
import { ExpenseComponent } from './components/expense.component/expense.component';
import { CostsResolver } from './resolvers';
import { ExchangeRatesResolver } from './resolvers/exchange-rates.resolver';
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
        FormsModule,
        VoyageCalculatorRoutingModule,
        StoreModule.forFeature(fromVoyageCalculator.voyageCalculatorFeatureKey, fromVoyageCalculator.reducers, { metaReducers: fromVoyageCalculator.metaReducers }),
        DropdownModule,
        TableModule,
        MacuraLibModule
    ],
    providers: [CostsServices, ExchangeRateService, CostsResolver, ExchangeRatesResolver]
})
export class VoyageCalculatorModule {
}
