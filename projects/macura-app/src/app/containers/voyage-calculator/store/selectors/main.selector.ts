import { createFeatureSelector } from '@ngrx/store';
import { VoyageCalculatorState } from '../reducers';

export const selectGlobalState = createFeatureSelector<VoyageCalculatorState>("voyageCalculator");