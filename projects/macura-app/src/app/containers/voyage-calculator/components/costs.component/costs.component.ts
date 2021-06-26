import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { CostsModel, ICostsModel } from '../../models';
import { VoyageCalculatorState } from '../../store/reducers';


@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'macura-costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsComponent implements OnInit {

    costs: ICostsModel = new CostsModel();

    constructor(private route: ActivatedRoute, private store: Store<VoyageCalculatorState>) {

        store.subscribe(value => {
            this.costs = value.costs;
        })
    }

    ngOnInit(): void {
    }

}
