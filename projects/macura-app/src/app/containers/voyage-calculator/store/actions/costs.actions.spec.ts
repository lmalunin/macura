import * as fromCosts from './costs.actions';

describe('loadCostss', () => {
    it('should return an action', () => {
        expect(fromCosts.loadCosts().type).toBe('[Costs] Load Costss');
    });
});
