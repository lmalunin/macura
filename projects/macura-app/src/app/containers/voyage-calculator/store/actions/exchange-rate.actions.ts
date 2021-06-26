import { createAction, props } from '@ngrx/store';
import { IExchangeRatesModel } from '../../models/exhange-rate.model';

export const loadExchangeRates = createAction(
    '[ExchangeRate] Load ExchangeRates'
);

export const loadExchangeRatesSuccess = createAction(
    '[ExchangeRate] Load ExchangeRates Success',
    props<{ data: IExchangeRatesModel }>()
);

export const loadExchangeRatesFailure = createAction(
    '[ExchangeRate] Load ExchangeRates Failure',
    props<{ error: any }>()
);
