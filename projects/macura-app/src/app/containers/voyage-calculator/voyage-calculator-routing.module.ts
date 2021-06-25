import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './components/costs.component/costs.component';

const routes: Routes = [{
    path: '', component: CostsComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VoyageCalculatorRoutingModule {
}
