import { createFeatureSelector } from '@ngrx/store';
import { VoyageCalculatorState } from '../reducers';
import * as fromCostsSelectors from './costs.selectors';
import * as fromExchangeRatesSelectors from './exchange-rate.selectors';

const selectGlobalState = createFeatureSelector<VoyageCalculatorState>("voyageCalculator");

export {
    selectGlobalState,
    fromCostsSelectors,
    fromExchangeRatesSelectors
};
