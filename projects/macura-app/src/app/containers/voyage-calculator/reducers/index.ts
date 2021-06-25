import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../../environments/environment';


export const voyageCalculatorFeatureKey = 'voyageCalculator';

export interface VoyageCalculatorState {

}

export const reducers: ActionReducerMap<VoyageCalculatorState> = {};


export const metaReducers: MetaReducer<VoyageCalculatorState>[] = !environment.production ? [] : [];
