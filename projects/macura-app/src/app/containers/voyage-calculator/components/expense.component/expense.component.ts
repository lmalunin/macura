import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'macura-expense',
    templateUrl: './expense.component.html',
    styleUrls: ['./expense.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpenseComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
