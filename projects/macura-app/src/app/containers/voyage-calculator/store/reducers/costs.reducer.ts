import { Action, createReducer, on } from '@ngrx/store';
import { ICostsModel } from '../../models';
import { costsActions } from '../actions';


// export const initialState: VoyageCalculatorState = {
//     costs: {}
// };
//
//
// export const voyageCalculatorReducer = createReducer<VoyageCalculatorState>(
//     initialState,
//     on(costsActions.loadCostsSuccess, (state, action) => {
//         return { ...state, ...{ costs: action.data } }
//     }),
// );
//
// export function reducer(state = initialState, action: Action) {
//     return voyageCalculatorReducer(state, action);
// }


export const initialState: ICostsModel = {
    costs: undefined,
    baseCurrency: undefined,
    daCurrency: undefined
};

export const reducer = createReducer<ICostsModel>(
    initialState,
    on(costsActions.loadCostsSuccess, (state, action) => {
        return { ...state, ...{ cost: action.data } }
    }),
);

export function costsReducer(state = initialState, action: Action) {
    return reducer(state, action);
}
