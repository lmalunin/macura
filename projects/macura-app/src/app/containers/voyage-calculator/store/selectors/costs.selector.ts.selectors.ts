import { createFeatureSelector, createSelector } from '@ngrx/store';
import { VoyageCalculatorState } from '../reducers';


export const selectCostsState = createFeatureSelector<VoyageCalculatorState>("voyageCalculator");

export const selectAll = createSelector(
    selectCostsState,
    state => state.costs
);