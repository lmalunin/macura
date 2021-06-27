import { createSelector } from '@ngrx/store';
import * as fromCostsSelectors from './costs.selectors';
import * as fromExchangeRatesSelectors from './exchange-rate.selectors';

const fromVoyageCalculatorCommonPending = createSelector(
    fromCostsSelectors.selectPending,
    fromExchangeRatesSelectors.selectPending,

    (p1, p2) => p1 || p2
);

export {
    fromCostsSelectors,
    fromExchangeRatesSelectors,
    fromVoyageCalculatorCommonPending
};
