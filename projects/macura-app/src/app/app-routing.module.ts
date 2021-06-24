import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CostsComponent } from './containers/costs/costs.component';
import { CostsResolver } from './containers/costs/resolvers/costs.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'costs', pathMatch: 'full' },
    { path: 'costs', component: CostsComponent, resolve: { costs: CostsResolver } }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
