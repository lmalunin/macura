import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import { ICostsModel } from '../../models';
import { IExchangeRatesModel } from '../../models/exhange-rate.model';
import { costsReducer } from './costs.reducer';
import { exchangeRateReducer } from './exchange-rate.reducer';


export const voyageCalculatorFeatureKey = 'voyageCalculator';

export interface VoyageCalculatorState {
    costs: ICostsModel
    exchangeRates: IExchangeRatesModel
}

export const reducers: ActionReducerMap<VoyageCalculatorState> = {
    costs: costsReducer,
    exchangeRates: exchangeRateReducer
};

export const metaReducers: MetaReducer<VoyageCalculatorState>[] = !environment.production ? [] : [];
