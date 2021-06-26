import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IExchangeRatesModel } from '../models/exhange-rate.model';
import { ExchangeRateService } from '../services/exchange-rate.service';

@Injectable()
export class ExchangeRatesResolver implements Resolve<IExchangeRatesModel> {

    constructor(private exchangeRateService: ExchangeRateService, private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IExchangeRatesModel> {
        return this.exchangeRateService.fetchAll();
    }

}