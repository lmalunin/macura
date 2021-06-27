import { createSelector } from '@ngrx/store';
import { selectGlobalState } from './main.selector';


export const selectAll = createSelector(
    selectGlobalState,
    state => state.exchangeRates
);

/*PROCESS*/
export const selectError = createSelector(
    selectGlobalState,
    state => state.exchangeRateProcess.error
);

export const selectPending = createSelector(
    selectGlobalState,
    state => state.exchangeRateProcess.pending
);