import { createAction, props } from '@ngrx/store';
import { ICostsModel } from '../../models';

export const loadCosts = createAction(
    '[Costs] Load Costs'
);

export const loadCostsSuccess = createAction(
    '[Costs] Load Costs Success',
    props<{ data: ICostsModel }>()
);

export const loadCostsFailure = createAction(
    '[Costs] Load Costs Failure',
    props<{ error: any }>()
);
