import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'macura-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseComponent implements OnInit {

    // _selectedRate: { fromCurrency: string; toCurrency: string; exchangeRate: number; } | undefined;
    //
    // get selectedRate(): { fromCurrency: string, toCurrency: string, exchangeRate: number } {
    //     return this._selectedRate!;
    // }
    //
    // @Input() set selectedRate(value: { fromCurrency: string, toCurrency: string, exchangeRate: number }) {
    //     this._selectedRate = value;
    // }

    constructor() {
    }

    ngOnInit(): void {
    }

}
