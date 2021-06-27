import { createSelector } from '@ngrx/store';
import { selectGlobalState } from './main.selector';


export const selectAll = createSelector(
    selectGlobalState,
    state => state.costs
);