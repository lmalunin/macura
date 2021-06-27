import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { fromCostsServices } from '../../services';


@Injectable()
export class CoctsEffectEffects {

    /*No need because url resolver*/
    // costsLoad$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(fromCostsActions.loadCosts),
    //         exhaustMap(action =>
    //             this.costServices.fetchAll().pipe(
    //                 map(value => fromCostsActions.loadCostsSuccess({ data: value })),
    //                 catchError(error => of(fromCostsActions.loadCostsFailure({ error })))
    //             )
    //         )
    //     )
    // );

    constructor(private actions$: Actions, private costServices: fromCostsServices.CostsServices) {
    }

}
