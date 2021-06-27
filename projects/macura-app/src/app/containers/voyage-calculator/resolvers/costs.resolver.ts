import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICostsModel } from '../models';
import { CostsServices } from '../services/costs.service';
import { fromCostsActions } from '../store/actions';

@Injectable()
export class CostsResolver implements Resolve<ICostsModel> {

    constructor(private costsService: CostsServices, private store: Store) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

        this.store.dispatch(fromCostsActions.loadCosts());

        return this.costsService.fetchAll();
    }

}