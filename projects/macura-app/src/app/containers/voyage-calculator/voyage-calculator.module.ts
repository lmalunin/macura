import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MacuraLibModule } from 'macura-lib';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TableModule } from 'primeng/table';
import { CommentsComponent } from './components/comments/comments.component';
import { CostsComponent } from './components/costs.component/costs.component';
import { ExpenseComponent } from './components/expense.component/expense.component';
import { CostsResolver } from './resolvers';
import { ExchangeRatesResolver } from './resolvers/exchange-rates.resolver';
import { CostsServices } from './services/costs.service';
import { ExchangeRateService } from './services/exchange-rate.service';
import { fromCostEffects } from './store/effects/';


import * as fromVoyageCalculator from './store/reducers';

import { VoyageCalculatorRoutingModule } from './voyage-calculator-routing.module';

const COMPONENTS = [
    CostsComponent,
    ExpenseComponent,
    CommentsComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        VoyageCalculatorRoutingModule,
        StoreModule.forFeature(fromVoyageCalculator.voyageCalculatorFeatureKey, fromVoyageCalculator.reducers, { metaReducers: fromVoyageCalculator.metaReducers }),
        EffectsModule.forFeature([fromCostEffects.CostsEffects]),
        DropdownModule,
        TableModule,
        ProgressSpinnerModule,
        InputNumberModule,
        ButtonModule,
        MacuraLibModule
    ],
    providers: [CostsServices, ExchangeRateService, CostsResolver, ExchangeRatesResolver]
})
export class VoyageCalculatorModule {
}
