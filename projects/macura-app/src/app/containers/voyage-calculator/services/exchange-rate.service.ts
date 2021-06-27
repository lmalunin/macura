import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { IExchangeRatesModel } from '../models/exhange-rate.model';
import { loadExchangeRatesFailure, loadExchangeRatesSuccess } from '../store/actions/exchange-rate.actions';

@Injectable()
export class ExchangeRateService {

    constructor(private http: HttpClient, private store: Store) {
    }

    fetchAll(): Observable<IExchangeRatesModel> {

        return this.http.get<IExchangeRatesModel>(`api/exchangeRates/`)
            .pipe(
                shareReplay(),
                map((response: IExchangeRatesModel) => {
                    console.log('exchangeRates: %o', response);

                    this.store.dispatch(loadExchangeRatesSuccess({ data: response }));

                    return response;
                }),
                catchError((err, caught) => {

                    this.store.dispatch(loadExchangeRatesFailure({ error: err }));

                    return throwError(err);
                })
            );
    }
}
