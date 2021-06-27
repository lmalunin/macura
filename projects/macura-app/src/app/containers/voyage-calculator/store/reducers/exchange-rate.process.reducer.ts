import { Action, createReducer, on } from '@ngrx/store';
import { fromExchangeRateActions } from '../actions';


export interface IExchangeRatesProcessState {
    error: string | null;
    pending: boolean;
}

export const initialState: IExchangeRatesProcessState = {
    error: null,
    pending: false
};

export const reducer = createReducer(
    initialState,
    on(fromExchangeRateActions.loadExchangeRates, (state, action) => {
        return { ...state, ...{ error: null, pending: true } }
    }),
    on(fromExchangeRateActions.loadExchangeRatesSuccess, (state, action) => {
        return { ...state, ...{ error: null, pending: false } }
    }),
    on(fromExchangeRateActions.loadExchangeRatesFailure, (state, action) => {
        return { ...state, ...{ error: action.error, pending: false } }
    })
);

export function exchangeRatesProcessReducer(state = initialState, action: Action) {
    return reducer(state, action);
}

