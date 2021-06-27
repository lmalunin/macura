import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, map, shareReplay } from 'rxjs/operators';
import { ICostsModel } from '../models';
import { loadCostsFailure, loadCostsSuccess } from '../store/actions/costs.actions';

@Injectable()
export class CostsServices {

    constructor(private http: HttpClient, private store: Store) {
    }

    fetchAll(): Observable<ICostsModel> {

        return this.http.get<ICostsModel>(`api/costs/`)
            .pipe(
                shareReplay(),
                map((response: ICostsModel) => {
                    console.log('costs: %o', response);
                    this.store.dispatch(loadCostsSuccess({ data: response }));

                    return response;
                }),
                catchError((err, caught) => {

                    this.store.dispatch(loadCostsFailure({ error: err }));

                    return throwError(err);
                })
            );
    }
}
