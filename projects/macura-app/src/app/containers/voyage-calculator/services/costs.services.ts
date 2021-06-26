import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ICostsModel } from '../models';
import { loadCosts, loadCostsFailure, loadCostsSuccess } from '../store/actions/costs.actions';

@Injectable()
export class CostsServices {

    constructor(private http: HttpClient, private store: Store) {
    }

    fetchAll(): Observable<ICostsModel> {

        this.store.dispatch(loadCosts());

        return this.http.get<ICostsModel>(`api/costs/`)
            .pipe(
                shareReplay(),
                map((resonse: ICostsModel) => {
                    console.log('costs: %o', resonse);

                    this.store.dispatch(loadCostsSuccess({ data: resonse }));

                    return resonse;
                }),
                catchError((err, caught) => {

                    this.store.dispatch(loadCostsFailure({ error: err }));

                    return throwError(err);
                })
            );
    }
}