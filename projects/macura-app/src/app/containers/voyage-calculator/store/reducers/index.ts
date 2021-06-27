import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import { ICostsModel } from '../../models';
import { IExchangeRatesModel } from '../../models/exhange-rate.model';
import { costsProcessReducer, ICostsProcessState } from './costs.process.reducer';
import { costsReducer } from './costs.reducer';
import { exchangeRatesProcessReducer, IExchangeRatesProcessState } from './exchange-rate.process.reducer';
import { exchangeRateReducer } from './exchange-rate.reducer';


export const voyageCalculatorFeatureKey = 'voyageCalculator';

export interface VoyageCalculatorState {
    costs: ICostsModel
    costsProcess: ICostsProcessState
    exchangeRates: IExchangeRatesModel,
    exchangeRateProcess: IExchangeRatesProcessState
}

export const reducers: ActionReducerMap<VoyageCalculatorState> = {
    costs: costsReducer,
    costsProcess: costsProcessReducer,
    exchangeRates: exchangeRateReducer,
    exchangeRateProcess: exchangeRatesProcessReducer
};

export const metaReducers: MetaReducer<VoyageCalculatorState>[] = !environment.production ? [] : [];
