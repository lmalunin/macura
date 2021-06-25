import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CostsModel, ICostsModel } from '../../models';

@Component({
    selector: 'macura-costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss']
})
export class CostsComponent implements OnInit {

    costs: ICostsModel = new CostsModel();

    constructor(private route: ActivatedRoute) {

        route.data.subscribe(
            data => this.costs = data['costs']
        );
    }

    ngOnInit(): void {
    }

}
