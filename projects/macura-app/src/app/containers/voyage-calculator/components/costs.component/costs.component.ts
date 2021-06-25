import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { CostsModel, ICostsModel } from '../../models';
import { VoyageCalculatorState } from '../../reducers';

@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'macura-costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

    costs: ICostsModel = new CostsModel();

    constructor(private route: ActivatedRoute, private store: Store<VoyageCalculatorState>) {

        route.data.subscribe(
            data => this.costs = data['costs']
        );
    }

    ngOnInit(): void {
    }

}
