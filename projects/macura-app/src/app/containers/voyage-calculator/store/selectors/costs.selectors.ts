import { createSelector } from '@ngrx/store';
import { selectGlobalState } from './main.selector';


export const selectAll = createSelector(
    selectGlobalState,
    state => state.costs
);

/*PROCESS*/
export const selectError = createSelector(
    selectGlobalState,
    state => state.costsProcess.error
);

export const selectPending = createSelector(
    selectGlobalState,
    state => state.costsProcess.pending
);