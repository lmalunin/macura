import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { CostsModel, ICostsModel } from '../../models';
import { ExchangeRatesModel, IExchangeRatesModel } from '../../models/exhange-rate.model';


@UntilDestroy({ checkProperties: true })
@Component({
    selector: 'macura-costs',
    templateUrl: './costs.component.html',
    styleUrls: ['./costs.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CostsComponent implements OnInit {

    costs: ICostsModel = new CostsModel();
    exchangeRates: IExchangeRatesModel = new ExchangeRatesModel();

    // costs$: Observable<ICostsModel> = this.store.pipe(select(fromCostsSelectors.selectAll));
    // exchangeRates$: Observable<IExchangeRatesModel> = this.store.pipe(select(fromExchangeRatesSelectors.selectAll));

    selectedRate: any = null;


    constructor(private route: ActivatedRoute, private store: Store<any>) {
    }

    ngOnInit(): void {

        this.store.subscribe(value => {
            this.costs = value['voyageCalculator'].costs;
            this.exchangeRates = value['voyageCalculator'].exchangeRates;

            this.selectedRate = this.exchangeRates.paymentCurrencies?.find(item => item?.toCurrency == this.exchangeRates.sourceCurrency);
        })
    }

}
