import { Action, createReducer, on } from '@ngrx/store';
import { fromCostsActions } from '../actions';


export interface ICostsProcessState {
    error: string | null;
    pending: boolean;
}

export const initialState: ICostsProcessState = {
    error: null,
    pending: false
};


export const reducer = createReducer(
    initialState,
    on(fromCostsActions.loadCosts, (state, action) => {
        return { ...state, ...{ error: null, pending: true } }
    }),
    on(fromCostsActions.loadCostsSuccess, (state, action) => {
        return { ...state, ...{ error: null, pending: false } }
    }),
    on(fromCostsActions.loadCostsFailure, (state, action) => {
        return { ...state, ...{ error: action.error, pending: false } }
    })
);

export function costsProcessReducer(state = initialState, action: Action) {
    return reducer(state, action);
}

