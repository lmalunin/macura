import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ICostsModel } from '../models';

@Injectable()
export class CostsServices {

    constructor(private http: HttpClient) {
    }

    fetchAll(): Observable<ICostsModel> {
        return this.http.get<ICostsModel>(`api/costs/`)
            .pipe(
                shareReplay(),
                map((resonse: ICostsModel) => {
                    console.log('costs: %o', resonse);
                    return resonse;
                })
            );
    }
}