import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CostsComponent } from './components/costs.component/costs.component';
import { ExpenseComponent } from './components/expense.component/expense.component';
import * as fromVoyageCalculator from './reducers';
import { CostsResolver } from './resolvers';
import { CostsServices } from './services';

import { VoyageCalculatorRoutingModule } from './voyage-calculator-routing.module';

const COMPONENTS = [
    CostsComponent,
    ExpenseComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        VoyageCalculatorRoutingModule,
        StoreModule.forFeature(fromVoyageCalculator.voyageCalculatorFeatureKey, fromVoyageCalculator.reducers, { metaReducers: fromVoyageCalculator.metaReducers })
    ],
    providers: [CostsServices, CostsResolver]
})
export class VoyageCalculatorModule {
}
