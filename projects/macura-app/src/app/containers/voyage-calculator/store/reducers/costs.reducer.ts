import { Action, createReducer, on } from '@ngrx/store';
import { ICostsModel } from '../../models';
import { fromCostsActions } from '../actions';


export const initialState: ICostsModel = {
    costs: undefined,
    baseCurrency: undefined,
    daCurrency: undefined
};

export const reducer = createReducer<ICostsModel>(
    initialState,
    on(fromCostsActions.loadCostsSuccess, (state, action) => {
        return {
            ...state, ...{
                costs: action.data.costs,
                baseCurrency: action.data.baseCurrency,
                daCurrency: action.data.daCurrency
            }
        }
    }),
);

export function costsReducer(state = initialState, action: Action) {
    return reducer(state, action);
}
