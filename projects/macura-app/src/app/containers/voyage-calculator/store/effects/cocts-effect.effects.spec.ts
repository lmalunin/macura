import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CoctsEffectEffects } from './cocts-effect.effects';

describe('CoctsEffectEffects', () => {
  let actions$: Observable<any>;
  let effects: CoctsEffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoctsEffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CoctsEffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
