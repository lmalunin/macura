import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './components/costs.component/costs.component';
import { CostsResolver } from './resolvers';
import { ExchangeRatesResolver } from './resolvers/exchange-rates.resolver';

const routes: Routes = [
    { path: '', component: CostsComponent, resolve: { costs: CostsResolver, exchangeRate: ExchangeRatesResolver } }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class VoyageCalculatorRoutingModule {
}
