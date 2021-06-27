import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { select, Store } from '@ngrx/store';
import { MacuraLibService } from 'macura-lib';
import { Observable } from 'rxjs';
import { CostsModel, ICostsModel } from '../../models';
import { ExchangeRatesModel, IExchangeRatesModel } from '../../models/exhange-rate.model';
import { fromCostsSelectors, fromExchangeRatesSelectors } from '../../store/selectors';


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

    costs$: Observable<ICostsModel> = this.store.pipe(select(fromCostsSelectors.selectAll));
    exchangeRates$: Observable<IExchangeRatesModel> = this.store.pipe(select(fromExchangeRatesSelectors.selectAll));

    selectedRate: { fromCurrency: string, toCurrency: string, exchangeRate: number } = {
        exchangeRate: 0,
        fromCurrency: '',
        toCurrency: ''
    };


    baseCourse: number = 0;

    constructor(private route: ActivatedRoute, private store: Store<any>, private macuraLibService: MacuraLibService) {
    }

    ngOnInit(): void {

        this.costs$.subscribe(
            value => {
                this.costs = value;
            }
        )

        this.exchangeRates$.subscribe(
            value => {
                this.exchangeRates = value;

                this.selectedRate = this.exchangeRates.paymentCurrencies?.find(item => item?.toCurrency == this.exchangeRates.sourceCurrency)!;
                this.baseCourse = this.macuraLibService.currencyCalculator(1, this.selectedRate.exchangeRate);
            }
        )

        // this.store.subscribe(value => {
        //     this.costs = value['voyageCalculator'].costs;
        //     this.exchangeRates = value['voyageCalculator'].exchangeRates;
        //
        //     this.selectedRate = this.exchangeRates.paymentCurrencies?.find(item => item?.toCurrency == this.exchangeRates.sourceCurrency)!;
        //
        //     this.baseCourse = this.macuraLibService.currencyCalculator(1, this.selectedRate.exchangeRate);
        // })
    }

    calculateRate(selectedItem: { fromCurrency: string, toCurrency: string, exchangeRate: number }, currencyAmount: number) {
        this.selectedRate = selectedItem;
        this.baseCourse = this.macuraLibService.currencyCalculator(currencyAmount, selectedItem.exchangeRate);
    }
}
