import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../../environments/environment';
import { ICostsModel } from '../../models';
import { costsReducer } from './costs.reducer';


export const voyageCalculatorFeatureKey = 'voyageCalculator';

export interface VoyageCalculatorState {
    costs: ICostsModel
}

export const reducers: ActionReducerMap<VoyageCalculatorState> = {
    costs: costsReducer
};

export const metaReducers: MetaReducer<VoyageCalculatorState>[] = !environment.production ? [] : [];
