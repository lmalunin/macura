import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './components/costs.component/costs.component';
import { CostsResolver } from './resolvers';

const routes: Routes = [
    { path: '', component: CostsComponent, resolve: { costs: CostsResolver } }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class VoyageCalculatorRoutingModule {
}
