import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'costs', pathMatch: 'full' },
    {
        path: 'costs',
        loadChildren: () => import('./containers/voyage-calculator/voyage-calculator.module').then(m => m.VoyageCalculatorModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
