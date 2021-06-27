import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CostsEffects } from './costs.effects';

describe('CoctsEffectEffects', () => {
    let actions$: Observable<any>;
    let effects: CostsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CostsEffects,
                provideMockActions(() => actions$)
            ]
        });

        effects = TestBed.inject(CostsEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
