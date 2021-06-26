import { Action, createReducer, on } from '@ngrx/store';
import { IExchangeRatesModel } from '../../models/exhange-rate.model';
import { exchangeRateActions } from '../actions';


export const initialState: IExchangeRatesModel = {
    sourceCurrency: undefined,
    paymentCurrencies: undefined
};

export const reducer = createReducer<IExchangeRatesModel>(
    initialState,
    on(exchangeRateActions.loadExchangeRatesSuccess, (state, action) => {
        debugger;
        return { ...state, ...{ exchangeRates: action.data } }
    }),
);

export function exchangeRateReducer(state = initialState, action: Action) {
    return reducer(state, action);
}