import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CostsComponent } from './components/costs.component/costs.component';
import { CostsResolver } from './components/costs.component/resolvers';
import { CostsServices } from './components/costs.component/services';
import { ExpenseComponent } from './components/expense.component/expense.component';

import { VoyageCalculatorRoutingModule } from './voyage-calculator-routing.module';

const COMPONENTS = [
    CostsComponent,
    ExpenseComponent,
];

@NgModule({
    declarations: COMPONENTS,
    imports: [
        CommonModule,
        VoyageCalculatorRoutingModule
    ],
    providers: [CostsServices, CostsResolver]
})
export class VoyageCalculatorModule {
}
