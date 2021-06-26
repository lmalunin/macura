import { createSelector } from '@ngrx/store';
import { selectGlobalState } from './index';

export const selectAll = createSelector(
    selectGlobalState,
    state => state.costs
);