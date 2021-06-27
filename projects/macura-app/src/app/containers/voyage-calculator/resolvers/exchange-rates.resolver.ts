import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IExchangeRatesModel } from '../models/exhange-rate.model';
import { ExchangeRateService } from '../services/exchange-rate.service';
import { fromExchangeRateActions } from '../store/actions';

@Injectable()
export class ExchangeRatesResolver implements Resolve<IExchangeRatesModel> {

    constructor(private exchangeRateService: ExchangeRateService, private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExchangeRatesModel> {

        this.store.dispatch(fromExchangeRateActions.loadExchangeRates());

        return this.exchangeRateService.fetchAll();
    }

}