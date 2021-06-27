import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { select, Store } from '@ngrx/store';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { CostsModel, ICostsModel } from '../../models';
import { fromCostsSelectors } from '../../store/selectors';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'macura-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseComponent implements OnInit {

    _selectedRate: { fromCurrency: string; toCurrency: string; exchangeRate: number; } | undefined;

    get selectedRate(): { fromCurrency: string, toCurrency: string, exchangeRate: number } {
        return this._selectedRate!;
    }

    @Input() set selectedRate(value: { fromCurrency: string, toCurrency: string, exchangeRate: number }) {
        this._selectedRate = value;
    }

    costs$: Observable<ICostsModel> = this.store.pipe(select(fromCostsSelectors.selectAll));

    costs: ICostsModel = new CostsModel();

    constructor(private store: Store) {
    }

    ngOnInit(): void {
        this.costs$.subscribe(value => {
            this.costs = _.cloneDeep(value);

            this.costs.costs = _.sortBy(this.costs.costs, x => x.displayOrder);
        })
    }

    getTheadStyles() {
        return {
            width: '300px',
            backgroundColor: '#1A7FAD'
        }
    }
}
